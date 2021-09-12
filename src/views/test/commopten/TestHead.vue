<template>
  <div class="test-head">
    <div class="test-head-nickname">
      <el-input placeholder="昵称" size="mini">
        <template slot="prepend">昵称</template>
      </el-input>
    </div>
    <div class="test-head-nickname cs lg">
      <div class="left-name">工作年限</div>
      <el-date-picker
        size="mini"
        type="daterange"
        range-separator="至"
        start-placeholder="起"
        v-model="value1"
        end-placeholder="止">
      </el-date-picker>
    </div>
    <div class="test-head-nickname cs">
      <div class="left-name">所属学科</div>
      <el-select size="mini" v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="test-head-nickname">
      <el-input placeholder="职位" size="mini">
        <template slot="prepend">职位</template>
      </el-input>
    </div>

    <div class="test-head-nickname">
      <el-input placeholder="手机号" size="mini">
        <template slot="prepend">搜索</template>
      </el-input>
    </div>
    <div class="test-head-nickname">
      <el-button type="primary" size="mini" icon="el-icon-search">搜索</el-button>
      <el-button size="mini" icon="el-icon-position">重置</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestHead",
  data() {
    return {
      options: [{
        value: '选项1',
        label: '数学'
      }, {
        value: '选项2',
        label: '英语'
      }, {
        value: '选项3',
        label: '语文'
      }, {
        value: '选项4',
        label: '化学'
      }, {
        value: '选项5',
        label: '生物'
      }],
      value: '',
      value1: ''
    }
  }
}
</script>

<style lang="scss">
.test-head {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.test-head-nickname {
  display: flex;
  align-items: center;
  width: 200px;
  margin-right: 10px;
}

.el-date-editor {
  border-radius: 0 5px 5px 0;
}

.lg {
  width: 310px;
}

.cs {
  display: flex;
  align-items: center;

  .el-select .el-input input {
    border-radius: 0 5px 5px 0;
  }
}

.left-name {
  background-color: #F5F7FA;
  width: 150px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  border-radius: 5px 0 0 5px;
  color: #909399;
  border-bottom: 1px solid #DCDFE6;
  border-top: 1px solid #DCDFE6;
  border-left: 1px solid #DCDFE6;
  font-size: 12px;
}
</style>
