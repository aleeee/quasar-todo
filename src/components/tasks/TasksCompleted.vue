<template>
    <div class="q-mt-lg">
        <list-header
        bgColor="bg-green-4">Completed </list-header>
    <q-list 
        
        separator bordered >
        <task
            v-for="(task,key) in completedTasks" :key="key"
            :task="task"
            :id="key"
        >
            
         </task>  
    </q-list>
    </div>
</template>

<script>
import ListHeader from '../shared/ListHeader.vue'
export default {
    props: ['completedTasks' ],
    components: {
        'task' : require('components/tasks/Task.vue').default,
        'list-header': require('components/shared/ListHeader').default
        
    }
}
</script>