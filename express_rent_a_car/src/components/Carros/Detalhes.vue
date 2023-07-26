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
                        <div class="stars">
                            <!-- Estrelas preenchidas -->
                            <div class="preenchidos">
                                <i v-for="index in 5" :key="index" :class="['fas', {'fa-star': index <= filledStars, 'fa-star-half-alt': index === Math.ceil(filledStars), 'fa-star-o': index > filledStars}]" @click="updateStars(index)"></i>
                            </div>

                            <!-- Estrelas não preenchidas -->
                            <div class="nao-preenchidos">
                                <i v-for="index in 5 - Math.ceil(filledStars)" :key="index" class="far fa-star" @click="updateStars(Math.ceil(filledStars) + index)"></i>
                            </div>
                        </div>
                        <p>{{ calculateAverageStars() }} <span>({{ ratings.length }} reviews)</span></p>
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
                                    <p>Camera Reversa:</p>
                                    <p class="color">SIm</p>
                                </div>
                                <div class="dados">
                                    <p>Áudio:</p>
                                    <p class="color">Rádio/USB</p>
                                </div>
                                <div class="dados">
                                    <p>Banco de couro:</p>
                                    <p class="color">Não</p>
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
    import FormHotel from '@/components/Carros/ReservaHotel/FormHotel.vue'
    import FormAeroporto from '@/components/Carros/ReservaAeroporto/FormAeroporto.vue'
    import FormBalcao from '@/components/Carros/ReservaBalcao/FormBalcao.vue'
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
                componenteSelecionado: '',
                filledStars: 0, // Número de estrelas preenchidas inicialmente
                ratings: [], // Avaliações dos clientes em uma matriz

            }
        },

        props: {
            initialRating: {
                type: Number,
                default: 0,
            },
            totalReviews: {
                type: Number,
                default: 0,
            },
        },

        created() {
            // Recupera as classificações de todos os clientes do localStorage se estiverem disponíveis
            if (localStorage.getItem('allRatings')) {
                this.ratings = JSON.parse(localStorage.getItem('allRatings'));
                const currentRating = this.ratings.find((rating) => rating.client === 'current');
                if (currentRating) {
                    this.filledStars = parseFloat(currentRating.rating);
                }
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
            },

            //Avaliação de estrelas
            // Função para atualizar o número de estrelas preenchidas ao clicar
            updateStars(stars) {
                // Se o cliente clicar em uma estrela, preenche todas as estrelas à esquerda
                this.filledStars = stars;

                // Atualiza as classificações do cliente no array e salva em localStorage
                const currentRatingIndex = this.ratings.findIndex((rating) => rating.client === 'current');
                if (currentRatingIndex !== -1) {
                    this.ratings.splice(currentRatingIndex, 1, { client: 'current', rating: this.filledStars });
                } else {
                    this.ratings.push({ client: 'current', rating: this.filledStars });
                }
                localStorage.setItem('allRatings', JSON.stringify(this.ratings));
            },
            // Função para calcular a média das estrelas atribuídas
            calculateAverageStars() {
                const totalStars = this.ratings.reduce((total, rating) => total + parseFloat(rating.rating), 0);
                const average = totalStars / this.ratings.length;
                return average.toFixed(1);
            },
        }
    }
</script>

<style scoped>
    @import '@/Styles/Carros/Detalhes.sass';
</style>