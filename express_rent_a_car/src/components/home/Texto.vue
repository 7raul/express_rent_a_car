<template>
    <div>
        <div class="container-text">
            <div class="photo">
                <img :src="carImg" :alt="alt">
                <div class="text">
                    <h3>Alugue seu carro dos sonhos com a Express Rent a Car!</h3>
                    <p>
                        Seja qual for a sua aventura, a Express Rent a Car está aqui para torná-la ainda mais 
                        emocionante e conveniente. Com a nossa plataforma inovadora, oferecemos a você a melhor
                        experiência de aluguel de carros
                    </p>
                    <p>
                        Pesquisa rápida e fácil: Nossa plataforma intuitiva permite que você encontre o 
                        carro ideal em apenas alguns cliques. Basta inserir suas preferências e deixe que 
                        a Express Rent a Car faça o resto. Com uma ampla seleção de veículos de alta 
                        qualidade, temos o carro perfeito para atender às suas necessidades.
                    </p>
                    <p>
                        Avaliação de preço transparente: Nós entendemos a importância de um orçamento 
                        acessível. É por isso que fornecemos uma avaliação de preço clara e transparente 
                        para cada veículo disponível. Sem taxas ocultas, sem surpresas desagradáveis. 
                        Você saberá exatamente o que está pagando, garantindo uma experiência tranquila e 
                        sem complicações.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Texto',

        data() {
            return{
                carImg: require("@/assets/img/artigo.jpg"),
                alt: "alt"
            }
        }
    }
</script>

<style scoped>
    @import '@/Styles/Home/Texto.sass';
</style>