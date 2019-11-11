<template>
  <div>
    视频播放
    <div class="alarm_content_video"  v-on:click.stop="defaultStop" v-on:dblclick.stop="defaultStop">
      <sit-player ref="sitPlayerNode" :BakServerIP="videoControlIp" :MainServerIP="MainServerIP" :isLogin="false"></sit-player>
    </div>

  </div>
</template>

<script>
// import ipConfig from '@/config/index'

export default {
name: "video-exe",
  data () {
    return {
      videoControlIp: '172.20.32.141', //视频调度服务地址
      MainServerIP: "172.20.32.141", //视频rest服务

    }
  },

  created() {
    // const {videoBtnArr} = ipConfig;
    // console.log(videoBtnArr,"videoBtnArr")

  },
  mounted() {
    //视频菜单栏配置项
    let CustomizeConfig = {
      ToolBar: {
        SplitScreen: '8,9,16', 
      }, // 设置false,则工具栏不显示
      TopInfoBar: false,
      BottomInfoBar: false,
      RightContextMenu: false,
      ExpandAttribute: {
        SecondBroadcastImage: 0 //秒播服务图片地址
      }
    }
    //取消视频菜单栏，监听全屏事件
    this.$nextTick(function(ev) {
      setTimeout(() => {
        if (!this.$refs.sitPlayerNode) {
          return
        }
        this.$refs.sitPlayerNode.MS_CustomizeConfig(JSON.stringify(CustomizeConfig))
        //document.querySelectorAll('.wsVideo-player')[0].style.pointEvent = 'auto'
        this.$refs.sitPlayerNode.MS_SetCameraToCurrentWindowAsyn('71000000001320000016', 0)
      }, 500)
    })
  },
  computed: {
  },

  methods: {
   defaultStop() {
      return false
    },
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    .alarm_content_video {
      width: 225px;
      height: 126px;
      margin-bottom: 10px;
      border: 1px solid #48acff;
      /deep/ .error-word {
        font-size: 1em;
      }

      /deep/ .fullScreenVideo {
        position: absolute;
        width: 100%;
        height: 100%;
      }
    }
</style>
