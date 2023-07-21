<template>
    <div>
        <div class="solicitacao-container">
            <h4>Solicitação</h4>

            <table id="posts">
                <thead>
                    <tr>
                        <th>Cliente</th>
                        <th>E-mail</th>
                        <th>Telefone</th>
                        <th>B.I</th>
                        <th>Viatura</th>
                        <th>Opção</th>
                        <th>Duração</th>
                        <th>Estado</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Raúl</td>
                        <td>raulmigueleb7@gmail.com</td>
                        <td>932157393</td>
                        <td>123456789LA22</td>
                        <td>Fiat500</td>
                        <td>
                            <p v-if="opcao === 'Hotel'">Hotel</p>
                            <p v-else-if="opcao === 'Aeroporto'">Aeroporto</p>
                            <p v-else-if="opcao === 'Balcao'">Balcao</p>
                        </td>
                        <td>24h</td>
                        <td>
                            <p v-if="status === 'Em espera'">Em espera</p>
                            <p v-else-if="status === 'Entregue'">Entregue</p>
                            <p v-else-if="status === 'Devolvido'">Devolvido</p>
                        </td>
                        <td class="btn-solicitacao">
                            <button><i class="ri-delete-bin-2-line"></i></button>
                            <button class="verde"><i class="ri-shield-check-fill"></i></button>
                            <div class="icon-conteiner">
                                <button v-if="!showDetails" @click="toggleDetails">
                                    <i class="ri-eye-close-fill"></i>
                                </button>
                                <button v-else>
                                    <i class="ri-eye-2-fill"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div v-if="showDetails">
                <!--Pedidos Hotel-->
                <PedidoHotel v-if="tipoPedido === 'hotel'" />

                <!--Pedido Aeroporto-->
                <PedidoAeroporto v-else-if="tipoPedido === 'aeroporto'" />

                <!--Pedido Balcao-->
                <PedidoBalcao v-else-if="tipoPedido === 'balcao'" />
            </div>
    
        </div>
    </div>
</template>

<script>
    import PedidoHotel from '@/components/admin/Pedidos/PedidosHotel/PedidoHotel.vue'
    import PedidoAeroporto from '@/components/admin/Pedidos/PedidosAeroporto/PedidoAeroporto.vue'
    import PedidoBalcao from '@/components/admin/Pedidos/PedidosBalcao/PedidoBalcao.vue'
    export default {
        name: 'Solicitacao',

        components: {
            PedidoHotel,
            PedidoAeroporto,
            PedidoBalcao
        },

        data() {
            return {
                status: 'Em espera',
                opcao: 'Hotel',
                showDetails: false
            };
        },

        methods: {
            toggleDetails() {
                this.showDetails = !this.showDetails;
            },
            // Outros métodos do componente
        },

        computed: {
            tipoPedido() {
                if (this.opcao === 'Hotel') {
                return 'hotel';
                } else if (this.opcao === 'Aeroporto') {
                return 'aeroporto';
                } else if (this.opcao === 'Balcao') {
                return 'balcao';
                } else {
                return null; // Retornar null ou outro valor padrão caso opcao não corresponda a nenhum tipo conhecido
                }
            },
        },
    }
</script>

<style scoped>
    @import '@/Styles/Admin/Pedidos/Solicitacao.sass';
</style>