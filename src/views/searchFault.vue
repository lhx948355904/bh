<template>
  <div class="searchFault">
    <mt-header fixed title="故障搜索">
      <div slot="left">
        <mt-button @click="$router.back(-1)" icon="back"></mt-button>
      </div>
      <div slot="right">
        <span>
          <img src="@/assets/img/peoplelist.png" alt="" />
        </span>
        <span>
          <img src="@/assets/img/add.png" alt="" />
        </span>
      </div>
    </mt-header>

    <div class="search">
      <mt-search cancel-text="取消" placeholder="搜索"></mt-search>
    </div>

    <div class="searchList">
      <p>搜索记录</p>
      <router-link to="/searchResult">
        <mt-cell title="小巨人加工中心掉刀..."></mt-cell>
      </router-link>
      
      <mt-cell title="刀库门气缸脱落..."></mt-cell>
      <mt-cell title="机械手驱动故障..."></mt-cell>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.searchFault {
  background: #fafafa;
}

.mint-header {
  background: white;
  color: #333;
  font-size: 16px;

  /deep/ .mint-header-title {
    font-weight: bold;
  }

  .is-right {
    img {
      width: 30px;
      height: 30px;
    }
  }
}

.search {
  margin: 60px 0 20px;

  .mint-search {
    height: initial;
  }

  /deep/ .mint-searchbar {
    background: white;

    .mint-searchbar-inner {
      border-radius: 50px;
      background-color: #f6f6f6;
    }

    .mint-searchbar-core {
      background: transparent;
      margin-left: 10px;
    }
  }
}

.searchList {
  padding: 0 10px;

  p {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 10px;
  }

  .mint-cell {
    border-bottom: 1px solid #eeeeee;
  }
}
</style>