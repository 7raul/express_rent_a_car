<template>
    <div>
        <div class="empresas-container">
            <header>
                <div class="empresas-content">
                    <h3>Conheça as empresas ligadas a nós</h3>
                </div>
            </header>

            <div class="empresa-ligadas">
                <div class="empresas">

                    <div class="empresa">
                        <div class="empresa-img">
                            <img :src="empresaImg">
                        </div>

                        <div class="empresa-content">
                            <span class="empresa-name">Artur Rent a car</span>

                            <div class="reviews">
                                <div class="preenchidos">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>

                                <div class="nao-preenchidos">
                                    <i class="far fa-star"></i>
                                    <i class="far fa-star"></i>
                                    <i class="far fa-star"></i>
                                    <i class="far fa-star"></i>
                                    <i class="far fa-star"></i>
                                </div>
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
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Empresas',

        data() {
            return {
                empresaImg: require("@/assets/img/userPerfil.png")
            }
        }
    }
</script>

<style scoped>
    @import '@/Styles/Empresas/Empresas.sass';
</style>