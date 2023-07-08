<template>
    <div>
        <div class="pagar-container" v-if="exibirPagar">
            <p>
                Aguadamos você no balcão de atendimento presencial para o levantamento da viatura.
            </p>
            <button type="submit" @click="fecharPagar">Terminar</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PagarBalcao',

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