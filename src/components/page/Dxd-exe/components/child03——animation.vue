<template>
    <div>
       动画练习
       <div class="right_pic">
            <transition-group appear tag="div" name="face" mode="out-in">
              <div v-for="(item,index) in faceSnapImageUrlList" :key="index" class="snap_face_show">
                <img :src="item" alt="" @error="imgFaceError">
              </div>
            </transition-group>
          </div>

        <div class="real_alarminfo">
        <div class="alarminfo" >
            <div class="animation">实时预警信息</div>
        </div>
        </div>
        <div id="basicMapbox" ref="basicMapbox" class="map"></div>

        <div>
          动效练习
          常见定时器：
          （1）setInterval
          （2）setTimeout
          （3）requestAnimationFrame======cancelAnimationFrame
        </div>

        <div class="animat" ref="animat"></div>
        <div class="ball3" ref="ball3"></div>
        <div>
          anime.js使用
          <article>
            <div class="blue"></div>
            <div class="green"></div>
          </article>
        </div>
    </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import echarts from 'echarts/lib/echarts'
import anime from 'animejs/lib/anime'
import 'echarts-gl'
    export default {
        name: "ExeChild03",
        data() {
            return {
                defaultFaceImg: require('../../../../assets/img/img.jpg'),
                demo:[
                    "http://localhost:8080/vias_app/static/vias/images/resultout.png",
                    "http://localhost:8080/vias_app/static/vias/images/resultout.png",
                    "http://localhost:8080/vias_app/static/vias/images/resultout.png",
                    "http://localhost:8080/vias_app/static/vias/images/resultout.png",
                    "http://localhost:8080/vias_app/static/vias/images/resultout.png",
                    "http://172.20.32.136:8088/down/img/person/1.jpg"
                ],
                faceSnapImageUrlList:[],
                start:null
            }
        },
        created(){
            let index = 0;
             setInterval(() => {
                //  console.log(++index)
                 this.faceSnapImageUrlList = [];
                 let temp = [];
                 for(let i=0; i<5; i++) {
                     temp.push("http://172.20.32.136:8088/down/img/person/" + Math.random()*10 + ".jpg")
                 }
                this.$nextTick(()=>{
                    this.faceSnapImageUrlList = temp;
                    // console.log(this.faceSnapImageUrlList)
                })
            }, 1500)
        },
        mounted(){
          // this.step()
          this.animaBall()
          var myAnimation = anime({
            targets: ['.blue', '.green'],
            translateX: '13rem',
            rotate: 180,
            borderRadius: 8,
            duration: 2000,
            loop: true
          });
        },
        methods: {
          step(timestamp) {
            if (!this.start) this.start = timestamp;
            var progress = timestamp - this.start;
            console.log(this.$refs.animat)
            this.$refs.animat.style.left = Math.min(progress / 10, 200) + 'px';
            if (progress < 2000) {
              window.requestAnimationFrame(this.step());
            }

          },
          animaBall() {
            // let ball3 = document.querySelector('.ball3')
            let ball3 = this.$refs.ball3
            let delta = 200 / 60
            let offset = 0
            let dir = 'right'
            let render = function() {
              if (offset >= 600) {
                dir = 'left'
              } else if (offset <= 0) {
                dir = 'right'
              }
              ball3.style.left = offset + 'px'
              if (dir === 'left') {
                offset -= delta
              } else {
                offset += delta
              }
              requestAnimationFrame(render)
            }
            requestAnimationFrame(render)
          },
            imgFaceError(item) {
                let img = event.srcElement
                img.src = this.defaultFaceImg
            },
            // 初始化
            init(layers) {
              window.mapboxgl = mapboxgl
              let vm = this
              let myChart = echarts.init(document.getElementById('basicMapbox'))
              let simple = {
                version: 8,
                name: 'Mapbox Streets',
                sprite: 'http://' + window.location.host + '/sprites/sprite',
                glyphs: '/fonts/{fontstack}/{range}.pbf',
                sources: {
                  openmaptiles: {
                    type: 'vector',
                    url: "http://172.20.32.181:8088/data/v3.json"
                  }
                },
                layers: layers
              }
              myChart.setOption({
                mapbox: {
                  center: [116.65, 40.13],
                  zoom: 13,
                  minZoom: 10,
                  maxZoom: 22,
                  trackResize: true,
                  localIdeographFontFamily: "'Microsoft YaHei Regular'",
                  postEffect: {
                    enable: true,
                    screenSpaceAmbientOcclusion: {
                      enable: true
                    }
                  }
                },
                series: [
                  {
                    type: 'lines3D',
                    coordinateSystem: 'mapbox',
                    data: []
                  }
                ]
              })
              let mapbox = myChart
                .getModel()
                .getComponent('mapbox3D')
                .getMapbox()
              window.addEventListener('keydown', function() {
                myChart.dispatchAction({
                  type: 'lines3DToggleEffect',
                  seriesIndex: 0
                })
              })
              window.mapbox = mapbox
              mapbox.on('load', function() {
                // setOutLinesOption(mapbox)
                
              })
              //根据缩放级别旋转地图
              let stop = false
              let animatehandle = null
              let stoptime = 0
              function rotateCamera(timestamp) {
                var curtotate = mapbox.rotateTo((timestamp / 400) % 360, {
                  duration: 0
                })
                animatehandle = requestAnimationFrame(rotateCamera)
              }
              // mapbox.on('zoomend', function(e) {
              //   if (mapbox.getZoom() >= window.$config.mapRotateLevel) {
              //     console.log('zoom:' + mapbox.getZoom())
              //     if (!stop) {
              //       cancelAnimationFrame(animatehandle)
              //       stop = true
              //     }
              //   } else {
              //     if (stop) {
              //       animatehandle = requestAnimationFrame(rotateCamera)
              //       stop = false
              //     }
              //   }
              // })
              // 动态调整容器大小
              // window.addEventListener('resize', function() {
              //   myChart.resize()
              // })
            }


        },
        model: {
           
        },
        props: {
            
        },
        destroyed(){
          cancelAnimationFrame();
        }

    }
</script>

<style scoped>
.blue{
  width: 30px;
  height: 30px;
  background: blue;
}
.green{
  width: 30px;
  height: 30px;
  background: green;
}
  .animation{
    position: relative; 
    animation: alarmtext 15s linear infinite;
  }
  .animat,.ball3 {
    width: 30px;
    height: 30px;
    background: red;
    position: absolute;
  }

  @keyframes alarmtext {
    0% {
      left: 550px;
    }
    100% {
      left: -300px;
    }
  }
 /*人脸图片抓拍的动画*/
  .face-enter {
    opacity: 0;
    transform: translateX(20px);
    position: absolute;
  }

  .face-leave-to {
    opacity: 0;
    transform: translateY(0);
    position: absolute;
  }

  .face-enter-active,
  .face-leave-active {
    transition: all 1.5s ease;
  }

  /* .face-move {
    transition: all 0.6s ease;
  } */

  /* .face-leave-active {
    position: absolute;
  } */

   .right_pic {
        width: 380px;
        height: 90px;
        background: url("../../../../assets/img/che.jpg") no-repeat center;
        background-size: 100% 100%;
        display: flex;
        padding: 10px 20px;
    }
    .right_pic .snap_face_show {
        margin-right: 10px;
        width: 60px;
    }

    .right_pic .snap_face_show  img {
        width: 60px;
        height: 70px;
    }

    .right_pic  div {
        display: flex;
    }
    .right_pic :last-child {
        margin-right: 0;
    }
</style>