import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'questionnaire',
    component: () => import(/* webpackChunkName: "questionnaire" */ '../views/QuestionnaireView.vue'),
  },
  {
    path: '/documentation',
    name: 'documentation',
    component: () => import(/* webpackChunkName: "documentation" */ '../views/DocumentationView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
