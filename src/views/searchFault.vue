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
      <mt-search
        @keyup.enter.native="search($event.target.value)"
        cancel-text="取消"
        placeholder="搜索"
      >
      </mt-search>
    </div>

    <div class="searchList">
      <p>搜索记录</p>
      <mt-cell
        v-for="item in searchHistory"
        :key="item.id"
        :title="item.val"
        @click.native="search($event.target.innerText)"
      ></mt-cell>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  name: "searchFault",
  data() {
    return {
      searchHistory: [],
      i: 0,
    };
  },
  methods: {
   
    search(val) {
      console.log(val); //sy-log
      var bool = true;
      if (this.searchHistory.length == 0) {
        this.searchHistory.unshift({
          val: val,
          id: this.i++,
        });
      } else {
        for (let i in this.searchHistory) {
          var vals = this.searchHistory[i];
          if (vals.val == val) {
            this.searchHistory.splice(i, 1);
            this.searchHistory.unshift(vals);
            bool = false;
          }
        }
        if (bool) {
          this.searchHistory.unshift({
            val:val,
            id: this.i++,
          });
        }
      }

      this.$axios
        .post("http://39.105.232.15:3150/query", {
          text: `${val}`,
        })
        .then((resp) => {
          console.log(resp); //sy-log
          if (resp.data.length > 0) {
            this.$router.push({
              name: "searchResult",
              params: {
                data: resp.data,
                history: this.searchHistory,
              },
            });
          } else {
            Toast({
              message: "暂无数据",
              duration: 3000,
            });
          }
        });
    },
  },
  mounted() {
    
  },
};
</script>

<style lang="less" scoped>
.searchFault {
  background: #fafafa;
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
    img {
      width: 30px;
      height: 30px;
    }
  }
}

.search {
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
  margin-top: 10px;

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