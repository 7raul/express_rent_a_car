<template>
    <div>
        <div class="backgound"></div>
        <Cliente />
    </div>
</template>

<script>
    import Cliente from '@/components/RegistrarCliente/Cliente.vue'
    export default {
        name: 'RegistrarCliente',
        components: {
            Cliente
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
        background: url('@/assets/img/backgroundCliente.jpg') no-repeat;
        background-size: cover;
        background-position: center;
        filter: blur(10px);

    }
</style>