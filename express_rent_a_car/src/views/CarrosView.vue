<template>
    <div>
        <Header />
        <Carros />
        <Footer />
    </div>
</template>

<script>
    import Header from '@/components/home/Header.vue'
    import Carros from '@/components/Carros/Carros.vue'
    import Footer from '@/components/home/Footer.vue'
    export default {
        name: 'CarrosView',
        components: {
            Header,
            Carros,
            Footer
        }
    }
</script>