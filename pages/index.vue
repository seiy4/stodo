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
  import { mapGetters, mapActions } from 'vuex'

  export default {
    data() {
      return {
        text: ''
      }
    },
    computed: {
      ...mapGetters('todos', {
        todos: 'list'
      })
    },
    methods: {
      addTodo() {
        if (!this.text) {
          return
        }
        this.add(this.text)
        this.text = ''
      },
      ...mapActions('todos', {
        add: 'add',
        remove: 'remove'
      })
    }
  }
</script>

<style scoped>
  .v-enter-active {
    animation: slideIn .3s ease-in-out;
  }
  .v-leave-active {
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
