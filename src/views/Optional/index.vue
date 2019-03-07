<template>
  <div class="quick_order">
    <div class="home_controller">
      <van-button class="searchBtn" size="mini">删除自选</van-button>
      <input class="searchInp" type="text" placeholder="代码/名称/拼音">
      <van-button class="showAll" size="mini">加入自选股</van-button>
    </div>
    <kenTable
      :tableData="buyerStockList"
      tableHeight="calc(100vh - 3rem)"
      :columns="columns"
      :tableWidth="'280'"
    >
      <ul class="bodyItem" v-for="(item,index) in buyerStockList" :key="index" slot="list">
        <li v-for="(fields,index) in columns" :key="index" :style="{width:fields.width + '%'}">
          <van-button v-if="fields.field =='operation'" size="mini" @click="alert(item.name)">下单</van-button>
          <span v-else-if="fields.field =='check'"></span>
          <div v-else-if="fields.formatter" v-html="fields.formatter(item,fields.field)"></div>
          <p v-else>{{item[fields.field]}}</p>
        </li>
      </ul>
    </kenTable>
  </div>
</template>

<script>
import kenTable from "components/table";
import { mapGetters } from "vuex";
import { isNormal } from "common/func";
export default {
  data() {
    return {
      buyerStockList: [
        {
          check: false,
          name: "赵伟",
          tel: "156*****1987",
          hobby: "钢琴",
          address: "上海市黄"
        }
      ],
      columns: [
        {
          field: "check",
          title: "选择",
          width: 7,
          titleAlign: "center",
          columnAlign: "center",
          isResize: true
        },
        {
          field: "stock_name",
          title: "股票名称",
          formatter: function(rowData, field) {
            return `<p style="display: flex;
        padding: 0.1rem 0;
        flex-direction: column;
        height: 1rem;">
            <span style="line-height: 0.4rem;">${rowData[field]}</span>
            <span style="line-height: 0.4rem;">${rowData.stock_code}</span>
            </p>`;
          },
          width: 9,
          titleAlign: "center",
          columnAlign: "center",
          isResize: true
        },
        {
          field: "stock_current_price",
          title: "最新价",
          width: 7,
          titleAlign: "center",
          columnAlign: "center",
          isResize: true
        },
        {
          field: "hobby",
          title: "涨跌",
          width: 7,
          titleAlign: "center",
          columnAlign: "center",
          isResize: true
        },
        {
          field: "address",
          title: "涨跌 %",
          width: 7,
          titleAlign: "center",
          columnAlign: "left",
          isResize: true
        },
        {
          field: "name",
          title: "买价",
          width: 7,
          titleAlign: "center",
          columnAlign: "center",
          isResize: true
        },
        {
          field: "tel",
          title: "卖价",
          width: 7,
          titleAlign: "center",
          columnAlign: "center",
          isResize: true
        },
        {
          field: "stock_open_price",
          title: "开盘价",
          width: 7,
          titleAlign: "center",
          columnAlign: "center",
          isResize: true
        },
        {
          field: "stock_highest_price ",
          title: "最高价",
          width: 7,
          titleAlign: "center",
          columnAlign: "left",
          isResize: true
        },
        {
          field: "stock_lowest_price ",
          title: "最低价",
          width: 7,
          titleAlign: "center",
          columnAlign: "center",
          isResize: true
        },
        {
          field: "stock_total_deal ",
          title: "成交量",
          width: 7,
          titleAlign: "center",
          columnAlign: "left",
          isResize: true
        },
        {
          field: "stock_del",
          formatter: function(rowData, field) {
            return `<span>${isNormal(rowData[field])}</span>`;
          },
          title: "状态",
          width: 7,
          titleAlign: "center",
          columnAlign: "center",
          isResize: true
        },
        {
          field: "address",
          title: "点差",
          width: 7,
          titleAlign: "center",
          columnAlign: "left",
          isResize: true
        },
        {
          field: "operation",
          title: "操作",
          width: 7,
          titleAlign: "center",
          columnAlign: "left",
          isResize: true
        }
      ],
      req: {
        buyer_id: ""
      }
    };
  },
  computed: {
    ...mapGetters({ userId: "getUserId" })
  },
  mounted() {
    this._initPage();
  },
  components: { kenTable },
  methods: {
    _initPage() {
      this.req.buyer_id = this.userId;
      this.getOptionalData(this.req);
    },
    getOptionalData(req) {
      if (this.userId) {
        this.$http
          .get({
            url: "/stock/findBuyerStockList",
            data: req
          })
          .then(res => {
            console.log(res);
            res.buyerStockList.forEach(item => {
              item.check = false;
            });
            this.buyerStockList = res.buyerStockList;
          });
      }
    }
  }
};
</script>

<style scoped lang="less">
@import "~assets/less/comm.less";
.quick_order {
  margin-top: 100px;
  .home_controller {
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
    z-index: 8;
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
      margin-right: 16px;
      background: linear-gradient(#fff, #d2d2d2);
      color: @black;
      width: 70px;
      &.showAll {
        width: 90px;
      }
    }
  }
}
</style>
