<template>
    <div>
        <div class="confirmar-reserva" v-if="exibirConfirmacao">
            <div class="card-reserva">
                <div class="conteiner-card">
                    <div class="card-top">
                        <router-link to="#">
                            <i class="ri-roadster-fill"></i><span>Express<span class="color">RentaCar</span></span>
                        </router-link>

                        
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
                                <span>Balcão de atendimento</span>
                            </div>
                            <div class="card-local">
                                <h6>Data e hora</h6>
                                <span>19/07/2023 - 12h50</span>
                            </div>
                        </div>

                        <div class="card-local-date-time">
                            <div class="card-local">
                                <h6>Local de Devoluçãõ</h6>
                                <span>Balcão de atendimento</span>
                            </div>
                            <div class="card-local">
                                <h6>Data e hora</h6>
                                <span>20/07/2023 - 12h50</span>
                            </div>
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
                                <h6>Preço do motorista</h6>
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

                        <div class="btn-confirmar">
                            <button @click="confirmarReserva">Confirmar reserva</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <PagarBalcao v-else />
    </div>
</template>

<script>
    import PagarBalcao from '@/components/Carros/ReservaBalcao/PagarBalcao.vue'
    export default {
        name: 'ReservaComCaucaoBalcao',
        components: {
            PagarBalcao
        },

        data() {
            return {
                exibirConfirmacao: true
            }
        },

        methods: {
            confirmarReserva() {
                this.exibirConfirmacao = false
            }
        }
        
    }
</script>