<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent my-4">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-target"
                aria-controls="navbar-target" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbar-target">
                <div class="navbar-nav mx-auto">
                    <router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>
                    <router-link :to="{ name: 'achievements' }" class="nav-link">Achievements</router-link>
                    <router-link :to="{ name: 'projects' }" class="nav-link">Projects</router-link>
                    <router-link :to="{ name: 'skills' }" class="nav-link">Skills</router-link>
                    <router-link :to="{ name: 'contact' }" class="nav-link">Contact</router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Navbar'
    }
</script>