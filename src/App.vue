<template>
  <div id="app">
    <keep-alive include="searchResult">
      <router-view />
    </keep-alive>
    <mt-tabbar v-model="selected" :fixed="true">
      <router-link to="/console">
        <mt-tab-item id="console">
          <img
            slot="icon"
            v-if="this.selected == 'console'"
            src="@/assets/img/console-active.png"
          />
          <img slot="icon" v-else src="@/assets/img/console.png" />
          控制台
        </mt-tab-item></router-link
      >

      <router-link to="/">
        <mt-tab-item id="index">
          <img
            slot="icon"
            v-if="this.selected == 'index'"
            src="@/assets/img/index-active.png"
          />
          <img slot="icon" v-else src="@/assets/img/index.png" />
          首页 
        </mt-tab-item></router-link
      >
      <router-link to="/my">
        <mt-tab-item id="my">
          <img
            slot="icon"
            v-if="this.selected == 'my'"
            src="@/assets/img/my-active.png"
          />
          <img slot="icon" v-else src="@/assets/img/my.png" />
          我的
        </mt-tab-item></router-link
      >
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "",
    };
  },
  created() {},
  methods: {
    goindex() {
      this.$router.push({
        path: "/",
      });
    },
    goconsole() {
      this.$router.push({
        path: "/console",
      });
    },
    gomy() {
      this.$router.push({
        path: "/my",
      });
    },
  },
  mounted() {
    // console.log(this.selected);
  },
};
</script>

<style lang="less">
#app {
  padding: 60px 0;
  box-sizing: border-box;
}
.active {
  color: red;
}
.mint-tabbar {
  background: white !important;

  >a{
    display: inline-block;
    width: 33%;
  }
}
</style>
