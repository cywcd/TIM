<template>
 <div class="the-toolbar">
    <el-tooltip
        class="item"
        effect="dark"
        content="发表情"
        placement="bottom"
      >
   <el-popover placement="top" width="400" height="400" trigger="click">
      <div class="emojis">
        <div v-for="item in emojiName" class="emoji" :key="item" @click="chooseEmoji(item)">
          <img :src="emojiUrl + emojiMap[item]" style="width:30px;height:30px" />
        </div>
      </div>
        <i class="iconfont icon-biaoqing-xue" slot="reference"></i>
   </el-popover>
   </el-tooltip>
 </div>
</template>
 
<script lang="ts">
import { Tooltip, Popover } from 'element-ui'
import { Component, Vue, Watch, Provide } from 'vue-property-decorator'
import { emojiMap, emojiName, emojiUrl } from '../../../utils/emojiMap'
@Component({
  name: 'SendMood',
  components: {
    ElTooltip: Tooltip,
    ElPopover: Popover,
  },
})
class SendMood extends Vue {
  // data写法
  emojiMap = emojiMap
  emojiName = emojiName
  emojiUrl = emojiUrl
  messageContentItem: string = ''
  // metholds 方法
  chooseEmoji(item: string): void {
    console.log(item, '--item');
    this.$emit("sendEmoji", item);
  }

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
  .emojis {
  height: 160px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-y: scroll;
}

.emoji {
  height: 40px;
  width: 40px;
  box-sizing: border-box;
  display inline-block;
  cursor pointer;
}
</style>