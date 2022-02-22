<script lang="ts" setup>
import Todo from '@/model/todo';
import useAppStore from '@/store/use-app-store';
import { nextTick, ref } from 'vue';

const props = defineProps<{ todo: Todo }>();

const { toggleTodo, updateTitle, destroyTodo } = useAppStore();

// Editing
const editFld = ref<HTMLInputElement>();
const editMode = ref(false);
const editTitle = ref('');

const beginEdit = () => {
  editTitle.value = props.todo.title;
  editMode.value = true;
  nextTick(() => {
    editFld.value?.focus();
  });
};
const commitEdit = () => {
  const title = editTitle.value;
  if (title) {
    updateTitle(props.todo, editTitle.value);
  } else {
    destroyTodo(props.todo);
  }
  editMode.value = false;
};
const cancelEdit = () => {
  editMode.value = false;
};
</script>

<template>
  <li :class="{ completed: todo.completed, editing: editMode }">
    <input
      v-if="editMode"
      ref="editFld"
      v-model.trim="editTitle"
      class="edit"
      @change="commitEdit"
      @blur="cancelEdit"
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
