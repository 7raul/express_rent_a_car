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
                        <span class="card_title">Artur</span>

                        <div class="reviews">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>

                        <div class="paragrafo">
                            <p>Vendemos Carros</p>
                        </div>

                        <div class="empresa-btn">
                            <a @click="redirectToPortfolio">Ver mais</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import Api from "@/services/getBy"
export default {
    name: 'Destaque',

    data() {
        return {
            img: require("@/assets/img/userPerfil.png"),
            Empresas: []
        }
    },
    mounted() {
        Api.ListarEmpresa().then(res => {
            this.Empresas = res.data;
        }).catch(erro => console.log(erro))
    },
    methods: {
        redirectToPortfolio() {
            // Redirecionar para a view de empresa
            this.$router.push('/portfolio');
        }
    }
}
</script>

<style scoped>
@import '@/Styles/Home/Destaque.sass';
</style>