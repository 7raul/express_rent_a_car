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
                        <td>24h</td>
                        <td>
                            <p v-if="status === 'Em espera'">Em espera</p>
                            <p v-else-if="status === 'Cancelado'">Cancelado</p>
                            <p v-else-if="status === 'Entregue'">Entregue</p>
                            <p v-else-if="status === 'Devolvido'">Devolvido</p>
                        </td>
                        <td class="btn-solicitacao">
                            <button><i class="ri-delete-bin-2-line"></i></button>
                            <button class="verde"><i class="ri-shield-check-fill"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="card-reserva">
                <div class="conteiner-card">
                    <div class="card-top">
                        <router-link to="#">
                            <i class="ri-roadster-fill"></i><span>Express<span class="color">RentaCar</span></span>
                        </router-link>

                        <div class="id-reserva">
                            <h6>ID:</h6>
                            <span>1234567890</span>
                        </div>
                    </div>

                    <div class="card-content">
                        <div class="card-info">
                            <h6>Nome do requerente</h6>
                            <span>Raúl Miguel Martinho António</span>
                        </div>

                        <div class="card-info">
                            <h6>Telefone</h6>
                            <span>932157393</span>
                        </div>

                        <div class="card-info">
                            <h6>E-mail</h6>
                            <span>raulmigueleb7@gmail.com</span>
                        </div>

                        <div class="card-info">
                            <h6>B.I</h6>
                            <span>123456789LA12</span>
                        </div>

                        <div class="card-local-date-time">
                            <div class="card-local">
                                <h6>Local de entrega</h6>
                                <span>Hotel Alvalade</span>
                            </div>
                            <div class="card-local">
                                <h6>Data e hora</h6>
                                <span>19/07/2023 - 12h50</span>
                            </div>
                        </div>

                        <div class="card-local-date-time">
                            <div class="card-local">
                                <h6>Local de Devoluçãõ</h6>
                                <span>Hotel Alvalade</span>
                            </div>
                            <div class="card-local">
                                <h6>Data e hora</h6>
                                <span>20/07/2023 - 12h50</span>
                            </div>
                        </div>

                        <div class="card-info">
                            <h6>Numero do quarto</h6>
                            <span>320</span>
                        </div>

                        <div class="card-info">
                            <h6>Viatura solicitada</h6>
                            <span>Fiat 500</span>
                        </div>

                        <div class="pagamento">
                            <div class="preco-viatura">
                                <h6>Preço da viatura</h6>
                                <span>27 000kz</span>
                            </div>

                            <div class="preco-viatura">
                                <h6>Preço da viatura</h6>
                                <span>5 000kz</span>
                            </div>

                            <div class="preco-viatura">
                                <h6>Preço da Caução</h6>
                                <span>270 000kz</span>
                            </div>

                            <div class="preco-total">
                                <div>
                                    <h6>Preço total</h6>
                                    <span>300 000kz</span>
                                </div>
                                <div>
                                    <h6>Entidade responsavel</h6>
                                    <span>Artur Rent a car</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Solicitacao',

        data() {
            return {
                status: 'Em espera'
            };
        }
    }
</script>

<style scoped>
    @import '@/Styles/Admin/Pedidos/Solicitacao.sass';
</style>