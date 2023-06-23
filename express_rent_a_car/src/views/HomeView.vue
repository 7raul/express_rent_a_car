<template>
  <div>
    <Header />
    <ShowCars />
    <Servicos />
    <Mensagem />
    <Footer />
  </div>
</template>

<script>
  import Header from '@/components/home/Header.vue'
  import ShowCars from '@/components/home/ShowCars.vue'
  import Footer from '@/components/home/Footer.vue'
  import Servicos from '@/components/home/Servicos.vue'
  import Mensagem from '@/components/home/Mensagem.vue'

  export default {
    name: 'HomeView',

    components: {
      Header,
      ShowCars,
      Servicos,
      Mensagem,
      Footer
    }
  }
</script>

<style scoped>

</style>
