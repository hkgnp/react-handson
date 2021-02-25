import React from 'react';

class Todo extends React.Component {
    state= {
        insertTask: '',
        tasks: [
            'Walk the dog', 
            'Clean the room'
        ]
    }

    render() {
        return (
            <React.Fragment>
                <input type="text" name="insertTask" value={this.state.insertTask} onChange={this.insertTask} />
                <ul>
                    {this.renderTask()}
                </ul>
            </React.Fragment>
        )
    }

    renderTask = () => {
        let t = [];
        for (let task of this.state.tasks) {
            t.push(<li>{task}</li>)
        };
        // t.push(<li>{this.state.insertTask}</li>)
        return t;
    }

    insertTask = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        let currTasks = [...this.state.tasks]
        currTasks.push(this.state.insertTask)
        this.setState({
            tasks: currTasks
        })
    }

}

export default Todo