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

        <el-table
      :data="tableData"
      style="width: 100%;margin-bottom: 20px;"
      row-key="id"
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
    >
      <el-table-column
        v-for="(item,index) in tableList"
        :key="index"
        :label="item.label"
        :prop="item.prop"
      ></el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button
            @click="handleClick(scope.row)"
            type="primary"
            size="mini"
            v-if="!scope.row.date"
          >编辑</el-button>
          <el-button
            @click="downloadImg(scope.row)"
            type="text"
            size="small"
            v-if="!scope.row.date"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-table
    :data="tableData5"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
          <el-table-column>{{ props.row.name }}</el-table-column>
          <el-table-column>{{ props.row.name }}</el-table-column>
        <!-- <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="商品名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="所属店铺">
            <span>{{ props.row.shop }}</span>
          </el-form-item>
          <el-form-item label="商品 ID">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="店铺 ID">
            <span>{{ props.row.shopId }}</span>
          </el-form-item>
          <el-form-item label="商品分类">
            <span>{{ props.row.category }}</span>
          </el-form-item>
          <el-form-item label="店铺地址">
            <span>{{ props.row.address }}</span>
          </el-form-item>
          <el-form-item label="商品描述">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
        </el-form> -->
      </template>
    </el-table-column>
    <el-table-column
      label="商品 ID"
      prop="id">
    </el-table-column>
    <el-table-column
      label="商品名称"
      prop="name">
    </el-table-column>
    <el-table-column
      label="描述"
      prop="desc">
    </el-table-column>
  </el-table>
<div class="aa" ref="aa">
  就看看is没借口is空间看好借好还或或或或或或或或或或或或啦啦啦啦啦啦啦啦绿绿绿绿一一一一一  
</div>
<el-button @click="refreshHtml(10,20)">refreshHtml</el-button>
<el-button @click="refreshHtml(15,40)">refreshHtml</el-button>
    </div>
</template>

<script>
    export default {
        name: "ExeChild01",
        data() {
            return {
                tableData5: [{
          id: '12987122',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987123',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987125',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987126',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }],
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
                value: '',
                 tableList: [
        {
          label: "级别",
          prop: "date"
        },
        {
          label: "名称",
          prop: "name"
        },
        {
          label: "别名",
          prop: "alias"
        },
        {
          label: "操作员",
          prop: "operator"
        },
        {
          label: "状态",
          prop: "state"
        }
      ],
      tableData: [
        {
          id: 1,
          date: "个人",
          children: [
            {
              id: 11,
              name: "第二根半价套餐",
              alias: "是兄弟就来割",
              operator: "铁手无情",
              state: "无痛"
            }
          ]
        },
        {
          id: 2,
          date: "科室",
          children: []
        },

        {
          id: 3,
          date: "全院",
          children: [
            {
              id: 31,
              name: "第二根半价套餐",
              alias: "是兄弟就来割",
              operator: "铁手无情",
              state: "无痛"
            },
            {
              id: 41,
              name: "第二根半价套餐",
              alias: "是兄弟就来割",
              operator: "铁手无情",
              state: "无痛"
            }
          ]
        }
      ]
            }
        },
        methods: {
          refreshHtml(start,end){
             let dom = this.$refs.aa;
              console.log(dom, 'dom===========')
              let html = dom.innerHTML;
              console.log(html, 'html===========')
              let text = dom.textContent.replace(/\s+/g,"");
              console.log(text, 'text===========')
            let txtArr = text.split('');
              console.log(txtArr, 'txtArr===========')
              txtArr.splice(end,0,"</span>")
              txtArr.splice(start,0,"<span style='color:red;'>")
              console.log(txtArr.join(""), 'newHtml===========')
              dom.innerHTML = txtArr.join("");
          },
          // refresh($('#doc'),10,20);
          refresh(dom,start,end){ 
              let html = dom.html();
              let text = dom.text().replace(/\s+/g,""); // 去除空格
              let txtArr = text.split('');
              txtArr.splice(end,0,"</span>")
              txtArr.splice(start,0,"<span style='color:red;'>") // 高亮的样式，这来设置的颜色为red
              dom.html(txtArr.join(""));
          },
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
        },
        mounted(){
        debugger
         
        }

    }
</script>


<style scoped>
.active{
  font-size: bolder;
  color: red;
}
</style>