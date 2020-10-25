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

    <div class="sort">
      <span> 排序 <img src="@/assets/img/dropdown.png" /> </span>
      <span> 共36条 </span>
    </div>

    <div class="searchList">
      <div>
        <router-link to="/record">
          <p class="title">
            维修记录——01
            <img src="@/assets/img/back.png" alt="" />
          </p>
          <p>
            <span>设备号：279</span>
            <span>设备名称：加工中掉刀</span>
          </p>
          <p>
            <span>型号：VTC-160A</span>
            <span>故障描述：加工中掉刀</span>
          </p>
        </router-link>
      </div>

      <div>
        <p class="title">
          维修记录——02
          <img src="@/assets/img/back.png" alt="" />
        </p>
        <p>
          <span>设备号：279</span>
          <span>设备名称：小巨人加工中心</span>
        </p>
        <p>
          <span>型号：VTC-160A</span>
          <span>故障描述：加工中掉刀</span>
        </p>
      </div>

      <div>
        <p class="title">
          维修记录——03
          <img src="@/assets/img/back.png" alt="" />
        </p>
        <p>
          <span>设备号：279</span>
          <span>设备名称：加工中掉刀</span>
        </p>
        <p>
          <span>型号：VTC-160A</span>
          <span>故障描述：加工中掉刀</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.searchFault {
  background: #fafafa;
  height: 100vh;
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
  margin: 60px 0 0;

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

  > div {
    background: white;
    box-shadow: 0 0 4px gainsboro;
    margin-top: 12px;
    padding: 12px;

    p {
      display: flex;
      justify-content: space-between;
      color: #666666;
      height: 30px;
      line-height: 30px;
    }

    .title {
      font-weight: bold;
      font-size: 16px;
      color: black;

      img {
        width: 16px;
        height: 16px;
      }
    }
  }
}

.sort {
  background: white;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  height: 48px;
  line-height: 48px;
}
</style>