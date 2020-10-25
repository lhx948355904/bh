<template>
  <div id="app">
    <router-view />
    <mt-tabbar v-model="selected" :fixed="true">
      <mt-tab-item id="console" href="/console">
        <img
          slot="icon"
          v-if="this.selected == 'console'"
          src="@/assets/img/console-active.png"
        />
        <img slot="icon" v-else src="@/assets/img/console.png" />
        控制台
      </mt-tab-item>

      <mt-tab-item id="index" href="/">
        <img
          slot="icon"
          v-if="this.selected == 'index'"
          src="@/assets/img/index-active.png"
        />
        <img slot="icon" v-else src="@/assets/img/index.png" />
        首页
      </mt-tab-item>

      <mt-tab-item id="my" href="/my">
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
      selected: "",
    };
  },
  created() {
  },
  methods: {},
  mounted() {
    console.log(this.selected);
  },
};
</script>

<style lang="less">
.active {
  color: red;
}
.mint-tabbar {
  background: white !important;
}
</style>
