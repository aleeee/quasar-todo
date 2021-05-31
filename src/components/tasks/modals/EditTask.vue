<template>
    <q-card>
       <modal-header>Edit Task</modal-header>
        <form @submit.prevent="submitForm">
           <q-card-section>
               <div class="row q-mb-sm">
                   <modal-task-name :name.sync="taskToSubmit.name"
                   ref="modalTaskName"
                   />
               </div>
               <div class="row q-mb-sm">
                <modal-due-date :dueDate.sync="taskToSubmit.dueDate"
                    @clear="clearDueDate"/>
               </div>
               
                <modal-due-time :dueTime.sync="taskToSubmit.dueTime"
                v-if="taskToSubmit.dueDate"
                />
                <modal-button></modal-button>
           </q-card-section>
        
        </form>
      </q-card>
</template>
<script>


import {mapActions } from 'vuex'

export default {
    props: ['task','id'],
    data(){
        return {
            taskToSubmit:{  }
        }
    },
    methods:{
        ...mapActions({editTask: 'todostore/updateTask'}),
        submitForm(){           

            this.$refs.modalTaskName.$refs.name.validate()
            if(!this.$refs.modalTaskName.$refs.name.hasError){
                this.submitTask()
            }
        },
        submitTask(){
            this.editTask({id: this.id, updates: this.taskToSubmit})
            this.$emit('close')
        },
        clearDueDate(){
            this.taskToSubmit.dueDate=''
            this.taskToSubmit.dueTime=''
        }
    },
    components:{
        'modal-header': require("components/tasks/modals/shared/ModalHeader.vue").default
       , 'modal-task-name': require("components/tasks/modals/shared/ModalTaskName").default
        ,'modal-due-date': require("components/tasks/modals/shared/ModalDueDate.vue").default
        ,'modal-due-time': require("components/tasks/modals/shared/ModalDueTime").default
        ,'modal-button': require("components/tasks/modals/shared/ModalActionButton").default
    },
    mounted(){
       this.taskToSubmit= Object.assign({}, this.task)
    }
}
</script>