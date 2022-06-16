<template>
  <div class="header">
    <div class="h-left fl">
      <h1 class="logo" @click="toHome">知瓜数据</h1>
      <icon
        :type="isOpen ? 'menuOff' : 'menuOn'"
        class="h-menuOff"
        @click.native="handleClick"
      ></icon>
    </div>
  </div>
</template>

<script>
// import { contain } from '@xgj/utils/src/helpers/dom'
export default {
  name: 'layout.header',
  mixins: [],
  components: {
  },
  data () {
    return {
      isOpen: true,
      isOpenMenu: false,
      centerDialogVisible: false,
      announcement: {},
      index: 0,
      curAnnouncement: {},
      curIndex: null
    }
  },
  created () {
  },
  computed: {


  },
  mounted () {
    // document.addEventListener('click', e => {
    //   if (this.$refs.topRight && !contain(this.$refs.topRight, e.target)) {
    //     this.isOpenMenu = false
    //   }
    // })
  },
  methods: {

    toHome () {
      location.href = 'https://www.zhigua.cn'
    },
    navigateTo (url) {
      this.$router.push(url)
      this.isOpenMenu = false
    },
    handleClick (e) {
      this.isOpen = !this.isOpen
      this.$emit('onSwitchSide', e)
    },
    dropDownHandler () {
      this.isOpenMenu = !this.isOpenMenu
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes anim1 {
  0% {
    top: 0;
  }
  20% {
    top: -35px;
  }
  95% {
    top: -35px;
  }
  100% {
    top: -80px;
  }
}
.header {
  height: 56px;
  background-color: #fff;
  position: relative;
  z-index: 1000;
  box-shadow: 0 2px 20px 0 rgba(135, 146, 171, 0.14);
  > div {
    height: 100%;
  }
  .logo {
    display: inline-block;
    margin-right: 20px;
    height: 100%;
    line-height: 56px;
    /* background: url("../../theme/images/icon-xgzs.png") no-repeat 24px center; */
    background-size: 32px 24px;
    padding-left: 66px;
    font-size: 20px;
    color: $color-text-primary;
    cursor: pointer;
  }
  .h-menuOff {
    color: #768b9e;
    cursor: pointer;
  }
  .h-left {
    display: flex;
    align-items: center;
  }
  >>> .search {
    width: 240px;
    margin-left: 65px;
    .el-input__inner {
      height: 32px;
    }
    .el-icon-search {
      height: 32px;
      line-height: 34px;
    }
    .el-input__icon {
      line-height: 32px;
    }
  }
  >>> .dialog-search {
    margin-left: 120px;
    .el-dialog__header {
      padding: 0;
    }
    .el-dialog__body {
      padding: 32px 40px 40px;
    }
  }

  .weibo-notice {
    margin-right: 8px;
    >>> .c-notice {
      &:hover {
        color: #9fafc1;
      }
    }
  }
  .zhiyuanhui {
    color: #ff0000;
    margin-right: 16px;
    cursor: pointer;
    i {
      margin-right: 3px;
    }
  }
  >>> .c-top-notice {
    i {
      vertical-align: middle;
    }
    .notice-text {
      cursor: pointer;
      margin-left: 8px;
    }
  }
  >>> .el-badge__content.is-fixed {
    right: auto;
    left: -10px;
    top: 2px;
  }
  .notice {
    width: 800px;
    height: 35px;
    position: absolute;
    right: 400px;
    line-height: 35px;
    display: inline-block;
    margin: 12px auto 0;
    color: #3a8aff;
    overflow: hidden;
    text-align: center;
    .notice-container {
      position: absolute;
      right: 120px;
      animation: anim1 5s linear infinite;
      p {
        margin-top: 30px;
        span {
          vertical-align: middle;
        }
        .title {
          display: inline-block;
          /* max-width: 400px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis; */
          vertical-align: middle;
          cursor: pointer;
        }
        .time {
          display: inline-block;
          margin-left: 10px;
        }
      }
    }
  }
  .treasure-box {
    margin-left: 16px;
  }
  .h-right {
    float: right;
    margin-right: 80px;
    display: flex;
    align-items: center;
  }
  .center {
    width: 200px;
  }
  .version {
    width: 60px;
    height: 24px;
    cursor: pointer;
    background: linear-gradient(
      90deg,
      rgba(180, 202, 220, 1) 0%,
      rgba(156, 183, 205, 1) 100%
    );
    line-height: 23px;
    text-align: center;
    font-size: 12px;
    color: #fff;
    border-radius: 14px;
    display: inline-block;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-100%, -50%);
    &.standard {
      background: linear-gradient(
        90deg,
        rgba(17, 191, 248, 1) 0%,
        rgba(14, 133, 255, 1) 100%
      );
    }
    &.advanced {
      background: linear-gradient(
        90deg,
        rgba(243, 113, 52, 1) 0%,
        rgba(255, 20, 59, 1) 100%
      );
    }
    &.luxury {
      background: linear-gradient(
        90deg,
        rgb(255, 174, 72, 1) 0%,
        rgb(255, 123, 18, 1) 100%
      );
    }
    &.professional {
      background: linear-gradient(
        90deg,
        rgba(225, 203, 162, 1) 0%,
        rgba(193, 168, 142, 1) 100%
      );
    }
  }
  .dropDownHandler {
    margin-left: 15px;
    position: relative;
    z-index: 10;
    background: #fff;
    height: 100%;
  }
  .header-user {
    cursor: pointer;
    display: inline-flex !important;
    margin-top: 15px;
    >>> .user-info {
      width: auto !important;
      max-width: 100px !important;
      min-width: 30px !important;
      .name {
        color: $color-text-primary;
        font-size: 14px;
        font-weight: normal;
        span {
          max-width: none !important;
          width: 100%;
        }
      }
    }
  }
  .account-down {
    color: #768b9e;
    font-size: 12px;
    display: inline-block;
    transform: translate(0, -50%) scale(0.8);
    cursor: pointer;
    margin-left: 5px;
  }
  .dropMenu {
    width: 180px;
    background-color: #fff;
    position: absolute;
    overflow: hidden;
    top: 100%;
    left: 15px;
    z-index: 5;
    transition: min-height 0.2s ease;
    &.open {
      box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.2);
      li {
        max-height: 48px;
      }
    }

    li {
      max-height: 0;
      background-color: #fff;
      line-height: 48px;
      color: $color-default;
      text-indent: 20px;
      cursor: pointer;
      transition: max-height 0.2s ease;

      >>> i {
        margin-right: 7px;
      }

      &:hover {
        background-color: $color-bg-default;
      }
    }
    .text-primary {
      margin-right: 0;
    }
  }
}
>>> .announcement-dialog {
  width: 600px;
  .el-dialog__header {
    padding: 0;
  }
  .el-dialog__body {
    padding: 0 25px 30px;
  }
  .announcement-hd {
    padding: 16px 0 24px;
    border-bottom: 1px solid #eee;
  }
  .announcement-bd {
    padding: 24px 0;
    border-bottom: 1px solid #eee;
  }
  .createdTime {
    float: right;
    overflow: hidden;
    margin-bottom: 6px;
    margin-right: 10px;
    color: #6a8094;
  }
  .content {
    margin-top: 12px;
    color: #384047;
  }
  .notice-btn {
    margin-top: 12px;
    color: #3a8aff;
    span {
      cursor: pointer;
    }
  }
}
</style>
<style lang='postcss'>
.notice-popper {
  .notice-layout .hd {
    text-align: left;
    border-bottom: none;
  }
}
</style>
