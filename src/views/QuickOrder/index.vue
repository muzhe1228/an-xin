<template>
  <div class="quick_order">
    <kenTable :tableData="tableData" :columns="columns" :tableWidth="'120'">
      <ul class="bodyItem" v-for="(item,index) in tableData" :key="index" slot="list">
        <li v-for="(fields,index) in columns" :key="index" :style="{width:fields.width + '%'}">
          {{item[fields.field]}}
          <span>11</span>
        </li>
      </ul>
    </kenTable>
  </div>
</template>

<script>
import kenTable from "components/table";
export default {
  data() {
    return {
      tableData: [
        {
          name: "赵伟",
          tel: "156*****1987",
          hobby: "钢琴、书法、唱歌",
          address: "上海市黄浦区金陵东路569号17楼"
        },
        {
          name: "李伟",
          tel: "182*****1538",
          hobby: "钢琴、书法、唱歌",
          address: "上海市奉贤区南桥镇立新路12号2楼"
        },
        {
          name: "孙伟",
          tel: "161*****0097",
          hobby: "钢琴、书法、唱歌",
          address: "上海市崇明县城桥镇八一路739号"
        },
        {
          name: "周伟",
          tel: "197*****1123",
          hobby: "钢琴、书法、唱歌",
          address: "上海市青浦区青浦镇章浜路24号"
        },
        {
          name: "吴伟",
          tel: "183*****6678",
          hobby: "钢琴、书法、唱歌",
          address: "上海市松江区乐都西路867-871号"
        },
        {
          name: "周伟",
          tel: "197*****1123",
          hobby: "钢琴、书法、唱歌",
          address: "上海市青浦区青浦镇章浜路24号"
        },
        {
          name: "吴伟",
          tel: "183*****6678",
          hobby: "钢琴、书法、唱歌",
          address: "上海市松江区乐都西路867-871号"
        },
        {
          name: "李伟",
          tel: "182*****1538",
          hobby: "钢琴、书法、唱歌",
          address: "上海市奉贤区南桥镇立新路12号2楼"
        },
        {
          name: "孙伟",
          tel: "161*****0097",
          hobby: "钢琴、书法、唱歌",
          address: "上海市崇明县城桥镇八一路739号"
        },
        {
          name: "周伟",
          tel: "197*****1123",
          hobby: "钢琴、书法、唱歌",
          address: "上海市青浦区青浦镇章浜路24号"
        }
      ],
      columns: [
        {
          field: "name",
          title: "股票名称",
          width: 25,
          titleAlign: "center",
          columnAlign: "center",
          isResize: true
        },
        {
          field: "tel",
          title: "最新价",
          width: 25,
          titleAlign: "center",
          columnAlign: "center",
          isResize: true
        },
        {
          field: "hobby",
          title: "涨跌",
          width: 25,
          titleAlign: "center",
          columnAlign: "center",
          isResize: true
        },
        {
          field: "address",
          title: "涨跌 %",
          width: 25,
          titleAlign: "center",
          columnAlign: "left",
          isResize: true
        }
      ]
    };
  },
  components: { kenTable },
  methods: {}
};
</script>

<style scoped lang="less">
.quick_order {
  margin-top: 52px;
}
</style>
