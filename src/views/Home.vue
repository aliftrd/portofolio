<template>
    <div class="container">
        <div class="home row mx-auto text-center">
            <div class="image">
                <img :src="require('@/assets/images/myphoto.jpg')">
            </div>
            <h1 class="title mt-4">ALIF TRIADI</h1>
            <p class="my-text">
                Junior <span class="text-green">Developer</span>
            </p>
            <div class="d-flex flex-row justify-content-center">
                <a href="https://facebook.com/alftri.dev" target="_blank" class="socmed">
                    <img :src="require('@/assets/images/facebook-circle.svg')" alt="Facebook" class="social-image">
                </a>
                <a href="https://github.com/aliftrd" target="_blank" class="socmed">
                    <img :src="require('@/assets/images/github-circle.svg')" alt="Github" class="social-image">
                </a>
                <a href="https://instagram.com/alftri.dev" target="_blank" class="socmed">
                    <img :src="require('@/assets/images/instagram.svg')" alt="Instagram" class="social-image">
                </a>
            </div>
        </div>
    </div>
</template>