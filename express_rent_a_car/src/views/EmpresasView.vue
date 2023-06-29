<template>
    <div>
        <Header />
        <Empresas />
        <Footer />
    </div>
</template>

<script>
    import Header from '@/components/home/Header.vue'
    import Empresas from '@/components/Empresas/Empresas.vue'
    import Footer from '@/components/home/Footer.vue'
    export default {
        name:'EmpresasView',

        components: {
            Header,
            Empresas,
            Footer
        }
    }
</script>