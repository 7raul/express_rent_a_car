<template>
    <div>
        <div class="backgound-empresa"></div>
        <Body />
    </div>
</template>

<script>
    import Body from '@/components/LoginEmpresa/Body.vue'
    export default {
        name: 'LoginEmpresa',

        components: {
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

    .backgound-empresa{
        width: 100%;
        height: 100vh;
        background: url('@/assets/img/loginEmpresa.jpg') no-repeat;
        background-size: cover;
        background-position: center;
        filter: blur(10px);
    }
</style>