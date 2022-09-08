import { createWebHistory, createRouter } from 'vue-router';
import listComponentVue from './components/ListComponent.vue';
import mainComponentVue from './components/MainComponent.vue';
import detailComponentVue from './components/DetailComponent.vue';
import commentVue from './components/Comment.vue';
import authorVue from './components/Author.vue';
import NotFoundVue from './components/NotFound.vue';

const routes = [
  {
    path: '/',
    components: {
      default: mainComponentVue,
      a: authorVue,
    },
  },
  {
    path: '/list',
    component: listComponentVue,
  },
  {
    path: '/detail/:id(\\d+)',
    name: 'detail',
    component: detailComponentVue,
    children: [
      { path: 'comment', name: 'comment', component: commentVue },
      { path: 'author', name: 'author', component: authorVue },
    ],
  },
  {
    path: '/:pathMatch(.*)',
    name: 'NotFound',
    component: NotFoundVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
