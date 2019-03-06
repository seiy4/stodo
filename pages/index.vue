<template>
  <section class="section">
    <div class="columns">
      <div class="column">
        <input class="input"
               @keyup.enter="addTodo">
      </div>
    </div>
    <div class="columns">
      <div v-for="todo in todos"
           :key="todo.id"
           class="card">
        <div class="card-header">
          <p class="card-header-title">
            <b-checkbox :checked="todo.done"
                        @change="toggle(todo)"
                        size="is-large"
                        type="is-success">
            </b-checkbox>
            <span :class="{ done: todo.done }">
              {{ todo.text }}
            </span>
          </p>
          <a class="card-header-icon">
            <button @click="removeTodo(todo)"
                    class="button is-danger">
              Remove
            </button>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import {mapMutations} from 'vuex';

  export default {
    data() {
      return {
        name: 'stodo'
      }
    },
    computed: {
      todos() {
        return this.$store.state.todos.list
      }
    },
    methods: {
      removeTodo(todo) {
        this.$store.commit('todos/remove', todo);
      },
      addTodo(e) {
        this.$store.commit('todos/add', e.target.value)
        e.target.value = ''
      },
      ...mapMutations({
        toggle: 'todos/toggle'
      })
    }
  }
</script>
