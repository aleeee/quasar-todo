<template>
    <q-item  v-ripple
      @click="updateTask({id: id, updates: {completed: !task.completed}})"
      :class= "this.task.completed ?  'bg-orange-1' : 'bg-green-1'"
      clickable
      >
        <q-item-section side top>
           <q-checkbox v-model="status"/>
        </q-item-section>

        <q-item-section>
          <q-item-label 
            :class="{ 'text-strikethrough' : task.completed } ">
            {{task.name}}
            </q-item-label>
        </q-item-section>

        <q-item-section side v-if="task.dueDate">
          <div class="row">
         <div class="column justify-center">
          <q-icon name="pending_actions" size="18px" class="q-mr-xs"/>
          </div> 
          <div class="colum">
          <q-item-label class="row justfify-end">{{task.dueDate}}</q-item-label>
           <small>  <q-item-label class="row justfify-end" caption>{{task.dueTime}}</q-item-label></small>
          </div>
        </div>
        </q-item-section>

        <q-item-section side>
          <q-btn 
            @click.stop="showEditTask=true"
            flat round 
            dense
            color="primary" 
            icon="edit"/>
          <q-btn 
            @click.stop="promptToDelete(id)"
            flat round 
            dense
            color="red" 
            icon="delete"/>
             
        </q-item-section>

        <q-dialog v-model="showEditTask">
          <edit-task 
          :task="task"
          :id="id"
          @close="showEditTask=false"/>
        </q-dialog>

      </q-item>

</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        props: ['task','id'],
        data() {
          return {
            showEditTask: false
          }
        },
         computed: {       
            status: {
              get() {
                return this.task.completed
              },
              set(val){
                //updateTask({id: val, updates: {completed: !this.task.completed}})
              }
            },
          ...mapGetters({getTaskStatus: 'todostore/getTaskStatus'}) 
        },
        methods: {
             ...mapActions({updateTask:'todostore/updateTask',
             deleteTask: 'todostore/deleteTask'})
           //  ...mapActions(['updateTask','deleteTask'])
            ,
            promptToDelete(id){
              this.$q.dialog({
                title: 'Confirm',
                message: 'are you sure?',
                cancel: true,
                persistent: true
              }).onOk(() => {
                console.log('>>>> OK')
                this.deleteTask(id)
              }).onCancel(() => {
                console.log('>>>> Cancel')
              })
            }
        },
        components: {
          'edit-task' : require('components/tasks/modals/EditTask.vue').default
        }
    }
    
</script>
