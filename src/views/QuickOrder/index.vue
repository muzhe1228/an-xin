<template>
  <div class="quickOrder">
    <div class="quickOrder_tips">休市中，不能买入股票</div>
    <ul class="tips_msg">
      <li>开盘价：0</li>
      <li>最高价：0</li>
      <li>最低价：0</li>
      <li>昨收价：0</li>
      <li>涨跌：0</li>
      <li>涨跌%：0</li>
      <li>总成交量：0</li>
      <li>总金额（万）：0</li>
      <li>涨停价：0</li>
      <li>跌停价：0</li>
    </ul>
    <div class="quickOrder_wrap">
      <ul class="quickOrder_left">
        <li>
          <p>交易账户：</p>
          <p>{{userInfo.buyerLoginName}}</p>
        </li>
        <li>
          <p>可用余额：</p>
          <p class="text_red">
            <strong>￥8289650.30</strong>
          </p>
        </li>
        <li class="single">
          <p>股票代码：</p>
          <p>
            <input
              class="code"
              type="text"
              v-model="stockData.stock_code"
              disabled
              placeholder="股票代码"
            >
          </p>
        </li>
        <li>
          <p>股票名称：</p>
          <p class="text_red">{{stockData.stock_name}}</p>
        </li>
        <li>
          <p>当前价格：</p>
          <p>￥{{stockData.stock_current_price}}</p>
        </li>
        <li>
          <p>点差：</p>
          <p class="text_gray">0</p>
        </li>
        <li>
          <p>升跌类型：</p>
          <p>
            <van-radio-group v-model="upDown" class="radio_group">
              <van-radio class="more" name="0">买入做多↑</van-radio>
              <van-radio class="kong" name="1">借券做空↓</van-radio>
            </van-radio-group>
          </p>
        </li>
        <li>
          <p>委托手数：</p>
          <p class="shou">
            <input class="shou_inp" type="text" disabled placeholder="手数">
            <span>1手=100股</span>
          </p>
        </li>
        <li>
          <p>总股数：</p>
          <p>￥8289650.30</p>
        </li>
      </ul>
      <ul class="quickOrder_right">
        <li>
          <p>价格</p>
          <p>数量</p>
        </li>
        <li class="sell">
          <p>32.8</p>
          <p>200</p>
        </li>
        <li class="sell">
          <p>32.8</p>
          <p>200</p>
        </li>
        <li class="sell">
          <p>32.80</p>
          <p>200</p>
        </li>
        <li class="sell">
          <p>32.80</p>
          <p>200</p>
        </li>
        <li class="sell">
          <p>32.80</p>
          <p>200</p>
        </li>
        <li class="current">
          <p>31.80</p>
          <p>最新价</p>
        </li>
        <li class="buy">
          <p>32.8</p>
          <p>200</p>
        </li>
        <li class="buy">
          <p>32.8</p>
          <p>200</p>
        </li>
        <li class="buy">
          <p>32.80</p>
          <p>200</p>
        </li>
        <li class="buy">
          <p>32.80</p>
          <p>200</p>
        </li>
        <li class="buy">
          <p>32.80</p>
          <p>200</p>
        </li>
        <li class="buy_sell">
          <p class="text_blue">红*买</p>
          <p class="text_blue">绿*卖</p>
        </li>
      </ul>
    </div>
    <div class="quickOrder_hanle">
      <van-button class="buyBtn" disabled>买入</van-button>
      <van-button class="Refresh" :disabled="false" @click="_initPage">刷新</van-button>
    </div>
    <div class="kLine">
      <div class="selectBtn">
        <van-button @click="selectLine('min')" :class="checkLine=='min'&&'active'">分K线</van-button>
        <van-button @click="selectLine('day')" :class="checkLine=='day'&&'active'">天K线</van-button>
        <van-button @click="selectLine('week')" :class="checkLine=='week'&&'active'">周K线</van-button>
        <van-button @click="selectLine('month')" :class="checkLine=='month'&&'active'">月K线</van-button>
      </div>
      <img :src="kLineUrl" alt>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      upDown: null,
      stockData: {},
      checkLine: null,
      kLineUrl: null,
      inRefresh: false
    };
  },
  components: {},
  mounted() {
    this._initPage();
  },
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {
    _initPage() {
      this.upDown = "0";
      this.inRefresh = true;
      this.checkLine = "min";
      this.getDetails(this.$route.params.stock_code);
      this.setTableVal(2);
    },
    selectLine(val) {
      this.checkLine = val;
      switch (val) {
        case "min":
          this.kLineUrl = this.stockData.stock_min_link;
          break;
        case "day":
          this.kLineUrl = this.stockData.stock_day_link;
          break;
        case "week":
          this.kLineUrl = this.stockData.stock_week_link;
          break;
        case "month":
          this.kLineUrl = this.stockData.stock_month_link;
          break;
        default:
          break;
      }
    },
    getDetails(code) {
      if (code) {
        this.$http
          .get({
            url: "/stock/getStockDetail",
            data: { stock_code: code }
          })
          .then(res => {
            if (res.stockMsg) {
              this.stockData = res.stockMsg;
              this.kLineUrl = this.stockData.stock_min_link;
              this.inRefresh = false;
            }
          });
      }
    },
    isRed(index) {
      if (index % 2) {
        return "text_red";
      } else {
        return "text_green";
      }
    },
    ...mapMutations({ setTableVal: "SET_TABBARVAL" })
  }
};
</script>

<style lang="less">
@import "~assets/less/comm.less";
.quickOrder {
  padding: 52px 0 60px 0;
  &_tips {
    height: 30px;
    background-color: @mainBg;
    color: @write;
    font-size: 13px;
    font-weight: bold;
    position: relative;
    // z-index: 999;
    line-height: 30px;
    text-align: center;
  }
  .tips_msg {
    font-size: 9px;
    color: @border;
    display: flex;
    flex-wrap: wrap;
    li {
      padding: 3px 8px;
    }
  }
  &_wrap {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  &_left {
    width: 56%;
    li {
      width: 100%;
      height: 32px;
      border: 1px solid @mainBg;
      border-bottom: none;
      display: flex;
      align-items: center;
      color: @write;
      padding-left: 8px;
      &:last-child {
        border-bottom: 1px solid @mainBg;
      }
      p {
        strong {
          font-size: 14px;
        }
        input {
          height: 20px;
          line-height: 18px;
          font-size: 11px;
          color: @black;
          .placeholderColor(@border);
          &:disabled {
            opacity: 0.5;
          }
        }
        &.single {
          width: 100%;
          .code {
            width: 90%;
            font-size: 11px;
            color: @black;
            .placeholderColor(@border);
          }
        }
        &:last-child {
          flex: 1;
          .shou_inp {
            width: 45%;
            margin-right: 6px;
          }
        }
        .radio_group {
          display: flex;
          align-items: center;
          .more {
            margin-right: 6px;
            .van-radio__label {
              color: @red;
            }
          }
          .kong {
            .van-radio__label {
              color: @green;
            }
          }
          .van-radio {
            display: flex;

            &__label {
              line-height: 14px;
              margin-left: 2px;
              font-size: 11px;
            }
            &__icon {
              height: 14px;
              line-height: 14px;
              .van-icon {
                width: 14px;
                height: 14px;
                line-height: 14px;
              }
            }
            &__icon--checked {
              .van-icon {
                border-color: @green;
                background-color: @green;
                font-size: 12px;
              }
            }
          }
        }
      }
    }
  }
  &_right {
    width: 44%;
    border: 1px solid @mainBg;
    border-left: none;
    li {
      height: 20px;
      line-height: 20px;
      display: flex;
      p {
        width: 50%;
        text-align: center;
      }
      &:first-child {
        border-bottom: 1px solid @mainBg;
        color: @write;
      }
      &.sell {
        background-color: rgba(255, 0, 0, 0.1);
        p {
          color: @red;
        }
      }
      &.buy {
        background-color: rgba(16, 144, 83, 0.1);
        p {
          color: @green;
        }
      }
      &.buy_sell {
        height: 30px;
        line-height: 30px;
        color: @write;
        font-size: 12px;
      }
      &.current {
        height: 36px;
        line-height: 36px;
        p {
          font-size: 13px;
          color: @blue;
          &:last-child {
            font-size: 8px;
            color: @border;
          }
        }
      }
    }
  }
  &_hanle {
    padding-top: 20px;
    width: 100%;
    .buyBtn {
      width: 45%;
      height: 36px;
      line-height: 36px;
      margin: 0 5%;
      background-color: @green;
      border-color: @green;
      color: @write;
    }
    .Refresh {
      height: 36px;
      line-height: 36px;
      width: 21%;
      margin: 0 12%;
      background-color: @red;
      border-color: @red;
      color: @write;
    }
  }
  .kLine {
    width: 100%;
    .selectBtn {
      display: flex;
      justify-content: space-between;
      padding: 20px 5%;
      .van-button {
        width: 20%;
        height: 24px;
        line-height: 22px;
        font-size: 11px;
        background: linear-gradient(#fff, #98a1ac);
        border: none;
        border-radius: 4px;
        &.active {
          background: linear-gradient(@blue);
        }
      }
    }
    img {
      width: 100%;
    }
  }
}
</style>
