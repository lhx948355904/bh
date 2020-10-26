<template>
  <div class="browse">
    <mt-header fixed title="知识图谱">
      <div slot="left">
        <mt-button @click="$router.back(-1)" icon="back"></mt-button>
      </div>
    </mt-header>

    <div class="page">
      <p class="title">设备记录数据库</p>
      <div class="content large">
        <div class="card">
          <p>618</p>
          <p>方案总数</p>
        </div>
        <div class="card">
          <p>35</p>
          <p>方案总数</p>
        </div>
      </div>
    </div>

    <div class="chart">
      <p class="title">新增趋势</p>
      <div id="chart1">
        <!-- <img src="@/assets/img/eg.png" alt="" /> -->
      </div>
    </div>

    <div>
      <p class="title">按型号检索</p>
      <div class="content">
        <mt-button :plain="true" @click.native="search" type="default" size="small">VTC-200C</mt-button>
        <mt-button :plain="true" @click.native="search" type="default" size="small">VTC-200C</mt-button>
        <mt-button :plain="true" @click.native="search" type="default" size="small">VTC-200C</mt-button>
        <mt-button :plain="true" @click.native="search" type="default" size="small">VTC-200C</mt-button>
        <mt-button :plain="true" @click.native="search" type="default" size="small">VTC-200C</mt-button>
        <mt-button :plain="true" @click.native="search" type="default" size="small">VTC-200C</mt-button>
      </div>
    </div>

    <div>
      <p class="title">热搜故障现象</p>
      <div class="content">
        <mt-button type="default" size="small">卡刀</mt-button>
        <mt-button type="default" size="small">气缸脱落</mt-button>
        <mt-button type="default" size="small">继电器跳闸</mt-button>
        <mt-button type="default" size="small">更多</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    search(val){
      this.$axios
        .post("http://39.105.232.15:3150/category", {
          model_no: `${val.target.innerText}`,
        })
        .then((resp) => {
          if (resp.data.data.length > 0) {
            this.$router.push({
              name: "searchResult",
              params: {data:resp.data.data},
            });
          }
        });
    },
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
.mint-header {
  background: white;
  color: #333;
  font-size: 16px;

  /deep/ .mint-header-title {
    font-weight: bold;
  }
}

.title {
  font-weight: bold;
  font-size: 16px;
  margin: 14px 0;
}

.browse {
  padding: 0 10px;
    min-height: ~"calc(100vh - 120px)";

}

.page {
}

.content {
  .mint-button {
    border: none;
    margin-right: 15px;
    margin-bottom: 15px;
    box-shadow: 0 0 4px gainsboro;

  }
}

.content.large {
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