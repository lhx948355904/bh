<template>
  <div class="record">
    <mt-header fixed title="记录详情">
      <div slot="left">
        <mt-button @click="$router.back(-1)" icon="back"></mt-button>
      </div>
    </mt-header>

    <div class="title">
      刀库门气缸脱落！
      <img src="@/assets/img/logo.png" alt="" />
    </div>

    <div>
      <mt-cell title="设备号" value="279"></mt-cell>
      <mt-cell title="设备名称" value="小巨人加工中心"></mt-cell>
      <mt-cell class="bottom" title="型号" value="VTC-160A-2PC"></mt-cell>

      <mt-cell title="故障征兆" value="小巨人加工中心刀库气缸脱落！"></mt-cell>
      <mt-cell title="故障原因" value="小巨人加工中心紧固螺钉脱落"></mt-cell>
      <mt-cell
        class="bottom"
        title="解决方案"
        value="小巨人加工中心重新装螺钉固定"
      ></mt-cell>

      <mt-cell title="方案提供人" value="汪啸天"></mt-cell>
      <mt-cell title="联系方式" value="18888888888"></mt-cell>
    </div>

    <div class="btns">
      <mt-button type="primary" size="small"
        ><img src="@/assets/img/last.png" />上一个</mt-button
      >
      <mt-button type="primary" size="small"
        >下一个<img src="@/assets/img/next.png" /></mt-button
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.record {
  padding: 0 10px;
  background: #fafafa;
  height: 100vh;
}

.bottom {
  margin-bottom: 10px;
}

.mint-cell {
  text-decoration: none;
  border-bottom: 1px solid #eeeeee;
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
  margin: 60px 0 20px;
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

.btns{
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
}
</style>