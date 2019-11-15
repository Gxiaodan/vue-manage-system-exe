<template>
    <div>
        print
        <div id="check-pass-print">
            <p class="normal line">一、下列时段禁止通行</p>
            <p  class="normal line">早高峰：7:00至8:30</p>
            <p  class="normal line">中高峰：11:00至12:30</p>
            <p  class="normal line">晚高峰：17:00至20:30</p>
            <p  class="normal line">夜   间：23:00至次日5:00</p>
            <p  class="normal">二、遇有重大活动或交通保卫任务时，不得通行；</p>
            <p  class="normal">三、核载15吨以上的不得从河沥溪大桥、天桥通行。</p>
            <p  class="normal">四、手写无效。</p>
            <p  class="normal">五、载物行驶时严禁超载超限、严禁遗洒、飘散载运物。</p>
            <p  class="normal">六、不得占道停放影响道路通行。</p>
            <p  class="lastLine">发证单位：宁国市公安局交通管理大队</p>
        </div>
        <Button @click="printPage('check-pass-print')">
            打印预览
        </Button>
    </div>
</template>
<script>
    export default {
        name: "print",
        data() {
            return {
            }
        },
        methods: {
            printPage(id){
                let headhtml = "<html><head>";
                let str ='<style>';
                str+='body{width: 100%;height:100%;}#middle-contanier{margin-left:200px}#pageOne{height:700px;margin:26mm 10mm}#pageTwo{height:680px;}#left-contanier{margin-left:10px}#right-contanier{padding-left:50px}';
                str+='</style><title></title></head><body>';

                let foothtml = "</body>";
                let newhtml = document.getElementById(id).innerHTML;
                document.body.innerHTML = headhtml + str + newhtml + foothtml;
                if (!!window.ActiveXObject || "ActiveXObject" in window) { //是否ie
                    this.remove_ie_header_and_footer();
                }

                window.print();
                document.body.innerHTML = this.oldhtml;
                window.location.reload();
            },
        },
        model: {
        },
        props: {

        }

    }
</script>
<style>
</style>
