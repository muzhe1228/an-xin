



<template>
  <div class="position">
    <v-table
      :columns="columns"
      :table-data="tableData"
      is-horizontal-resize
      style="width:100%"
      :min-height="tableHeig"
      row-hover-color="#eee"
      row-click-color="#edf7ff"
      :show-vertical-border="false"
      :show-horizontal-border="false"
      even-bg-color="#0d223a"
      table-bg-color="#123053"
      title-bg-color="#0d223a"
      :select-change="selectChange"
      :select-group-change="selectGroupChange"
      @on-custom-comp="customCompFunc"
    ></v-table>
  </div>
</template>


<script>
import { mapState } from "vuex";

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
          width: 60,
          titleAlign: "center",
          columnAlign: "center",
          type: "selection",
          isFrozen: true,
          isResize: true
        },
        {
          field: "name",
          title: "股票名称",
          width: 120,
          titleAlign: "center",
          columnAlign: "center",
          isResize: true
        },
        {
          field: "tel",
          title: "最新价",
          width: 80,
          titleAlign: "center",
          columnAlign: "center",
          isResize: true
        },
        {
          field: "hobby",
          title: "涨跌",
          width: 80,
          titleAlign: "center",
          columnAlign: "center",
          isResize: true
        },
        {
          field: "address",
          title: "涨跌 %",
          width: 80,
          titleAlign: "center",
          columnAlign: "left",
          isResize: true
        },
        
      ],
      tableHeig: 0
    };
  },
  computed: {
    ...mapState(["fontSize"])
  },
  created() {
    this.calcTableH();
  },
  methods: {
    calcTableH() {
      this.tableHeig = this.$heigCalc(this.fontSize, 100);
    },
    customCompFunc(params) {
      if (params.type === "delete") {
        // do delete operation
        this.$delete(this.tableData, params.index);
      } else if (params.type === "edit") {
        // do edit operation

        alert(`行号：${params.index} 姓名：${params.rowData["name"]}`);
      }
    }
  }
};
</script>
<style lang='less'>
.position {
  padding-top: 52px;
  padding-bottom: 50px;
}
</style>
