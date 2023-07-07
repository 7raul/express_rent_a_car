<template>
    <div>
        <div class="pagar-container">
            <p>
                A sua reserva está sendo processada, será enviado no seu e-mail os dados bancários para 
                efetuar o pagamento, por favor verifique o seu correio electrónico.
            </p>
            <button type="submit">Terminar</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Pagar'
    }
</script>

<style scoped>
    @import '@/Styles/Carros/Pagar.sass';
</style>