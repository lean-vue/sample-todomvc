<script lang="ts" setup>
import Todo from '@/model/todo';
import useAppStore from '@/store/use-app-store';
import { ref } from 'vue';

const props = defineProps<{ todo: Todo }>();

const { toggleTodo, updateTitle, destroyTodo } = useAppStore();

// Editing
const editMode = ref(false);
const editTitle = ref('');

const beginEdit = () => {
  editTitle.value = props.todo.title;
  editMode.value = true;
};
const commitEdit = () => {
  updateTitle(props.todo, editTitle.value);
  editMode.value = false;
};
</script>

<template>
  <li :class="{ completed: todo.completed, editing: editMode }">
    <input
      v-if="editMode"
      v-model="editTitle"
      class="edit"
      @change="commitEdit"
    />
    <div v-else class="view">
      <input
        class="toggle"
        type="checkbox"
        :checked="todo.completed"
        @change="toggleTodo(todo)"
      />
      <label @dblclick="beginEdit">{{ todo.title }}</label>
      <button class="destroy" @click="destroyTodo(todo)"></button>
    </div>
  </li>
</template>
