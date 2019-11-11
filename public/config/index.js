//西安环境
var ipConfig = {
  //  大屏接口IP地址
  tzDpIp: '172.20.32.148',
  //视频
  videoH5Ip: '172.20.32.141',//rest服务
  videoControlIp: '172.20.32.141',//调度服务IP

  //首页地图地址
  map3DUrls: "http://172.20.32.148:8081/xishui/xishuimain.html",
  //大屏左下角默认播放视频得设备编号 需与videoBtnArr得第一个设备编号一致
  mockDeviceId: '71000000001320000017',
  //页面高点设想机监控5个点位得名称以及设备id，
  //注意，名称最长不能超过三个字
  videoBtnArr: [
    {
      name: "视频1",
      videoId: "71000000001320000017"
    }, {
      name: "视频2",
      videoId: "71000000001320000016"
    }, {
      name: "视频3",
      videoId: "71000000001320000018"
    }, {
      name: "视频4",
      videoId: "71000000001320000019"
    }, {
      name: "视频5",
      videoId: "71000000001320000020"
    }],
}
