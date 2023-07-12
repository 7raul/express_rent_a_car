<template>
    <div>
        <div class="reservas-container">
            <h2>Minhas reservas</h2>
            <table id="tabela">
                <thead>
                    <tr>
                        <th>Empresa</th>
                        <th>Carro</th>
                        <th>Valor</th>
                        <th>Região</th>
                        <th></th> 
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Artur Rent a car</td>
                        <td>Fiat 500</td>
                        <td>25.00kz</td>
                        <td class="warning">Luanda</td>
                        <td class="btn-reserve">
                            <button v-if="!reservaCumprida" class="vermelho">Cancelar</button>
                            <button v-else class="vermelho">Eliminar</button>
                            <button class="verde" @click="scrollToDetalhes">Editar</button>
                        </td>
                    </tr>
            
                    <tr>
                        <td>Artur Rent a car</td>
                        <td>Fiat 500</td>
                        <td>25.00kz</td>
                        <td class="warning">Luanda</td>
                        <td class="btn-reserve">
                            <button v-if="!reservaCumprida" class="vermelho">Cancelar</button>
                            <button v-else class="vermelho">Eliminar</button>
                            <button class="verde" @click="scrollToDetalhes">Editar</button>
                        </td>
                    </tr>

                    <tr>
                        <td>Artur Rent a car</td>
                        <td>Fiat 500</td>
                        <td>25.00kz</td>
                        <td class="warning">Luanda</td>
                        <td class="btn-reserve">
                            <button v-if="!reservaCumprida" class="vermelho">Cancelar</button>
                            <button v-else class="vermelho">Eliminar</button>
                            <button class="verde" @click="scrollToDetalhes">Editar</button>
                        </td>
                    </tr>

                    <tr>
                        <td>Artur Rent a car</td>
                        <td>Fiat 500</td>
                        <td>25.00kz</td>
                        <td class="warning">Luanda</td>
                        <td class="btn-reserve">
                            <button v-if="!reservaCumprida" class="vermelho">Cancelar</button>
                            <button v-else class="vermelho">Eliminar</button>
                            <button class="verde" @click="scrollToDetalhes">Editar</button>
                        </td>
                    </tr>

                    <tr>
                        <td>Artur Rent a car</td>
                        <td>Fiat 500</td>
                        <td>25.00kz</td>
                        <td class="warning">Luanda</td>
                        <td class="btn-reserve">
                            <button v-if="!reservaCumprida" class="vermelho">Cancelar</button>
                            <button v-else class="vermelho">Eliminar</button>
                            <button class="verde" @click="scrollToDetalhes">Editar</button>
                        </td>
                    </tr>

                    <tr>
                        <td>Artur Rent a car</td>
                        <td>Fiat 500</td>
                        <td>25.00kz</td>
                        <td class="warning">Luanda</td>
                        <td class="btn-reserve">
                            <button v-if="!reservaCumprida" class="vermelho">Cancelar</button>
                            <button v-else class="vermelho">Eliminar</button>
                            <button class="verde" @click="scrollToDetalhes">Editar</button>
                        </td>
                    </tr>

                    <tr>
                        <td>Artur Rent a car</td>
                        <td>Fiat 500</td>
                        <td>25.00kz</td>
                        <td class="warning">Luanda</td>
                        <td class="btn-reserve">
                            <button v-if="!reservaCumprida" class="vermelho">Cancelar</button>
                            <button v-else class="vermelho">Eliminar</button>
                            <button class="verde" @click="scrollToDetalhes">Editar</button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div id="detalhes">
                <div class="xmark" @click="fecharDetalhes" v-show="mostrarDetalhes">
                    <i class="fa-solid fa-xmark"></i>
                </div>
                <Detalhes v-if="mostrarDetalhes" />
            </div>
        </div>
    </div>
</template>

<script>
    import Detalhes from '@/components/Carros/Detalhes.vue'
    export default {
        name: 'reservas',

        components: {
            Detalhes
        },

        data() {
            return {
                reservaCumprida: false,
                mostrarDetalhes: false,
                dataDaReserva: '2023-07-15' // Coloque a data da reserva aqui
            }
        },

        methods: {
            exibirDetalhes() {
                this.mostrarDetalhes = true;
            },

            scrollToDetalhes() {
                this.mostrarDetalhes = true; // Mostrar o componente Detalhes primeiro
                this.$nextTick(() => {
                    const detalhesElement = document.getElementById('detalhes');
                    detalhesElement.scrollIntoView({ behavior: 'smooth' });
                });
            },

            fecharDetalhes() {
                this.mostrarDetalhes = false;
                const tabelaElement = document.getElementById('tabela');
                tabelaElement.scrollIntoView({ behavior: 'smooth' });
            }
        },

        computed: {
            reservaExpirada() {
                const dataAtual = new Date().toISOString().split('T')[0]; // Obtém a data atual no formato AAAA-MM-DD
                return dataAtual > this.dataDaReserva; // Verifica se a data atual é maior que a data da reserva
            }
        },

        watch: {
            reservaExpirada(novaExpiracao) {
                this.reservaCumprida = novaExpiracao;
            }
        }
    }
</script>

<style scoped>
    @import '@/Styles/GerenciarReservas/reservas.sass';
</style>