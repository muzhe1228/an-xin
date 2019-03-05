<template>
  <div class="table">
    <div class="title">
      <ul class="header" ref="tableHead">
        <li>编号</li>
        <li>姓名</li>
        <li>年龄</li>
        <li>身高</li>
        <li>性别</li>
      </ul>
    </div>
    <div class="tatle_l">编号</div>
    <div class="body_l" ref="tableLeft">
      <ul class="tab_l" :class="isActive?'active':''">
        <li>编号1</li>
        <li>编号2</li>
        <li>编号3</li>
        <li>编号4</li>
        <li>编号5</li>
        <li>编号6</li>
        <li>编号7</li>
        <li>编号8</li>
        <li>编号9</li>
        <li>编号10</li>
        <li>编号11</li>
        <li>编号12</li>
        <li>编号13</li>
      </ul>
    </div>
    <div class="body" @scroll="changeScroll($event.target)">
      <div class="body_cont">
        <ul class="bodyItem">
          <li>编号1</li>
          <li>姓名</li>
          <li>年龄</li>
          <li>身高</li>
          <li>性别</li>
        </ul>
        <ul class="bodyItem">
          <li>编号2</li>
          <li>姓名</li>
          <li>年龄</li>
          <li>身高</li>
          <li>性别</li>
        </ul>
        <ul class="bodyItem">
          <li>编号3</li>
          <li>姓名</li>
          <li>年龄</li>
          <li>身高</li>
          <li>性别</li>
        </ul>
        <ul class="bodyItem">
          <li>编号4</li>
          <li>姓名</li>
          <li>年龄</li>
          <li>身高</li>
          <li>性别</li>
        </ul>
        <ul class="bodyItem">
          <li>编号5</li>
          <li>姓名</li>
          <li>年龄</li>
          <li>身高</li>
          <li>性别</li>
        </ul>
        <ul class="bodyItem">
          <li>编号6</li>
          <li>姓名</li>
          <li>年龄</li>
          <li>身高</li>
          <li>性别</li>
        </ul>
        <ul class="bodyItem">
          <li>编号7</li>
          <li>姓名</li>
          <li>年龄</li>
          <li>身高</li>
          <li>性别</li>
        </ul>
        <ul class="bodyItem">
          <li>编号8</li>
          <li>姓名</li>
          <li>年龄</li>
          <li>身高</li>
          <li>性别</li>
        </ul>
        <ul class="bodyItem">
          <li>编号9</li>
          <li>姓名</li>
          <li>年龄</li>
          <li>身高</li>
          <li>性别</li>
        </ul>
        <ul class="bodyItem">
          <li>编号10</li>
          <li>姓名</li>
          <li>年龄</li>
          <li>身高</li>
          <li>性别</li>
        </ul>
        <ul class="bodyItem">
          <li>编号11</li>
          <li>姓名</li>
          <li>年龄</li>
          <li>身高</li>
          <li>性别</li>
        </ul>
        <ul class="bodyItem">
          <li>编号12</li>
          <li>姓名</li>
          <li>年龄</li>
          <li>身高</li>
          <li>性别</li>
        </ul>
        <ul class="bodyItem">
          <li>编号13</li>
          <li>姓名</li>
          <li>年龄</li>
          <li>身高</li>
          <li>性别</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cont: 0,
      isActive: false
    };
  },
  mounted() {
    let _this = this;
    this.$nextTick(() => {});
  },
  components: {},
  methods: {
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
.table {
  width: 100%;
  max-height: 2000px;
  border: 1px solid red;
  margin: 100px auto 0 auto;
  position: relative;
  overflow: hidden;
  .header,
  .bodyItem {
    width: 800px;
    display: flex;
    li {
      width: 20%;
      text-align: center;
      height: 50px;
      line-height: 50px;
      background-color: #debd63;
    }
  }
  .bodyItem {
    li {
      background-color: blueviolet;
    }
  }
  .body,
  .title {
    width: 300px;
    overflow: hidden;
  }
  .body {
    overflow: scroll;
    &_cont {
      width: 800px;
    }
  }

  .tab_l {
    position: absolute;
    left: 0;
    top: 0;
    // padding-top: 50px;
    &.active {
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
    }
    li {
      width: 160px;
      text-align: center;
      height: 50px;
      line-height: 50px;
      background-color: blueviolet;
    }
  }
  .tatle_l {
    position: absolute;
    left: 0;
    top: 0;
    width: 160px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: #debd63;
    z-index: 1;
  }
}
</style>
