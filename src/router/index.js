import { createRouter, createWebHistory } from "vue-router";
import RegisterUser from "@/views/views/RegisterUser.vue";
import HomePagesPrincipal from "@/views/views/HomePagesPrincipal.vue";
import LoginAccess from "@/views/views/LoginAccess.vue";

const routes = [
    { path: "/", component: HomePagesPrincipal },
    { path: "/login", component: LoginAccess },
    { path: "/register", component: RegisterUser }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
