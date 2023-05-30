<template>
  <div class="about">
    <div class="container">
      <Header />
      <Body />
      <Footer />
    </div>
  </div>
</template>

<script>
  import Header from '@/components/about/Header.vue'
  import Footer from '@/components/home/Footer.vue'
  import Body from '@/components/about/Body.vue'
  export default{
    name: 'AboutView',

    components: {
      Header,
      Body,
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
