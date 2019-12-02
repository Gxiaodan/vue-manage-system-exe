import request from './request'
import moment from 'moment';
import router from '@/router';
import { isNative } from '@/config'
//导出文件
export function exportFile(url, params, names) {
    return request({
        method: 'post',
        url: url,
        data: params,
        responseType: 'blob'
    }).then(response => {
        let fileName
        if (response.type == 'application/vnd.ms-excel' || response.type == 'application/x-excel') {
            // fileName = names + moment(new Date()).format("YYYYMMDDHHmmss") + ".xlsx";
            fileName = names + ".xlsx";
        } else if (response.type == 'application/msword') {
            // fileName = names + moment(new Date()).format("YYYYMMDDHHmmss") + ".doc";
            fileName = names + ".doc";
        } else {
            // fileName = names + moment(new Date()).format("YYYYMMDDHHmmss") + ".zip";
            fileName = names + ".zip";
        }
        let blob = new Blob([response], {
            type: response.type
        });
        downFile(blob, fileName)
        return {
            success: true
        }
    }).catch((error) => {
        return {
            success: false
        }
    })
}

//js下载文件流
function downFile(blob, fileName) {
    if (window.navigator.msSaveOrOpenBlob) {
        navigator.msSaveBlob(blob, fileName);
    } else {
        let link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = fileName;
        link.target = '_blank';
        link.click();
        window.URL.revokeObjectURL(link.href);
    }
}

//js下载文件
export function downloadFile(url) {
    let link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.click();
    window.URL.revokeObjectURL(link.href);
}





// 验证是否输入开始时间和结束时间
export function isTimeInput(startTime, endTime, message) {
    let start = startTime ? moment(startTime).format("YYYY-MM-DD HH:mm:ss") : null
    let end = endTime ? moment(endTime).format("YYYY-MM-DD HH:mm:ss") : null
    if (start && end) {
        return true
    } else {
        message({
            message: '请输入查询时段',
            type: 'warning'
        });
        return false
    }
}

//数组去重
export function arrayDeduplication(objArray, key) {
    let hash = {};
    //reduce方法有两个参数，第一个参数是一个callback，用于针对数组项的操作；第二个参数则是传入的初始值，这个初始值用于单个数组项的操作。
    objArray = objArray.reduce(function(item, next) { //这是针对数组项操作的函数，对于每个数组项，reduce方法都会将其调用一次
        //可使用最多四个参数来声明回调函数（第一个参数：通过上一次调用回调函数获得的值;第二个参数：当前数组元素的值；第三个参数：当前数组元素的数字索引；第四个参数：包含该元素的数组对象）
        //这里只使用了两个参数，所以item和next分别代表上一次调用回调函数后的值和objArray项值
        hash[next[key]] ? '' : hash[next[key]] = true && item.push(next); //与func3逻辑相似 
        return item;
    }, []); //初始值是一个空对象，使用reduce方法返回的是空对象通过叠加执行之后的结果
    return objArray;
}

//浏览器内核判断
export let browser = {
    versions: function() {
        const u = window.navigator.userAgent;
        return {
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            chrome: u.indexOf('Chrome') > -1, //Chrome浏览器
            gecko: u.indexOf('Firefox') > -1, //火狐内核Gecko
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;(  U;)?  CPU.+Mac  OS  X/), //ios
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android
            iPhone: u.indexOf('iPhone') > -1, //iPhone
            iPad: u.indexOf('iPad') > -1, //iPad
            webApp: u.indexOf('Safari') > -1 //Safari
        };
    }()
}

/**
 * 获取 blob
 * @param  {String} url 目标文件地址
 * @return {Promise} 
 */
function getBlob(url) {
    return new Promise(resolve => {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', url, true);
        xhr.responseType = 'blob';
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(xhr.response);
            }
        };

        xhr.send();
    });
}

/**
 * 保存
 * @param  {Blob} blob     
 * @param  {String} filename 想要保存的文件名称
 */
function saveAs(blob, filename) {
    if (window.navigator.msSaveOrOpenBlob) {
        navigator.msSaveOrOpenBlob(blob, filename);
    } else {
        // downloadFile(window.URL.createObjectURL(blob));
        const link = document.createElement('a');
        // const body = document.querySelector('body');

        link.href = window.URL.createObjectURL(blob);
        link.download = filename;

        // fix Firefox
        link.style.display = 'none';
        // body.appendChild(link);

        link.click();
        // body.removeChild(link);

        window.URL.revokeObjectURL(link.href);
    }
}

// export function downloadFile(url) {
//   let link = document.createElement('a');
//   link.href = url;
//   link.target = '_blank';
//   link.click();
//   window.URL.revokeObjectURL(link.href);
// }

/**
 * 下载
 * @param  {String} url 目标文件地址
 * @param  {String} filename 想要保存的文件名称
 */
export function downloadFileRename(url, filename) {
    getBlob(url).then(blob => {
        saveAs(blob, filename);
    });
}