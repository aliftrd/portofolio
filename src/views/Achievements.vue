<template>
    <div class="container">
        <div class="row">
            <h1 class="sub-title text-center">Achievements</h1>
            <div class="col-md">
                <div class="card box-shadow mt-3">
                    <div class="card-body">
                        <ul class="p-3">
                            <li v-for="achievement in achievements" :key="achievement.message" class="achievements">
                                <img :src="require('@/assets/images/trophy.svg')" alt="Trophy">
                                <h5>{{achievement.message}}</h5>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Achievements from './../../data/achievements.json'
export default {
    setup() {
        return {
            achievements: Achievements
        }   
    }
}
</script>