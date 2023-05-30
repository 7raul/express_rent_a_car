<template>
  <div>
    <NavBar />
      <div class="container">
        <div class="produtos-container">
          <HeaderHome />
          <ProdutoShow />
          <Servicos />
          <Nota />
          <Mensagem />
        </div>
      </div>
    <Footer />
  </div>
</template>

<script>
  import NavBar from '@/components/home/NavBar.vue'
  import HeaderHome from '@/components/home/HeaderHome.vue'
  import ProdutoShow from '@/components/home/ProdutoShow.vue'
  import Footer from '@/components/home/Footer.vue'
  import Servicos from '@/components/home/Servicos.vue'
  import Nota from '@/components/home/Nota.vue'
  import Mensagem from '@/components/home/Mensagem.vue'

  export default {
    name: 'HomeView',

    components: {
      NavBar,
      HeaderHome,
      ProdutoShow,
      Servicos,
      Nota,
      Mensagem,
      Footer
    }
  }
</script>

<style scoped>
  .container{
    background-color: #ecf7fa;
    color: #232f33;
  }

  .produtos-container{
    padding: 5rem;
  }
</style>
