<template>
    <div class="container-main">
        <div class="hero">
            <h1>Deseja alugar um carro?</h1>
            <p>Ligamos você as melhores empresas de <br> aluguel de carros</p> 
        </div>

        <FormularioReserva />
    </div>
</template>

<script>
    import FormularioReserva from './FormularioReserva.vue'
    export default {
        name: 'Main',
        components: {
            FormularioReserva
        }
    }
</script>

<style scoped>
    @import '@/Styles/Home/NavbarComponents/Main.sass'
</style>