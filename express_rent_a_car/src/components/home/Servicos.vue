<template>
    <div class="Container">
        <div class="servicos-container">
            <div class="servico">
                <i class="ri-file-edit-fill"></i>
                <h2>Aluguer flexível</h2>
                <p>Cancele ou altere sua reserva gratuitamente até 4horas ates do levantamento</p>
            </div>

            <div class="servico" id="center">
                <i class="ri-file-search-fill"></i>
                <h2>Sem taxas ocultas</h2>
                <p>Saiba exatamente o que está a pagar sempre</p>
            </div>

            <div class="servico">
                <i class="ri-price-tag-fill"></i>
                <h2>Garantia do melhor preço</h2>
                <p>Encontre aqui as melhores ofertas e liberdade de escolher a que lhe convém</p>
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
    .Container{
        width: 100%;
        margin-bottom: 6rem;
        text-align: center;
    }

    .servicos-container{
        text-align: center;
        display: flex;
        justify-content: space-between;
        margin: 0 6rem;
    }

    .servico{
        width: 400px;
        padding: 20px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 2px 2px 30px rgba(0,0,0,0.1);
    }

    .servico i{
        color: #0AC4FF;
        font-size: 10rem;
        margin-bottom: .5rem;
    }

    .servico h2{
        font-size: 20px;
        font-weight: bold;
        margin-bottom: .4rem;
    }

    .servico p{
        font-size: 17px;
        color: rgb(85, 84, 84);
    }
</style>