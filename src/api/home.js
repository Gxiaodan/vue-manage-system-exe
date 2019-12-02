import request from '@/utils/request'
import { api } from '@/config'


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
export function alarmConfirmStatis(query) {
    return request({
        url: api.alarmConfirmStatis,
        method: 'get',
        params: query
    })
}