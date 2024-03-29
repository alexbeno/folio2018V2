import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home/Home';
import bmw from '@/components/project/bmw/bmw';
import louisj from '@/components/project/louisj/louisj';
import sens from '@/components/project/sens/sens';

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
      name: 'louisj',
      component: louisj,
    },
    {
      path: '/sens',
      name: 'sens',
      component: sens,
    },
  ],
});

