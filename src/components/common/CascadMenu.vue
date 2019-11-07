<template>
  <div class="cascad-menu" ref="cascadMenu">
    <scroll
      class="left-menu"
      :data="menus"
      ref="leftMenu">
      <div class="left-menu-container">
        <ul>
          <li
            class="left-item"
            ref="leftItem"
            :class="{'current': currentIndex === index}"
            @click="selectLeft(index, $event)"
            v-for="(menu, index) in menus"
            :key="index">
            <p class="text">{{menu.name}}</p>
          </li>
        </ul>
      </div>
    </scroll>
    <scroll
      class="right-menu"
      :data="menus" 
      ref="rightMenu"
      @scroll="scrollHeight"
      :listenScroll="true"
      :probeType="3">
      <div class="right-menu-container">
        <ul>
          <li class="right-item" ref="rightItem" v-for="(menu, i) in menus" :key="i">
            <div class="title">{{menu.name}}</div>
            <ul>
              <li v-for="(item, j) in menu.data" :key="j" @click="selectRight(index, $event)">
                <div class="data-wrapper">
                  <div class="data">{{item.name}}</div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </scroll>
    <scroll
      class="right-menu-two"
      :data="menus" 
      ref="rightMenuTwo"
      @scroll="scrollHeight"
      :listenScroll="true"
      :probeType="3">
      <div class="right-menu-container">
        <ul>
          <li class="right-item" ref="rightItemTwo" v-for="(menu, i) in menusTwo" :key="i">
            <div class="title">{{menu.name}}</div>
            <ul>
              <li v-for="(item, j) in menu.data" :key="j">
                <div class="data-wrapper">
                  <div class="data">{{item.name}}</div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </scroll>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import Scroll from './scroll'
export default {
  data() {
    return {
      rightTops: [],
      scrollY: 0,
      leftScrollY: 0
    }
  },
  props: {
    menus: {
      required: true,
      type: Array,
      default () {
        return []
      }
    }
  },
  computed: {
    currentIndex () {
      const { scrollY, rightTops } = this
      let index = rightTops.findIndex((height, index) => {
        return scrollY >= rightTops[index] && scrollY < rightTops[index + 1]
      })
      if (scrollY > rightTops[index] + 50) {
        index++;
      }
      return index
    }
  },
  created() {
    this.$nextTick(() => {
      this._calculateHeight();
      // this._initScroll()
    })
  },
  
  methods: {
    selectLeft (index, event) {
      console.log(index);
      if (!event._constructed) {
        return
      }
      let rightItem = this.$refs.rightItem
      let el = rightItem[index]
      this.$refs.rightMenu.scrollToElement(el, 300)
    },
    selectRight (index, event) {
      console.log(index);
      if (!event._constructed) {
        return
      }
      let rightItemTwo = this.$refs.rightItemTwo
      let el = rightItemTwo[index]
      this.$refs.rightMenuTwo.scrollToElement(el, 300)
    },
    scrollHeight (pos) {
      console.log(pos);
      this.scrollY = Math.abs(Math.round(pos.y))
    },
    _calculateHeight() {
      let lis = this.$refs.rightItem;
      console.log(lis)
      let height = 0
      this.rightTops.push(height)
      Array.prototype.slice.call(lis).forEach(li => {
        height += li.clientHeight
        this.rightTops.push(height)
      })
      console.log(this.rightTops)
    }
  },
  components: {
    Scroll
  }
}
</script>

<style>
.cascad-menu {
  position: absolute;
  top: 500px;
  bottom: 100px;
  display: flex;
  overflow: hidden;
  width: 100%;
  border: 1px solid red;
}
.cascad-menu .left-menu {
  flex: 0 0 80px;
  width: 80px;
  background: #f3f5f7;
}
.cascad-menu .left-menu .left-item {
  width: 100%;
  height: 54px;
  /* margin-left: -20px; */
}
.cascad-menu .left-menu .left-item .current {
  width: 200%;
  margin-left: -40px;
  background: #fff;
}
.text {
  width: 100%;
  line-height: 54px;
}
.cascad-menu .right-menu {
  flex: 1;
}
/* .cascad-menu .right-menu .right-item {
  height: 100%;
  margin-left: -40px;
  border: 1px solid #ccc;
} */
.cascad-menu .right-menu .right-item .title {
  height: 20px;
  border-bottom: 1px solid #ccc;
}
.cascad-menu .right-menu .right-item .data-wrapper .data {
  height: 40px;
  margin-left: -40px;
  line-height: 40px;
}
.right-menu-two {
  flex: 1;
}
</style>

<!-- 
<style >
.cascad-menu {
  position: absolute;
  top: 500px;
  bottom: 100px;
  display: flex;
  overflow: hidden;
  width: 100%;
  border: 1px solid red;
}
.cascad-menu .left-menu {
  flex: 0 0 80px;
  width: 80px;
  background: #f3f5f7;
}
.cascad-menu .left-menu .left-item {
  width: 100%;
  height: 54px;
  margin-left: -20px;
}
.cascad-menu .left-menu .left-item .current {
  width: 200%;
  margin-left: -40px;
  background: #fff;
}
.text {
  width: 100%;
  line-height: 54px;
}
.cascad-menu .right-menu {
  flex: 1;
}
.cascad-menu .right-menu .right-item {
  height: 100%;
  margin-left: -40px;
  border: 1px solid #ccc;
}
.cascad-menu .right-menu .right-item .title {
  height: 20px;
  border-bottom: 1px solid #ccc;
}
.cascad-menu .right-menu .right-item .data-wrapper .data {
  height: 40px;
  margin-left: -40px;
  line-height: 40px;
}
.right-menu-two {
  flex: 1;
}
</style> -->
