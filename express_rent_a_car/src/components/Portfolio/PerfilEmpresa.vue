<template>
    <div>
        <div class="profile-container">
            <header>
                <ul class="links">
                    <li>
                        <a href="#"><i class="ri-book-open-line"></i> Todos</a>
                    </li>
                    <li>
                        <a href="#"><i class="ri-car-line"></i> Carros</a>
                    </li>
                    <li>
                        <a href="#"><i class="fas fa-star"></i> Estrelas</a>
                    </li>
                </ul>
            </header>

            <div class="body-container">
                <div class="profile">
                    <div class="left-profile">
                        <div class="profile-img">
                            <img :src="profileImg">
                        </div>

                        <div class="profile-name">
                            <h4>Artur Rent a car</h4>
                        </div>

                        <div class="about-profile">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum omnis explicabo 
                                maiores dignissimos doloremque placeat reiciendis officia atque exercitationem 
                                possimus aut nesciunt, unde hic quo iste optio, iusto similique iure.
                            </p>
                        </div>

                        <div class="data-profile">
                            <div class="data">
                                <i class="ri-map-pin-2-line"></i>
                                <span>Luanda - Maculusso, Comandante Valódia</span>
                            </div>
                            <div class="data">
                                <i class="ri-phone-line"></i>
                                <span>932157393</span>
                            </div>
                            <div class="data">
                                <i class="ri-facebook-circle-line"></i>
                                <span>Artur Rent a car</span>
                            </div>
                            <div class="data">
                                <i class="ri-linkedin-box-fill"></i>
                                <span>in/artur-rent-acar</span>
                            </div>
                        </div>
                    </div>

                    <div class="right-profile">
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
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PerfilEmpresa',

        data() {
            return {
                profileImg: require("@/assets/img/userPerfil.png"),
                carImg: require("@/assets/img/fiat.jpg")
            }
        }
    }
</script>

<style scoped>
    @import '@/Styles/Portfolio/PerfilEmpresa.sass';
</style>