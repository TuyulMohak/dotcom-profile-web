
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'home', component: () => import('pages/IndexPage.vue') },
      { path: 'about-us', component: () => import('pages/AboutUsPage.vue') },
      { path: 'our-members', component: () => import('pages/OurMembersPage.vue') },
      { path: 'contact-us', component: () => import('pages/ContactUsPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
