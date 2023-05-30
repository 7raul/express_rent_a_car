<template>
    <div class="container">  
        <Header />
    </div>
</template>

<script>
    import Header from './navbarComponents/Header.vue'
    export default {
        name: 'NavBar',
        components: {
            Header
        }
    }

</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .container {
        height: 100vh;
        background-color: #000;
        background-image: url("@/assets/img/background-Banner.jpg");
        background-size: cover;
        background-position: center;
    }
</style>