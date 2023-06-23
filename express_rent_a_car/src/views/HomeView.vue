<template>
  <div>
    <Header />
    <ShowCars />
    <Servicos />
    <Nota />
    <Mensagem />
    <Footer />
  </div>
</template>

<script>
  import Header from '@/components/home/Header.vue'
  import ShowCars from '@/components/home/ShowCars.vue'
  import Footer from '@/components/home/Footer.vue'
  import Servicos from '@/components/home/Servicos.vue'
  import Nota from '@/components/home/Nota.vue'
  import Mensagem from '@/components/home/Mensagem.vue'

  export default {
    name: 'HomeView',

    components: {
      Header,
      ShowCars,
      Servicos,
      Nota,
      Mensagem,
      Footer
    }
  }
</script>

<style scoped>

</style>
