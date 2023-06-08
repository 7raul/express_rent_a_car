<template>
    <div>
        <HeaderPortfolio />
        <BodyPortfolio />
        <Footer />
    </div>
</template>

<script>
    import HeaderPortfolio from '@/components/Portfolio/HeaderPortfolio.vue'
    import BodyPortfolio from '../components/Portfolio/BodyPortfolio.vue'
    import Footer from '@/components/home/Footer.vue'
    export default {
        name: 'Portfolio',
        components: {
            HeaderPortfolio,
            BodyPortfolio,
            Footer
        }
    }
</script>

<style scoped>
    *{
        background-color: #232f33;
    }
</style>