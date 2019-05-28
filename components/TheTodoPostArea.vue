<template>
  <input class="input"
         v-model="text"
         placeholder="What needs to be done?"
         autofocus
         @keyup.enter="addTodo">
</template>

<script>
  export default {
    data () {
      return {
        text: ''
      }
    },
    methods: {
      addTodo () {
        if (!this.text) {
          return
        }
        this.$emit('add', this.text)
        this.text = ''
      }
    }
  }
</script>
