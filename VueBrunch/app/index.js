import Vue from 'vue'
import Router from 'vue-router'

import App from './App'
import { routes } from './router/routes';


var seneca;
seneca = Seneca()
    .test('print')
    .client({type:'browser', pin:'a:*'})
    .client({type:'browser', pin:'b:*'})

const router =  new Router({
    routes,
    mode: 'history'
});

Vue.use(Router)
Vue.use(seneca)


/* eslint-disable no-new */
const app = new Vue({
  routes,
  seneca,
  render: h => h(App)
})

app.$mount('#app')

//console.log(app)
//console.log(seneca)