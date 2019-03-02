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
      <div class="info">
        <ul class="info_single" v-for="(item,index) in List" :key="index">
          <li>
            <p>名称大萨达</p>
            <p>20190302</p>
          </li>
          <li :class="isRed(index)">13.14</li>
          <li :class="isRed(index)">{{item}}5.20%</li>
          <li class="text_blue">正常</li>
          <li>0%</li>
          <li>加入自选</li>
        </ul>
      </div>
      <div class="pageWrap">
        <p class="pageWrapAll">{{currentPage}}/13</p>
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
export default {
  data() {
    return {
      currentPage: 1,
      search: "",
      List: new Array(20)
    };
  },
  components: {},
  methods: {
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
