<template>
    <div>
        <div class="todas-estrelas">
            <div class="estrelas">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
            </div>

            <div class="estatisticas">
                <div class="left-star">
                    <h3>Total de estrelas</h3>
                    <h1>100</h1>
                </div>

                <div class="progresso">
                    <svg>
                        <circle cx="38" cy="38" r="36"></circle>
                    </svg>
                    <div class="number">
                        <p>81%</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'EstrelasTodos'
    }
</script>

<style scoped>
    @import '@/Styles/Portfolio/EstrelasTodos.sass';
</style>