<template>
  <section class="section">
    <div class="columns">
      <div class="column">
        <TheTodoPostArea @add="add"/>
      </div>
    </div>
    <div class="columns is-multiline">
      <draggable
        v-model="lists"
        v-bind="dragOptions"
      >
        <transition-group type="transition" :name="'flip-list'">
          <TheTodoList class="card list-group-item"
                       v-for="todo in lists"
                       :key="todo.id"
                       :todo="todo"
                       @remove="remove"
          />
        </transition-group>
      </draggable>
    </div>
<!--    <div class="columns">-->
<!--      <div class="column">-->
<!--        <pre>{{listString}}</pre>-->
<!--      </div>-->
<!--    </div>-->
  </section>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import draggable from 'vuedraggable'

  import TheTodoPostArea from '~/components/TheTodoPostArea.vue'
  import TheTodoList from '~/components/TheTodoList.vue'

  export default {
    components: {
      draggable,
      TheTodoPostArea,
      TheTodoList
    },
    computed: {
      lists: {
        get () {
          return this.$store.state.todos.list
        },
        set (val) {
          this.saveOrder(val)
        }
      },
      // ...mapGetters('todos', [
      //   'list'
      // ]),
      dragOptions() {
        return {
          animation: 150,
          group: "description",
          ghostClass: "ghost"
        };
      },
      // listString() {
      //   return JSON.stringify(this.lists, null, 2);
      // },
    },
    methods: {
      ...mapActions('todos', [
        'add',
        'remove',
        'saveOrder'
      ])
    },
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

  .flip-list-move {
    transition: transform 0.5s;
  }

  @keyframes slideIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .ghost {
    opacity: 0.5;
    background: #c8ebfb;
  }

  .list-group-item {
    cursor: move;
  }
</style>
