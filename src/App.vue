<template>
    <div class="container pt-5 text-center">
        <div class="row">
            <div class="col-md-8">
                <p class="d-inline-block">Today's Todos!</p>
                <button class="btn btn-sm btn-primary mx-5" @click="addTodo">Add to list</button>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8">
                <div class="justify-content-md-center pt-5">
                    <ul class="list-group">
                        <todo-item v-for="(todo, index) in todos" 
                            :key="index" :index="index" :checked="todo.checked" 
                            :text="todo.text" @removeTodo="removeTodo" @updateTodo="updateTodo"/>
                    </ul>
                </div>
            </div>
        </div>

        <modal name="new-todo-modal">
            <div class="container">
                <div class="row mt-5">
                    <div class="col-md-12">
                        <form @submit.prevent="" autocomplete="off">
                            <div class="mb-3">
                                <label for="newTodoText" class="form-label">Type your todo</label>
                                <input type="text" class="form-control" id="newTodoText" v-model="newTodo">
                            </div>
                            <button @click="saveTodo" class="btn btn-primary">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </modal>
    </div>
</template>

<script>
import TodoItem from './components/TodoItem.vue'

export default {
    name: 'App',
    components: { TodoItem },
    data: () => {
        return {
            todos: [{text: 'Buy an apple', checked: false}, {text: 'Go to the bank', checked: true}],
            newTodo: '',
        }
    },
    methods: {
        removeTodo(index) {
            this.todos.splice(index, 1)
        },
        updateTodo({index, value}) {
            const updatedTodo = this.todos[index]
            updatedTodo.checked = value

            this.todos.splice(index, 1, updatedTodo)
        },
        addTodo() {
            this.$modal.show('new-todo-modal')
        },
        saveTodo() {
            this.todos.push({ text: this.newTodo, checked: false })
            this.newTodo = ''
            this.$modal.hide('new-todo-modal')
        }
    }
}
</script>

