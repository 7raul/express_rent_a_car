import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/reclamacao',
    name: 'reclamacao',
    component: () => import(/* webpackChunkName: "about" */ '../views/ReclamacaoView.vue')
  },
  {
    path: '/feedback',
    name: 'feedback',
    component: () => import(/* webpackChunkName: "about" */ '../views/FeedbackView')
  },
  {
    path: '/detalhesCarro',
    name: 'detalhesCarro',
    component: () => import(/* webpackChunkName: "about" */ '../views/DetalhesCarro')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/empresa',
    name: 'empresa',
    component: () => import(/* webpackChunkName: "about" */ '../views/RegistrarEmpresa.vue')
  },
  {
    path: '/cliente',
    name: 'cliente',
    component: () => import(/* webpackChunkName: "about" */ '../views/RegistrarCliente.vue')
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('../views/PortfolioView.vue')
  },
  {
    path: '/carros',
    name: 'carros',
    component: () => import('../views/CarrosView.vue')
  },
  {
    path: '/empresas',
    name: 'empresas',
    component: () => import('../views/EmpresasView.vue')
  },
  {
    path: '/reservas',
    name: 'reservas',
    component: () => import('../views/GerenciarReservas.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/AdminView.vue')
  },
  
  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
