<template>
    <div style="width:300px; height: 200px;">
        <dv-border-box-13>dv-border-box-13</dv-border-box-13>
        <dv-digital-flop :config="configDigital" style="width:100px;height:50px;" />
        <dv-percent-pond :config="configPercent" style="width:200px;height:100px;" />
    </div>
</template>
<script>
import qs from "qs"
import axios from 'axios'
    export default {
        name: "dataV01",
        data() {
            return {
                buttonSize:"large",
                loading: false,
                configDigital: [
                    {
                        number: [10, 100],
                        content: '{nt}个{nt}元'
                    },
                    {
                        number: [100, 1000],
                        content: '{nt}个{nt}元'
                    }
                ],
                configPercent:{
                    value: 66
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
        created(){
        },
        props: {

        }

    }
</script>
<style>
</style>
