<template>
    <div>
        <EstrelasTodos />
        <div class="carros">
            <div class="todos-carros">
                <div class="carro-estrelas">
                    <div class="marca">
                        <a href="#">Fiat 500</a>
                    </div>
                    
                    <div class="stars">
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
</template>

<script>
    import EstrelasTodos from '@/components/Portfolio/EstrelasTodos.vue'
    export default {
        name: 'Estrelas',

        components: {
            EstrelasTodos
        }
    }
</script>

<style scoped>
    @import '@/Styles/Portfolio/Estrelas.sass';
</style>