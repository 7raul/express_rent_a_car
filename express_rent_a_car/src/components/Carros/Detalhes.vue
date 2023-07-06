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
                                <input type="radio" required>
                                <span>Hotel</span>
                            </div>
                            <div class="aeroporto">
                                <input type="radio" required>
                                <span>Aeroporto</span>
                            </div>
                            <div class="balcao">
                                <input type="radio" required>
                                <span>Balcão</span>
                            </div>
                        </form>

                        <button type="submit">Continuar ></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Detalhes',

        data() {
            return{
                carImg: require("@/assets/img/fiat.jpg"),
                logoEmpresa: require("@/assets/img/empresa.jpg")
            }
        } 
    }
</script>

<style scoped>
    @import '@/Styles/Carros/Detalhes.sass';
</style>