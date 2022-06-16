<template>
  <li :class="{ isOpen: isOpen }">
    <div @click="handleMenuClick(item)" class="side-bar-div">
      <icon :type="item.icon" class="m-icon"></icon>
      <el-tooltip
        v-if="!item.path && !item.children.length"
        content="即将推出,敬请期待!"
        placement="right"
      >
        <span class="menu-title">{{ item.text }}</span>
      </el-tooltip>
      <span class="menu-title" v-else>{{ item.text }}</span>
      <!-- <em class="red-dot" v-if="showParentDot"></em> -->
      <!-- <img :src="img" class="new-img" alt v-if="showParentDot"/> -->
      <!-- <em class="on-sale" v-if="item.text ==='购买续费'">年付6折</em> -->
      <icon type="down" class="m-icon right" v-if="item.children.length"></icon>
    </div>
    <el-collapse-transition>
      <ul class="subMenu" ref="subMenu" v-show="isCurrent && isOpen">
        <li
          v-for="(child, j) in item.children"
          :key="j"
          :class="{ active: child.name === routerNames.join('-') }"
          @click="subMenuClick(child)"
        >
          <el-tooltip
            v-if="!child.path"
            content="即将推出,敬请期待!"
            placement="right"
          >
            <el-button type="text">{{ child.text }}</el-button>
          </el-tooltip>
          <template v-else>{{ child.text }}</template>
          <!-- <em class="red-dot" v-if="newMenuList.indexOf(child.newId) > -1"></em> -->
          <!-- <img :src="img" class="new-img-sub" alt v-if="newMenuList.indexOf(child.newId) > -1"/> -->
        </li>
      </ul>
    </el-collapse-transition>
  </li>
</template>

<script>
  // import img from '@/theme/images/new.gif'
  // import elCollapseTransition from 'element-ui/lib/transitions/collapse-transition'
  export default {
    name: 'layout.sideBar.item',
    components: {
      // elCollapseTransition
    },
    props: {
      item: {
        type: Object,
        required: true,
      },
      isFold: {
        type: Boolean,
        required: true,
      },
      isCurrent: {
        type: Boolean,
      },
      routerNames: {
        type: Array,
        default: () => [],
      },
    },
    data() {
      return {
        isOpen: false,
        subMenuHeight: 48,
        // img: img
      }
    },
    computed: {},
    watch: {
      isCurrent(n, o) {
        if (n && n !== o) {
          this.isOpen = true
        } else {
          this.isOpen = false
        }
      },
    },
    created() {
      this.isOpen = this.isCurrent
    },
    methods: {
      subMenuClick(child) {
        if (!child.path) {
          this.$message.success('即将推出，敬请期待')
          return
        }
        this.$emit('on-select')
        child.path && this.$router.push(child.path)
      },
      handleMenuClick(item) {
        if (!item.path && !item.children.length) {
          this.$message.success('即将推出，敬请期待')
          return
        }
        this.$emit('on-select')
        this.isOpen = !this.isOpen
        if (item.path) this.$router.push(item.path)
      },
    },
  }
</script>
<style lang="postcss" scoped>
  .new-img {
    top: 7px;
  }
  .new-img-sub {
    top: 2px;
  }
  .new-img,
  .new-img-sub {
    position: absolute;
    margin-left: -4px;
  }
  .red-dot {
    display: inline-block;
    width: 6px;
    height: 6px;
    background-color: #ff634f;
    border-radius: 50%;
    margin-left: 8px;
    position: relative;
    top: -2px;
  }
  .on-sale {
    color: #fff;
    font-size: 12px;
    margin-left: 6px;
    background-color: #f21834;
    border-radius: 10px;
    padding: 2px 7px 3px;
  }
</style>
