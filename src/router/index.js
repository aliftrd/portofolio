import {
    createRouter,
    createWebHistory
} from 'vue-router'
import Home from "@/views/Home.vue"
import Skills from "@/views/Skills.vue"
import Achievements from "@/views/Achievements.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    }, {
        path: '/achievements',
        name: 'achievements',
        component: Achievements
    }, {
        path: '/projects',
        name: 'projects',
        component: Achievements
    }, {
        path: '/skills',
        name: 'skills',
        component: Skills
    }, {
        path: '/contact',
        name: 'contact',
        component: Achievements
    }, ]
})

export default router;