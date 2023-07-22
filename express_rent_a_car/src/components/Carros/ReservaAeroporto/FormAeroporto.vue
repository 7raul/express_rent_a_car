<template>
    <div>
        <div class="form-hotel" v-if="exibirFormAeroporto">
            <form action="#">
                <div class="entrega-devolucao">
                    <div class="entrega">
                        <div class="local">
                            <label for="#">Local de entrega</label>
                            <input type="text" required placeholder="Nome do aeroporto">
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
                            <input type="text" required placeholder="Nome do hotel ou aeroporto">
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
                    
                    <div class="voo-number">
                        <div class="voo">
                            <label for="#">Voo</label>
                            <input type="text" required placeholder="Numero voo">
                        </div>

                        <div class="voo">
                            <label for="#">Acento</label>
                            <input type="text" required placeholder="Numero do acento">
                        </div>
                    </div>
                </div>
            </form>

            <div class="bottom">
                <div class="idade">
                    <input type="Checkbox" required>
                    <span>Condutor com a idade entre 20  e 60 anos</span>
                </div>
                <div class="bottom-button">
                    <button type="submit" @click="mostrarPagamento">Continuar</button>
                </div>
            </div>
        </div>
        <PagamentoAeroporto v-else />
    </div>
</template>

<script>
    import PagamentoAeroporto from '@/components/Carros/ReservaAeroporto/PagamentoAeroporto.vue'
    export default {
        name: 'FormAeroporto',

        components: {
            PagamentoAeroporto
        },

        data() {
            return {
                exibirFormAeroporto: true,
                devolverNoMesmoLocal: false
            }
        },

        methods: {
            mostrarPagamento() {
                this.exibirFormAeroporto = false
            }
        }
    }
</script>

<style scoped>
    @import '@/Styles/Carros/FormAeroporto.sass';
</style>