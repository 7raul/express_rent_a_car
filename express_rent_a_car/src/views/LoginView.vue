<template>
    <div>
        <Header />
        <div class="backgound"></div>
        <Body />
    </div>
</template>

<script>
    import Header from '@/components/Login/Header.vue'
    import Body from '@/components/Login/Body.vue'
    export default {
        name: 'LoginView',
        components: {
            Header,
            Body
        }
    }

</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sem serifa;
    }

    .backgound{
        width: 100%;
        height: 100vh;
        background: url('@/assets/img/backgroun-login.jpg') no-repeat;
        background-size: cover;
        background-position: center;
        filter: blur(10px);

    }
</style>