import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import App from '@/App.vue';
import TodosShell from '@/components/TodosShell.vue';

// Global styles
import '@/assets/styles.css';

// Router
const router = createRouter({
  history: createWebHashHistory(),
  routes: [{ path: '/:filter?', component: TodosShell }],
});

const app = createApp(App);
app.use(router);
app.mount('#app');
