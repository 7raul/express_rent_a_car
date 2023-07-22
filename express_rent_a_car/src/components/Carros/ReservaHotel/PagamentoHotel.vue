<template>
    <div>
        <div class="pagar" v-if="!mostrarReservaComCaucao && !mostrarReservaSemCaucao">
            <div class="pagamento-container" >
                <div class="incluidos">
                    <div class="incluido">
                        <h4>Incluido no preço</h4>

                        <div class="includ">
                            <i class="fa-solid fa-check"></i>
                            <span>Cancelamento gratuito até 4 antes do levantamento</span>
                        </div>
                        <div class="includ">
                            <i class="fa-solid fa-check"></i>
                            <span>Cobertura de danos com franquia adicional</span>
                        </div>
                        <div class="includ">
                            <i class="fa-solid fa-check"></i>
                            <span>Seguro contra roubo com franquia adicional</span>
                        </div>
                    </div>

                    <div class="escolhas">
                        <h4>Optima escolha</h4>

                        <div class="escolha">
                            <i class="fa-solid fa-check"></i>
                            <span>Avaliação dos clientes: 4.4</span>
                        </div>
                        <div class="escolha">
                            <i class="fa-solid fa-check"></i>
                            <span>Balcão fácil de encontrar</span>
                        </div>
                        <div class="escolha">
                            <i class="fa-solid fa-check"></i>
                            <span>Avaliação dos clientes: 4.4</span>
                        </div>
                    </div>
                </div>

                <div class="detalhes-preco1">
                    <h4>Preço com caução</h4>

                    <div class="preco-caucao">
                        <div class="preco-aluguel">
                            <p>Preço do alugel:</p>
                            <span>27.000kz</span>
                        </div>

                        <form action="#">
                            <input type="checkbox" v-model="semMotorista">
                            <span>Sem motorista</span>
                        </form>

                        <div class="preco-aluguel" v-show="!semMotorista">
                            <p>Preço do motorista:</p>
                            <span>10.000kz</span>
                        </div>

                        <div class="valor-caucao">
                            <p>Preço da caução:</p>
                            <span>270.000kz</span>
                        </div>

                        <div class="valor-caucao">
                            <p>Custo total:</p>
                            <span>{{ calcularPrecoTotal() }}kz</span>
                        </div>
                    </div>
                    
                    <div class="info1">
                        <p>
                            Ao clicar em "Reservar com caução" está a confirmar que leu, compreendeu  e aceitou os
                            nossos <a href="#">Termos getais</a> e <a href="#">Termos de aluguel</a>
                        </p>
                    </div>
                </div>

                <div class="detalhes-preco2">
                    <h4>Preço sem caução</h4>

                    <div class="preco-caucao">
                        <div class="preco-aluguel">
                            <p>Preço do alugel:</p>
                            <span>27.000kz</span>
                        </div>

                        <form action="#">
                            <input type="checkbox" v-model="semMotorista">
                            <span>Sem motorista</span>
                        </form>

                        <div class="preco-aluguel" v-show="!semMotorista">
                            <p>Preço do motorista:</p>
                            <span>10.000kz</span>
                        </div>

                        <div class="valor-caucao">
                            <p>Custo total:</p>
                            <span>{{ calcularPrecoTotalSemCaucao() }}kz</span>
                        </div>
                    </div>
                    
                    <div class="info1">
                        <p>
                            Ao clicar em "Reservar sem caução" está a confirmar que leu, compreendeu  e aceitou os
                            nossos <a href="#">Termos getais</a> e <a href="#">Termos de aluguel</a>
                        </p>
                    </div>
                </div>

            </div>

            <div class="reservar-com">
                <p>Reservar: </p>

                <div class="reservra-btn">
                    <button type="submit" @click="pagarComCaucao">Com Caução</button>
                    <button type="submit" @click="pagarSemCaucao">Sem caução</button>
                </div>
            </div>
        </div>

        <ReservaComCaucaoHotel 
            v-if="mostrarReservaComCaucao"
            :semMotorista="semMotorista"
            :precoViatura="precoViatura"
            :precoMotorista="precoMotorista"
            :precoCaucao="precoCaucao"
            ref="reservaComCaucao"
        />
        <ReservaSemCaucaoHotel 
            v-if="mostrarReservaSemCaucao"
            :semMotorista="semMotorista"
            :precoViatura="precoViatura"
            :precoMotorista="precoMotorista"
            ref="reservaSemCaucao"
        />
    </div>
</template>

<script>
    import ReservaComCaucaoHotel from '@/components/Carros/ReservaHotel/ReservaComCaucaoHotel.vue'
    import ReservaSemCaucaoHotel from '@/components/Carros/ReservaHotel/ReservaSemCaucaoHotel.vue'
    export default {
        name: 'Pagamento',

        components: {
            ReservaComCaucaoHotel,
            ReservaSemCaucaoHotel
        },

        data() {
            return {
                mostrarReservaComCaucao: false,
                mostrarReservaSemCaucao: false,
                semMotorista: false,
                precoViatura: 27000, // Defina o preço correto da viatura
                precoMotorista: 10000, // Defina o preço correto do motorista
                precoCaucao: 270000, // Defina o preço correto da caução
            }
        },

        methods: {
            pagarComCaucao() {
                this.mostrarReservaComCaucao = true;
                this.mostrarReservaSemCaucao = false;
            },
            pagarSemCaucao() {
                this.mostrarReservaComCaucao = false;
                this.mostrarReservaSemCaucao = true;
            },
            calcularPrecoTotal() {
                const precoMotorista = this.semMotorista ? 0 : this.precoMotorista;
                return this.precoViatura + precoMotorista + this.precoCaucao;
            },
            calcularPrecoTotalSemCaucao() {
                const precoMotorista = this.semMotorista ? 0 : this.precoMotorista;
                return this.precoViatura + precoMotorista;
            },
        }
    }
</script>

<style scoped>
    @import '@/Styles/Carros/Pagamento.sass';
</style>