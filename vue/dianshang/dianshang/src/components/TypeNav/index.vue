<template>
    <div>
        <!-- 商品分类导航 -->
        <div class="type-nav">
            <div class="container" @mouseenter="enterShow()" @mouseleave="leaveShow()">

                <h2 class="all ">全部商品分类</h2>
                <nav class="nav">
                    <a href="###">服装城</a>
                    <a href="###">美妆馆</a>
                    <a href="###">尚品汇超市</a>
                    <a href="###">全球购</a>
                    <a href="###">闪购</a>
                    <a href="###">团购</a>
                    <a href="###">有趣</a>
                    <a href="###">秒杀</a>
                </nav>
                <transition name="sort">
                    <div class="sort" v-show="show">
                        <div class="all-sort-list2" @click="goSearch">
                            <div class="item " v-for="(c1,index) in categoryList" :key=c1.categoryId>
                                <h3>
                                    <a :data-categoryName="c1.categoryName"
                                       :data-category1Id="c1.categoryId">{{ c1.categoryName }}</a>
                                </h3>
                                <div class="item-list clearfix">
                                    <div class="subitem" v-for="(c2,index) in c1.categoryChild" :key="c2.categoryId">
                                        <dl class="fore">
                                            <dt>
                                                <a :data-categoryName="c2.categoryName"
                                                   :data-category2Id="c2.categoryId">{{ c2.categoryName }}</a>
                                            </dt>
                                            <dd>
                                                <em v-for="(c3,index) in c2.categoryChild" :key="c3.categoryId">
                                                    <a :data-categoryName="c3.categoryName"
                                                       :data-category3Id="c3.categoryId">{{ c3.categoryName }}</a>
                                                </em>

                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </transition>


            </div>
        </div>
    </div>
</template>

<script>

import {mapState} from "vuex";

export default {

    name: 'TypeNav',
    //组件挂载完毕就可以向服务器发请求，获取服务器的数据
    //通知vuex获取数据
    mounted() {
        // this.$store.dispatch('categoryList');
        //当组件挂载完毕，在search中将show改为false
        if (this.$route.path.includes('home')) {
            this.show = true;
        }
    },
    data() {
        return {
            show: false
        };

    },
    computed: {
        ...mapState({
            categoryList: (state) => {
                return state.home.categoryList;
            }


        })
    },
    methods: {
        //路由跳转
        goSearch(event) {
            //利用时间的委派,是把全部的子节点的事件委派给了父亲节点，
            //现在的需求是只有点击a标签菜需要路由跳转
            //现在需要区分是一级，二级，还是三级的a标签
            let element = event.target;
            let {categoryname, category1id, category2id, category3id} = element.dataset;
            if (categoryname) {
                let location = {
                    name: 'search',
                    query: {categoryName: categoryname}
                };
                if (category1id) {
                    location.query.category1Id = category1id;
                } else if (category2id) {
                    location.query.category2Id = category2id;
                } else {
                    location.query.category3Id = category3id;
                }
                this.$router.push(location);
            }

        },
        enterShow() {
            this.show = true;
        },
        leaveShow() {
            if (this.$route.path !== '/home')
                this.show = false;
        }
    }

}


</script>

<style lang="less" scoped>
.type-nav {

  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {


      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {


        .item {


          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            _height: 200px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }
      }

      .item:hover {
        background-color: skyblue;
      }
    }
      .sort-enter{
          height: 0;
      }
      .sort-enter-to{
          height: 461px;
      }
      .sort-enter-active{
          transition: all .2s linear;
      }
  }
}
</style>
