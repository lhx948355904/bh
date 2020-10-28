<template>
  <div class="knowledgeList">
    <mt-header fixed title="知识图谱">
      <div slot="left">
        <mt-button @click="$router.back(-1)" icon="back"></mt-button>
      </div>
    </mt-header>

    <div class="chooseModel">
      <p class="title">
        选择型号
        <mt-button type="primary" size="small"
          ><img src="@/assets/img/addwhite.png" />添加</mt-button
        >
      </p>
      <div class="content">
        <mt-button type="default" size="small"
          >VTC-160A-2PC<img src="@/assets/img/close.png"
        /></mt-button>
        <mt-button type="default" size="small"
          >VT-200C<img src="@/assets/img/close.png"
        /></mt-button>
      </div>
    </div>

    <div class="chooseFault">
      <p class="title">
        选择型号
        <mt-button type="primary" size="small"
          ><img src="@/assets/img/addwhite.png" />添加</mt-button
        >
      </p>
      <div class="content">
        <mt-button type="default" size="small"
          >掉刀<img src="@/assets/img/close.png"
        /></mt-button>
        <mt-button type="default" size="small"
          >VT-200C<img src="@/assets/img/close.png"
        /></mt-button>
      </div>
    </div>

    <div class="chart">
      <p class="title">原因分析</p>
      <div id="chart1">
        <img src="@/assets/img/eg.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.mint-header {
  background: white;
  color: #333;
  font-size: 16px;

  /deep/ .mint-header-title {
    font-weight: bold;
  }
}

.knowledgeList {
  padding: 0 10px;
  min-height: ~"calc(100vh - 120px)";

}

.title {
  font-weight: bold;
  font-size: 16px;
  margin: 14px 0;

  .mint-button {
      background: #4969FF;
      float: right;

      img{
          margin-right: 4px;
          vertical-align: middle;
      }
  }
}

.content{
    .mint-button {
        margin-right: 10px;

      img{
          margin-left: 4px;
          vertical-align: middle;
      }
  }
}

.chart {
  margin-top: 20px;

  > div {
    height: 200px;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>