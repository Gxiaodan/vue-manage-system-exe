<template>
    <div>
        antV
        <div id="canvas"></div>
    </div>
</template>
<script>
import {Line} from '@antv/g2plot';

    export default {
        name: "antV01",
        data() {
            return {
                data: [
                    { year: '1991', value: 3 },
                    { year: '1992', value: 4 },
                    { year: '1993', value: 3.5 },
                    { year: '1994', value: 5 },
                    { year: '1995', value: 4.9 },
                    { year: '1996', value: 6 },
                    { year: '1997', value: 7 },
                    { year: '1998', value: 9 },
                    { year: '1999', value: 13 },
                ]
            }
        },
        methods: {
            initLine(){
                const linePlot = new Line('canvas', {
                    title: {
                        visible: true,
                        text: "基础折线图"
                    },
                    description: {
                        visible: true,
                        text: "j就开始打卡曼科技阿拉基第三"
                    },
                    point: {
                        visible: true,
                        size: 5,
                        color: 'white',
                        style: {
                        stroke: '#FE740C',
                        lineWidth: 2,
                        fillOpacity: 0.6,
                        },
                    },
                    label: {
                        visible: true
                    },
                    data: this.data,
                    xField: 'year',
                    yField: 'value',
                    });

                    linePlot.render();
            }
        },
        model: {
        },
        created(){
            
        },
        mounted(){
            this.initLine();
        },
        props: {

        }

    }
</script>
<style>
</style>
