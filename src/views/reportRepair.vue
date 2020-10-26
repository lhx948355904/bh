<template>
  <div class="reportRepair">
    <mt-header fixed title="维修上报">
      <div slot="left">
        <mt-button @click="$router.back(-1)" icon="back"></mt-button>
      </div>
      <div slot="right">
        <mt-button type="primary" size="small">上传记录</mt-button>
      </div>
    </mt-header>

    <div class="form">
      <mt-field placeholder="自动识别输入内容">
        <mt-button type="primary" size="small">识别</mt-button>
      </mt-field>
      <mt-field label="故障描述" placeholder="故障描述"></mt-field>
      <mt-field label="故障原因" placeholder="故障原因"></mt-field>
      <mt-field label="解决方案" placeholder="解决方案"></mt-field>
      <div class="photo">
        <span>故障照片</span>
        <div class="photo">
          <img src="@/assets/img/logo.png" width="40" height="40" alt="" />
        </div>
        <mt-button type="primary" size="small">添加照片</mt-button>
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
.reportRepair {
  padding: 0 10px;
  min-height: ~"calc(100vh - 120px)";

}

.mint-header {
  background: white;
  color: #333;
  font-size: 16px;

  /deep/ .mint-header-title {
    font-weight: bold;
  }

  .is-right {
    .mint-button {
      background: #4969ff;
      float: right;
      color: white;
      font-size: 12px;
      padding: 0 8px;
      height: 26px;
      line-height: 26px;

      img {
        margin-right: 4px;
        vertical-align: middle;
      }
    }
  }
}

.form {

  .mint-cell {
    border-bottom: 1px solid #eeeeee;
    text-decoration: none;

    .mint-button {
      background: #4969ff;

      input {
        text-decoration: none;
      }
    }
  }

  .photo {
    padding: 0 10px;
    margin-top: 16px;

    > * {
      display: inline-block;
    }
    > span {
      display: inline-block;
      width: 104px;
      font-size: 16px;
      vertical-align: top;
    }

    .photo {
      width: 100px;
      height: 100px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .mint-button {
      float: right;
      background: #4969ff;
    }
  }
}

.title {
  font-weight: bold;
  font-size: 16px;
  margin: 14px 0;
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