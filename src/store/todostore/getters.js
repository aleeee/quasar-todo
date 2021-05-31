
export function taskGetter (state) {
        return state.tasks
}

export function getTodoTasks (state) {
    let tasks = {}
    Object.keys(state.tasks).forEach(function (key) {
        let task = state.tasks[key]
        if(!task.completed){
            console.log(task)
            tasks[key] = task
        }
    })

    return tasks
}
export function getCompletedTask (state) {
    let tasks = {}
    Object.keys(state.tasks).forEach(function (key) {
        let task = state.tasks[key]
        if(task.completed){
            tasks[key] = task
        }
    })

    return tasks
}
export function getTaskStatus (state,taskId) {
    status: (state) =>{
    console.log('get status ', taskId)
    console.log('t', state.tasks[taskId])
    status= state.tasks[taskId].completed;
    return status
    }
}