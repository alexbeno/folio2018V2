import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home/Home';
import bmw from '@/components/project/bmw/bmw';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/bmw',
      name: 'bmw',
      component: bmw,
    },
    {
      path: '/louisj',
      name: 'bmw',
      component: bmw,
    },
  ],
});

