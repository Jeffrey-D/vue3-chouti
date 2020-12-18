<template>
  <div>
    <div class="item">
      <img :src="news.img_url" class="small_picture" />
      <div class="tag">#{{ news.sectionName }}</div>

      <p class="title">
        <a :href="news.originalUrl" target="_blank">{{ news.title }} </a>
      </p>
      <div class="linkfrom"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    news: Object,
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}
.all {
  margin-top: 10px;
  background-color: rgb(245, 245, 245) !important;
}

.item {
  /* background-color: #fff; */
  height: 8em;
  margin-bottom: 5px;
  background-clip: content-box;
}

.title {
  width: 75%;
  height: 20px;
  margin-left: 10px;
}

.small_picture {
  width: 120px;
  height: 120px;
  float: left;
}
.small_picture:hover {
  size: 200%;
}

.tag {
  display: inline;
  border-radius: 10px;
  background: #f49900;
  padding-left: 10px;
  padding-right: 10px;
}

.item:hover {
  background-color: rgb(250, 250, 250);
}
</style>
