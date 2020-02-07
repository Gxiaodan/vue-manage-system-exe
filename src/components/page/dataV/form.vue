<template>
    <div>
        <dv-water-level-pond :config="config" style="width:150px;height:200px" />
        <div style="width: 300px; height:200px;">
            <dv-border-box-1>dv-border-box-1</dv-border-box-1>
        </div>
        <div style="width: 300px; height:200px;">
            <dv-border-box-4>dv-border-box-4</dv-border-box-4>
        </div>
        <div style="width: 300px; height:200px;">
            <dv-border-box-1 :color="['red', 'green']" >dv-border-box-1</dv-border-box-1>
        </div>
        <div style="width: 300px; height:200px;">
            <dv-border-box-13>dv-border-box-13</dv-border-box-13>
        </div>
        <dv-scroll-ranking-board :config="configScroll" style="width:500px;height:300px" />
        <dv-scroll-board :config="configTable" style="width:500px;height:220px" />
    </div>
</template>
<script>
    export default {
        name: "dataV02",
        data() {
            return {
                config: {
                    data: [66, 45],
                    shape: 'round'
                },
                configTable: {
                    header: ['列1', '列2', '列3'],
                    data: [
                        ['行1列1', '行1列2', '行1列3'],
                        ['行2列1', '行2列2', '行2列3'],
                        ['行3列1', '行3列2', '行3列3'],
                        ['行4列1', '行4列2', '行4列3'],
                        ['行5列1', '行5列2', '行5列3'],
                        ['行6列1', '行6列2', '行6列3'],
                        ['行7列1', '行7列2', '行7列3'],
                        ['行8列1', '行8列2', '行8列3'],
                        ['行9列1', '行9列2', '行9列3'],
                        ['行10列1', '行10列2', '行10列3']
                    ]
                },
                configScroll: {
                    data: [
                        {
                        name: '周口',
                        value: 55
                        },
                        {
                        name: '南阳',
                        value: 120
                        },
                        {
                        name: '西峡',
                        value: 78
                        },
                        {
                        name: '驻马店',
                        value: 66
                        },
                        {
                        name: '新乡',
                        value: 80
                        },
                        {
                        name: '信阳',
                        value: 45
                        },
                        {
                        name: '漯河',
                        value: 29
                        }
                    ]
                    }
            }
        },
        computed: {
        },
        methods: {
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
