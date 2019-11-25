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
