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