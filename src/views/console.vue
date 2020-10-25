<template>
  <div class="console">
    <mt-header fixed title="控制台"> </mt-header>
    <div class="page">
      <p class="title">待办事项</p>
      <div class="content large">
        <div class="card">
          <p>12</p>
          <p>急需维修</p>
        </div>
        <div class="card">
          <p>35</p>
          <p>急需上报</p>
        </div>
      </div>
    </div>
    <div>
      <p class="title">常用工具</p>
      <div class="content">
        <router-link to="">
          <div class="card">
            <p><img src="@/assets/img/guzhangss.png" alt="" /></p>
            <p>故障搜索</p>
          </div>
        </router-link>
        <router-link to="">
          <div class="card">
            <p><img src="@/assets/img/liulan.png" alt="" /></p>
            <p>浏览</p>
          </div>
        </router-link>
        <router-link to="">
          <div class="card">
            <p><img src="@/assets/img/weixiusb.png" alt="" /></p>
            <p>维修上报</p>
          </div>
        </router-link>
      </div>
    </div>

    <div class="chart">
      <p class="title">监控预警</p>
      <div id="chart1">
        <!-- <img src="@/assets/img/eg.png" alt="" /> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    drawLine() {
      let myChart = this.$echarts.init(document.getElementById("chart1"));
      myChart.setOption({
        grid: {
          left: "13%",
          top: "5%",
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            smooth: true,
          },
        ],
      });
    },
  },
  mounted() {
    this.drawLine();
  },
};
</script>

<style lang="less" scoped>
.console {
  padding: 0 10px;
}
.mint-header {
  background: white;
  color: #333;
  font-size: 16px;

  /deep/ .mint-header-title {
    font-weight: bold;
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

.title {
  font-weight: bold;
  font-size: 16px;
  margin: 14px 0;
}

.page {
  margin: 60px 0 20px;
}

.content {
  &.large {
    .card {
      width: ~"calc(50% - 7.5px)";
      box-shadow: 0 0 4px gainsboro;
      padding: 12px 20px;
      margin-right: 15px;
      display: inline-block;
      text-align: left;
      box-sizing: border-box;

      p:first-child {
        color: #4969ff;
        font-size: 30px;
        font-weight: bold;
      }
    }

    .card:nth-child(2n) {
      margin-right: 0;
    }
  }

  .card {
    display: inline-block;
    width: ~"calc(33% - 10px)";
    margin-right: 15px;
    margin-bottom: 15px;
    box-shadow: 0 0 4px gainsboro;
    padding: 8px 0;
    text-align: center;

    img {
      width: 40%;
    }

    p:last-child {
      margin-top: 10px;
    }
  }

  a:nth-child(3n) {
    .card {
      margin-right: 0;
    }
  }

  a:nth-child(n + 4) {
    .card {
      margin-bottom: 0;
    }
  }
}
</style>