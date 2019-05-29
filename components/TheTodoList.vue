<template>
  <div class="card-header">
    <p class="card-header-title">
      <span>
        {{ todo.id }} - {{ todo.text }}
      </span>
    </p>
    <div class="card-header-icon">
      <input @click="remove(todo)"
             type="button"
             value="remove"
             class="button is-danger">
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      todo: Object
    },
    methods: {
      remove (todo) {
        this.$emit('remove', todo)
      }
    }
  }
</script>
