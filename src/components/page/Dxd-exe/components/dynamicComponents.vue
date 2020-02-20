<template>
    <div>
        动态组件
        <i-select v-model="data.control" style="width:200px" @on-change="controlChange">
              <i-option v-for="(item, index) in iptTypeList" :value="item.value" :key="index">{{ item.name }}</i-option>
            </i-select>

        <component ref="layer" v-bind:is="data.control" v-bind="data.attr" v-model="data.value">
            <template v-if="data.control === 'Input' && data.slot.append">
              <span slot="append">{{ data.slot.append }}</span>
            </template>
          </component>
    </div>
</template>

<script>
    export default {
        name: "DynamicComponents",
        data() {
            return {
             data: { attr: {}, slot: {}, control: 'Input', value: '' },
            iptTypeList: [
                {
                name: '日期时间',
                value: 'DatePicker'
                },
                {
                name: '文本输入框',
                value: 'Input'
                },
                {
                name: '滑块',
                value: 'Slider'
                }
            ],
            }
        },
        methods: {
            controlChange(value) {
                if (value === 'Slider') {
                    let { max, min } = this.data.attr
                    this.data.attr = { max: max || 100, min: min || 1 }
                } else if (value === 'Input') {
                    let { maxlength } = this.data.attr
                    this.data.attr = { maxlength: maxlength || 20 }
                } else {
                    let { type } = this.data.attr
                    this.data.attr = { type: type || 'datetime' }
                }

                this.data.value = undefined
                }
        },
        model: {
        },
        props: {
        }

    }
</script>