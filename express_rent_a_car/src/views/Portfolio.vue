<template>
    <div>
        <Footer />
    </div>
</template>

<script>
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