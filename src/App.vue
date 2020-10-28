<template>
  <div id="app">
    <keep-alive :include="keepAlive">
      <router-view />
    </keep-alive>

    <mt-tabbar v-model="selected" :fixed="true">
        <mt-tab-item id="console" @click.native="goconsole">
          <img
            slot="icon"
            v-if="this.selected == 'console'"
            src="@/assets/img/console-active.png"
          />
          <img slot="icon" v-else src="@/assets/img/console.png" />
          控制台
        </mt-tab-item>

        <mt-tab-item id="index" @click.native="goindex">
          <img
            slot="icon"
            v-if="this.selected == 'index'"
            src="@/assets/img/index-active.png"
          />
          <img slot="icon" v-else src="@/assets/img/index.png" />
          首页 
        </mt-tab-item>
        <mt-tab-item id="my" @click.native="gomy">
          <img
            slot="icon"
            v-if="this.selected == 'my'"
            src="@/assets/img/my-active.png"
          />
          <img slot="icon" v-else src="@/assets/img/my.png" />
          我的
        </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "index",
      keepAlive:"searchResult,searchFault",
    };
  },
  
  created() {},
  methods: {
    goindex() {
      this.selected = "index"
      this.$router.push({
        path: "/",
      });
    },
    goconsole() {
      this.selected = "console"
      this.$router.push({
        path: "/console",
      });
    },
    gomy() {
      this.selected = "my"
      this.$router.push({
        path: "/my",
      });
    },
  },
  watch: {
     $route(to, from) {
     // 如果是从b到a页面，则不缓存b
       if(from.name === 'browse' && to.name === 'searchResult') {
         this.keepAlive = "searchFault"
       } else {
         this.keepAlive = "searchResult,searchFault"
       }
     }
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

.mint-cell:hover,a:hover{
  text-decoration: none !important;
}
</style>
