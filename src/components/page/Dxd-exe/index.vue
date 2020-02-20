<template>
    <div>
        <iframe  src="http://192.168.1.6:8088/" width="100%" height="100%"></iframe>
            exe index
            <hr/>
            自定义组件的v-model
            <!-- <exe-Child01 @change = "child01Change"/> -->
            <!-- <input v-model="targetVal"/> -->
            <hr/>
            <exe-Child01 v-model="selVal"/>
            <input v-model="selVal"/>

            <div class="btngroup-con" >
                <el-checkbox-group size="mini" v-model="checkedArr">
                    <el-checkbox-button v-for="(i, index) in numArr" :label="i" :key="index" >{{i}}</el-checkbox-button>
                </el-checkbox-group>
            </div>

            <el-autocomplete
            v-model="state"
            :fetch-suggestions="querySearchAsync"
            placeholder="请输入内容"
            @select="handleSelect"
            >
                <a-icon slot="suffix" type="camera" />
                <el-button slot="append">搜索一下</el-button>
            </el-autocomplete>

            <hr/>
            <hr/>
            <hr/>
            <hr/>


             <!-- <div id="box" style="width: 500px;height: 500px;">
                <img  src="http://cdn.iknow.bdimg.com/static/common/pkg/common_z_63fa369.png" style="width:827px; height:262px;" alt="">
            </div> -->

            <helloWorld></helloWorld>

    </div>
</template>
<!-- 
<script src="./zoom.js">
</script> -->

<script>
import ExeChild01 from "./components/child01"
import helloWorld from "./components/child02"
    export default {
        name: "exeIndex",
        components: {
            ExeChild01,
            helloWorld
        },
        data() {
            return {
                targetVal: "",
                // selVal: ""
                selVal: "",
                numArr: [],
                checkedArr: [],
                restaurants: [],
                state: '',
                timeout:  null
            }
        },
        
        created() {
            this.initZoom();
            for(let i=1; i<= 31; i++) {
                this.numArr.push(i);
            }
        },
        mounted() {
            this.initZoom();
            this.restaurants = this.loadAll();
            // // this.$nextTick(()=>{
            //     //全局监听post
            //     window.addEventListener("message", function (ev) {
            //         console.log(ev,"!!!!!!");
            //         alert(2)
            //     }, false)
            // // });
        },
        methods: {
    evnt(event) {

        var evn = event,
            eventDoc, doc, body,
            button = evn.button
            evn.target = evn.target || evn.srcElement;
    
        // Calculate pageX/Y if missing and clientX/Y available
        if (evn.pageX == null && evn.clientX != null) {
            eventDoc = evn.target.ownerDocument || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;
    
            evn.pageX = evn.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
            evn.pageY = evn.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
        }
    
        if (!evn.preventDefault) {
            evn.preventDefault = function() {
                this.returnValue = false;
            }
        }
    
        if (!evn.stopPropagation) {
            evn.stopPropagation = function() {
                this.cancelBubble = true;
            }
        }
    
        if (evn.which == null && (evn.charCode != null || evn.keyCode != null)) {
            evn.which = evn.charCode != null ? evn.charCode : evn.keyCode;
        }
    
        // Add which for click: 1 === left; 2 === middle; 3 === right
        // Note: button is not normalized, so don't use it
        if (!evn.which && button !== undefined) {
            evn.which = (button & 1 ? 1 : (button & 2 ? 3 : (button & 4 ? 2 : 0)));
        }
        return evn
    },
    
    getOffset(o) {
        var left = 0,
            top = 0;
        while (o != null && o != document.body) {
            top += o.offsetTop;
            left += o.offsetLeft;
            o = o.offsetParent;
        }
        return {
            left: left,
            top: top
        };
    },
            initZoom() {
                console.log("=====================")
                var d = document,
                    bind = function(b, a, c) {
                        b.addEventListener ? b.addEventListener(a, function(event) {
                            c.call(b, this.evnt(event));
                        }, false) : b.attachEvent("on" + a, function(event) {
                            c.call(b, this.evnt(window.event));
                        });
                    },
                    on = function(b, o) {
                        for (var a in o) {
                            bind(b, a, o[a]);
                        }
                    };
            
                var isRun,
                    startX,
                    startY,
                    endX,
                    endY,
                    rX,
                    rY,
                    bgX = 0,
                    bgY = 0,
                    box = document.getElementById("box"),
                ww = parseInt(box.style.width),
                wh = parseInt(box.style.height),
                i = box.getElementsByTagName('img')[0],
                img = i.style,
                imgw = parseInt(img.width),
                imgh = parseInt(img.height),
                scaleSize = 1;
                console.log(box, "=======box");
                console.log(i, "=======i");
            
                function rs() {
                    var w, h;
                    //以完全显示图片为基准,如果改为>，则为以铺满屏幕为基准
                    if (ww / wh < imgw / imgh) {
                        w = ww;
                        h = imgh * ww / imgw;
                        bgX = 0;
                        bgY = -(h - wh) / 2;
                        scaleSize = ww / imgw; //初始比率
                    } else {
                        w = imgw * wh / imgh;
                        h = wh;
                        bgX = -(w - ww) / 2;
                        bgY = 0;
                        scaleSize = wh / imgh;
                    }
                    img.width = w + "px";
                    img.height = h + "px";
                    img.left = bgX + "px";
                    img.top = bgY + "px";
                }
                rs();
                /* Init */
                on(d, {
                    "mousedown": function(e) {
            
                        //按中建快速还原大小
                        if (e.which === 2) {
                            rs();
                        }
                        if (e.which === 1 && e.target && (e.target === i || e.target === box)) {
                            isRun = true;
                            startX = e.pageX;
                            startY = e.pageY;
            
                            e.preventDefault();
                        }
                    },
                    "mouseup": function(e) {
                        if (e.which !== 1) {
                            return;
                        }
            
                        img.cursor = "default";
                        isRun = false;
                        if(typeof(rX)!=="undefined")//这个判断原作没有，去掉该判断会出现单击后，放大缩小不是鼠标位置的情况；处理加载后就点击的情况；即rX是undefined          
                        {
                            bgX = rX;
                            bgY = rY;
                        }
            
                        e.preventDefault();
                    },
                    "mousemove": function(e) {
                        //
                        if (e.which !== 1) {
                            return;
                        }
                        if (isRun) {
                            e.preventDefault();
                            img.cursor = "move";
                            endX = e.pageX;
                            endY = e.pageY;
                            rX = bgX + endX - startX;
                            rY = bgY + endY - startY;
            
                            img.left = rX + "px";
                            img.top = rY + "px";
                        }
                    },
                    "mousewheel": function(e) {
                        //以鼠标为中心缩放，同时进行位置调整
                        var deltaY = 0;
                        var x = e.pageX;
                        var y = e.pageY;
            
                        e.preventDefault();
            
                        if (e.target && (e.target === i)) {
            
                            var l = this.getOffset(box);
                            x = x - l.left;
                            y = y - l.top;
            
                            var p = (e.wheelDelta) / 1200;
                            var ns = scaleSize;
                            ns += p;
                            ns = ns < 0.1 ? 0.1 : (ns > 5 ? 5 : ns); //可以缩小到0.1,放大到5倍
            
                            //计算位置，以鼠标所在位置为中心
                            //以每个点的x、y位置，计算其相对于图片的位置，再计算其相对放大后的图片的位置
                            bgX = bgX - (x - bgX) * (ns - scaleSize) / (scaleSize);
                            bgY = bgY - (y - bgY) * (ns - scaleSize) / (scaleSize);
                            scaleSize = ns; //更新倍率
            
                            img.width = imgw * ns + "px";
                            img.height = imgh * ns + "px";
                            img.top = bgY + "px";
                            img.left = bgX + "px";
                        }
                    }
                });
            
            },
            // child01Change(value) {
            //     this.targetVal = value;
            // }
            loadAll() {
                return [
                { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
                { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
                { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
                { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
                { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
                { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
                { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
                { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
                { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
                { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
                { "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号" },
                { "value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号" },
                { "value": "Monica摩托主题咖啡店", "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F" },
                { "value": "浮生若茶（凌空soho店）", "address": "上海长宁区金钟路968号9号楼地下一层" },
                { "value": "NONO JUICE  鲜榨果汁", "address": "上海市长宁区天山西路119号" },
                { "value": "CoCo都可(北新泾店）", "address": "上海市长宁区仙霞西路" },
                { "value": "快乐柠檬（神州智慧店）", "address": "上海市长宁区天山西路567号1层R117号店铺" },
                { "value": "Merci Paul cafe", "address": "上海市普陀区光复西路丹巴路28弄6号楼819" },
                { "value": "猫山王（西郊百联店）", "address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306" },
                { "value": "枪会山", "address": "上海市普陀区棕榈路" },
                { "value": "纵食", "address": "元丰天山花园(东门) 双流路267号" },
                { "value": "钱记", "address": "上海市长宁区天山西路" },
                { "value": "壹杯加", "address": "上海市长宁区通协路" },
                { "value": "唦哇嘀咖", "address": "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元" },
                { "value": "爱茜茜里(西郊百联)", "address": "长宁区仙霞西路88号1305室" },
                { "value": "爱茜茜里(近铁广场)", "address": "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺" },
                { "value": "鲜果榨汁（金沙江路和美广店）", "address": "普陀区金沙江路2239号金沙和美广场B1-10-6" },
                { "value": "开心丽果（缤谷店）", "address": "上海市长宁区威宁路天山路341号" },
                { "value": "超级鸡车（丰庄路店）", "address": "上海市嘉定区丰庄路240号" },
                { "value": "妙生活果园（北新泾店）", "address": "长宁区新渔路144号" },
                { "value": "香宜度麻辣香锅", "address": "长宁区淞虹路148号" },
                { "value": "凡仔汉堡（老真北路店）", "address": "上海市普陀区老真北路160号" },
                { "value": "港式小铺", "address": "上海市长宁区金钟路968号15楼15-105室" },
                { "value": "蜀香源麻辣香锅（剑河路店）", "address": "剑河路443-1" },
                { "value": "北京饺子馆", "address": "长宁区北新泾街道天山西路490-1号" },
                { "value": "饭典*新简餐（凌空SOHO店）", "address": "上海市长宁区金钟路968号9号楼地下一层9-83室" },
                { "value": "焦耳·川式快餐（金钟路店）", "address": "上海市金钟路633号地下一层甲部" },
                { "value": "动力鸡车", "address": "长宁区仙霞西路299弄3号101B" },
                { "value": "浏阳蒸菜", "address": "天山西路430号" },
                { "value": "四海游龙（天山西路店）", "address": "上海市长宁区天山西路" },
                { "value": "樱花食堂（凌空店）", "address": "上海市长宁区金钟路968号15楼15-105室" },
                { "value": "壹分米客家传统调制米粉(天山店)", "address": "天山西路428号" },
                { "value": "福荣祥烧腊（平溪路店）", "address": "上海市长宁区协和路福泉路255弄57-73号" },
                { "value": "速记黄焖鸡米饭", "address": "上海市长宁区北新泾街道金钟路180号1层01号摊位" },
                { "value": "红辣椒麻辣烫", "address": "上海市长宁区天山西路492号" },
                { "value": "(小杨生煎)西郊百联餐厅", "address": "长宁区仙霞西路88号百联2楼" },
                { "value": "阳阳麻辣烫", "address": "天山西路389号" },
                { "value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13" }
                ];
            },
            querySearchAsync(queryString, cb) {
                var restaurants = this.restaurants;
                var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                cb(results);
                }, 3000 * Math.random());
            },
            createStateFilter(queryString) {
                return (state) => {
                return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                };
            },
            handleSelect(item) {
                console.log(item);
            }
                
        },

    }
</script>
<style>
    .btngroup-con{

    }
</style>
