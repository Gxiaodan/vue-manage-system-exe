<template>
    <div>
        <Button type="primary">Primary</Button>
        <Button type="error">error</Button>
        <Button type="default" ghost>llllllllll</Button>
        <Button type="success" ghost>llllllllll</Button>
        <Button type="primary" shape="circle" icon="ios-search"></Button>
        <Button type="primary" icon="ios-search">search</Button>
        <Button type="primary" icon="ios-search" shape="circle">search</Button>
        <Button  icon="ios-search" shape="circle">search</Button>
        <Button icon="ios-search">search</Button>
        <Button icon="ios-search" size="small">search</Button>
        <Button icon="ios-search" size="large">search</Button>
        <br/>
        <hr/>
        <RadioGroup v-model="buttonSize" type="button">
            <Radio label="large">Large</Radio>
            <Radio label="default">default</Radio>
            <Radio label="small">small</Radio>

        </RadioGroup>

        <hr/>
        <ButtonGroup :size="buttonSize">
            <Button :size="buttonSize" type="primary">
                <Icon type="ios-arrow-back"></Icon>
                fbackward
            </Button>
            <Button :size="buttonSize" type="primary">
                forward
                <Icon type="ios-arrow-forward"></Icon>
            </Button>
        </ButtonGroup>

        <hr/>
        <hr/>
        <Button type="success" long>submit</Button>
        <Button type="error" long>delete</Button>

        <hr/>
        <hr/>
        <Button type="dashed" disabled>Dashed(disabled)</Button>
        <Button type="text" disabled>Text(disabled)</Button>
        <hr/>
        <hr/>
        <Button type="primary" loading>loading=</Button>
        <Button type="primary" :loading="loading" @click="toLoading">
            <span v-if="!loading">Click me!</span>
            <span v-else>loading...</span>
        </Button>
        <hr/>
        <hr/>
        <h4>Icons</h4>
        <br/>
        <ButtonGroup>
            <Button type="primary">
                <Icon color="red" type="ios-arrow-back"></Icon>
                Backward
            </Button>
            <Button type="primary">
                forward
                <Icon type="ios-arrow-forward"></Icon>
            </Button>
        </ButtonGroup>
        <ButtonGroup vertical>
            <Button icon="ios-color-wand-outline"></Button>
            <Button icon="ios-sunny-outline"></Button>
            <Button icon="ios-crop"></Button>
            <Button icon="ios-color-filter-outline"></Button>
        </ButtonGroup>

        <hr/>
        <hr/>
        <ButtonGroup vertical>
            <Button icon="logo-facebook"></Button>
            <Button icon="logo-facebook"></Button>
            <Button icon="logo-facebook"></Button>
            <Button icon="logo-facebook"></Button>
        </ButtonGroup>
        <hr/>
        <hr/>
        <Button to="/components/icon-en">Normal</Button>
        <Button to="/components/icon-en" replace>Normal</Button>
        <Button to="//iviewui.com" target="_black">Normal</Button>

        <hr/>
        <hr/>
       
        


    </div>
</template>

<script>
    export default {
        name: "iviweBasic",
        data() {
            return {
                buttonSize:"large",
                loading: false
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