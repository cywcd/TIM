<template>
 <div class="the-toolbar">
   <el-tooltip
      class="item"
      effect="dark"
      content="发表情"
      placement="bottom"
    >
    <i class="iconfont icon-biaoqing-xue"></i>
   </el-tooltip>
 </div>
</template>
 
<script lang="ts">
import { Tooltip } from 'element-ui'
import { Component, Vue, Watch } from 'vue-property-decorator'
@Component({
  name: 'SendMood',
  components: {
    ElTooltip: Tooltip,
  },
})
class SendMood extends Vue {
  @Watch('name')
  getWatchValue(newVal: string, oldVal: string) {
    console.log(newVal, oldVal)
  }
  mounted() {
    console.log('mounted')
  }
}
export default SendMood
</script>
 
<style scoped lang="stylus">
// @import './index.scss';
</style>