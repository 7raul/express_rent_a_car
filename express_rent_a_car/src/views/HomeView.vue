<template>
  <div>
    <NavBar />
      <div class="container">
        <Carros />
        <Servicos />
        <Nota />
        <Texto />
        <Mensagem />
      </div>
    <Footer />
  </div>
</template>

<script>
  import NavBar from '@/components/home/NavBar.vue'
  import Carros from '@/components/home/Carros.vue'
  import Footer from '@/components/home/Footer.vue'
  import Servicos from '@/components/home/Servicos.vue'
  import Nota from '@/components/home/Nota.vue'
  import Texto from '@/components/home/Texto.vue'
  import Mensagem from '@/components/home/Mensagem.vue'

  export default {
    name: 'HomeView',

    components: {
      NavBar,
      Carros,
      Servicos,
      Nota,
      Texto,
      Mensagem,
      Footer
    }
  }
</script>

<style scoped>
  .container{
    background-color: #222327;
    color: #e4e4e4;
  }

  .produtos-container{
    padding: 5rem;
  }
</style>
