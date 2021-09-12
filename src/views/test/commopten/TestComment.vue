<template>
  <div class="test-table">
    <el-table
      border
      :data="tableData"
      style="width: 100%"
      :default-sort="{prop: 'date', order: 'descending'}"
    >
      <el-table-column
        type="selection"
        width="50">
      </el-table-column>
      <el-table-column
        prop="nickname"
        label="昵称"
        sortable
        width="120">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="手机号"
        sortable
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="name"
        label="真实姓名"
        sortable
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="subject"
        label="所属学科"
        sortable
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="job"
        label="职位"
        sortable
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="year"
        label="工作年限"
        sortable
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="upDataTime"
        label="录入时间"
        sortable
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作"
        sortable
        :formatter="formatter">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small">
            查看
          </el-button>
          <el-button
            type="text"
            size="small">
            编辑
          </el-button>
          <el-button
            type="text"
            size="small">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="test-bottom"  v-if="tableData.length > 0">
      <div>显示{{ 1 }}到{{ tableData.length }}条记录,共{{ tableData.length }}条记录</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestComment",
  props: {
    tableData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    formatter(row, column) {
      return row.address;
    }
  }
}
</script>

<style scoped>

</style>
