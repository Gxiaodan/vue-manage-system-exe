<template>
    <div>
        <Menu mode="horizontal" :theme="theme1" active-name="1">
            <MenuItem name="1">
                <Icon type="ios-paper"></Icon>
                内容管理
            </MenuItem>
            <MenuItem name="2">
                <Icon type="ios-paper"></Icon>
                内容管理2
            </MenuItem>
            <Submenu name="3">
                <template slot="title">
                    <Icon type="ios-stats"></Icon>
                    统计分析
                </template>
                <MenuGroup title="使用">
                    <MenuItem name="3-1">llllas</MenuItem>
                    <MenuItem name="3-2">llllas</MenuItem>
                    <MenuItem name="3-3">llllas</MenuItem>
                </MenuGroup>
                <MenuGroup title="留存">
                    <MenuItem name="3-4">llllas</MenuItem>
                    <MenuItem name="3-5">llllas</MenuItem>
                    <MenuItem name="3-6">llllas</MenuItem>
                </MenuGroup>
            </Submenu>
            <MenuItem name="4">
                <Icon type="ios-paper"></Icon>
                内容管理4
            </MenuItem>
        </Menu>
        <br/>
        <p>change theme</p>
        <RadioGroup v-model="theme1">
            <Radio label="light"></Radio>
            <Radio label="dark"></Radio>
            <Radio label="primary"></Radio>
        </RadioGroup>
        <Tabs value="name1">
            <tabPane label="标签一" name="name1" disabled>标签一内容</tabPane>
            <tabPane label="标签2" name="name2">标签2内容</tabPane>
            <tabPane label="标签3" name="name3">标签3内容</tabPane>
        </Tabs>

        <Dropdown>
            <a href="javascript:void(0)">
                下拉菜单
                <Icon type="ios-arrow-down" />
            </a>
            <DropdownMenu slot="list">
                <DropdownItem>dsassa</DropdownItem>
                <DropdownItem>dsassa</DropdownItem>
                <DropdownItem disabled>dsassa</DropdownItem>
                <DropdownItem>dsassa</DropdownItem>
                <DropdownItem disabled>dsassa</DropdownItem>
            </DropdownMenu>
        </Dropdown>
        <Dropdown style="margin-left:20px;">
            <Button type="primary">
                下拉菜单
                <Icon type="ios-arrow-down" />
            </Button>
            <DropdownMenu slot="list">
                <DropdownItem>dsassa</DropdownItem>
                <DropdownItem>dsassa</DropdownItem>
                <DropdownItem disabled>dsassa</DropdownItem>
                <DropdownItem>dsassa</DropdownItem>
                <DropdownItem disabled>dsassa</DropdownItem>
            </DropdownMenu>
        </Dropdown>

        <Page :total="100" show-sizer show-elevator show-total></Page>
        <Breadcrumb>
            <BreadcrumbItem to="/">
                <Icon type="ios-home-outline" />Home
            </BreadcrumbItem>
            <BreadcrumbItem to="/components/breadcrumb">
                <Icon type="ios-home-outline" />Home
            </BreadcrumbItem>
            <BreadcrumbItem>
                <Icon type="ios-home-outline" />Home
            </BreadcrumbItem>
        </Breadcrumb>

        <Badge :count="3">
            <a href="#" class="demo-badge"/>
        </Badge>
        <Badge>
            <a href="#" class="demo-badge" style="margin-left: 32px"/>
            <Icon type="md-time" slot="count" color="#ed4014" size="16" />
        </Badge>
        <Badge color="purple" text="kkkk"></Badge>
        <Badge color="#00f" text="kkkk"></Badge>
        <Badge :count="5" type="info">
            <a href="#" class="demo-badge"></a>
        </Badge>
        <Badge :count="5" type="error">
            <a href="#" class="demo-badge"></a>
        </Badge>
        <Steps :current="1" status="error" direction="vertical">
            <Step title="fff" icon="ios-person" content="lllsjkkjsdfkhs"></Step>
            <Step title="fff"  content="lllsjkkjsdfkhs"></Step>
            <Step title="fff" content="lllsjkkjsdfkhs"></Step>
            <Step title="fff" icon="ios-person" content="lllsjkkjsdfkhs"></Step>
        </Steps>
         <Steps :current="1" status="error">
            <Step title="已完成" content="这里是该步骤的描述信息"></Step>
            <Step title="进行中" content="这里是该步骤的描述信息"></Step>
            <Step title="待进行" content="这里是该步骤的描述信息"></Step>
            <Step title="待进行" content="这里是该步骤的描述信息"></Step>
        </Steps>
        <hr/>
        <Button @click="start">Start</Button>
    </div>
</template>
<script>
    export default {
        name: "navigation",
        data() {
            return {
                theme1:"light"
            }
        },
        methods: {
            toLoading(){
            },
            start() {
                this.$Loading.start();
            }
        },
        model: {
        },
        props: {

        }

    }
</script>
<style>
    .demo-badge{
        width: 42px;
        height: 42px;
        background: rgb(35, 124, 75);
        border-radius: 6px;
        display: inline-block;
    }
</style>
