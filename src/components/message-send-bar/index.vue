<template>
  <div class="send-header-bar">
    <send-mood></send-mood>
    <send-file></send-file>
    <send-point></send-point>
  </div>
</template>
 
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import SendMood from './components/SendMood.vue'
import SendFile from  './components/SendFile.vue'
import SendPoint from  './components/SendPoint.vue'


@Component({
  name: 'messageSendBar',
  components: {
    SendMood,
    SendFile,
    SendPoint,
  }
})

export default class messageSendBar extends Vue {
  @Watch('name')
  getWatchValue(newVal: string, oldVal: string) {
    console.log(newVal, oldVal)
  }
  mounted() {
    console.log('mounted')
  }
}
</script>
 
<style scoped lang="stylus">

</style>