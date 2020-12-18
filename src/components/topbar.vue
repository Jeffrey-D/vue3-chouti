<template>
  <div>
    <img class="logo-icon" src="../assets/choutilogo.png" alt="" />
    <img class="logo-txt" src="../assets/choutiname.png" alt="" />

    <router-link class="toplink" to="/hot/24hr">24小时热榜</router-link>
    <router-link class="toplink" to="/hot/72hr">72小时热榜</router-link>
    <router-link class="toplink" to="/hot/168hr">168小时热榜</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.logo-icon {
  margin-left: 15%;
  margin-top: 10px;
  display: inline-block;
  height: 36px;
  width: 36px;
}

.logo-txt {
  margin-top: 17px;
  margin-left: 12px;
  width: 112px;
  height: 22px;
  position: relative;
  top: -7px;
}

.toplink {
  position: relative;
  top: -12px;
  margin-left: 30px;
  text-decoration: none;
  color: #4b4c4d;
  font-size: 14px;
  font-weight: 700;
}
.toplink:hover {
  color: rgb(248, 170, 0);
}
</style>
