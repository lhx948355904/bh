<template>
  <div class="record">
    <mt-header fixed title="记录详情">
      <div slot="left">
        <mt-button @click="back" icon="back"></mt-button>
      </div>
    </mt-header>

    <div class="title">
      {{ data.fault_description }}
      <img src="@/assets/img/logo.png" alt="" />
    </div>

    <div>
      <mt-cell title="设备号" :value="data.device_id"></mt-cell>
      <mt-cell title="设备名称" :value="data.device_name"></mt-cell>
      <mt-cell class="bottom" title="型号" :value="data.model_no"></mt-cell>

      <mt-cell title="故障征兆" :value="data.fault_description"></mt-cell>
      <mt-cell title="故障原因" :value="data.fault_reason"></mt-cell>
      <mt-cell class="bottom" title="解决方案" :value="data.solution"></mt-cell>

      <mt-cell title="方案提供人" value="汪啸天"></mt-cell>
      <mt-cell title="联系方式" value="18888888888"></mt-cell>
    </div>

    <div class="btns">
      <mt-button type="primary" size="small" @click.native="prev"
        ><img src="@/assets/img/last.png" />上一个</mt-button
      >
      <mt-button type="primary" size="small" @click.native="next"
        >下一个<img src="@/assets/img/next.png"
      /></mt-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: "",
      index: "",
      datas: "",
    };
  },
  methods: {
    back(){
      this.$router.back(-1);
      sessionStorage.setItem("datas",JSON.stringify(this.datas))
      console.log(JSON.parse(sessionStorage.getItem("datas"))); //sy-log
    },
    prev() {
      if (this.index > 0) {
        this.index--;
        this.data = this.datas[this.index];
      }
    },
    next() {
      if (this.index < this.datas.length) {
        this.index++;
        this.data = this.datas[this.index];

      }
    },
  },
  mounted() {
    this.index = this.$route.params.index;
    this.datas = this.$route.params.data;
    this.data = this.datas[this.index];
  },
};
</script>

<style lang="less" scoped>
.record {
  padding: 0 10px;
  background: #fafafa;
  min-height: ~"calc(100vh - 120px)";
}

.bottom {
  margin-bottom: 10px;
}

.mint-cell {
  text-decoration: none;
  border-bottom: 1px solid #eeeeee;

  /deep/ .mint-cell-value {
    max-width: 70%;
  }
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
  font-size: 16px;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  img {
    width: 100px;
    height: 100px;
  }
}

.btns {
  margin: 10px 0;
  display: flex;
  justify-content: space-between;

  .mint-button{
    background:#4969ff;
  }
}
</style>