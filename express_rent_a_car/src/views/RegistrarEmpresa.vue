<template>
    <div>
        <div class="backgound"></div>
        <Empresa />
    </div>
</template>

<script>
    import Empresa from '@/components/RegistrarEmppresa/Empresa.vue'
    export default {
        name: 'RegistrarEmpresa',
        components: {
            Empresa
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