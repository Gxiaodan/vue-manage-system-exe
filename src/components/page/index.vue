<template>
    <div>
     index.vue
     <test-page1/>
     <button @click="changeMenu()">changeMenu</button>
     <cascad-menu :menus="menus"></cascad-menu>
    </div>
</template>

<script>
    import TestPage1 from "./components/TestPage1"
    import CascadMenu from './components/CascadMenu.vue'
    export default {
         name: 'aaa',
        components: {
            TestPage1,
            CascadMenu
        },
        data() {
            return  { 
                menus: [
                    {
                    name: '菜单1',
                    data: [
                        {
                        name: '1.1'
                        },
                        {
                        name: '1.2'
                        },
                        {
                        name: '1.3'
                        },
                        {
                        name: '1.4'
                        },
                        {
                        name: '1.5'
                        },
                        {
                        name: '1.6'
                        }
                    ]
                    },
                    {
                    name: '菜单8',
                    data: [
                        {
                        name: '1.1'
                        },
                        {
                        name: '1.2'
                        },
                        {
                        name: '1.3'
                        },
                        {
                        name: '1.4'
                        },
                        {
                        name: '1.5'
                        },
                        {
                        name: '1.6'
                        }
                    ]
                    },
                    {
                    name: '菜单2',
                    data: [
                        {
                        name: '1.1'
                        },
                        {
                        name: '1.2'
                        },
                        {
                        name: '1.3'
                        },
                        {
                        name: '1.4'
                        },
                        {
                        name: '1.5'
                        },
                        {
                        name: '1.6'
                        }
                    ]
                    },
                    {
                    name: '菜单3',
                    data: [
                        {
                        name: '1.1'
                        },
                        {
                        name: '1.2'
                        },
                        {
                        name: '1.3'
                        },
                        {
                        name: '1.4'
                        },
                        {
                        name: '1.5'
                        },
                        {
                        name: '1.6'
                        }
                    ]
                    },
                    {
                    name: '菜单4',
                    data: [
                        {
                        name: '1.1'
                        },
                        {
                        name: '1.2'
                        },
                        {
                        name: '1.3'
                        },
                        {
                        name: '1.4'
                        },
                        {
                        name: '1.5'
                        },
                        {
                        name: '1.6'
                        }
                    ]
                    },
                    {
                    name: '菜单5',
                    data: [
                        {
                        name: '1.1'
                        },
                        {
                        name: '1.2'
                        },
                        {
                        name: '1.3'
                        },
                        {
                        name: '1.4'
                        },
                        {
                        name: '1.5'
                        },
                        {
                        name: '1.6'
                        }
                    ]
                    },
                    {
                    name: '菜单6',
                    data: [
                        {
                        name: '1.1'
                        },
                        {
                        name: '1.2'
                        },
                        {
                        name: '1.3'
                        },
                        {
                        name: '1.4'
                        },
                        {
                        name: '1.5'
                        },
                        {
                        name: '1.6'
                        }
                    ]
                    },
                    {
                    name: '菜单7',
                    data: [
                        {
                        name: '1.1'
                        },
                        {
                        name: '1.2'
                        },
                        {
                        name: '1.3'
                        },
                        {
                        name: '1.4'
                        },
                        {
                        name: '1.5'
                        },
                        {
                        name: '1.6'
                        }
                    ]
                    },
                    {
                    name: '菜单8',
                    data: [
                        {
                        name: '1.1'
                        },
                        {
                        name: '1.2'
                        },
                        {
                        name: '1.3'
                        },
                        {
                        name: '1.4'
                        },
                        {
                        name: '1.5'
                        },
                        {
                        name: '1.6'
                        }
                    ]
                    },
                    {
                    name: '菜单9',
                    data: [
                        {
                        name: '1.1'
                        },
                        {
                        name: '1.2'
                        },
                        {
                        name: '1.3'
                        },
                        {
                        name: '1.4'
                        },
                        {
                        name: '1.5'
                        },
                        {
                        name: '1.6'
                        }
                    ]
                    }
                ]
        
            }
        },
        methods: {
            changeMenu() {
                this.menus = [];
            }
        }
    }
</script>

<style scoped>
.cascad-con {
  position: relative;
}
</style>