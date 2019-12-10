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
            axios.get('bbbb/api/ai/aiIndex/alarmList').then(res=>{
                console.log(res, 'alarmList===bbbb======')
            }).catch(error => {
                console.log(error, 'alarmList===bbbb====error==')
            })
            axios.get('bbbb/api/ai/aiIndex/picList').then(res=>{
                console.log(res, 'picList===bbbb======')
            }).catch(error => {
                console.log(error, 'picList===bbbb====error==')
            })
            
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
