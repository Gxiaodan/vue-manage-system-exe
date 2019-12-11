<template>
    <div>
    </div>
</template>
<script>
import {checkOldPwd, picList, alarmLevelStatis } from '@/api/home'
import qs from "qs"
import axios from 'axios'
    export default {
        name: "iview01",
        data() {
            return {
                buttonSize:"large",
                loading: false
            }
        },
        methods: {
            toLoading(){
                this.loading = true;
            }
        },
        model: {
        },
        created(){
            console.log(window.externalConfig.testService, 'testService==========')
            // checkOldPwd({
            // originalPwd: "111111"
            // }).then((data) => {
            // console.log(data, "checkOldPwd=============")
            //     if(!data){
            //     callback(new Error("请输入正确的旧密码"))
            //     }else {
            //     callback()
            //     }
            // }).catch(error => {console.error('checkOldPwd', error)})

            // picList({
            // }).then((data) => {
            // console.log(data, "picList=============")
            // }).catch(error => {console.error('picList', error)})

            //  axios.get('http://120.79.68.66:8070/api/ai/aiIndex/alarmList').then(res=>{
            //     console.log(res, 'alarmList=========')
            // }).catch(error => {
            //     console.log(error, 'alarmList=======error==')
            // })

            // axios.get('http://120.79.68.66:8070/api/vgis/proHomePage/alarmConfirmStatis').then(res=>{
            //     console.log(res, 'alarmConfirmStatis=========')
            // }).catch(error => {
            //     console.log(error, 'alarmConfirmStatis=======error==')
            // })

            // axios.get('http://120.79.68.66:8070/api/vgis/proHomePage/alarmLevelStatis',qs.stringify()).then(res=>{
            //     console.log(res, 'alarmLevelStatis=========')
            // })
            // .catch(error => {
            //     console.log(error, 'alarmLevelStatis=======error==')
            // })

            // export function getSystemDB () {
            // return 
            // new Promise((resolve, reject) => {

            //     axios.get('http://120.79.68.66:8070/api/vgis/proHomePage/alarmLevelStatis', '')
            //     .then(response => {
            //         resolve(response.data)
            //     })
            //     .catch((error) => {
            //         reject(error)
            //     })
            // })
            // }

            //  axios.get('bbbb/api/vgis/proHomePage/alarmConfirmStatis').then(res=>{
            //     console.log(res, 'alarmConfirmStatis====bbbb=====')
            // }).catch(error => {
            //     console.log(error, 'alarmConfirmStatis===bbbb====error==')
            // })

            // axios.get('bbbb/api/vgis/proHomePage/alarmLevelStatis').then(res=>{
            //     console.log(res, 'alarmLevelStatis===bbbb======')
            // }).catch(error => {
            //     console.log(error, 'alarmLevelStatis===bbbb====error==')
            // })
            // http://120.79.68.66:8070/api/ai/aiIndex/alarmList
            // http://120.79.68.66:8070/api/ai/aiIndex/picList
            // axios.get('bbbb/api/ai/aiIndex/alarmList').then(res=>{
            //     console.log(res, 'alarmList===bbbb======')
            // }).catch(error => {
            //     console.log(error, 'alarmList===bbbb====error==')
            // })
            // axios.get('bbbb/api/ai/aiIndex/picList').then(res=>{
            //     console.log(res, 'picList===bbbb======')
            // }).catch(error => {
            //     console.log(error, 'picList===bbbb====error==')
            // })

            axios.get('bbbb/api/vgis/proHomePage/proPointData',{params:{monDevCategory: "02"}}).then(res=>{
                console.log(res, 'proPointData===bbbb======')
            }).catch(error => {
                console.log(error, 'proPointData===bbbb====error==')
            })
            axios.defaults.headers.post["authorization"] = "eyJhbGciOiJIUzUxMiJ9.eyJwYXNzd29yZCI6IjEyMzEyMyIsImhvc3QiOiIxNzIuMjAuMzYuMjEzIiwicmVtZW1iZXJNZSI6ZmFsc2UsImV4cCI6MTU3ODEyNDc3MSwidXNlcklkIjoiMmM5NGEwYTk2YTQ0NGQ1MTAxNmE0ZDViZTBiMTAwNDMiLCJTRUNSRVQiOiI2MjgxZTBiMzUwOTU0MWJmYmVjZDRiNGIxZGQ0YzgyZSIsInVzZXJuYW1lIjoiZ3hkMiJ9.H0yvAeQFAe4bv6EdY9b7eLK9uI3aps5wiz7RTtqlqU1GpL5FfoWUEDhEbBwPpfk7hufmYo3uZ0Wkn7RY2vWkBQ";
            axios.post('cccc/notificationInfo/findHomeAlarm',{
                isHandled: "0",
                pageSize: 5,
                pageNumber: 1,
                detailOrList: 0 //  查询列表0，查询图片页 1.
            }).then(res=>{
                console.log(res, 'findHomeAlarm===cccc======')
            }).catch(error => {
                console.log(error, 'findHomeAlarm===cccc====error==')
            })
            // export function findHomeAlarm(data) {
            // return request({
            //     url: api.findHomeAlarm,
            //     method: 'post',
            //     data
            // })
            // }
            // ${compareService}/notificationInfo/findHomeAlarm
            // http://172.20.32.41:2000/compare
            
            // alarmLevelStatis({
            // }).then((data) => {
            // console.log(data, "alarmLevelStatis============封装=")
                
            // }).catch(error => {console.error('alarmLevelStatis=====封装', error)})

            // axios.get('aaaa/devicePoint/startGame?second=' + new Date().getTime()).then(res=>{
            //     console.log(res, 'startGame=========')
            // }).catch(error => {
            //     console.log(error, 'startGame=======error==')
            // })
            //  axios.get('bbbb/api/vgis/device/getColleDeviceAttr').then(res=>{
            //     console.log(res, 'getColleDeviceAttr=========')
            // }).catch(error => {
            //     console.log(error, 'getColleDeviceAttr=======error==')
            // })
            // axios.get('bd').then(res=>{
            //     console.log(res, 'bd=========')
            // }).catch(error => {
            //     console.log(error, 'bd=======error==')
            // })
        },
        props: {

        }

    }
</script>
<style>
</style>
