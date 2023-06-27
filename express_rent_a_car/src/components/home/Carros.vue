<template>
    <div>
        <div class="container">
            <div class="cars-container">
                <div class="cars">
                    <div class="car">
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

                            <div class="pesquisar">
                                <div class="provincia">
                                    <p>Luanda</p>
                                </div>

                                <div class="btn-pesquiser">
                                    <button>Reservar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="cars">
                    <div class="car">
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

                            <div class="pesquisar">
                                <div class="provincia">
                                    <p>Luanda</p>
                                </div>

                                <div class="btn-pesquiser">
                                    <button>Reservar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="cars">
                    <div class="car">
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

                            <div class="pesquisar">
                                <div class="provincia">
                                    <p>Luanda</p>
                                </div>

                                <div class="btn-pesquiser">
                                    <button>Reservar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="cars">
                    <div class="car">
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

                            <div class="pesquisar">
                                <div class="provincia">
                                    <p>Luanda</p>
                                </div>

                                <div class="btn-pesquiser">
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
    @import '@/Styles/Home/Carros.sass';
</style>