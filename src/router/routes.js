
const routes = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', name: 'login', component: () => import('pages/Login.vue') },
      { path: '/cadastro', name: 'cadastro', component: () => import('pages/Cadastro.vue') },
      { path: '/recuperar', name: 'recuperar', component: () => import('pages/Recuperar.vue') }
    ]
  },
  {
    path: '/sistema',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'sistema', component: () => import('pages/Sistema.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
