<template>
    <div class="container">
        <div class="row">
            <h1 class="sub-title text-center">Projects</h1>
            <div v-for="project in projects" :key="project.index" class="col-md-3">
                <div class="card box-shadow mt-3">
                    <img :src="require('@/assets/images/' + project.image)" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5>{{ project.title }}</h5>
                        <p class="pt-2">{{ project.description }}</p>
                        <span v-for="tag in project.tag" :key="tag">{{ tag }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Projects from './../../data/projects.json'
export default {
    setup() {
        return {
            projects: Projects
        }   
    }
}
</script>