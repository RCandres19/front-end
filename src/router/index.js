import { createRouter, createWebHistory } from "vue-router";
//import RegisterUser from "@/views/RegisterUser.vue";
//import SuccessPage from "@/views/SuccessPage.vue";
//import UserHistory from "@/views/UserHistory.vue";

import HomePagesPrincipal from '../views/views/HomePagesPrincipal.vue';
import LoginAccess from '../views/views/LoginAccess.vue';
import DashboardInformation from '../views/views/DashboardInformation.vue';

const routes = [
    //{ path: "/", component: RegisterUser },
   // { path: "/success", component: SuccessPage },
   // { path: "/history", component: UserHistory },

    { path: '/', component: HomePagesPrincipal },
    { path: '/login', component: LoginAccess },
    { path: '/dashboard/:id', component: DashboardInformation },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
