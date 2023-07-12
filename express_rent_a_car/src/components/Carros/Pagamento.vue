<template>
    <div>
        <div class="pagar" v-if="exibirPagamento">
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

                        <div class="preco-aluguel">
                            <p>Preço da entrega:</p>
                            <span>3.000kz</span>
                        </div>

                        <div class="valor-caucao">
                            <p>Preço da caução:</p>
                            <span>270.000kz</span>
                        </div>

                        <div class="valor-caucao">
                            <p>Custo total:</p>
                            <span>297.000kz</span>
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
                            <p>Preço da entrega:</p>
                            <span>3.000kz</span>
                        </div>

                        <div class="valor-caucao">
                            <p>Custo total:</p>
                            <span>270.000kz</span>
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

        <Pagar v-else />
    </div>
</template>

<script>
    import Pagar from '@/components/Carros/Pagar.vue'
    export default {
        name: 'Pagamento',

        components: {
            Pagar
        },

        data() {
            return {
                exibirPagamento: true,
                semMotorista: false
            }
        },

        methods: {
            pagarComCaucao() {
                this.exibirPagamento = false;
            },

            pagarSemCaucao() {
                this.exibirPagamento = false;
            }
        }
    }
</script>

<style scoped>
    @import '@/Styles/Carros/Pagamento.sass';
</style>