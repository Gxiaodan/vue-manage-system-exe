<template>
    <div id="app">
        <VueDragResize :isActive="true" :minw="minw" :minh="minh" :w="dragw" :h="dragh" v-on:resizing="resize" v-on:dragging="resize">
            <div class="box" :style="{width: boxW,height: boxH}">
                1
            </div>
            <div class="box" :style="{width: boxW,height: boxH}">
                2
            </div>
            <div class="box" :style="{width: boxW,height: boxH}">
                3
            </div>
            <div class="box" :style="{width: boxW,height: boxH}">
                4
            </div>
        </VueDragResize>
    </div>
</template>

<script>
    import VueDragResize from 'vue-drag-resize';

    export default {
        name: 'app',

        components: {
            VueDragResize
        },

        data() {
            return {
                width: 0,
                height: 0,
                top: 0,
                left: 0,
                boxW: "200px",
                boxH: "200px",
                minw: 200,
                minh: 400,
                dragw: 200,
                dragh: 800
            }
        },

        methods: {
            resize(newRect) {
                this.width = newRect.width;
                this.height = newRect.height;
                this.top = newRect.top;
                this.left = newRect.left;
                if(this.width >= 400) {
                    this.minh = 400;
                    this.boxW = (this.width/2) + 'px';
                    if(this.height > 400) {
                        this.boxH = (this.height/2) + 'px';
                    }
                } else {
                    this.minh = 800;
                    this.dragh = 800;
                    this.boxH = '200px';
                    if(this.height > 400) {
                    }
                }
            }
        }
    }
</script>
<style scoped>
    .box{
        float: left;
        width: 200px;
        height: 200px;
        background: #3ff;
        border: 1px solid #000;
    }
</style>
