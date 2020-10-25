<template>
  <div class="home">
    <mt-header fixed title="首页"></mt-header>
    <div class="title">
      北航 - 清华工业数指 <img src="@/assets/img/logo.png" />
    </div>
    <div class="nav">
      <router-link to="/browse">
        <div class="card">
          <p><img src="@/assets/img/liulan.png" alt="" /></p>
          <p>浏览</p>
        </div>
      </router-link>
      <router-link to="/searchFault">
        <div class="card">
          <p><img src="@/assets/img/guzhangss.png" alt="" /></p>
          <p>故障搜索</p>
        </div>
      </router-link>
      <router-link to="/knowledgeList">
        <div class="card">
          <p><img src="@/assets/img/zhishitp.png" alt="" /></p>
          <p>知识图谱</p>
        </div>
      </router-link>
      <router-link to="">
        <div class="card">
          <p><img src="@/assets/img/guzhangjc.png" alt="" /></p>
          <p>故障检测</p>
        </div>
      </router-link>
      <router-link to="">
        <div class="card">
          <p><img src="@/assets/img/shebeigl.png" alt="" /></p>
          <p>设备管理</p>
        </div>
      </router-link>
      <router-link to="/reportRepair">
        <div class="card">
          <p><img src="@/assets/img/weixiusb.png" alt="" /></p>
          <p>维修上报</p>
        </div>
      </router-link>
    </div>

    <div class="chart">
      <p>设备维修知识图谱</p>
      <div id="viz" class="network" style="height: 300px"></div>
      <!-- <div id="chart1">
      </div> -->
    </div>

    <div class="chart">
      <p>设备维修知识图谱</p>
      <div id="chart2">
        <!-- <img src="@/assets/img/eg.png" alt="" /> -->
      </div>
    </div>
  </div>
</template>

<script>
// import NeoVis from "neovis.js";
export default {
  name: "Home",

  components: {},
  methods: {
    drawLine() {
      let myChart = this.$echarts.init(document.getElementById("chart2"));
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
            lineStyle:{
              color:'orange'
            }
          },
        ],
      });
    },
  },
  mounted() {
    this.drawLine();
    var viz;
    function draw() {
      var config = {
        container_id: "viz",
        server_url: "bolt://39.105.232.15:7687",
        server_user: "neo4j",
        server_password: "123456",
        labels: {
          Description: "name",
          Device: "name",
          Reason: "name",
          Solution: "name",
        },
        relationships: {
          ReasonOf: {
            caption: false,
          },
          SolutionOf: {
            caption: false,
          },
          malfunctionof: {
            caption: false,
          },
          methodsof: {
            caption: false,
          },
        },
        // initial_cypher: "MATCH p=()-->() RETURN p LIMIT 25"
        initial_cypher: "MATCH (n)-[r:INTERACTS]->(m) RETURN *"
      };

      viz = new NeoVis.default(config);
      viz.render();
      console.log(viz);
    }
    console.log(NeoVis);
    draw();
  },
};
</script>

<style lang="less" scoped>
.home {
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

.title {
  font-weight: bold;
  color: #333333;
  font-size: 16px;
  text-align: left;
  margin: 60px 0 20px;

  img {
    width: 30px;
    height: 30px;
    margin-left: 10px;
  }
}

.nav {
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

.chart {
  margin-top: 20px;

  p {
    font-weight: bold;
    font-size: 16px;
  }

  > div {
    height: 200px;
    margin: 10px 0;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
