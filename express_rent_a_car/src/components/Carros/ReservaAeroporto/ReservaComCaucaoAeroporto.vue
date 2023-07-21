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

                        <div class="card-local-date-time">
                            <div class="card-local">
                                <h6>Numero do voo</h6>
                                <span>00015</span>
                            </div>
                            <div class="card-local">
                                <h6>Numero do acento</h6>
                                <span>10203</span>
                            </div>
                        </div>

                        <div class="card-info">
                            <h6>Viatura solicitada</h6>
                            <span>Fiat 500</span>
                        </div>

                        <div class="pagamento">
                            <div class="preco-viatura">
                                <h6>Preço da viatura</h6>
                                <span>{{ precoViatura }}kz</span>
                            </div>

                            <div class="preco-viatura" v-if="!semMotorista">
                                <h6>Preço do motorista</h6>
                                <span>{{ precoMotorista }}kz</span>
                            </div>

                            <div class="preco-viatura">
                                <h6>Preço da Caução</h6>
                                <span>{{ precoCaucao }}kz</span>
                            </div>

                            <div class="preco-total">
                                <div>
                                    <h6>Preço total</h6>
                                    <span>{{ precoTotal }}kz</span>
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

        <Pagar v-else />
    </div>
</template>

<script>
    import Pagar from '@/components/Carros/Pagar.vue'
    export default {
        name: 'ReservarComCaucaoAeroporto',

        components: {
            Pagar
        },
        
        data() {
            return {
                exibirConfirmacao: true
            }
        },

        props: {
            semMotorista: {
                type: Boolean,
                default: false,
            },
            precoViatura: {
                type: Number,
                default: 0,
            },
            precoMotorista: {
                type: Number,
                default: 0,
            },
            precoCaucao: {
                type: Number,
                default: 0,
            },
            // Outras propriedades que você pode ter em seu componente
        },

        methods: {
            confirmarReserva() {
                this.exibirConfirmacao = false
            }
        },

        computed: {
            precoTotal() {
                const precoMotorista = this.semMotorista ? 0 : this.precoMotorista;
                return this.precoViatura + precoMotorista + this.precoCaucao;
            },
        },
    }
</script>