import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import Transfer from '@/router/transfer';
import Toolbox from '@/router/toolbox';
import Rmrk from '@/router/rmrk';
import Profile from '@/router/profile';

const Landing = () => import(/* webpackChunkName:'landing' */ '@/components/landing/Landing.vue');
const Sustainability = () => import(/* webpackChunkName:'sustainability' */ '@/components/landing/Sustainability.vue');
const EsSustainability = () => import(/* webpackChunkName:'sustainability' */ '@/components/landing/EsSustainability.vue');
const Carbonless = () => import(/* webpackChunkName:'carbonless' */  '@/components/landing/Carbonless.vue');
const EsCarbonless = () => import(/* webpackChunkName:'carbonless' */  '@/components/landing/EsCarbonless.vue');
const Settings = () => import(/* webpackChunkName:'settings' */ '@/views/Settings.vue');
const Spotlight = () => import(/* webpackChunkName:'spotlight' */ '@/components/landing/Spotlight.vue');
const About = () => import(/* webpackChunkName:'about' */  '@/components/landing/About.vue');
const Contact = () => import(/* webpackChunkName:'contact' */ '@/components/landing/Contact.vue');
const Partnership = () => import(/* webpackChunkName:'partnership' */ '@/components/landing/Partnership.vue');
const Tutorials = () => import(/* webpackChunkName:'tutorials' */ '@/components/landing/Tutorials.vue');
const FourZeroFour = () => import(/* webpackChunkName:'404' */ '@/components/FourZeroFour.vue')
const Error = () => import(/* webpackChunkName:'500' */ '@/components/Error.vue')

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing,
    },
    {
      path: '/sustainability',
      name: 'sustainability',
      component: Sustainability,
    },
    {
      path: '/es/sustainability',
      name: 'esSustainability',
      component: EsSustainability,
    },
    {
      path: '/carbonless',
      name: 'carbonless',
      component: Carbonless,
    },
    {
      path: '/es/MovimientoNFTSinEmisionesDeCarbono',
      name: 'esCarbonless',
      component: EsCarbonless,
    },
    ...Transfer,
    ...Toolbox,
    ...Rmrk,
    ...Profile,
    {
			path: '/settings',
      name: 'settings',
      component: Settings
    },
    {
      path: '/spotlight',
      name: 'spotlight',
      component: Spotlight,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/partnership',
      name: 'partnership',
      component: Partnership,
    },
    {
      path: '/tutorials',
      name: 'tutorials',
      component: Tutorials,
    },
    {
      path: '/grants',
      name: 'grants',
      component: {},
      beforeEnter() {
        window.location.href = 'https://tally.so/r/mVP06w'
      }
    },
    {
      path: '/permafrost',
      name: 'permafrost',
      component: {},
      beforeEnter(to, from, next) {
        window.location.href = 'https://discord.gg/88da2MEfU9'
      }
    },
    {
      path: '/error',
      name: 'error',
      component: Error,
    },
		{
			path: '*',
			name: 'FourZeroFour',
			component: FourZeroFour,
		},
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});
