<template>
    <div>
        <Input v-model="value" placeholder="enter……" style="width:300px;"  type="password"/>
        <Input v-model="value" autosize placeholder="enter……" style="width:300px;" search enter-button="search"/>
        <Input v-model="value" placeholder="enter……" prefix="ios-clock-outline" clearable style="width:300px;" show-word-limit maxlength="5" />
        <Input v-model="value1">
            <span slot="prepend">http://</span>
            <span slot="append">.com</span>
        </Input>
        <Poptip trigger="focus">
            <Input v-model="value1" prefix="logo-usd" placeholder="sssss" style="width:120px"/>
            <div slot="content">{{formatNumber}}</div>
        </Poptip>
    </div>
</template>
<script>
    export default {
        name: "iview_form",
        data() {
            return {
                buttonSize:"large",
                loading: false,
                value1: ""
            }
        },
        computed: {
            formatNumber(){
                if(this.value1 === "") return "enter……";
                function parseNumber(str) {
                    const re = /(?=(?!)(d{3})+$)/g;
                    return str.replace(re,",");
                }
                return parseNumber(this.value1)
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
</style>
