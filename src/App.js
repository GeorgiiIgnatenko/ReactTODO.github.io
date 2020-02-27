import React, {Component} from "react";
import Header from "./components/header";
import TodoAdder from "./components/todoAdder";
import TodoList from "./components/todoList";

class App extends Component {

    maxId = 100

    state = {
        tasks: [
            { id: 0, title: "Drink Coffee", checked: false },
            { id: 1, title: "Write code", checked: false },
            { id: 2, title: "Go to shop", checked: false },
            { id: 3, title: "Do homework", checked: false }
        ]
    };

  updateCheck = (id) => {
      this.setState(({tasks}) =>{
          const idx = tasks.findIndex(task => task.id === id);
          tasks[idx].checked = !tasks[idx].checked;
          return tasks;
      });
  };

  deleteItem = id => {
    this.setState(({ tasks }) => {
      const idx = tasks.findIndex(el => el.id === id);
      const newArray = [
          ...tasks.slice(0, idx),
          ...tasks.slice(idx + 1)
      ];
      return { tasks: newArray };
    });
  };

  addItem = titleName => {
    const newItem = {
      id: this.maxId++,
      title: titleName,
      checked: false
    };

    this.setState(({ tasks }) => {
        const newArray = [
            ...tasks,
            newItem
        ];
        return {tasks: newArray}
    });
  };

  render() {
    return (
      <div
        style={{
          margin: "auto",
          width: "960px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Header />
        <TodoAdder addItem = {this.addItem} />
        <TodoList
            deleteItem={this.deleteItem}
            updateCheck={this.updateCheck}
            tasks={this.state.tasks}
        />
      </div>
    );
  }
}
export default App;
