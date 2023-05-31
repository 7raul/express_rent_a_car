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
    .cars-container{
        width: 100%;
        margin: 5rem 0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
    }
    .cars{
        width: 360px;
        background-color: #232f33;
        box-shadow: 2px 2px 30px rgba(0,0,0,0.1);
        margin: 1rem;
        box-sizing: border-box;
    }
    img{
        max-height: 360px;
        width: 100%; 
    }
    .detalhes{
        margin: 1rem;
    }
    .title{
        font-size: 21px;
        margin-bottom: .3rem;
        margin-top: -1rem;
    }
    .reviews{
        display: flex;
        justify-content: space-between;
        margin-bottom: .3rem;
    }
    .reviews i{
        color: #fcba03;
    }
    .reviews span{
        color: #4b4a4a;
    }
    .price-container{
        display: flex;
        justify-content: space-between;
        font-size: 20px;
    }
    .price{
        color: rgb(231, 133, 133);
        margin-bottom: .3rem;
    }
    .pesquisar{
        display: flex;
        justify-content: space-between;
    }
    .btn-pesquiser button{
        padding: 10px;
        width: 160px;
        border: none;
        border-radius: 5px;
        background-color: #5977b1;
        color: #fff;
        font-weight: bold;
        font-size: 1rem;
    }

    .car:hover{
        transform: translateY(-10px);
        transition: all ease 0.3s;
    }
</style>