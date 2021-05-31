<template>
    <q-input
        outlined
        v-model="getName"
        @input="$emit('update:name', $event)"
        :rules="[val => !!val || 'Field is required']"
        ref="name"
        label="Task name"
        class="col"
        autofocus>
        <template v-slot:append>
            <q-icon 
                v-if="name"
                name="close"
                    @click="$emit('update:name', '')"
                    class="cursor-pointer"
                />
        </template>
        </q-input>
</template>

<script>
export default {
  /*   data() {
          return {
              insertedName: ''
              }        
          }, */
    props: ['name'],
     computed: {       
            getName: {
              get() {
                return this.name
              },
              set(val){
                //updateTask({id: val, updates: {completed: !this.task.completed}})
              }
            }
     },
     watch: { 
        name: function(newVal, oldVal) { 
          this.insertedName=newVal;
        }
      },
      methods: {
           clearName(){
            //this.name=''
        }
      }
}
</script>