import Vue from 'vue'
import Message from './index.vue'

let instance = null
const Builder = Vue.extend(Message)

class GetComponent {
  constructor(options, content) {
    this.options = options
    this.content = content
  }
  init() {
    if (instance) return
    instance = new Builder({
      render: (h) => {
        return (
          <Message props={{
            ...this.options
          }} scopedSlots={{ default: () => this.content.btn }}/>
        )
      }
    })

    instance.vm && setTimeout(() => {
      this.hide()
    }, 3000)
    instance.vm = instance.$mount()
    document.body.appendChild(instance.vm.$el)
    return instance
  }
  hide() {
    console.log(1)
    instance.vm.$el.remove()
    instance = null
  }
}
const getComponent = (options, content) => {
  return new GetComponent(options, content)
}
export default {
  install(vue) {
    vue.prototype.$Message = getComponent
  }
}
