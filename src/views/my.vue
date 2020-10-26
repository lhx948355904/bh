<template>
  <div class="my">
    <mt-header fixed title="我的"></mt-header>
    <div class="userinfo">
      <p class="name">
        <img src="@/assets/img/logo.png" alt="" />
        李建国
      </p>

      <mt-cell title="单位" is-link href="//github.com">
        <span>
            ICM第十车间
        </span>
        <img slot="icon" src="@/assets/img/company.png" width="24" height="24" />
      </mt-cell>

      <mt-cell title="职务" is-link href="//github.com">
        <span>
            工程师
        </span>
        <img slot="icon" src="@/assets/img/post.png" width="24" height="24" />
      </mt-cell>

      <mt-cell title="联系方式" is-link href="//github.com">
        <span>
            18888888888
        </span>
        <img slot="icon" src="@/assets/img/phone.png" width="24" height="24" />
      </mt-cell>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.my {
  background: #FAFAFA;
  min-height: ~"calc(100vh - 120px)";

}

.mint-header {
  background: white;
  color: #333;
  font-size: 16px;

  /deep/ .mint-header-title {
    font-weight: bold;
  }
}

.mint-cell-wrapper{
   border-bottom: 1px solid #EEEEEE; 
}

.userinfo{
    
    .name{
        background: white;
        padding: 0 10px;
        font-size: 16px;

        img{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-right: 10px;
        }
    }
}
</style>