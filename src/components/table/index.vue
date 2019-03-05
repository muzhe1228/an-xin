<template>
  <div class="table">
    <div class="title">
      <ul class="header">
        <li>编号</li>
        <li>姓名</li>
        <li>年龄</li>
        <li>身高</li>
        <li>性别</li>
      </ul>
    </div>
    <div class="tatle_l">编号</div>
    <div class="body_l">
      <ul class="tab_l">
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
    <div class="body">
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
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {}
};
</script>

<style scoped lang="less">
.table {
  width: 300px;
  height: 500px;
  border: 1px solid red;
  margin: auto;
  position: relative;
  overflow: hidden;
  .header,
  .bodyItem {
    display: flex;
    width: 600px;
    li {
      width: 200px;
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
    height: 450px;
    overflow: scroll;
  }

  .tab_l {
    position: absolute;
    left: 0;
    top: 0;
    padding-top: 50px;
    &.active {
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
    }
    li {
      width: 120px;
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
    width: 120px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: #debd63;
    z-index: 1;
  }
}
</style>
