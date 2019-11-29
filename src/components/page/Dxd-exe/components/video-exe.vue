<template>
  <div>
    视频播放
    <div class="alarm_content_video"  v-on:click.stop="defaultStop" v-on:dblclick.stop="defaultStop">
      <sit-player ref="sitPlayerNode" :BakServerIP="videoControlIp" :MainServerIP="MainServerIP" :isLogin="false"></sit-player>
    </div>

    <!-- <h1 style="font-size: 16px; text-align: center;">{{ $t("message.hello") }}</h1> -->

    <div style="margin: 20px;">
      <h1>{{$t("message.title")}}</h1>
      <input style="width: 300px;" class="form-control" :placeholder="$t('placeholder.enter')">
      <ul>
        <li v-for="(brand, index) in brands" :key="index">{{brand}}</li>
      </ul>
    </div>
    <button type="button" class="btn btn-success" @click="changeLocale">中文/EN</button>   
    <el-button type="button" class="btn btn-success" @click="toggleLang('zh')">中文</el-button>   
    <el-button type="button" class="btn btn-success" @click="toggleLang('en')">English</el-button>   

    <!-- <div class="lang"> -->
        <el-dropdown>
          <i class="iconfont icon-language4"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="toggleLang('zh')" :disabled="$i18n.locale == 'zh'">中文</el-dropdown-item>
            <el-dropdown-item @click.native="toggleLang('en')" :disabled="$i18n.locale == 'en'">English</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      <!-- </div> -->

    <div class="block">
        <span class="demonstration">默认</span>
        <el-date-picker
        v-model="value1"
        type="date"
        placeholder="选择日期">
        </el-date-picker>
    </div>


  </div>
</template>

<script>
// import ipConfig from '@/config/index'

export default {
name: "video-exe",
  data () {
    return {
      value1: '',
      videoControlIp: '172.20.32.141', //视频调度服务地址
      MainServerIP: "172.20.32.141", //视频rest服务
      brands: [this.$t('brands.nike'), this.$t('brands.adi'), this.$t('brands.nb'), this.$t('brands.ln')]
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
      TopInfoBar: true,
      BottomInfoBar: {
        PTZControl: 1
      },
      RightContextMenu: {
        Close: 1,
        ScreenChange: 1, // 屏幕切换 同上
        AllClose: 1,  // 关闭所有窗体 同上
        Maximize: 1, // 最大化 同上
        FullScreen: 1, //全屏 同上
        PausedHistory: 1, // 暂停历史回放 同上
        CloseHistory: 1, // 关闭历史视频 同上
        SingleFrameCapture: 1, // 单帧抓拍
        ConsecutiveCaptureImage: 1, // 连续抓拍 同上
        StartScreenRecording: 1, // 启动本地录屏 同上
        LocalConfig: 1, // 本地配置 同上
        HidePTZ: 1, // 隐藏云台可控制面板 同上
        ExitFullScreen: 1,  // 退出全屏  同上

      },
      ExpandAttribute: {
        SecondBroadcastImage: 0 //秒播服务图片地址
      }
    }
    // let CustomizeConfig= {
    //       ToolBar: {
    //         // SplitScreen: '1,16',  //等分屏按钮(SplitScreen) 默认值为空,需要去掉几分屏,则传入对应数字,例如不显示六分屏,则传入6
    //         // CloseAll: 1, //关闭全部按钮(CloseAll)默认值为1,不显示按钮设置为0
    //         // TakeAllShots: 1, //全部抓拍(TakeAllShots) 数据格式同上
    //         // AllConsecutiveCaptures: 1,  //全部连续抓拍(AllConsecutiveCaptures) ..
    //         // MousePTZ: 1, // 鼠标PTZ(MousePTZ)  ..
    //         // AllScreenRecording: 1, //全部录屏(AllScreenRecording)  ..
    //         // FocusScreenMax: 1  //焦点窗口最大化(FocusScreenMax) ..
    //       },
    //       // ToolBar: false,  // 设置false,则工具栏不显示
    //       TopInfoBar: {
    //         // Maximize: 1, //最大化(Maximize) 默认值为1,不显示按钮设置为0
    //         // Close: 1,  //关闭(Close) 同上
    //         // Minimize: 1,//最小化(Close) 同上
    //         // FullScreen: 1,//全屏(Close) 同上
    //       },
    //       // TopInfoBar: false,  // 设置false,则视频顶部信息栏不显示
    //       BottomInfoBar: {
    //         // DigitalZoom: 1, //数字放大(DigitalZoom) 默认值为1,不显示按钮设置为0
    //         // CaptureImage: 1, //图片抓拍(CaptureImage) 默认值为1,不显示按钮设置为0
    //         // ConsecutiveCaptureImage: 1,//连续抓拍(ConsecutiveCaptureImage) 默认值为1,不显示按钮设置为0
    //         PTZControl: 1,//鼠标PTZ(PTZControl) 默认值为1,不显示按钮设置为0
    //         // FullScreen: 1,//全屏(FullScreen) 默认值为1,不显示按钮设置为0
    //         // ScreenRecording: 1,//录屏(ScreenRecording) 默认值为1,不显示按钮设置为0
    //         // ConversionType: 1,//历史转实时/实时转历史(DigitalZoom) 默认值为1,不显示按钮设置为0
    //         // Resolution: 1,//分辨率(DigitalZoom) 默认值为1,不显示按钮设置为0
    //         // TVWall: 1,//电视上墙(DigitalZoom) 默认值为1,不显示按钮设置为0
    //         // HistoryInfo: 0  //历史回放控制台
    //       },
    //       // BottomInfoBar: false, // 设置false,则视频底部操作栏不显示
    //       RightContextMenu: {
    //         Close: 1, // 关闭按钮 默认值为1,不显示按钮设置为0
    //         ScreenChange: 1, // 屏幕切换 同上
    //         AllClose: 1,  // 关闭所有窗体 同上
    //         Maximize: 1, // 最大化 同上
    //         FullScreen: 1, //全屏 同上
    //         PausedHistory: 1, // 暂停历史回放 同上
    //         CloseHistory: 1, // 关闭历史视频 同上
    //         SingleFrameCapture: 1, // 单帧抓拍
    //         ConsecutiveCaptureImage: 1, // 连续抓拍 同上
    //         StartScreenRecording: 1, // 启动本地录屏 同上
    //         LocalConfig: 1, // 本地配置 同上
    //         HidePTZ: 1, // 隐藏云台可控制面板 同上
    //         ExitFullScreen: 1,  // 退出全屏  同上
    //       },
    //       // RightContextMenu: false, // 设置false,右键菜单无效
    //       ExpandAttribute: {
    //         // SecondBroadcastImage: 0,  //秒播服务图片是否开启
    //         // ModalPreview:0,    //抓拍图片预览框是否开启
    //         // CheckSecondPlay:String, //判断秒播图片是否存在接口IP
    //         // PickTime:0,  // 选择时间
    //         // Segmentation:0 // 分段回放
    //       }
    //       //ExpandAttribute:false // 设置false,则工具栏不显示
    //     }
  
    //取消视频菜单栏，监听全屏事件
    this.$nextTick(function(ev) {
      setTimeout(() => {
        if (!this.$refs.sitPlayerNode) {
          return
        }
        this.$refs.sitPlayerNode.MS_CustomizeConfig(JSON.stringify(CustomizeConfig))
        //document.querySelectorAll('.wsVideo-player')[0].style.pointEvent = 'auto'
        this.$refs.sitPlayerNode.MS_SetCameraToCurrentWindowAsyn('71000000001320000018', 0)
        this.$refs.sitPlayerNode.MS_SetPtzConCtrl(1,0,false);
      }, 500)
    })
  },
  computed: {
  },

  methods: {
   defaultStop() {
      return false
    },
    toggleLang(lang) {
      if(lang == 'zh'){
        localStorage.setItem('locale', 'zh')
        this.$i18n.locale = localStorage.getItem('locale')
        this.$message({
          message: '切换为中文！',
          type: 'success'
        })
      } else if (lang == 'en') {
        localStorage.setItem('locale', 'en')
        this.$i18n.locale = localStorage.getItem('locale')
        this.$message({
          message: 'Switch to English!',
          type: 'success'
      })
}
    },
    // js方法
    changeLocale () {
        this.$confirm(this.$t('layer.toggle'), this.$t('layer.tips'), {
            confirmButtonText: this.$t('button.ok'),
            cancelButtonText: this.$t('button.cancel'),
            type: 'warning'
            }).then(() => {
              let locale = this.$i18n.locale
              locale === 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh'
            }).catch(() => {
                  this.$message({
                      type: 'info',
                      })      
            })
    },
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    .alarm_content_video {
      width: 500px;
      height: 250px;
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
