<template>
    <div>
        <!-- 头部 -->
        <header class="header">
            <!-- 头部的第一行 -->
            <div class="top">
                <div class="container">
                    <div class="loginList">
                        <p>尚品汇欢迎您！</p>
                        <p v-if="!userName">
                            <span>请</span>

                            <router-link to="/login">登录</router-link>
                            <router-link class="register" to="/register">免费注册</router-link>
                        </p>
                        <!--登录状态-->
                        <p v-if="userName">
                            <a>{{ userName }}</a>
                            <a class="register" @click="logOut">退出</a>
                        </p>

                    </div>
                    <div class="typeList">
                        <router-link to="/center/myorder">我的订单</router-link>
                        <router-link to="/shopcart">我的购物车</router-link>
                        <router-link to="/home">我的尚品汇</router-link>
                        <a href="###">尚品汇会员</a>
                        <a href="###">企业采购</a>
                        <a href="###">关注尚品汇</a>
                        <a href="###">合作招商</a>
                        <a href="###">商家后台</a>
                    </div>
                </div>
            </div>
            <!--头部第二行 搜索区域-->
            <div class="bottom">
                <h1 class="logoArea">
                    <router-link class="logo" to="/home">
                        <img src="./images/logo.png" alt="">
                    </router-link>
                </h1>
                <div class="searchArea">
                    <form action="###" class="searchForm">
                        <input type="text" id="autocomplete" class="input-error input-xxlarge" v-model="keyword"/>
                        <button class="sui-btn btn-xlarge btn-danger" type="button" @click="goSearch">搜索</button>
                    </form>
                </div>
            </div>
        </header>
    </div>
</template>
<script>

import {mapGetters} from "vuex";

export default {
    name: 'Header',
    data() {
        return {
            keyword: ''
        }
    },
    mounted() {
        this.$bus.$on('clear', () => {
            this.keyword = '';
        })


    },
    computed: {
        ...mapGetters(['userName'])
    },

    methods: {
        // 搜索按钮的回调函数： 需要向search路由跳转
        goSearch() {
            /*
     1.纯字符串的写法
        this.$router.push("/Search/"+this.keyword+"?k="+this.keyword.toUpperCase())}*/


            // this.$router.push('/Search')
            //   if (this.$route.query) {
            //       let location = {
            //           name: "Search",
            //           params: { keyword: this.keyword || undefined },
            //       };
            //      location.query = this.$route.query;
            //       this.$router.push(location);
            //   }

            // 3.路由跳转传参（对象形式）：//最常用的方法
            // this.$router.push({
            //     name: 'search',
            //     params: {keyword: this.keyword},
            //     query: {k: this.keyword.toUpperCase()}
            // })

            // 不传递params，只传递query
            /* this.$router.push({
          name: 'Search',
          query: { k: this.keyword.toUpperCase() }
        }) */

            // params传递为空
            //  this.$router.push({
            //   name: 'Search',
            //   params: { keyword: '' || undefined },
            //   query: { k: this.keyword.toUpperCase() }
            // })
            //
            let locations = {
                name: "search",
                params: {keyword: this.keyword || undefined},
            };
            //确定路径当中有query参数
            if (this.$route.query.categoryName) {
                locations.query = this.$route.query;
            }

            this.$router.push(locations);
        },
        //     // 退出登录的按钮的回调
        //     logout() {
        //         //派遣action退出登录
        //         this.$store.dispatch('logout');
        //     }
        // },
        async logOut() {
            try{
                await this.$store.dispatch('userLogOut');
               this.$router.push('/home');
            }
            catch (error){
                console.log(error.message);
            }


        }
    },

}
</script>


<style scoped lang='less'>
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            cursor: pointer;
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>