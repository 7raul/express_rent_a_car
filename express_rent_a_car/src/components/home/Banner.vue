<template>
    <div>   
        <div class="slideshow-container">
            <div v-for="(slide, index) in slides" :key="index" class="mySlides fade" v-show="index === currentSlide">
                <div class="numbertext">{{ index + 1 }} / {{ slides.length }}</div>
                <img :src="slide.image">
                <div class="text">{{ slide.caption }}</div>
            </div>
            <a class="prev" @click="changeSlide(-1)">&#10094;</a>
            <a class="next" @click="changeSlide(1)">&#10095;</a>
        </div>
        <div style="text-align: center;">
            <span
                v-for="(slide, index) in slides"
                :key="index"
                class="dot"
                :class="{ active: index === currentSlide }"
                @click="() => setCurrentSlide(index)"
            ></span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Banner',

        data() {
            return {
                slides: [
                    { image: require('@/assets/img/img1.jpg'), caption: 'Caption Text 1' },
                    { image: require('@/assets/img/img2.jpg'), caption: 'Caption Text 2' },
                    { image: require('@/assets/img/img3.jpg'), caption: 'Caption Text 3' },
                ],
                currentSlide: 0
            }
        },

        mounted() {
            this.startAutoSlide();
        },

        methods: {
            changeSlide(n) {
                this.currentSlide += n;
                if (this.currentSlide >= this.slides.length) {
                    this.currentSlide = 0;
                } else if (this.currentSlide < 0) {
                    this.currentSlide = this.slides.length - 1;
                }
            },

            setCurrentSlide(index) {
                this.currentSlide = index;
            },
            startAutoSlide() {
                setInterval(() => {
                    this.changeSlide(1);
                }, 5000);
            },
        }
    }
</script>

<style scoped>
    @import '@/Styles/Home/Banner.sass';
</style>