<template>
    <div>
        <TypeNav></TypeNav>
        <ListContainer></ListContainer>
        <Recommend></Recommend>
        <Rank></Rank>
        <Like></Like>
        <!--v-for也可以在自定义的标签中使用
        props:用于父子组件通信
        自定义的时间：@on @emit 可以实现子给父通信
        全局时间总线：$bus 全能
        pubsub:vue中几乎不用 全能
        插槽
        vuex-->
        <Floor v-for="(floor,index) in floorList " :key=floor.id :list="floor"></Floor>
        <Brand></Brand>

    </div>


</template>

<script>
import ListContainer from "@/pages/Home/ListContainer";
import Recommend from "@/pages/Home/Recommend/index.vue";
import Rank from "@/pages/Home/Rank/index.vue";
import Like from "@/pages/Home/Like/index.vue";
import Floor from "@/pages/Home/Floor/index.vue";
import Brand from "@/pages/Home/Brand/index.vue";
import {mapState} from "vuex";

export default {
    name: "index",
    components: {
        ListContainer,
        Recommend,
        Rank,
        Like,
        Floor,
        Brand
    },
    mounted() {
        this.$store.dispatch('getFloorList');
    },
    computed: {
        ...mapState({
                floorList:state =>state.home.floorList
            }
        )
    }
}
</script>

<style scoped>

</style>