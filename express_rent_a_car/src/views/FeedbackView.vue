<template>
    <div>
        <Footer />
    </div>
</template>

<script>

    import Footer from '@/components/home/Footer.vue'

    export default{
        name: 'FeedbackView',

        components: {
            Footer
        }
    }
</script>

<style scoped>
    *{
        background-color: #ecf7fa;
        color: #232f33;
    }
</style>