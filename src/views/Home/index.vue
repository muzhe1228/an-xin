<template>
  <div class="home">
    <div class="home_controller">
      <input
        class="searchInp"
        type="text"
        v-model="searchVal"
        @change="searchChange"
        placeholder="代码/名称/拼音"
      >
      <van-button class="searchBtn" size="mini" @click="searchHanle(searchVal)">查询</van-button>
      <van-button class="showAll" size="mini" @click="selectCont = true;">{{selectValue}}</van-button>
    </div>
    <div class="home_wrap">
      <div class="title">
        <h2>名称</h2>
        <h2>最新价</h2>
        <h2>涨跌</h2>
        <h2>状态</h2>
        <h2>差点</h2>
        <h2>操作</h2>
      </div>
      <div class="info">
        <ul class="info_single" v-for="item in List" :key="item.stock_code">
          <li>
            <p>{{item.stock_name}}</p>
            <p>{{item.stock_code}}</p>
          </li>
          <li :class="isRed(item.stock_del)">{{item.stock_current_price|isNull}}</li>
          <li :class="isRed(item.stock_del)">5.20%</li>
          <li class="text_blue">{{item.stock_del|isNormal}}</li>
          <li>0%</li>
          <li @click="addBuyer(item.stock_code)">加入自选</li>
        </ul>
      </div>
      <div class="pageWrap" v-if="pageList.pageCount>1">
        <p class="pageWrapAll">{{pageList.pageNo}}/{{pageList.pageCount}}</p>
        <van-pagination
          v-model="req.pageNo"
          :total-items="pageList.totalCount"
          :items-per-page="pageList.pageSize"
          :show-page-size="4"
          force-ellipses
          @change="pageChange"
        />
        <!-- <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage3"
          :page-size="100"
          layout="prev, pager, next, jumper"
          :total="1000"
        ></el-pagination>-->
        <!-- <el-pagination layout="prev, pager, next" :total="pageList.totalCount" :page-size="20" pager-count="5"></el-pagination> -->
      </div>
    </div>
    <van-popup v-model="selectCont" position="bottom">
      <van-picker
        show-toolbar
        :columns="selectList"
        @confirm="checkOk"
        @cancel="selectCont = false"
        visible-item-count="3"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchVal: null,
      List: [],
      pageList: {},
      selectValue: "显示全部",
      selectCont: false,
      selectList: ["显示全部", "上海股", "深圳股"],
      req: {
        pageNo: 1,
        pageSize: 20,
        stock_type: null,
        stock_select: null
      }
    };
  },
  components: {},
  mounted() {
    this.init();
  },
  methods: {
    init() {
      console.log(this.$route.params.type);
      this.getList();
    },
    checkOk(value, index) {
      if (this.selectValue != value) {
        this.req.pageNo = 1;
        if (index == 1) {
          this.req.stock_type = "sh";
        } else if (index == 2) {
          this.req.stock_type = "sz";
        } else {
          this.req.stock_type = null;
        }
        this.getList();
      }
      this.selectValue = value;
      this.selectCont = false;
    },
    getList() {
      this.$http
        .postData({
          url: "/stock/getAllStock",
          data: {
            params: this.req
          }
        })
        .then(res => {
          console.log(res.stockMsgList);
          this.List = res.stockMsgList;
          this.pageList = res.stockMsg;
          // console.log(res);
        });
    },
    //添加自选
    addBuyer(code) {
      this.$http
        .post({
          url: "/stock/addBuyerStockList",
          data: {
            stock_code: code,
            buyer_id: 2
          }
        })
        .then(res => {
          this.$toast.success("添加自选成功");
        });
    },
    searchHanle(val) {
      console.log(val);
      if (val) {
        this.req.pageNo = 1;
        this.req.stock_type = null;
        this.req.stock_select = val;
      } else {
        this.req.stock_select = null;
      }
      this.getList();
    },
    searchChange(val) {
      console.log(val);
    },
    pageChange(pageNo) {
      this.req.pageNo = pageNo;
      this.getList();
    },
    isRed(index) {
      if (index % 2) {
        return "text_red";
      } else {
        return "text_green";
      }
    }
  }
};
</script>

<style lang="less">
@import "~assets/less/comm.less";
.home {
  &_controller {
    position: fixed;
    width: 100%;
    top: 52px;
    left: 0;
    height: 48px;
    background-color: @mainBg;
    border-bottom: 2px solid #333;
    box-shadow: 0 5px 20px -5px @shadow;
    display: flex;
    align-items: center;
    padding: 4px;
    .searchInp {
      width: 156px;
      height: 28px;
      border-radius: 4px;
      border: 1px solid @border;
      padding: 0 4px;
      background: linear-gradient(#fff, #d2d2d2);
      .placeholderColor(@black);
    }
    .van-button {
      height: 28px;
      border-radius: 4px;
      border: 1px solid @border;
      padding: 0 8px;
      margin-left: 16px;
      background: linear-gradient(#fff, #d2d2d2);
      color: @black;
      &.showAll {
        width: 70px;
      }
    }
  }
  &_wrap {
    padding-bottom: 50px;
    .title {
      position: fixed;
      width: 100%;
      top: 100px;
      left: 0;
      display: flex;
      height: 50px;
      align-items: center;
      background-color: @mainSbg;
      color: @write;
      border-left: 2px solid @mainSbg;
      h2 {
        text-align: center;
        font-weight: 400;
        font-size: 11px;
        width: 13%;
        border-right: 2px solid @mainSbg;
        &:first-child {
          width: 20%;
        }
        &:nth-child(2),
        &:nth-child(3) {
          width: 17%;
        }
        &:last-child {
          width: 20%;
        }
      }
    }

    .info {
      padding-top: 150px;
      &_single {
        height: 50px;
        width: 100%;
        display: flex;
        align-items: center;
        background-color: @mainSbg;
        color: @write;
        border-left: 2px solid @mainSbg;
        &:nth-child(odd) {
          background-color: @mainBg;
        }
        li {
          border-right: 2px solid @mainSbg;
          text-align: center;
          font-weight: 400;
          width: 13%;
          line-height: 50px;
          &:first-child {
            width: 20%;
            height: 50px;
            padding-top: 5px;
            p {
              line-height: 20px;
            }
          }
          &:nth-child(2),
          &:nth-child(3) {
            width: 17%;
          }
          &:last-child {
            width: 20%;
            text-decoration: underline;
            color: #debd63;
          }
        }
      }
    }
    .pageWrap {
      padding-bottom: 30px;
      .pageWrapAll {
        height: 32px;
        font-size: 12px;
        text-align: center;
        line-height: 32px;
        color: @write;
      }
      .van-pagination {
        &__item {
          color: @write;
          background-color: @mainSbg;
        }
        &__item--active {
          background-color: @mainBg;
        }
        &__item--disabled,
        &__item--disabled:active {
          background-color: @border1;
        }
      }
    }
  }
}
</style>
