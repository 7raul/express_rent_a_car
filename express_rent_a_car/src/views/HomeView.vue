<template>
  <div>
    <Header />
    <Servicos />
    <Nota />
    <Mensagem />
    <Footer />
  </div>
</template>

<script>
  import Header from '@/components/home/Header.vue'
  import Footer from '@/components/home/Footer.vue'
  import Servicos from '@/components/home/Servicos.vue'
  import Nota from '@/components/home/Nota.vue'
  import Mensagem from '@/components/home/Mensagem.vue'

  export default {
    name: 'HomeView',

    components: {
      Header,
      Servicos,
      Nota,
      Mensagem,
      Footer
    }
  }
</script>

<style scoped>

</style>
