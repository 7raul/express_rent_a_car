<template>
    <div>
        <div class="container-inicio">
            <BarraDeNavegacao />
        </div>
    </div>
</template>

<script>
    import BarraDeNavegacao from '../components/Inicio/BarraDeNavegacao.vue'
    export default {
        name: 'InicioView',
        components: {
            BarraDeNavegacao
        }
    }
</script>

<style scoped>
    @import '../Styles/Inicio/InicioView.sass';
</style>