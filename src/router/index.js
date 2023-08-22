import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: { auth: true },
      children: [
        {
          path: '',
          name: 'Clients',
          component: () => import('../components/ClientListPage.vue'),
          meta: { auth:true }
        },
        {
          path: '/add-client',
          name: 'Add-client',
          component: () => import('../components/AddClientForm.vue'),
          meta: { auth:true }
        },
        {
          path: '/client-details/:id',
          name: 'Client-Details',
          component: () => import('../components/ClientPage.vue'),
          meta: { auth:true }
        },
        {
          path: '/feedback',
          name: 'Feedback',
          component: () => import('../components/Feedback.vue'),
          meta: { auth:true }
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginView.vue'),
      meta: { auth: false }
    },
    {
      path: '/client',
      name: 'Client-page',
      component: () => import('../views/SampleView.vue'),
      meta: { auth: false },
    },
    {
      path: '/client/:id',
      name: 'View-Samples',
      component: () => import('../components/SampleInfo.vue'),
      meta: { auth: false}
    }
  ]

  function isAuthenticated() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  const router = createRouter({
    history: createWebHistory(),
    routes,
  })

router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    if (!isAuthenticated()) {
      next({name: 'Login'});
    } else {
      next();
    }
  } else {
    next();
  }
  // if (!to.meta.auth && isAuthenticated()) {
  //   next('/');
  // }7
})

export default router
