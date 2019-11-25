<template>
    <div class="schedule_con">
        <el-button @click="animate">start</el-button>
        <el-button @click="stopAnimate">end</el-button>
        <div class="schedule_box">
            <div class="schedule_slider">
                <div id="schedule_bar_passed" >

                </div>
                <div class="schedule_bar" id="schedule_bar" >
                    <span class="bicycle_foot">队尾</span>
                    <span class="bicycle_head">队头</span>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        name: "bicycleSlider",
        data() {
            return {
                nowLeft: 0,
                target: null,
                passed:null,
                distance: 0,
                animateTimer: null,
                start:0,
                end:0
            }
        },
        methods: {
            animate(){
                this.target=document.getElementById("schedule_bar");
                this.passed = document.getElementById("schedule_bar_passed");
                this.target.style.left = this.nowLeft + "px";
                this.move(this.start,this.end)
                this.animateTimer = setInterval(()=>{
                    if(this.start < 72) {
                        if(this.start + 5 >= 72) {
                            this.start = 72; 
                        } else {
                            this.start += 5; 
                        }
                    }
                    if(this.end < 72) {
                        if(this.end + 4 >= 72) {
                            this.end = 72; 
                        } else {
                            this.end += 4; 
                        }
                    } else {
                        this.stopAnimate();
                    }
                    this.move(this.start,this.end)
                }, 1000)
            },
            stopAnimate() {
                clearInterval(this.animateTimer);
            },
            move(start,end){
                this.nowLeft = (1500/72) * end;
                this.distance = (start - end) * (1500/72); 
                this.target.style.left = this.nowLeft + "px";
                this.target.style.width = this.distance + "px";
                this.passed.style.width = end * (1500/72) + "px";
            },
        },
        model: {
        },
        props: {

        }

    }
</script>
<style scoped lang="scss" >
.schedule_con{
    .schedule_box{
        width: 1534px;
        height: 113px;
        background-image: url("~@/assets/bicycleImg/race_schedule_bg.png");
        background-size: 100% 100%;
        // position: relative;
        padding-top: 60px;
        .schedule_slider{
            width: 100%;
            height: 10px;
            background: red;
            position: relative;
            #schedule_bar_passed{
                position: absolute;
                width: 0;
                height: 15px;
                top: -3px;
                left: 0;
                background: #ff0;
                transition: all 1s linear;
            }
            .schedule_bar{
                position: absolute;
                width: 0;
                height: 15px;
                top: -3px;
                left: 0;
                background: #0f0;
                transition: all 1s linear;
                span{
                    margin-top: -20px;
                    color: #000;

                }
                .bicycle_foot{
                    float: left;
                    margin-left: -20px;
                }
                .bicycle_head{
                    float: right;
                    margin-right: -20px;
                }
            }
        }
    }
}
</style>
