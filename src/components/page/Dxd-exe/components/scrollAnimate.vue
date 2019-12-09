<template>
    <div class="scroll_con" ref="scrollCon">
        <div class="scroll_div" :ref="item" v-for="(item, index) in [1,2,3,4,5,6]" :key="index" @click="clickBox(item)">
            {{item}}
        </div>
    </div>
</template>
<script>
import throttle from 'throttle-debounce/throttle';
    export default {
        name: "scrollAnimate",
        data() {
            return {
                buttonSize:"large",
                loading: false,
                boxIndex: 0
            }
        },
        watch: {
            boxIndex: {
                handler: function(val, oldVal) {
                    if(val != oldVal) {
                        // console.log(this, 'this.$refs==========')
                        // let clickBox = this.$refs[this.boxIndex]
                        // let step = clickBox[0].offsetTop / (100);
                        // // let target = this.$refs.scrollCon;
                        // let scrollInterval = setInterval(() => {
                        //     let that = this;
                        //     let target = that.$refs.scrollCon;
                        //     console.log(target, 'this.$refs==========')
                        //     if (clickBox[0].offsetTop != 0 ) {
                        //         target.scrollTop = step;
                        //     }
                        //     else clearInterval(scrollInterval); 
                        // },100);
                        // this.scrollToTop(1000);
                        // this.$refs.scrollCon.scrollTop = clickBox[0].offsetTop;
                        // this.$refs.scrollCon.animate({ scrollTop:0 }, 400); 
                        // $("html, body").animate({ scrollTop: Slog.offsetTop }, 400); 
                    }
                }
            }
        },
        methods: {
            toLoading(){
                this.loading = true;
            },
            clickBox(index){
                this.boxIndex = index;
                let distance = this.$refs[this.boxIndex][0].offsetTop - this.$refs.scrollCon.scrollTop;
                let sumHeight = this.$refs.scrollCon.scrollHeight;
                let step = distance / 100;
                let nowScrollConTop = this.$refs.scrollCon.scrollTop;
                        console.log(this.$refs.scrollCon.clientHeight, 'this.$refs.scrollCon.clientHeight')
                        console.log(this.$refs.scrollCon.scrollTop, 'this.$refs.scrollCon.scrollTop')
                        console.log(this.$refs[this.boxIndex][0].offsetTop, 'clickBox[0].offsetTop')
                let scrollInterval = setInterval(()=>{
                    if ((this.$refs[this.boxIndex][0].offsetTop > this.$refs.scrollCon.scrollTop && this.$refs.scrollCon.clientHeight + this.$refs.scrollCon.scrollTop != sumHeight) 
                    || this.$refs[this.boxIndex][0].offsetTop < this.$refs.scrollCon.scrollTop ) {
                        console.log(this.$refs.scrollCon.scrollTop, 'this.$refs.scrollCon.scrollTop')
                        this.$refs.scrollCon.scrollTop += step;
                        nowScrollConTop = this.$refs.scrollCon.scrollTop;
                    }
                    else clearInterval(scrollInterval); 
                },10);
            },
            scrollToTop(scrollDuration) {
                var scrollStep = -window.scrollY / (scrollDuration / 15),
                    scrollInterval = setInterval(function(){
                    if ( window.scrollY != 0 ) {
                        window.scrollBy( 0, scrollStep );
                    }
                    else clearInterval(scrollInterval); 
                },15);
            }
        },
        model: {
        },
        props: {

        }

    }
</script>
<style scoped lang="scss" >
    .scroll_con{
        width: 500px;
        height: 1000px;
        border: 2px solid #f00;
        overflow: hidden;
        overflow-y: scroll;
        transition: all 1s linear;
        position: relative;
        .scroll_div{
            width: 100%;
            height: 300px;
            background: #ff0;
            border: 1px dashed #0f0;
        }
    }
</style>
