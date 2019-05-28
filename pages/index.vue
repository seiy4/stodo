<template>
  <section class="section">
    <div class="columns">
      <div class="column">
        <TheTodoPostArea @add="add"/>
      </div>
    </div>
    <div class="columns is-multiline">
      <transition-group appear>
        <TheTodoList class="card"
                     v-for="todo in todos"
                     :key="todo.id"
                     :todo="todo"
                     @remove="remove"
        />
      </transition-group>
    </div>
  </section>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  import TheTodoPostArea from '~/components/TheTodoPostArea.vue'
  import TheTodoList from '~/components/TheTodoList.vue'

  export default {
    components: {
      TheTodoPostArea,
      TheTodoList
    },
    computed: {
      ...mapGetters('todos', {
        todos: 'list'
      })
    },
    methods: {
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
