<template>
  <div class="entryRecord">
    <van-nav-bar title="入金记录" fixed :border="false" left-arrow @click-left="onClickLeft"/>
    <p class="tips">充值历史记录</p>
    <kenTable :tableData="RecordList" tableHeight="calc(100vh - 1.72rem)" :columns="columns">
      <ul class="recordList" v-for="(item,index) in RecordList" :key="index" slot="list">
        <li>{{item.time}}</li>
        <li>{{item.orderCode}}</li>
        <li>{{item.type}}</li>
        <li>{{item.liushui}}</li>
        <li>{{item.money}}</li>
        <li>{{item.state}}</li>
        <li>{{item.remark+index}}</li>
      </ul>
    </kenTable>
  </div>
</template>

<script>
import kenTable from "components/table";
export default {
  data() {
    return {
      columns: [
        {
          field: "time",
          title: "日期",
          width: 19,
          titleAlign: "center",
          columnAlign: "center"
        },
        {
          field: "orderCode",
          title: "单号",
          width: 14,
          titleAlign: "center",
          columnAlign: "center"
        },
        {
          field: "type",
          title: "类型",
          width: 10,
          titleAlign: "center",
          columnAlign: "center"
        },
        {
          field: "liushui",
          title: "流水号",
          width: 14,
          titleAlign: "center",
          columnAlign: "center"
        },
        {
          field: "money",
          title: "金额",
          width: 14,
          titleAlign: "center",
          columnAlign: "center"
        },
        {
          field: "state",
          title: "状态",
          width: 10,
          titleAlign: "center",
          columnAlign: "center"
        },
        {
          field: "remark",
          title: "备注",
          width: 19,
          titleAlign: "center",
          columnAlign: "center"
        }
      ],
      RecordList: [
        {
          time: "03-21 13:14:52",
          orderCode: 721521,
          type: "充值",
          liushui: "20190321",
          money: 1688.0,
          state: "成功",
          remark: "充钱"
        }
      ]
    };
  },
  mounted() {
    this._initPage();
  },
  components: { kenTable },
  methods: {
    _initPage() {
      let arr = [];
      for (let i = 0; i < 20; i++) {
        arr.push(this.RecordList[0]);
      }
      this.RecordList = arr;
    },
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped lang="less">
@import "~assets/less/comm.less";
.entryRecord {
  padding-top: 46px;
  .tips {
    height: 40px;
    color: @lineH;
    font-size: 13px;
    line-height: 40px;
    text-align: center;
    letter-spacing: 2px;
  }
  .recordList {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    background-color: @mainSbg;
    li {
      width: 10%;
      text-align: center;
      height: 50px;
      line-height: 50px;
      border-left: 1px solid @mainBg;
      border-bottom: 1px solid @mainBg;
      &:first-child,
      &:last-child {
        width: 19%;
      }
      &:nth-child(2),
      &:nth-child(4),
      &:nth-child(5) {
        width: 14%;
      }
    }
  }
}
</style>
