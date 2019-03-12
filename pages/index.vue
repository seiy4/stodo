<template>
  <section class="section">
    <div class="columns">
      <div class="column">
        <input class="input"
               @keyup.enter="addTodo">
      </div>
    </div>
    <div class="columns">
      <transition-group appear>
        <div v-for="todo in todos"
             :key="todo.id"
             class="card">
          <div class="card-header">
            <p class="card-header-title">
              <span>
                {{ todo.text }}
              </span>
            </p>
            <a class="card-header-icon">
              <button @click="removeTodo(todo)"
                      class="button is-danger">
                ☓
              </button>
            </a>
          </div>
        </div>
      </transition-group>
    </div>
  </section>
</template>

<script>
  import { mapMutations } from 'vuex'
  import { link } from 'autolinker'

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

<style scoped>
  .v-enter-active {
    animation: slideIn 0.3s linear;
    /*transition: all .8s ease;*/
  }
  .v-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .v-enter,
  .v-leave-to {
    /*transform: translateX(10px);*/
    opacity: 0;
  }

  @keyframes slideIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
