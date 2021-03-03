<template>
 <div class="the-toolbar">
   <el-tooltip
      class="item"
      effect="dark"
      content="发文件"
      placement="bottom"
    >
    <i class="iconfont icon-wenjian" @click="handleSendFileClick"></i>
  </el-tooltip>
  <input type="file" id="filePicker" ref="filePicker" @change="sendFile" style="display:none" />
 </div>
</template>
 
<script lang="ts">
import { Tooltip } from 'element-ui'
import { Component, Vue, Watch } from 'vue-property-decorator'
import { Getter } from 'vuex-class'


@Component({
  name: 'SendFile',
  components: {
    ElTooltip: Tooltip,
  },
})
class SendFile extends Vue {
  @Getter('toAccount') public toAccount!: string
  @Getter('currentConversationType') public currentConversationType!: string
  tim: any
  
  @Watch('name')
  getWatchValue(newVal: string, oldVal: string) {
    console.log(newVal, oldVal)
  }
  mounted() {
    console.log('mounted')
  }
  handleSendFileClick() :void {
    (this.$refs.filePicker as Vue & {click: () => void}).click()
  }
  sendFile() {
    const message = this.tim.createFileMessage({
      to: this.toAccount,
      conversationType: this.currentConversationType,
      payload: {
        file: document.getElementById('filePicker') // 或者用event.target
      },
      onProgress: (percent: any) => {
        this.$set(message, 'progress', percent) // 手动给message 实例加个响应式属性: progress
      }
    })
    this.$store.commit('pushCurrentMessageList', message)
    this.tim
      .sendMessage(message)
      .then(() => {
        (this.$refs.filePicker as Vue & {value: null})
      })
      .catch((imError: { message: any }) => {
        this.$store.commit('showMessage', {
          message: imError.message,
          type: 'error'
        })
      })
  }
}
export default SendFile
</script>
 
<style scoped lang="stylus">
// @import './index.scss';
</style>