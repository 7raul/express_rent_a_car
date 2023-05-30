<template>
    <div class="container">
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
    .hero{
        margin-top: 12rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #e4e4e4;
    }

    .hero h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
    }

    .hero p {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }
</style>