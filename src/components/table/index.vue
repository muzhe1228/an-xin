<template>
  <div class="table" :style="{height:tableHeight}">
    <div
      class="title_l"
      :class="isActive?'active':''"
      :style="{width:(columns[0].width*tableWidth/100) +'%'}"
    >{{columns[0].title}}</div>
    <div
      class="l_Shade"
      :class="isActive?'active':''"
      :style="{width:(columns[0].width*tableWidth/100)+'%'}"
    >
      <div class="body_l" ref="tableLeft">
        <p v-for="(item,index) in tableData" :key="index">
          <van-checkbox
            v-if="columns[0].field == 'check'"
            v-model="item[columns[0].field]"
            @change="change(item)"
            shape
          ></van-checkbox>
          <span v-else>{{item[columns[0].field]}}</span>
        </p>
      </div>
    </div>

    <div class="title" :style="{width:tableWidth+'%'}">
      <ul class="title_head" ref="tableHead">
        <li
          v-for="(item,index) in columns"
          :key="index"
          :style="{width:item.width+'%'}"
        >{{item.title}}</li>
      </ul>
    </div>
    <div class="body" @scroll="changeScroll($event.target)">
      <div class="body_cont" :style="{width:tableWidth+'%'}">
        <slot name="list"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    columns: {
      type: Array,
      required: true
    },
    tableData: {
      type: Array,
      default: []
    },
    selection: {
      type: Boolean,
      default: false
    },
    tableWidth: {
      type: [String, Number],
      default: 100
    },
    tableHeight: {
      type: String,
      default: "500px"
    }
  },
  data() {
    return {
      pageIndex: 1,
      pageSize: 20,
      cont: 0,
      isActive: false,
      list: new Array(5)
    };
  },
  mounted() {
    let _this = this;
    this.$nextTick(() => {});
  },
  components: {},
  methods: {
    change(val) {
      console.log(val);
    },
    calcNum(num) {
      num = num * (tableData / 100) + "%";
      return {
        width: num
      };
    },
    pageChange(pageIndex) {
      console.log(pageIndex);
    },
    pageSizeChange(pageSize) {
      console.log(pageSize);
    },
    changeScroll(el) {
      let top = el.scrollTop,
        left = el.scrollLeft;
      this.$refs.tableHead.style.transform = "translateX(" + -left + "px)";
      this.$refs.tableLeft.style.transform = "translateY(" + -top + "px)";

      if (left == 0) {
        this.isActive = false;
      } else {
        this.isActive = true;
      }
    }
  }
};
</script>

<style scoped lang="less">
@import "~assets/less/comm.less";
.table {
  width: 100%;
  position: relative;
  overflow: hidden;
  color: @write;
  padding-bottom: 50px;
  .title {
    overflow: hidden;
    background-color: @mainSbg;
    &_head {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      li {
        width: 10%;
        text-align: center;
        height: 50px;
        line-height: 50px;
        border-left: 1px solid @mainSbg;
        border-bottom: 1px solid @mainSbg;
      }
    }
  }
  .l_Shade {
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    padding-top: 50px;
    overflow: hidden;
    &.active {
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
    }
  }
  .body {
    width: 100%;
    height: 100%;
    overflow: scroll;
    background-color: @mainBg;
    // padding-bottom: 50px;
    &_cont {
      overflow: hidden;
    }
  }
  .header,
  .bodyItem {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 10%;
      text-align: center;
      height: 50px;
      line-height: 50px;
      border-left: 1px solid @mainSbg;
      border-bottom: 1px solid @mainSbg;
    }
  }

  .body_l {
    width: 100%;
    p {
      width: 100%;
      text-align: center;
      height: 50px;
      line-height: 50px;
      background-color: @mainBg;
      border-bottom: 1px solid @mainSbg;
    }
  }
  .title_l {
    position: absolute;
    left: 0;
    top: 0;
    width: 20%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    z-index: 2;
    background-color: @mainSbg;
    &.active {
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
    }
  }
}
</style>
