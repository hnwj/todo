<template>
  <div id="app">
    <a-input placeholder="请输入任务" class="my_ipt" :value="inputValue" @change="handleInputChange"/>
    <a-button type="primary" @click="addItemTodo">添加事项</a-button>

    <a-list bordered :dataSource="list" class="dt_list">
      <a-list-item slot="renderItem" slot-scope="item">
        <!-- 复选框 -->
        <a-checkbox :checked="item.done" @change="(e)=>{cbStatusChanged(e,item.id)}">{{ item.info }}</a-checkbox>
        <!-- 删除链接 -->
        <a slot="actions" @click="removeItem(item.id)">删除</a>
      </a-list-item>

      <!-- footer区域 -->
      <div class="footer" slot="footer">
        <span>{{unDoneLength}}条剩余</span>
        <a-button-group>
          <a-button type="primary">全部</a-button>
          <a-button>未完成</a-button>
          <a-button>已完成</a-button>
        </a-button-group>
        <a @click="clear">清除已完成</a>
      </div>
    </a-list>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'app',
  data () {
    return {

    }
  },
  created () {
    this.$store.dispatch('getList')
  },
  computed: {
    ...mapState(['list', 'inputValue']),
    ...mapGetters(['unDoneLength'])
  },
  methods: {
    handleInputChange (e) {
      console.log(e.target.value)
      this.$store.commit('setInputValue', e.target.value)
    },
    // 添加事项
    addItemTodo () {
      if (this.inputValue.trim().length <= 0) {
        return this.$message.warning('输入不能为空！')
      }
      this.$store.commit('addItem')
    },
    // 按照id,删除事项
    removeItem (id) {
      this.$store.commit('removeItem', id)
    },
    // 修改选中的状态
    cbStatusChanged (e, id) {
      console.log(e.target.checked)
      console.log(id)
      const params = {
        id: id,
        status: e.target.checked
      }
      this.$store.commit('changeStatus', params)
    },
    //  clear所有完成的事项
    clear()
  }
}
</script>
<style scoped>
#app {
  padding: 10px;
}
.my_ipt {
  width: 500px;
  margin-right: 10px;
}
.dt_list {
  width: 500px;
  margin-top: 10px;
}
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
