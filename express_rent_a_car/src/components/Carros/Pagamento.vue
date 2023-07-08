<template>
    <div>
        <div class="pagar">
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
                    <button type="submit">Com Caução</button>
                    <button type="submit">Sem caução</button>
                </div>
            </div>
        </div>

        <Pagar />
    </div>
</template>

<script>
    import Pagar from '@/components/Carros/Pagar.vue'
    export default {
        name: 'Pagamento',

        components: {
            Pagar
        }
    }
</script>

<style scoped>
    @import '@/Styles/Carros/Pagamento.sass';
</style>