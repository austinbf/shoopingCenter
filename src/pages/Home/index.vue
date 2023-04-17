<template>
    <div>
                <TypeNav></TypeNav>
                <ListContainer></ListContainer>
                <Recommend></Recommend>
                <Rank></Rank>
                <Like></Like>
                <Floor></Floor>
                <Floor></Floor>
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

}
</script>

<style scoped>

</style>