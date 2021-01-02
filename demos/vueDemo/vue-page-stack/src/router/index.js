import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: import('../pages/Home.vue')
  },
  {
    path: '/table',
    component: import('../pages/Table.vue'),
    children: [
      {
        path: 'student',
        component: import('../pages/StudentTable.vue')
      },
      {
        path: 'teacher',
        component: import('../pages/TeacherTable.vue')
      }
    ]
  },
  {
    path: '/about',
    component: import('../pages/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router