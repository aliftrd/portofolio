import {
    createRouter,
    createWebHistory
} from 'vue-router'
import Home from "@/views/Home.vue"
import Achievements from "@/views/Achievements.vue"
import Projects from "@/views/Projects.vue"
import Skills from "@/views/Skills.vue"
import Contact from "@/views/Contact.vue"

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
        component: Projects
    }, {
        path: '/skills',
        name: 'skills',
        component: Skills
    }, {
        path: '/contact',
        name: 'contact',
        component: Contact
    }, ]
})

export default router;