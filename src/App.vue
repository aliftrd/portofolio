<template>
    <Navbar />
    <Particles id="tsparticles" :particlesInit="particlesInit" :particlesLoaded="particlesLoaded" :options="{
        fpsLimit: 60,
        particles: {
            color: {
                value: ['#f67e7d', '#843b62', '#621940']
            },
            links: {
                color: '#ffb997',
                enable: true
            },
            move: {
                enable: true,
                speed: .5
            },
            size: {
                value: 5,
                random: {
                    enable: true,
                    minimumValue: 1
                },
                animation: {
                    enable: true,
                    speed: 2.5,
                    minimumValue: 1
                }
            },
            opacity: {
                value: 0.8,
                random: {
                    enable: true,
                    minimumValue: 0.4
                }
            }
        }
    }" />
    <router-view></router-view>
</template>

<script>
    import Navbar from "@/components/Navbar.vue"
    export default {
        name: 'App',
        components: {
            Navbar
        }
    }
</script>

<style>
    @import './assets/css/app.css';
    @import 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css';
</style>