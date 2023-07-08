<template>
    <div>
        <div class="detalhes-container">
            <div class="card-car">
                <div class="name-car">
                    <h3>Fiat 500</h3>
                </div>
                <div class="empresa">
                    <div class="logo-empresa">
                        <a href="/empresa"><img :src="logoEmpresa" ></a>
                    </div>

                    <div class="reviews">
                        <div>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                        <p>4.4 <span>(10,482 reviews)</span></p>
                    </div>
                </div>

                <div class="detalhes-carro">
                    <div class="detalhes">
                        <div class="img-car">
                            <img :src="carImg" >
                        </div>

                        <div class="info">
                            <div class="info1">
                                <div class="dados">
                                    <p>Passageiros:</p>
                                    <p class="color">5</p>
                                </div>
                                <div class="dados">
                                    <p>Direção:</p>
                                    <p class="color">Hidráulica</p>
                                </div>
                                <div class="dados">
                                    <p>Vidros eléctricos:</p>
                                    <p class="color">Sim</p>
                                </div>
                                <div class="dados">
                                    <p>Airbag:</p>
                                    <p class="color">Sim</p>
                                </div>
                                <div class="dados">
                                    <p>Portas:</p>
                                    <p class="color">4</p>
                                </div>
                                <div class="dados">
                                    <p>Malas:</p>
                                    <p class="color">1</p>
                                </div>
                            </div>

                            <div class="info1">
                                <div class="dados">
                                    <p>Ar condicionado:</p>
                                    <p class="color">Sim</p>
                                </div>
                                <div class="dados">
                                    <p>Cambio:</p>
                                    <p class="color">Autómatico</p>
                                </div>
                                <div class="dados">
                                    <p>Trava Electrica:</p>
                                    <p class="color">Sim</p>
                                </div>
                                <div class="dados">
                                    <p>Freiod ABS:</p>
                                    <p class="color">SIm</p>
                                </div>
                                <div class="dados">
                                    <p>Áudio:</p>
                                    <p class="color">Rádio/USB</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                    <div class="pagamento-zone">
                        <h4>Selecione sua opção de entrega</h4>
                        <div class="att">
                            <form action="#">
                                <div class="hotel">
                                    <input type="radio" name="opcao-entrega" v-model="opcaoEntrega" value="hotel">
                                    <span>Hotel</span>
                                </div>
                                <div class="aeroporto">
                                    <input type="radio" name="opcao-entrega" v-model="opcaoEntrega" value="aeroporto">
                                    <span>Aeroporto</span>
                                </div>
                                <div class="balcao">
                                    <input type="radio" name="opcao-entrega" v-model="opcaoEntrega" value="balcao">
                                    <span>Balcão</span>
                                </div>
                            </form>

                            <button type="submit" @click="mostrarComponente">Continuar</button>
                        </div>
                    </div>
                </div>

                <!--Reservado para componentes-->
                <transition name="slide">
                    <div v-if="exibirComponente" class="detalhes-carro">
                        <component :is="componenteSelecionado" />
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import FormHotel from '@/components/Carros/FormHotel.vue'
    import FormAeroporto from '@/components/Carros/FormAeroporto.vue'
    import FormBalcao from '@/components/Carros/FormBalcao.vue'
    export default {
        name: 'Detalhes',

        components: {
            FormHotel,
            FormAeroporto,
            FormBalcao
        },

        data() {
            return{
                carImg: require("@/assets/img/fiat.jpg"),
                logoEmpresa: require("@/assets/img/empresa.jpg"),
                opcaoEntrega: '',
                exibirComponente: false,
                componenteSelecionado: ''
            }
        },

        methods: {
            closeDetalhes() {
                this.showDetalhes = false;
            },

            mostrarComponente(){
                // Verificar a opção selecionada e exibir o componente correspondente após clicar em "Continuar"
                if (this.opcaoEntrega === 'hotel') {
                    this.exibirComponente = true;
                    this.componenteSelecionado = 'FormHotel';
                } else if (this.opcaoEntrega === 'aeroporto') {
                    this.exibirComponente = true;
                    this.componenteSelecionado = 'FormAeroporto';
                } else if (this.opcaoEntrega === 'balcao') {
                    this.exibirComponente = true;
                    this.componenteSelecionado = 'FormBalcao';
                } else {
                    this.exibirComponente = false;
                    this.componenteSelecionado = '';
                }
            }
        }
    }
</script>

<style scoped>
    @import '@/Styles/Carros/Detalhes.sass';
</style>