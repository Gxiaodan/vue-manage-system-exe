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
        <i-switch v-model="switch1" @on-change="change"/>
        <i-switch size="large" true-color="#0f0" false-color="#f00"/>
        <i-switch  :before-change="handleBeforeChange"/>
        <i-switch size="small" disabled/>
        <i-switch loading :value="true" />
        <i-switch loading :value="false" size="small" />
        <i-switch>
            <span slot="open">开</span>
            <span slot="close">关</span>
        </i-switch>
        
        <i-switch size="large" true-color="#0f0" false-color="ff0"/>
         <i-switch true-color="#13ce66" false-color="#ff4949" />
         <Table @on-current-change="choose" highlight-row :row-class-name="rowClassName" :columns="columns1" :data="data1"></Table>
    
        <Table border :columns="columns2" :data="data2">
            <template slot-scope="{row}" slot="name">
                <strong>{{row.name}}</strong>
            </template>
            <template slot-scope="{row, index}" slot="action">
                <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)" >View</Button>
                <Button type="error" size="small" @click="remove(index)">Delete</Button>
            </template>

        </Table>
        <Table border :columns="column3" :data="data3">

        </Table>
    
    </div>
</template>
<script>
    export default {
        name: "iview_form",
        data() {
            return {
                buttonSize:"large",
                loading: false,
                value1: "",
                value: "",
                switch1: false,
                columns1: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age',
                        className: 'demo-table-info-column'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03',
                        _highlight: true
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ],
                columns2: [
                    {
                        title: "Name",
                        slot: "name"
                    },
                    {
                        title:"Age",
                        key: "age"
                    },
                    {
                        title:"Address",
                        key: "address"
                    },
                    {
                        title: "Action",
                        slot: "action",
                        width: 150,
                        align: "center"
                    }
                ],
                data2: [
                     {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park'
                    }
                ],
                column3: [
                    {
                        title: "Name",
                        key: "name",
                        render: (h, params) => {
                            return h("div", [
                                h("Icon", {
                                    props: {
                                        type:"person"
                                    }
                                }),
                                h("strong",params.row.name)
                            ])
                        }
                    },
                    {
                        title: "Age",
                        key: "age"
                    },
                    {
                        title: "Address",
                        key: "address"
                    },
                    {
                        title: "Action",
                        key: "action",
                        width: 150,
                        algin: "center",
                        render: (h,params) => {
                            return h("div", [
                                h("Button", {
                                    props: {
                                        type: "primary",
                                        size: "small"
                                    },
                                    style: {
                                        marginRight: "5px"
                                    },
                                    on: {
                                        click: ()=>{
                                            this.show(params.index)
                                        }
                                    }
                                }, "View"),
                                h("Button", {
                                    props: {
                                        type: "error",
                                        size: "small"
                                    },
                                    on: {
                                       click: () => {
                                           this.remove(params.index)
                                       } 
                                    }
                                }, "Delete")
                            ]);
                        }
                    }
                ],
                data3:  [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park'
                    }
                ]
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
            choose(row,old){
                console.log(row)
                console.log(old)
            },
            rowClassName (row, index) {
                if (index === 1) {
                    return 'demo-table-info-row';
                } else if (index === 3) {
                    return 'demo-table-error-row';
                }
                return '';
            },
            toLoading(){
                this.loading = true;
            },
            change(status) {
                this.$Message.info("开关状态" + status)
            },
            handleBeforeChange() {
                return new Promise((resolve) => {
                    this.$Modal.confirm({
                        title: "切换确认",
                        content: "确认切换？",
                        onOk: ()=>{
                            resolve();
                        }
                    })
                })
            },
            show(index) {
                this.$Modal.info({
                    title:"User Info",
                    content: `Name: ${this.data2[index].name}<br>Age: ${this.data2[index].age}<br>Address:${this.data2[index].address}`
                })
            },
            remove(index) {
                this.data2.splice(index, 1);
            }
        },
        model: {
        },
        props: {

        }

    }
</script>
<style>
    .ivu-table .demo-table-info-row td{
        background-color: #2db7f5;
        color: #fff;
    }
    .ivu-table .demo-table-error-row td{
        background-color: #ff6600;
        color: #fff;
    }
    .ivu-table td.demo-table-info-column{
        background-color: #2db7f5;
        color: #fff;
    }
    .ivu-table .demo-table-info-cell-name {
        background-color: #2db7f5;
        color: #fff;
    }
    .ivu-table .demo-table-info-cell-age {
        background-color: #ff6600;
        color: #fff;
    }
    .ivu-table .demo-table-info-cell-address {
        background-color: #187;
        color: #fff;
    }
</style>
