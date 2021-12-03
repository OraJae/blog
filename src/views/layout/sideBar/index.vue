<template>
  <div class="nav-side-bar">
    <ul class="side-menu" ref="menus">
      <item
        v-for="(item, i) in navMenus"
        :key="i"
        :item="item"
        :is-fold="isFold"
        :class="{ active: curIndex === i }"
        :is-current="curIndex === i"
        :router-names="routerNames"
        @on-select="handleSelect(i)"
      >
      </item>
    </ul>
  </div>
</template>

<script>
  import item from './item'
  import { navMenus } from './config'
  export default {
    name: 'layout.sideBar',
    components: {
      item,
    },
    props: {
      isFold: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        navMenus,
        curIndex: 0,
        routerNames: [],
      }
    },
    created() {
      // this.$bus.$on('routerName', name => {
      //   if (name) {
      //     this.routerNames = name.split('-')
      //   }
      // })
    },
    methods: {
      handleSelect(i) {
        this.curIndex = i
      },
    },
  }
</script>

<style lang="scss" scope>
  @import '@styles/variable/index.scss';
  @import '@styles/animation/index.scss';
  .nav-side-bar {
    width: 180px;
    height: 100%;
    padding-top: 10px;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
    transition: width 0.3s;
    will-change: width;
    background: #fff;
    &.fold {
      width: 66px;
      overflow: inherit;

      .menu-title {
        display: none;
      }
      .subMenu {
        position: absolute;
        left: 100%;
        top: 0;
        background: #252f3b;
        overflow: hidden;
        z-index: 100;
        box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
        width: 180px !important;
        li {
          padding-left: 44px !important;
          &:after {
            left: 32px !important;
          }
        }
        li.active {
          &:before {
            display: none !important;
          }
        }
      }
      .right {
        display: none;
      }
      .side-menu > li {
        &:hover {
          &:before {
            content: '';
            display: block;
            position: absolute;
            width: 3px;
            height: 20px;
            left: 0;
            top: 18px;
            background-color: $color-primary;
          }

          .m-icon {
            color: $color-primary;
          }
        }
      }
    }

    .side-menu {
      > li {
        line-height: 56px;
        font-size: 14px;
        cursor: pointer;
        white-space: nowrap;
        position: relative;
        z-index: 800;
        /* background: #252f3b; */
        &.active {
          .subMenu {
            display: block;
          }
          span,
          .m-icon {
            color: $color-primary;
          }
        }

        .side-bar-div {
          z-index: 10;
          /* background: #252f3b; */
        }

        .menu-title {
          color: $color-default;
        }
        &.isOpen {
          .right {
            @extend .rotateHalf;
          }
        }
      }
      .m-icon {
        margin-right: 5px;
        margin-left: 26px;
        color: #768b9e;
        position: relative;
        top: 2px;
        font-size: 18px;

        &.right {
          float: right;
          position: relative;
          right: 16px;
          font-size: 12px;
          transition: right 0.2s linear;
          @extend .rotateHalfBack;
        }
      }

      .subMenu {
        z-index: -1;
        overflow: hidden;
        display: none;
        transition: all 0.1s linear;

        li {
          height: 48px;
          line-height: 48px;
          padding-left: 64px;
          position: relative;
          color: $color-default;

          &:after {
            content: '';
            display: block;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            position: absolute;
            background-color: $color-default;
            left: 52px;
            top: 50%;
            margin-top: -2px;
          }

          &.active {
            color: $color-primary;
            &:after {
              background-color: $color-primary;
            }
            &:before {
              content: '';
              display: block;
              position: absolute;
              width: 3px;
              height: 20px;
              left: 0;
              top: 14px;
              background-color: $color-primary;
            }

            .el-button--text {
              span {
                color: $color-primary;
              }
            }
          }
          .el-button--text {
            span {
              color: $color-default;
            }
          }
        }
      }
    }
  }
</style>
