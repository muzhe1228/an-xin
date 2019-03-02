<template>
  <div class="home">
    <div class="home_controller">
      <input class="searchInp" type="text" v-model="search" placeholder="代码/名称/拼音">
      <van-button class="searchBtn" size="mini">查询</van-button>
      <van-button class="showAll" size="mini">显示全部</van-button>
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
      <!-- private String stock_code;//股票编码
	private String stock_pinyin_name;//名称拼音
	private String stock_name;//股票名字
	private String stock_min_link;//股票分时线
	private String stock_day_link;//股票日K线图
	private String stock_week_link;//周K线图
	private String stock_month_link;//月K线图
	private String stock_type;//股票类型sz 深圳 2 sh
	private Integer stock_del;//是否可用 0 是 1 否
	private Double stock_open_price;//开盘价
	private Double stock_current_price;//当前价
	private Double stock_highest_price;//当日最高价
	private Double stock_history_highest_price;//历史最高价
	private Double stock_lowest_price;//当日最低价
	private Double stock_history_lowest_price;//历史最低价
	private Double stock_total_deal;//成交总量 手为单位  一手等于100股
      private Double stock_total_deal_money;//成交总额 万元为单位-->
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
          <li>加入自选</li>
        </ul>
      </div>
      <div class="pageWrap">
        <p class="pageWrapAll">{{pageList.pageNo}}/{{pageList.pageCount}}</p>
        <van-pagination
          v-model="currentPage"
          :total-items="125"
          :items-per-page="10"
          :show-page-size="4"
          force-ellipses
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      currentPage: 1,
      search: "",
      List: [],
      pageList: {}
    };
  },
  components: {},
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      this.$ajax({
        url: "/zongcai/stock/getAllStock",
        data: {
          params: {
            stockMsg: {
              pageNo: 1,
              pageSize: 20
            }
          }
        }
      }).then(res => {
        this.List = res.stockMsgList;
        this.pageList = res.stockMsg;
        console.log(res);
      });
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
