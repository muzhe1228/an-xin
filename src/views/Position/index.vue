<template>
  <div class="Position">
    <kenTable
      :tableData="tableData"
      tableHeight="calc(100vh - 4.4rem)"
      :columns="columns"
      :tableWidth="'320'"
    >
      <ul class="bodyItem" v-for="(item,index) in tableData" :key="index" slot="list">
        <li v-for="(fields,i) in columns" :key="i" :style="{width:fields.width + '%'}">
          <van-button v-if="fields.field =='operation'" size="mini" @click="alert(item.name)">平仓</van-button>
          <span v-else-if="fields.field =='check'"></span>
          <p v-else>{{item[fields.field]+index}}</p>
        </li>
      </ul>
    </kenTable>
    <ul class="Position_balance">
      <li>
        <p>留仓盈亏小计：</p>
        <p class="text_green">￥-112064.11</p>
      </li>
      <li>
        <p>盈亏合计：</p>
        <p class="text_green">￥-112064.11</p>
      </li>
      <li>
        <p>留仓总金额：</p>
        <p class="text_red">￥2277520.00</p>
      </li>
    </ul>
  </div>
</template>

<script>
import kenTable from "components/table";
export default {
  data() {
    return {
      tableData: [
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
          field: "name",
          title: "股票名称",
          width: 9,
          titleAlign: "center",
          columnAlign: "center",
          isResize: true
        },
        {
          field: "operation",
          title: "操作",
          width: 7,
          titleAlign: "center",
          columnAlign: "left",
          isResize: true
        },
        {
          field: "tel",
          title: "方向",
          width: 7,
          titleAlign: "center",
          columnAlign: "center",
          isResize: true
        },
        {
          field: "hobby",
          title: "成交价格",
          width: 7,
          titleAlign: "center",
          columnAlign: "center",
          isResize: true
        },
        {
          field: "address",
          title: "数量（手）",
          width: 7,
          titleAlign: "center",
          columnAlign: "left",
          isResize: true
        },
        {
          field: "name",
          title: "成交金额",
          width: 7,
          titleAlign: "center",
          columnAlign: "center",
          isResize: true
        },
        {
          field: "tel",
          title: "手续费",
          width: 7,
          titleAlign: "center",
          columnAlign: "center",
          isResize: true
        },
        {
          field: "hobby",
          title: "可卖数量（手）",
          width: 7,
          titleAlign: "center",
          columnAlign: "center",
          isResize: true
        },
        {
          field: "address",
          title: "留仓天数/费用",
          width: 7,
          titleAlign: "center",
          columnAlign: "left",
          isResize: true
        },
        {
          field: "hobby",
          title: "点差",
          width: 7,
          titleAlign: "center",
          columnAlign: "center",
          isResize: true
        },
        {
          field: "address",
          title: "现价",
          width: 7,
          titleAlign: "center",
          columnAlign: "left",
          isResize: true
        },
        {
          field: "hobby",
          title: "盈亏（？）",
          width: 7,
          titleAlign: "center",
          columnAlign: "center",
          isResize: true
        },
        {
          field: "address",
          title: "下单时间",
          width: 7,
          titleAlign: "center",
          columnAlign: "left",
          isResize: true
        },
        {
          field: "address",
          title: "订单号",
          width: 7,
          titleAlign: "center",
          columnAlign: "left",
          isResize: true
        }
      ]
    };
  },
  mounted() {
    let List = [];
    for (let i = 0; i < 20; i++) {
      List.push({
        check: false,
        name: "赵伟",
        tel: "156*****1987",
        hobby: "钢琴",
        address: "上海市黄"
      });
    }
    this.tableData = List;
    console.log(this.tableData.length);
  },
  components: { kenTable },
  methods: {}
};
</script>

<style scoped lang="less">
@import "~assets/less/comm.less";
.Position {
  margin-top: 50px;
  &_balance {
    width: 100%;
    border: 1px solid @mainSbg;
    font-size: 12px;
    li {
      height: 40px;
      border-bottom: 1px solid @mainSbg;
      display: flex;
      p {
        border-left: 1px solid @mainSbg;
        line-height: 40px;
        padding-left: 8px;
        &:first-child {
          width: 32%;
          text-align: center;
          color: @write;
        }
      }
    }
  }
}
</style>
