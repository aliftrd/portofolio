<template>
    <div class="container">
        <div class="row">
            <h1 class="sub-title text-center">Skills</h1>
            <div v-for="skill in skills" :key="skill.index" class="col-md-4">
                <div class="card box-shadow mt-3">
                    <div class="card-body text-center">
                        <i class="text-icon colored" :class="skill.icon"></i>
                        <h5 class="mt-2">{{ skill.title }}</h5>
                        <p><strong>{{ skill.learned }}</strong> of experience</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Skills from './../../data/skills.json'
export default {
    setup() {
        return {
            skills: Skills
        }   
    }
}
</script>