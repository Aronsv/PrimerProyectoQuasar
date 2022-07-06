
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'pet', component: () => import('pages/Pet.vue') },
      { path: 'practica', component: () => import('pages/Practica.vue') },
      { path: 'form', component: () => import('pages/Form.vue') },
      { path: 'formmpet', component: () => import('pages/RegistrarMascota.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
