import React from 'react';

class TodoList extends React.Component {
    state = {
        tasks: [
            {
                'id': 12345,
                'title': 'Wash the car',
                'done': true
            }
        ],
        newTaskTitle: "",
        editingTask: false,
    }

    render() {

        return <React.Fragment>
            <h1>Add New Task</h1>
            <div>
                <label>Title:</label>
                <input type="text" name="title" value={this.state.newTaskTitle} onChange={this.updateTaskTitle} />
            </div>
            <button onClick={this.addTask}>Add Task</button>
            <h1>Task List</h1>
            {this.renderTaskList()}
            <div id="popup" style={{display: this.state.editingTask?'block':'none'}}>
                <label>Title: </label>
                <input type="text" name="editedTaskTitle" value={this.state.editedTaskTitle} />
                <button onClick={()=>{this.setState({editingTask:false})}}></button>
            </div>
        </React.Fragment>
    }

    renderTaskList = () => {
        return this.state.tasks.map((todo) => {
            return <div key={todo.id}>{todo.title}
            <input type="checkbox" />
            <button onClick={()=>{this.deleteTask(todo)}}>Delete</button>
            <button onClick={()=>{this.editTask(todo)}}>Edit</button>
            </div>
        })
    }

    updateTaskTitle = (event) => {
        this.setState({
            'newTaskTitle': event.target.value
        });
    }

    editTask = (event) => {
        this.setState({
            editingTask: true
        })
    }

    deleteTask = (taskToDelete) => {
        let index = this.state.tasks.findIndex( t => t.id === taskToDelete.id )
        let cloned = [...this.state.tasks.slice(0,index),...this.state.tasks.slice(index+1)]
        this.setState({
            'tasks': cloned
        })
    }

    // // Method 1
    // updateCheckbox(task) {

    //     // 1. clone the object that you are changing
    //     let clonedTask = { ...task };

    //     // 2. change the object
    //     clonedTask.done = !clonedTask.done;

    //     // 3. clone the array that you are changing
    //     let clonedArray = [...this.state.tasks];

    //     // 4. replace the original object at the same index in the cloned array with the cloned object
    //     let index = this.state.tasks.findIndex(function (eachTask) {
    //         return eachTask.id === task.id;
    //     });

    //     // 4.1 update the cloned array with the new updated task
    //     clonedArray[index] = clonedTask;

    //     // 5. put the cloned array into the state
    //     this.setState({
    //         'tasks': clonedArray
    //     })
    // }

    // Method 2
    updateCheckboxV2 = (task) => {
        // 1. Clone and change the done variable at the same time
        let clonedTask = { ...task}
        clonedTask.done = !clonedTask.done
        let clonedArray = this.state.tasks.map( (eachTask)=> {
            if (eachTask.id !== clonedTask.id) {
                return eachTask;
            } else {
                return clonedTask;
            }
        })

        this.setState({
            'tasks': clonedArray
        })
    }

    addTask = (event) => {
        // create a new task from the values given by the user
        let newTask = {
            id: Math.floor(Math.random() * 999999 + 100000),
            title: this.state.newTaskTitle,
            done: false
        }

        // add the new task into the tasks array
        let clone = [...this.state.tasks];

        // add to the back of the array
        clone.push(newTask);

        // update the state
        this.setState({
            'tasks': clone
        })
    }
}

export default TodoList