<template>
 <div class="the-toolbar">
   <el-tooltip
      class="item"
      effect="dark"
      content="@某人"
      placement="bottom"
    >
    <i class="iconfont icon-aite"></i>
  </el-tooltip>
 </div>
</template>
 
<script lang="ts">
import { Tooltip } from 'element-ui'
import { Component, Vue, Watch } from 'vue-property-decorator'
@Component({
  name: 'SendPoint',
  components: {
    ElTooltip: Tooltip,
  },
})
class SendPoint extends Vue {
  @Watch('name')
  getWatchValue(newVal: string, oldVal: string) {
    console.log(newVal, oldVal)
  }
  mounted() {
    console.log('mounted')
  }
}
export default SendPoint
</script>
 
<style scoped lang="stylus">
// @import './index.scss';
</style>