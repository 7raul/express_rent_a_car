<template>
    <div>
        <div class="pagar-container" v-if="exibirPagar">
            <p>
                A sua reserva está sendo processada, será enviado no seu e-mail os dados bancários para 
                efetuar o pagamento, por favor verifique o seu correio electrónico.
            </p>
            <button type="submit" @click="fecharPagar">Terminar</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Pagar',

        data() {
            return {
                exibirPagar: true
            }
        },

        methods: {
            fecharPagar(){
                this.exibirPagar = false;
            }
        }
    }
</script>

<style scoped>
    @import '@/Styles/Carros/Pagar.sass';
</style>