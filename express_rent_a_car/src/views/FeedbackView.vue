<template>
    <div>
        <Header />
        <FeedbackHome />
        <Feedbacks />
        <Footer />
    </div>
</template>

<script>

    import Header from '@/components/about/Header.vue'
    import FeedbackHome from '@/components/feedback/FeedbackHome.vue'
    import Footer from '@/components/home/Footer.vue'
    import Feedbacks from '@/components/feedback/Feedbacks.vue'

    export default{
        name: 'FeedbackView',

        components: {
            Header,
            FeedbackHome,
            Feedbacks,
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