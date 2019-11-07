<template>
    <div>
        exechild01
        <!-- <el-select v-model="value" placeholder="请选择" @change="selectChange">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select> -->

        <!-- <el-select v-model="value" placeholder="请选择" 
        @change = "selectChange" > -->
        <!-- <el-select v-model="value" placeholder="请选择" 
        @visible-change = "selectChange"> -->
        <el-select v-model="value" placeholder="请选择" 
        @change = "selectChange" >
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
    </div>
</template>

<script>
    export default {
        name: "ExeChild01",
        data() {
            return {
                options: [{
                value: '选项1',
                label: '黄金糕'
                }, {
                value: '选项2',
                label: '双皮奶'
                }, {
                value: '选项3',
                label: '蚵仔煎'
                }, {
                value: '选项4',
                label: '龙须面'
                }, {
                value: '选项5',
                label: '北京烤鸭'
                }],
                value: ''
            }
        },
        methods: {
            selectChange(value){
                // console.log(value);
                // <1>不是v-model的情况
                // this.$emit("change",value);
                // <2>原生方法v-model 方法为change的情况
                // this.$emit("change", value);
                // <3>原生方法v-model方法为visible-change的情况
                // this.$emit("visible-change", value);
                // <4>v-model 方法为sel-cahnge 自定义方法的情况
                this.$emit("sel-cahnge", value);
                // <5>默认情况下，一个组件上的 v-model 会把 value 用作 prop 且把 input 用作 event。
                // this.$emit("input", value); 
            },
        },
        model: {
            prop: "selValue", // 默认情况下，一个组件上的 v-model 会把 value 用作 prop 且把 input 用作 event。
            event: "sel-cahnge", // 默认情况下，一个组件上的 v-model 会把 value 用作 prop 且把 input 用作 event。

            // event: "visible-change",
            // event: "change"
        },
        props: {
            selValue: {
                required: false,
                type: String
                //  type: Boolean
            }
        }

    }
</script>