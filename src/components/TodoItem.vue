<template>
    <li class="list-group-item">
        <div class="d-flex form-check pt-2">
            <input class="form-check-input" type="checkbox" v-model="isChecked" />
            <p class="px-3">{{text}}</p>
            <span class="btn align-right" @click="$emit('removeTodo', index)">
                <i class="fa fa-trash"></i>
            </span>
        </div>
    </li>
</template>

<script>
export default {
    name: 'TodoItem',
    props: {
        index: Number,
        text: String,
        checked: Boolean, 
    },
    data: () => {
        return {
            isChecked: false
        }
    },
    watch: {
        isChecked(value) {
            this.$emit('updateTodo', {value, index: this.index})
        }
    },
    mounted() {
        this.isChecked = this.checked
    },
    updated() {
        this.isChecked = this.checked
    }
}
</script>