<template>
    <div>   
        <div class="slideshow-container">
        <div v-for="(slide, index) in slides" :key="index" class="mySlides fade" v-show="index === currentSlide">
            <div class="numbertext">{{ index + 1 }} / {{ slides.length }}</div>
            <img :src="slide.image" :style="{ height: slide.height }">
            <div class="caption">
                <div class="caption-text">{{ slide.caption }}</div>
                <a class="button" href="#">Sobre nós</a>
            </div>
            <div class="dot-container">
                <span class="dot" v-for="(_, dotIndex) in slides" :key="dotIndex" :class="{ active: dotIndex === currentSlide }" @click="currentSlide(dotIndex)"></span>
            </div>
        </div>
            <a class="prev" @click="changeSlide(-1)">&#10094;</a>
            <a class="next" @click="changeSlide(1)">&#10095;</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Banner',

        data() {
            return {
                slides: [
                    { image: require('@/assets/img/img1.jpg'), caption: 'Descubra a melhor opção de aluguel de carros. Pesquise, compare e alugue com facilidade na Express Rent a Car.' },
                    { image: require('@/assets/img/img2.jpg'), caption: 'Encontre as melhores ofertas de aluguel de carros em um só lugar. Economize tempo e dinheiro com a Express Rent a Car.' },
                    { image: require('@/assets/img/img3.jpg'), caption: 'Alugue um carro de forma rápida e descomplicada. Experimente a praticidade da Express Rent a Car.' },
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