<template>
    <div>
        <Header />
        <Reclamacao />
        <Footer />
    </div>
</template>

<script>
    import Header from '@/components/home/Header.vue'
    import Reclamacao from '@/components/Reclamacao/Reclamacao.vue'
    import Footer from '@/components/home/Footer.vue'
    export default{
        name: 'ReclamacaoView',

        components: {
            Header,
            Reclamacao,
            Footer
        }
    }
</script>

<style scoped>

</style>