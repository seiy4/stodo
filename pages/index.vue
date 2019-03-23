<template>
  <section class="section">
    <div class="columns">
      <div class="column">
        <input class="input"
               v-model="text"
               placeholder="What needs to be done?"
               autofocus
               @keyup.enter="addTodo">
      </div>
    </div>
    <div class="columns is-multiline">
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
            <div class="card-header-icon">
              <input @click="remove(todo)"
                     type="button"
                     value="remove"
                     class="button is-danger">
            </div>
          </div>
        </div>
      </transition-group>
    </div>
  </section>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    data() {
      return {
        name: 'stodo',
        text: ''
      }
    },
    computed: {
      todos() {
        return this.$store.state.todos.list
      }
    },
    methods: {
      addTodo() {
        if (!this.text) {
          return
        }
        this.$store.commit('todos/add', this.text)
        this.text = ''
      },
      ...mapMutations({
        remove: 'todos/remove'
      })
    }
  }
</script>

<style scoped>
  .v-enter-active {
    /*cubic-bezier(0.0, 0.0, 1.0, 1.0)*/
    /*animation: slideIn .3s linear;*/

    /*cubic-bezier(0.42, 0, 0.58, 1.0)*/
    animation: slideIn .3s ease-in-out;

    /*cubic-bezier(0.25, 0.1, 0.25, 1.0)*/
    /*transition: all .8s ease;*/
  }
  .v-leave-active {
    /*transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);*/

    /*cubic-bezier(0.42, 0, 1.0, 1.0)*/
    /*transition: all .8s ease-in;*/

    /*cubic-bezier(0, 0, 0.58, 1.0)*/
    transition: all .3s ease-out;
  }
  .v-enter,
  .v-leave-to {
    transform: translateX(10px);
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
