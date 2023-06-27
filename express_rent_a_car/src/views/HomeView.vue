<template>
  <div>
    <Header />
    <Banner />
    <ShowCars />
    <Servicos />
    <Atention />
    <DicasDeClientes />
    <Destaque  />
    <Footer />
  </div>
</template>

<script>
  import Header from '@/components/home/Header.vue'
  import Banner from '@/components/home/Banner.vue'
  import ShowCars from '@/components/home/ShowCars.vue'
  import Servicos from '@/components/home/Servicos.vue'
  import Atention from '@/components/home/Atention.vue'
  import DicasDeClientes from '@/components/home/DicasDeClientes.vue'
  import Destaque from '@/components/home/Destaque.vue'
  import Footer from '@/components/home/Footer.vue'

  export default {
    name: 'HomeView',

    components: {
      Header,
      Banner,
      ShowCars,
      Servicos,
      Atention,
      DicasDeClientes,
      Destaque,
      Footer
    }
  }
</script>

<style scoped>

</style>
