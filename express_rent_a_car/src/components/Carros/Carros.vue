<template>
    <div>
        <div class="container-carros">
            <header>
                <div class="header-carros">
                    <div class="buscar-carros">
                        <form action="#">
                            <div class="input-box">
                                <label for="#">Pesquisar carro</label>
                                <input type="text" placeholder="Marca ou modelo">
                            </div>

                            <div class="select-box">
                                <label for="#">Selecione a região</label>
                                <select>
                                    <option>Luanda</option>
                                    <option>Benguela</option>
                                    <option>Malanje</option>
                                </select>
                            </div>

                            <div class="select-box">
                                <label for="#">Kilometragrm</label>
                                <select>
                                    <option>Ilimitada</option>
                                    <option>Limitada</option>
                                </select>
                            </div>

                            <button type="submit">Buscar</button>
                        </form>
                    </div>
                </div>
            </header>

            <div class="darros-disponiveis">
                <div class="carros">
                    <div class="carro">
                        <div class="img">
                            <img :src="carImg" :alt="alt">
                        </div>

                        <div class="detalhes">
                            <div class="title">
                                <h3>Fiat 500</h3>
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

                            <div class="price-container">
                                <div class="dia">
                                    <p>Por dia:</p>
                                </div>
                                <div class="price">
                                    <p>27.000kz</p>
                                </div>
                            </div>

                            <div class="reservar">
                                <div class="provincia">
                                    <p>Luanda</p>
                                </div>

                                <div class="btn-reservar">
                                    <button @click="showDetalhes = true"> Continuar </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="show-detalhes" v-if="showDetalhes">
                    <Detalhes />
                    <div class="xmark">
                        <i class="fa-solid fa-xmark" @click="closeDetalhes"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Detalhes from '@/components/Carros/Detalhes.vue'
    export default {
        name: 'Carros',

        components: {
            Detalhes
        },

        data() {
            return{
                carImg: require("@/assets/img/fiat.jpg"),
                showDetalhes: false
            }
        },

        methods: {
            closeDetalhes() {
                this.showDetalhes = false;
            }
        }
    }
</script>

<style scoped>
    @import '@/Styles/Carros/carros.sass';
</style>