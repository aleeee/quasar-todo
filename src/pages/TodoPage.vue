<template>
  <q-page class="q-pa-md">
    <no-tasks v-if="!Object.keys(todoTasks).length"
    >
    </no-tasks>

    <todo-task  v-else
      :tasksTodo= "todoTasks"/>

   
      <completed-task v-if="Object.keys(completedTasks).length" 
        :completedTasks="completedTasks"/>

    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn
       @click="showAddTask=true"
        round
        color="primary"
        size="24"
        icon="add"/>
      </div>

    <q-dialog v-model="showAddTask">
      <add-task @close="showAddTask=false"/>
  </q-dialog>
  </q-page>
</template>
<script>
import Task from 'components/tasks/Task.vue'

import { mapGetters } from 'vuex'
import TasksCompleted from 'src/components/tasks/TasksCompleted.vue'
import NoTasks from 'src/components/tasks/NoTasks.vue'

export default {
  data(){
    return {
      showAddTask: false
    }
  },
 computed: {
   //tasks() {
    //return this.$store.getters.todostore.tasks
    ...mapGetters({todoTasks: 'todostore/getTodoTasks',
                  completedTasks: 'todostore/getCompletedTask'
                  })
   //}
 },
 components: {
   
   'add-task' : require('components/tasks/modals/AddTask.vue').default
  ,'todo-task': require('components/tasks/TasksTodo').default,
  'completed-task': require('components/tasks/TasksCompleted').default
  ,'no-tasks': require('components/tasks/NoTasks').default
},
mounted() {
  this.$root.$on('showAddTask' , () => {
    this.showAddTask=true
  })
}
}
</script>

