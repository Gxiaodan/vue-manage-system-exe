import request from '@/utils/request'
// import { api } from '@/config'


// export function findTrafficViolationPage(data) {
//     return request({
//         url: api.findTrafficViolationPage,
//         method: 'post',
//         data
//     })
// }

export function loginTest(data) {
    return request({
        url: "http://vdapsdv.sailingit.cn/auth/ajaxLogin",
        method: 'post',
        data
    })
}
// export function alarmConfirmStatis(query) {
//     return request({
//         url: api.alarmConfirmStatis,
//         method: 'get',
//         params: query
//     })
// }

export function checkOldPwd(data) {
    return request({
      url: "http://172.20.32.41:10002/pwd/checkOriginalPwd",
      // url: 'http://172.20.32.41:2000/vdaps-search-xj/QuickSearch/findList',
      method: 'get',
      params: data
    })
  }


  export function picList(data) {
    return request({
      url: "bbbb/api/ai/aiIndex/picList",
      method: 'get',
      params: data
    })
  }

  export function alarmLevelStatis(data) {
    return request({
      url: "bbbb/api/vgis/proHomePage/alarmLevelStatis",
      method: 'get',
      params: data
    })
  }