import Hello from '.././components/hello.vue';
import Red from '.././components/red.vue';
import Blue from '.././components/blue.vue';
import Green from '.././components/green.vue';


export const routes = [
    { path: '/hello', component: Hello },
    { path: '/red', component: Red },
    { path: '/blue', component: Blue },
    { path: '/green', component: Green },
];
