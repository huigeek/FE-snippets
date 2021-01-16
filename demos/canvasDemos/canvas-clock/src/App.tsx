import { defineComponent } from "vue"
import Clock from './components/Clock'

export default defineComponent({
  name: 'App',
  components: { Clock },
  setup() {
    return () => (
      <Clock />
    )
  }
})