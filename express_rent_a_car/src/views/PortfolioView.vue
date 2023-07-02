<template>
    <div>
        <Header />
        <PerfilEmpresa />
        <Footer />
    </div>
</template>

<script>
    import Header from '@/components/home/Header.vue'
    import PerfilEmpresa from '@/components/Portfolio/PerfilEmpresa.vue'
    import Footer from '@/components/home/Footer.vue'
    export default {
        name: 'Portfolio',
        components: {
            Header,
            PerfilEmpresa,
            Footer
        }
    }
</script>

<style scoped>

</style>