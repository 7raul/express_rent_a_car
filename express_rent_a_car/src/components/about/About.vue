<template>
    <div>
        <Header />
        
        <div class="about-container">
            <div class="about-content">
                <div class="top">
                    <p>
                        Bem-vindo à nossa plataforma de pesquisa, avaliação de preços e aluguel de carros!
                        Estamos aqui para aproximar você das diversas empresas de aluguel de carros espalhadas
                        por todo o país de Angola. Com o nosso serviço, você terá acesso a uma ampla seleção
                        de opções de locação, garantindo que você encontre o veículo ideal para atender às suas
                        necessidades.
                    </p>
                </div>

                <div class="container-slides">
                    <swiper :options="swiperOptions" @swiper="onSwiper">
                        <swiper-slide>
                            <div class="data">
                                <div class="image">
                                    <img :src="slide1">
                                </div>

                                <div class="slide-content">
                                    <p>
                                        Nosso objetivo é simplificar o processo de aluguel de carros, 
                                        oferecendo uma plataforma centralizada onde diferentes empresas 
                                        de aluguel possam cadastrar e divulgar seus serviços. Ao concentrar 
                                        as informações em um só lugar, buscamos facilitar sua busca por 
                                        opções de aluguel de carros confiáveis, convenientes e acessíveis.
                                    </p>

                                    <p>
                                        Ao utilizar nossa plataforma, você poderá explorar uma variedade de 
                                        empresas de aluguel de carros e comparar preços, pacotes e condições. 
                                        Nosso sistema de pesquisa avançada permite que você refine sua pesquisa 
                                        de acordo com suas preferências, como tipo de veículo, localização, 
                                        datas de aluguel e muito mais. Dessa forma, você terá uma visão a
                                        brangente das opções disponíveis e poderá tomar uma decisão informada 
                                        antes de reservar o veículo desejado.
                                    </p>

                                    <p>
                                        Valorizamos a transparência e a confiança em nossa plataforma. Todas 
                                        as empresas de aluguel de carros que se cadastram em nosso site são 
                                        rigorosamente avaliadas para garantir que ofereçam serviços de alta 
                                        qualidade e atendam aos padrões de segurança. Além disso, incentivamos
                                        os usuários a compartilhar suas experiências e deixar avaliações, 
                                        contribuindo para a comunidade e ajudando outros clientes a fazerem 
                                        escolhas informadas.
                                    </p>
                                </div>
                            </div>
                        </swiper-slide>

                        <swiper-slide>
                            <div class="data">
                                <div class="image">
                                    <img :src="slide2">
                                </div>

                                <div class="slide-content">
                                    <p>
                                        Nossa equipe está empenhada em proporcionar uma experiência fácil e 
                                        intuitiva ao utilizar nossa plataforma. Estamos constantemente 
                                        trabalhando para melhorar nossos recursos e oferecer um ambiente 
                                        amigável, onde você possa encontrar todas as informações necessárias 
                                        para tomar uma decisão inteligente de aluguel de carros.
                                    </p>

                                    <p>
                                        Seja você um viajante em busca de um veículo temporário, um 
                                        profissional em uma viagem de negócios ou um morador local precisando 
                                        de um carro para um evento especial, estamos aqui para ajudar. 
                                        Navegue por nossa plataforma, explore as opções disponíveis e 
                                        encontre o carro perfeito para sua próxima aventura em Angola.
                                    </p>

                                    <p>
                                        Agradecemos por escolher nossa plataforma e esperamos fornecer a 
                                        você uma experiência de aluguel de carros sem complicações e 
                                        satisfatória. Se você tiver alguma dúvida ou precisar de assistência, 
                                        não hesite em entrar em contato com nossa equipe de suporte dedicada. 
                                        Estamos prontos para ajudar e tornar sua jornada de aluguel de carros 
                                        mais conveniente e agradável.
                                    </p>

                                    <p>
                                        Obrigado por visitar nosso site!
                                    </p>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>

                    <a v-if="currentSlide === 0" class="avancar" @click="nextSlide">
                        <i class="fa-solid fa-arrow-right"></i>
                    </a>
                    <a v-if="currentSlide === 1" class="voltar" @click="prevSlide">
                        <i class="fa-solid fa-arrow-left"></i>
                    </a>
                </div>
            </div>
        </div>

        <Footer />
    </div>
</template>

<script>
    import Header from '@/components/home/Header.vue'
    import Footer from '@/components/home/Footer.vue'
    import { Swiper, SwiperSlide } from "vue-awesome-swiper";
    import "swiper/swiper-bundle.css";
    export default{
        name: 'About',
        components: {
            Header,
            Swiper,
            SwiperSlide,
            Footer
        },

        data() {
            return {
                swiperOptions: {
                    navigation: {
                    nextEl: ".avancar",
                    prevEl: ".voltar",
                    },
                },

                slide1: require("@/assets/img/link-2.jpg"),
                slide2: require("@/assets/img/about2.jpg"),
                swiper: null,
                currentSlide: 0
            }
        },

        methods: {
            onSwiper(swiper) {
                this.swiper = swiper;
            },
            nextSlide() {
                if (this.swiper) {
                    this.swiper.slideNext();
                    this.currentSlide++;
                }
            },
            prevSlide() {
                if (this.swiper) {
                    this.swiper.slidePrev();
                    this.currentSlide--;
                }
            }
        },
    }
</script>

<style scoped>
    @import '@/Styles/About/About.sass';
</style>