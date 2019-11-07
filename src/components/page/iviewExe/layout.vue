<template>
    <div>
        <Row>
            <Col span="12">col-12</Col>
            <Col span="12">col-12</Col>
        </Row>
        <hr/>
        <Row>
            <Col span="8">col-8</Col>
            <Col span="8">col-8</Col>
            <Col span="8">col-8</Col>
        </Row>
        <hr/>
        <Row>
            <Col span="6">col-6</Col>
            <Col span="6">col-6</Col>
            <Col span="6">col-6</Col>
            <Col span="6">col-6</Col>
        </Row>
        <hr/>
        <Row type="flex">
            <Col span="6" order="4">1 | order-4</Col>
            <Col span="6" order="3">2 | order-3</Col>
            <Col span="6" order="1">3 | order-1</Col>
            <Col span="6" order="2">4 | order-2</Col>
        </Row>
        <hr/>
        <Row>
            <Col span="8">col-8</Col>
            <Col span="8" offset="8">col-8 | offset-8</Col>
        </Row>
        <hr/>
        <Row>
            <Col span="6" offset="8">col-6 | offset-8</Col>
            <Col span="6" offset="4">col-6 | offset-4</Col>
        </Row>
        <hr/>
        <Row>
            <Col span="12" offset="8">col-12 | offset-8</Col>
        </Row>
        <hr/>
        <Row type="flex" justify="start" class="code-row-bg">
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
        </Row>
        <hr/>
        <Row type="flex" justify="end" class="code-row-bg">
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
        </Row>
        <hr/>
         <Row type="flex" justify="center" class="code-row-bg">
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
        </Row>
        <hr/>
         <Row type="flex" justify="space-between" class="code-row-bg">
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
        </Row>
        <hr/>
         <Row type="flex" justify="space-around" class="code-row-bg">
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
        </Row>
        <hr/>
        <Row type="flex" justify="center" align="top" class="code-row-bg">
            <Col span="4"><p style="height: 80px">col-4</p></Col>
            <Col span="4"><p style="height: 30px">col-4</p></Col>
            <Col span="4"><p style="height: 100px">col-4</p></Col>
            <Col span="4"><p style="height: 60px">col-4</p></Col>
        </Row>
        <hr/>
        <Row type="flex" justify="center" align="bottom" class="code-row-bg">
            <Col span="4"><p style="height: 80px">col-4</p></Col>
            <Col span="4"><p style="height: 30px">col-4</p></Col>
            <Col span="4"><p style="height: 100px">col-4</p></Col>
            <Col span="4"><p style="height: 60px">col-4</p></Col>
        </Row>
        <hr/>
        <Row type="flex" justify="center" align="middle" class="code-row-bg">
            <Col span="4"><p style="height: 80px">col-4</p></Col>
            <Col span="4"><p style="height: 30px">col-4</p></Col>
            <Col span="4"><p style="height: 100px">col-4</p></Col>
            <Col span="4"><p style="height: 60px">col-4</p></Col>
        </Row>
        <hr/>
        <Row>
            <Col :xs="2" :sm="4" :md="6" :lg="8">Col</Col>
            <Col :xs="20" :sm="16" :md="12" :lg="8">Col</Col>
            <Col :xs="2" :sm="4" :md="6" :lg="8">Col</Col>
        </Row>

        <hr/>
        <Row>
            <Col :xs="{span:5,offset:1}" :lg="{span:6,pffset:2}">Col</Col>
            <Col :xs="{span:11,offset:1}" :lg="{span:6,pffset:2}">Col</Col>
            <Col :xs="{span:5,offset:1}" :lg="{span:6,pffset:2}">Col</Col>
        </Row>

        <hr/>
        <Layout>
            <Header>header</Header>
            <Content>content</Content>
            <Footer>footer</Footer>
        </Layout>
         <Layout>
            <Header>header</Header>
            <Layout>
                <Sider hide-trigger>Sider</Sider>
                <Content>content</Content>
            </Layout>
            <Footer>footer</Footer>
        </Layout>
        <Layout>
            <Header>header</Header>
            <Layout>
                <Content>content</Content>
                <Sider hide-trigger>Sider</Sider>
            </Layout>
            <Footer>footer</Footer>
        </Layout>
        <Layout>
            <Sider hide-trigger>Sider</Sider>
            <Layout>
                <Header>header</Header>
                <Content>content</Content>
                <Footer>footer</Footer>
            </Layout>
        </Layout>
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>
                            Item 1
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-keypad"></Icon>
                            Item 2
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="ios-analytics"></Icon>
                            Item 3
                        </MenuItem>
                        <MenuItem name="4">
                            <Icon type="ios-paper"></Icon>
                            Item 4
                        </MenuItem>

                    </div>
                </Menu>
            </Header>
            <Layout>
                <Sider hide-trigger :style="{background:'#fff'}">
                    <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                Item 1
                            </template>
                            <MenuItem name="1-1">option 1</MenuItem>
                            <MenuItem name="1-2">option 2</MenuItem>
                            <MenuItem name="1-3">option 3</MenuItem>
                            <MenuItem name="1-4">option 4</MenuItem>
                        </Submenu>
                         <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                Item 1
                            </template>
                            <MenuItem name="2-1">option 1</MenuItem>
                            <MenuItem name="2-2">option 2</MenuItem>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                Item 1
                            </template>
                            <MenuItem name="3-1">option 1</MenuItem>
                            <MenuItem name="3-2">option 2</MenuItem>
                        </Submenu>
                    </Menu>

                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <Breadcrumb :style="{margin: '24px 0'}">
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>components</BreadcrumbItem>
                        <BreadcrumbItem>layout</BreadcrumbItem>
                    </Breadcrumb>
                    <Content :style="{padding: '24px', minHeight: '280px', background:'#fff'}">
                        content
                    </Content>
                </Layout>
            </Layout>
        </Layout>

        <List header="Header" footer="Footer" border>
            <ListItem>this is a piece of text</ListItem>
            <ListItem>this is a piece of text</ListItem>
            <ListItem>this is a piece of text</ListItem>

        </List>
         <List header="Header" footer="Footer" border size="small">
            <ListItem>this is a piece of text</ListItem>
            <ListItem>this is a piece of text</ListItem>
            <ListItem>this is a piece of text</ListItem>

        </List>
        <Card style="width:320px;">
            <div style="text-align:center;">
                <img/>
                <h3>ksjkjsdl</h3>
            </div>
        </Card>
        <Collapse v-model="value2" accordion>
            <Panel name="1">
                nkjdk
                <p slot="content"> ewwesd</p>
            </Panel>
            <Panel name="2">
                nkjdk
                <p slot="content"> ewwesd</p>
            </Panel>
            <Panel name="3">
                nkjdk
                <p slot="content"> ewwesd</p>
            </Panel>
        </Collapse>
        <div class="demo-split">
            <Split v-model="split2" mode="vertical">
                <div slot="top" class="demo-split-pane">
                    ksdjfk
                </div>
                <div slot="bottom" class="demo-split-pane">
                    bkjkl,l
                </div>
            </Split>
        </div>
        <div class="demo-split">
            <Split v-model="split3">
                <div slot="left" class="demo-split-pane no-padding">
                    <Split v-model="split4" mode="vertical">
                        <div slot="top" class="demo-split-pane">
                                top ddd
                        </div>
                        <div slot="bottom" class="demo-split-pane">
                            Bottom ddddd
                        </div>
                    </Split>

                </div>
                <div slot="right" class="demo-split-pane">
                    right dddd
                </div>
            </Split>
        </div>
    </div>

</template>

<script>
    export default {
        name: "iviewLayout",
        data() {
            return {
                value2: "2",
                split2: 0.5,
                split3: 0.5,
                split4: 0.5,
            }
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
    .demo-split{
        height: 200px;
        border: 1px solid #dcdee2;
    }
    .demo-split-pane{
        padding: 10px;
    }
    .demo-split-pane.no-padding{
        height: 200px;
        padding: 0;
    }
    .demo-split{
        height: 200px;
        border: 1px solid #dcdee2;
    }
    .demo-split-pane{
        padding: 10px;
    }
    .ivu-col{
        border: 1px solid #f00;
        background: #ff0;
    }
    hr{
        margin: 10px 0;

    }
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }
</style>