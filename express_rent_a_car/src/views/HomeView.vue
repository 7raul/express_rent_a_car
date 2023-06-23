<template>
  <div>
    <Header />
    <ShowCars />
    <Servicos />
    <Atention />
    <Footer />
  </div>
</template>

<script>
  import Header from '@/components/home/Header.vue'
  import ShowCars from '@/components/home/ShowCars.vue'
  import Servicos from '@/components/home/Servicos.vue'
  import Atention from '@/components/home/Atention.vue'
  import Footer from '@/components/home/Footer.vue'

  export default {
    name: 'HomeView',

    components: {
      Header,
      ShowCars,
      Servicos,
      Atention,
      Footer
    }
  }
</script>

<style scoped>

</style>
