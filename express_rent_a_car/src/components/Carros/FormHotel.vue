<template>
    <div>
        <div v-if="exibirFormHotel" class="form-hotel">
            <form action="#">
                <div class="entrega-devolucao">
                    <div class="entrega">
                        <div class="local">
                            <label for="#">Local de entrega</label>
                            <input type="text" required placeholder="Nome do hotel">
                        </div>

                        <div class="data-time">
                            <div class="data">
                                <label for="#">Data de entrega</label>
                                <input type="date">
                            </div>

                            <div class="hora">
                                <label for="#">hora de entrega</label>
                                <input type="time">
                            </div>
                        </div>
                    </div>
                    
                    <div class="devolucao">
                        <div class="local-devolucao">
                            <input type="checkbox" v-model="devolverNoMesmoLocal">
                            <span>Devolver no mesmo local</span>
                        </div>

                        <div class="local" v-show="!devolverNoMesmoLocal">
                            <label for="#">Local de devolução</label>
                            <input type="text" required placeholder="Nome do hotel">
                        </div>

                        <div class="data-time">
                            <div class="data">
                                <label for="#">Data de devolução</label>
                                <input type="date">
                            </div>
                            <div class="hora">
                                <label for="#">hora de devolução</label>
                                <input type="time">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="dados-condutor">
                    <div class="input-condutor">
                        <label for="#">Nome</label>
                        <input type="text" required placeholder="Nome do condutor">
                    </div>

                    <div class="input-condutor">
                        <label for="#">E-mail</label>
                        <input type="e-mail" required placeholder="E-mail do condutor">
                    </div>

                    <div class="numbers">
                        <div class="phone">
                            <label for="#">Telefone</label>
                            <input type="number" required placeholder="Numero de telefone">
                        </div>

                        <div class="bi">
                            <label for="#">B.I</label>
                            <input type="text" required placeholder="Numero do B.I">
                        </div>
                    </div>
                    
                    <div class="hote-number">
                        <label for="#">Quarto</label>
                        <input type="text" required placeholder="Numero do quarto">
                    </div>
                </div>
            </form>

            <div class="bottom">
                <div class="idade">
                    <input type="Checkbox">
                    <span>Condutor com a idade entre 20  e 60 anos</span>
                </div>
                <div class="bottom-button">
                    <button type="submit" @click="mostrarPagamento">Continuar</button>
                </div>
            </div>
        </div>
        <PagamentoHotel v-else />
    </div>
</template>

<script>
    import PagamentoHotel from '@/components/Carros/PagamentoHotel.vue'
    export default {
        name: 'FormHotel',

        components: {
            PagamentoHotel
        },

        data() {
            return {
                exibirFormHotel: true,
                devolverNoMesmoLocal: true
            };
        },

        methods: {
            mostrarPagamento() {
                this.exibirFormHotel = false;
            }
        }
    }
</script>

<style scoped>
    @import '@/Styles/Carros/FormHotel.sass';
</style>