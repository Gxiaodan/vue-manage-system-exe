<template>
    <div>
          anime.js使用
          <article>
            <div class="blue"></div>
            <div class="green"></div>
          </article>
          <article>
            charged: {{battery.charged}};
            cycles: {{battery.cycles}}
          </article>
          <article>
            <div class="colors-demo" style="background:green">
              <div class="el"  >
                <div class="color-hex" style="width:20px; height:20px; background:#0F0;"></div>
                <div class="color-rgb"  style="width:20px; height:20px; background:rgb(0,255,0);"></div>
                <div class="color-hsl"  style="width:20px; height:20px; background:green;"></div>
                <div class="color-rgba"  style="width:20px; height:20px; background:green;"></div>
                <div class="color-hsla"  style="width:20px; height:20px; background:green;"></div>
              </div>
            </div>
          </article>

          <img src="@/assets/eye.svg" />
          <svg width="158" height="64"   xmlns="http://www.w3.org/2000/svg"><path  class="path" stroke="#000" stroke-width="4" fill="#fff" d="M127.072 7.994c1.37-2.208.914-5.152-.914-6.87-2.056-1.717-4.797-1.226-6.396.982-.229.245-25.586 32.382-55.74 32.382-29.24 0-55.74-32.382-55.968-32.627-1.6-1.963-4.57-2.208-6.397-.49C-.17 3.086-.399 6.275 1.2 8.238c.457.736 5.94 7.36 14.62 14.72L4.17 35.96c-1.828 1.963-1.6 5.152.228 6.87.457.98 1.6 1.471 2.742 1.471s2.284-.49 3.198-1.472l12.564-13.983c5.94 4.416 13.021 8.587 20.788 11.53l-4.797 17.418c-.685 2.699.686 5.397 3.198 6.133h1.37c2.057 0 3.884-1.472 4.341-3.68L52.6 42.83c3.655.736 7.538 1.227 11.422 1.227 3.883 0 7.767-.49 11.422-1.227l4.797 17.173c.457 2.208 2.513 3.68 4.34 3.68.457 0 .914 0 1.143-.246 2.513-.736 3.883-3.434 3.198-6.133l-4.797-17.172c7.767-2.944 14.848-7.114 20.788-11.53l12.336 13.738c.913.981 2.056 1.472 3.198 1.472s2.284-.49 3.198-1.472c1.828-1.963 1.828-4.906.228-6.87l-11.65-13.001c9.366-7.36 14.849-14.474 14.849-14.474z"/></svg>

          
    </div>
</template>

<script>
import anime from 'animejs/lib/anime'
    export default {
        name: "animejs",
        data() {
            return {
               battery: {
                 charged: "0%",
                 cycles: 120
               }
            }
        },
        created(){
        },
        mounted(){
          this.startMove();
          this.startMove2();
          this.startMove3();
          
        },
        methods: {
          startMove() {
            anime({
              targets: ['.blue', '.green'],
              translateX: '13rem',
              rotate: 180,
              borderRadius: 8,
              duration: 2000,
              loop: true
            });
          },
          startMove2() {
            anime({
              targets: this.battery,
              charged: '100%',
              cycles: 130,
              round: 1,
              easing: 'linear',
              update: function() {
                
              }
            });
          },
          startMove3() {
            var colorsExamples = anime.timeline({
              endDelay: 1000,
              easing: 'easeInOutQuad',
              direction: 'alternate',
              loop: true
            })
            .add({ targets: '.color-hex',  background: '#FFF' }, 0)
            .add({ targets: '.color-rgb',  background: 'rgb(255,255,255)' }, 0)
            .add({ targets: '.color-hsl',  background: 'hsl(0, 100%, 100%)' }, 0)
            .add({ targets: '.color-rgba', background: 'rgba(255,255,255, .2)' }, 0)
            .add({ targets: '.color-hsla', background: 'hsla(0, 100%, 100%, .2)' }, 0)
            .add({ targets: '.colors-demo .el', translateX: 270 }, 0);
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
/* .path{
  stroke-dasharray: 500;
  animation: dash 5s linear;
}
@keyframes dash {
  to {
    stroke-dashoffset: 1000;
  }
} */

.path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: dash 5s linear forwards infinite;
  
}
@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}
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
.el div{
    border-radius: 50%;
  }
</style>