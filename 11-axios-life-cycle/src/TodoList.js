import React from 'react';
import axios from 'axios';

class TodoList extends React.Component {
    state = {
        tasks: []
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={this.loadData}>Load Data</button>
                {this.renderList()}
            </React.Fragment>
        )
    }

    loadData = async () => {
        let response = await axios.get('items.json')
        this.setState({
            tasks: response.data
        })
    }

    renderList = () => {
        let todos = [];
        for (let task of this.state.tasks) {
            todos.push(<li>{task.title}</li>)
        }
        return todos
    }
}

export default TodoList