<template>
    <div>
        <div class="servicos-container">
            <div class="servico">
                <i class="ri-file-edit-fill"></i>
                <h2>Aluguer flexível</h2>
                <p>Cancele ou altere sua reserva gratuitamente</p>
            </div>

            <div class="servico" id="center">
                <i class="ri-file-search-fill"></i>
                <h2>Sem taxas ocultas</h2>
                <p>Saiba exatamente o que está a pagar sempre</p>
            </div>

            <div class="servico">
                <i class="ri-price-tag-fill"></i>
                <h2>Preços</h2>
                <p>Encontre aqui o preço que lhe satisfaz</p>
            </div>

            <div class="servico">
                <i class="ri-building-4-fill"></i>
                <h2>Empresas Licenciadas</h2>
                <p>Garantimos a legalidade das empresas</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Servicos'
    }
</script>

<style scoped>
    @import '@/Styles/Home/Servicos.sass';
</style>