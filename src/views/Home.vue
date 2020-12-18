<template>
  <div class="wholepage">
    <div class="head">
      <top-bar></top-bar>
    </div>

    <div class="middle">
      <div class="page">
        <div class="left"></div>
        <!-- 中间主页面 -->
        <div class="main">
          <div v-for="item in data" :key="item.id">
            <news-item :news="item"></news-item>
          </div>
        </div>
        <div class="right"></div>
      </div>
    </div>

    <div class="foot"></div>
  </div>
</template>

<script>
import API from "../api";
import {
  onBeforeMount,
  reactive,
  toRefs,
  ref,
  watch,
  onUpdated,
  onBeforeUpdate,
} from "vue";
import NewsItem from "../components/NewsItem.vue";
import topBar from "../components/topbar.vue";
import { onBeforeRouteLeave, onBeforeRouteUpdate, useRoute, useRouter } from "vue-router";

export default {
  components: { NewsItem, topBar },
  setup() {
    var hottype = ref("");
    var states = reactive({
      data: [],
    });

    // onUpdated(() => {
    //   let route = useRoute();
    //   let router = useRouter();
    //   hottype.value = route.params.id;
    //   console.log(hottype.value);
    // });
    // onBeforeRouteUpdate(() => {
    //   let route = useRoute();
    //   let router = useRouter();
    //   hottype.value = route.params.id;
    //   console.log(hottype.value);
    // });

    onBeforeRouteUpdate((to, from) => {
      // console.log(to);
      test();
      async function test() {
        if (to.path == "/hot/24hr") {
          let { data, code, status } = await API.chouti.apiTopNews24();
          states.data = data;
        } else if (to.path == "/hot/72hr") {
          let { data, code, status } = await API.chouti.apiTopNews72();
          states.data = data;
        } else if (to.path == "/hot/168hr") {
          let { data, code, status } = await API.chouti.apiTopNews168();
          states.data = data;
        }
      }
    });

    onBeforeMount(async () => {
      let { data, code, status } = await API.chouti.apiTopNews24();
      states.data = data;
    });

    return {
      hottype,
      ...toRefs(states),
    };
  },
};
</script>

<style scoped>
.head {
  position: fixed;
  top: 0px;
  margin-left: 0;
  margin-top: 0px;
  height: 56px;
  width: 100%;
  background-color: #fff;
}

.wholepage {
  background-image: url("../assets/bg.jpg");
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  height: 100%;
}

.page {
  margin-top: 57px;
  /* background-color: rgb(245, 245, 245); */
}
.main {
  width: 70%;
  margin-right: 15%;
  margin-left: 15%;
}

.foot {
  margin: 0;
  padding: 0;
}
</style>
