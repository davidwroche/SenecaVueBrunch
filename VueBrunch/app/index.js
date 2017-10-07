import Vue from 'vue'
import Router from 'vue-router'

import App from './App'
import { routes } from './router/routes';

Vue.use(Router)

var seneca;
seneca = Seneca()
    .test('print')
    .client({type:'browser', pin:'a:*'})
    .client({type:'browser', pin:'b:*'})

const router =  new Router({
    routes,
    mode: 'history'
});


/* eslint-disable no-new */
const app = new Vue({
  router,
  render: h => h(App)
})

app.$mount('#app')
