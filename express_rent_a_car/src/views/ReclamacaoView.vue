<template>
    <div>
        <Header />
        <Reclamacao />
        <Footer />
    </div>
</template>

<script>
    import Header from '@/components/about/Header.vue'
    import Reclamacao from '@/components/reclamacao/Reclamacao.vue'
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
    *{
    width: 100%;
    background-color: #ecf7fa;
    color: #232f33;
  }
</style>