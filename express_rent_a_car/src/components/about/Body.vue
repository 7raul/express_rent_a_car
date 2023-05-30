<template>
    <div>
        <div class="container">
            <div class="sobre-container">
                <div>
                    <div class="heading">
                        <span>Sobre</span>
                        <h1>Express rent a car</h1>
                    </div>

                    <div class="img">
                        <img :src="img" :alt="alt">
                        
                        <div class="paragraph">
                            <p>
                                Bem-vindo a Express Rent a car, a sua solução completa para aluguer de carros!
                                Somos uma empresa dedicada a ajudar nossos clientes a encontrar as melhores
                                opções de aluguer de carro, com preços acessíveis e serviço de qualidade rompendo
                                o limite entre que separa clientes das alocadoras espalhadas pelo pais.
                            </p>

                            <p>
                                Nosso site oferece uma ampla variedade de empresas de aluguer de carros, com
                                perfis detalhados e informações sobre seus serviços e preços. Além disso, nossa
                                equipe também trabalha para manter os preços atualizados regularmente, garantindo
                                que você sempre encontre o melhor negócio.
                            </p>

                            <p>
                                Se você está procurando um carro para as suas ferias, uma viagem de negócios ou
                                qualquer outra formalidade, nosso site é a escolha certa para ajudá-lo a encontrar
                                o carro perfeito. Com uma ampla seleção de modelos e tamanhos, temos algo para 
                                atender às necessidades de todos os nossos clientes.
                            </p>

                            <p>
                                Então, sinta-se à vontade para explorar nosso site e descobrir as melhores opções 
                                de aluguer de carro para você. Se você tiver alguma dúvida ou precisar de ajuda
                                para escolher o carro certo, a nossa equipe de suporte está sempre pronta para ajudar.
                                Obrigado por escolher Express Rent a car.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Body',

        data() {
            return {
                img: require("@/assets/img/sobre.jpeg"),
                alt: "Carro"
            }
        }
    }
</script>

<style scoped>
    .container{
        padding: 5rem 13rem;
        margin: 0 auto;
        box-sizing: border-box;
    }
    .heading{
        letter-spacing: 1px;
        margin: 3.1rem 0;
        padding: 10px 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .heading h1{
        font-size: 1.5rem;
        font-weight: 500;
        background-color: #232f33;
        color: #fff;
        padding: 10px 20px;
        text-transform: uppercase;
    }

    .heading span{
        font-size: 1rem;
        color: #222;
        margin-bottom: 10px;
        letter-spacing: 2px;
        text-transform: uppercase;
    }

    img{
        width: 1300px;
        margin-bottom: 2rem;
    }

    .paragraph{
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        text-align: justify;
    }

    .paragraph p{
        width: 500px;
        margin: 1rem 2rem;
        padding: 0px;
        font-size: 18px
    }
</style>