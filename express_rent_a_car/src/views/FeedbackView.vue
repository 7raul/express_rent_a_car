<template>
    <div>
        <Header />
        <FeedbackCliente />
        <Footer />
    </div>
</template>

<script>
    import Header from '@/components/home/Header.vue'
    import FeedbackCliente from '@/components/FeedbackClientes/FeedbackClientes.vue'
    import Footer from '@/components/home/Footer.vue'
    export default{
        name: 'FeedbackView',

        components: {
            Header,
            FeedbackCliente,
            Footer
        }
    }
</script>

<style scoped>
</style>