import { action, computed, makeObservable, observable } from "mobx";


export class TodoStoreImpl {

    todos = [];

    constructor() {
        makeObservable(this, {
           todos: observable,
           addTodo: action,
           toggleTodo: action,
           status: computed
        });
    }

    addTodo(title) {
        const item= {
            id: +Math.random().toFixed(4),
            title,
            completed: false
        };
        this.todos.push(item);
    }

    toggleTodo(id) {
        const index = this.todos.findIndex(item => item.id === id);
        if (index > -1) {
            this.todos[index].completed = !this.todos[index].completed;
        }
    }

    get status() {
        let completed = 0, remaining = 0;
        this.todos.forEach(todo => {
            if (todo.completed) {
                completed ++;
            }
            else {
                remaining++;
            }
        });
        return {completed, remaining}
    }
}

export const TodoStore = new TodoStoreImpl();