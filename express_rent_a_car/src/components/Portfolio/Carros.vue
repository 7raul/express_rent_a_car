<template>
    <div>
        <div class="carros">
            <div class="todos-carros">
                <div class="carro-menu">
                    <div class="marca-preco">
                        <div class="marca">
                            <a href="#">Fiat 500</a>
                        </div>

                        <div class="preco">
                            <p>27.000kz</p>
                        </div>
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
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Carros'
    }
</script>

<style scoped>
    @import '@/Styles/Portfolio/Carros.sass';
</style>