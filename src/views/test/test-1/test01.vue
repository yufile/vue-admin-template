<template>
  <div class="test">
    <TestHead/>
    <test-comment :table-data="tableData"/>
  </div>
</template>

<script>
import { getTestList } from '@/api/test'
import TestHead from '@/views/test/commopten/TestHead'
import TestComment from '@/views/test/commopten/TestComment'

export default {
  name: 'Test01',
  components: {
    TestHead,
    TestComment
  },
  data() {
    return {
      tableData: []
    }
  },
  mounted() {
    this.getTestList()
  },
  methods: {

    getTestList() {
      getTestList().then(res => {
        if (res.code === 20000) {
          this.tableData = res.data.items
          console.log(this.tableData)
        }
      })
    }
  }

}
</script>

<style lang="scss">
.test {
  padding: 30px;
}

.cell {
  display: flex;
}

.test-bottom {
  font-size: 12px;
  width: 100%;
  color: #666666;
  border-bottom: 1px #EBEEF5 solid;
  border-right: 1px #EBEEF5 solid;
  border-left: 1px #EBEEF5 solid;

  div {
    margin: 10px 0 10px 10px;
  }
}
</style>
