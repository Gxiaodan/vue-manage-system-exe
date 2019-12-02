<template>
    <!-- <div class="slider_box"> -->
        <el-slider
        v-model="value"
        range
        :marks="marks">
        </el-slider>
    <!-- </div> -->
</template>
<script>
    export default {
        name: "ele_slider",
        data() {
            return {
                buttonSize:"large",
                loading: false,
                 value: [30, 60],
                marks: {
                    0: '起点',
                    8: '8°C',
                    37: '37°C',
                    50: {
                        style: {
                        color: '#1989FA'
                        },
                        label: this.$createElement('strong', '50%')
                    },
                    60: "终点"
                }
            }
        },
        methods: {
            toLoading(){
                this.loading = true;
            }
        },
        model: {
        },
        props: {

        }

    }
</script>
<style>
    .slider_box{
        width: 100%;
        height: 50px;
        background: #ff3;
    }
</style>
