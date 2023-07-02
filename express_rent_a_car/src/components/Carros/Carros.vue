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
                                    <button>Reservar</button>
                                </div>
                            </div>
                        </div>
                    </div>

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
                                    <button>Reservar</button>
                                </div>
                            </div>
                        </div>
                    </div>

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
                                    <button>Reservar</button>
                                </div>
                            </div>
                        </div>
                    </div>

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
                                    <button>Reservar</button>
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
        name: 'Carros',

        data() {
            return{
                carImg: require("@/assets/img/fiat.jpg"),
                alt: "alt"
            }
        } 
    }
</script>

<style scoped>
    @import '@/Styles/Carros/carros.sass';
</style>