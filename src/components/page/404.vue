<template>
  <div class="error-page">
      <div class="error-code">4<span>0</span>4</div>
      <!-- <cascad-menu :menus="menus"></cascad-menu> -->
      <div class="error-desc">啊哦~ 你所访问的页面不存在</div>
      <div class="error-handle">
          <router-link to="/">
            <el-button type="primary" size="large">返回首页</el-button>
          </router-link>
          <el-button class="error-btn" type="primary" size="large" @click="goBack">返回上一页</el-button>
      </div>
  </div>
</template>

<script>
import CascadMenu from '../common/CascadMenu'

export default {
    components: {
        CascadMenu
    },
  methods: {
      goBack(){
          this.$router.go(-1);
      }
  },
  data() {
      return {
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
  }
}
</script>


<style scoped>
.error-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: #f3f3f3;
}
.error-code {
  color: #2d8cf0;
  font-size: 250px;
  font-weight: bolder;
  line-height: 1;
}
.error-code span {
  color: #00a854;
}
.error-desc {
  color: #777;
  font-size: 30px;
}
.error-handle {
  padding-bottom: 200px;
  margin-top: 30px;
}
.error-btn {
  margin-left: 100px;
}
</style>
