import Vue from 'vue';
import Vuex from 'vuex';

import App from './App.vue';

// TodoMVC styles
import 'todomvc-app-css/index.css';
import todos from '@/store/todos';
import VueRouter from 'vue-router';
import TodosShell from '@/components/TodosShell';
import filter from '@/store/filter';

Vue.config.productionTip = false

// Vuex
Vue.use(Vuex);
const store = new Vuex.Store({ modules: { todos, filter } });

// Vue Router
Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    { path: '/:filter(active|completed)?', component: TodosShell },
    { path: '*', redirect: '/'}
  ]
});

// Route Guard to set the filter state
router.afterEach( to => {
  const visibility = to.params.filter || '';
  store.commit('filter/setVisibility', visibility);
});

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
