<template>
    <div>
        <div class="destaque_container">
            <h3>Empresas em destaque</h3>

            <div class="destaques">
                <div class="card swiper-slide">
                    <div class="card_image">
                        <img :src="img">
                    </div>

                    <div class="card-content">
                        <span class="card_title">Artur Rent acar</span>

                        <div class="reviews">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>

                        <div class="paragrafo">
                            <p>Satisfazer os nossos clientes nos satisfaz</p>
                        </div>

                        <div class="empresa-btn">
                            <a href="#">Ver mais</a>
                        </div>
                    </div>
                </div>

                <div class="card swiper-slide">
                    <div class="card_image">
                        <img :src="img">
                    </div>

                    <div class="card-content">
                        <span class="card_title">Artur Rent acar</span>

                        <div class="reviews">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>

                        
                        <div class="paragrafo">
                            <p>Satisfazer os nossos clientes nos satisfaz</p>
                        </div>

                        <div class="empresa-btn">
                            <a href="#">Ver mais</a>
                        </div>
                    </div>
                </div>

                <div class="card swiper-slide">
                    <div class="card_image">
                        <img :src="img">
                    </div>

                    <div class="card-content">
                        <span class="card_title">Artur Rent acar</span>

                        <div class="reviews">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>

                        
                        <div class="paragrafo">
                            <p>Satisfazer os nossos clientes nos satisfaz</p>
                        </div>

                        <div class="empresa-btn">
                            <a href="#">Ver mais</a>
                        </div>
                    </div>
                </div>

                <div class="card swiper-slide">
                    <div class="card_image">
                        <img :src="img">
                    </div>

                    <div class="card-content">
                        <span class="card_title">Artur Rent acar</span>

                        <div class="reviews">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                        
                        <div class="paragrafo">
                            <p>Satisfazer os nossos clientes nos satisfaz</p>
                        </div>

                        <div class="empresa-btn">
                            <a href="#">Ver mais</a>
                        </div>
                    </div>
                </div>

                <div class="card swiper-slide">
                    <div class="card_image">
                        <img :src="img">
                    </div>

                    <div class="card-content">
                        <span class="card_title">Artur Rent acar</span>

                        <div class="reviews">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>

                        
                        <div class="paragrafo">
                            <p>Satisfazer os nossos clientes nos satisfaz</p>
                        </div>

                        <div class="empresa-btn">
                            <a href="#">Ver mais</a>
                        </div>
                    </div>
                </div>
            </div>

            <a class="left"><i class="fa-solid fa-arrow-left"></i></a>
            <a class="right"><i class="fa-solid fa-arrow-right"></i></a>

            <div class="view">
                <a href="#">Ver todos</a>
            </div>
        </div>    
    </div>        
</template>
<script>
    export default{
        name: 'Destaque',

        data() {
            return {
                img: require("@/assets/img/userPerfil.png")
            }
        }
    }
</script>

<style scoped>
    @import '@/Styles/Home/Destaque.sass';
</style>