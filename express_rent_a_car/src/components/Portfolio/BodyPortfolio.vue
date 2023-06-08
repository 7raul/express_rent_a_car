<template>
    <div>
        <div class="body-portfolio">
            <aside class="header-portfolio">
                <div class="perfil">
                    <div class="header-img">
                        <img :src="carImg" alt="">
                    </div>

                    <div class="name">
                        <h3>Nome Rent a car</h3>
                    </div>
                </div>

                <div class="sobre">
                    <div class="about-title">
                        <h2>Sobre nós</h2>
                    </div>

                    <div class="about-paragraphy">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut tempora officia esse. 
                            Praesentium fuga error velit animi maxime harum sint laboriosam optio veritatis, 
                            minus deleniti totam nobis natus quo corporis.
                        </p>
                    </div>
                </div>

                <div class="btn">
                    <button>Postar</button> 
                    <button>Editar perfil</button>
                </div>
            </aside>

            <div class="postagens">
                <div class="btn-view">
                    <button>Posts</button>
                    <button>Em espera</button>
                </div>
                
                <div class="postagens-container">
                    <div class="posts">
                        <div class="img">
                            <img :src="img" :alt="alt">
                        </div>

                        <div class="detalhes-post">
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

                                <div class="btn-editar">
                                    <button>Editar</button>
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
        name: 'BodyPortfolio',

        data() {
            return{
                carImg: require("@/assets/img/cover.jpg"),
                alt: "alt",
                img: require("@/assets/img/fiat.jpg")
            }
        }
    }
</script>

<style scoped>
    @import '@/Styles/Portfolio/BodyPortfolio.sass';
</style>