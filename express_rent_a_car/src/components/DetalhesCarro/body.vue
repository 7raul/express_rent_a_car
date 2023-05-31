<template>
    <div>
        <div class="container">
            <div class="heading">
                <span>Detalhes do carro</span>
                <h1>Express rent a car</h1>
            </div>

            <div class="detalhes-container">
                <div class="header-detalhes">
                    <h2>FIAT 500</h2>
                </div>

                <div class="sub-header">
                    <div class="empresa">
                        <div class="profile">
                            <img :src="caminhoDaImagem" :alt="alt">
                        </div>
                        <div class="nome-empresa">
                            <p>Julino rent a car</p>
                        </div>
                        <div class="reviews">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                    </div>

                    <div class="entrega">
                        <p>Local de entrega: Hoteis e Aeroportos</p>
                    </div>
                </div>

                <div class="detalhes-carro">
                    <div class="detalhe-img">
                        <img :src="imgCar" :alt="nameCar">
                    </div>

                    <div class="detales-1">
                        <div class="titulo">
                            <p>Passageiros:</p>
                            <p>Direção:</p>
                            <p>Vidros electricos:</p>
                            <p>Airbag:</p>
                            <p>Portas:</p>
                            <p>Malas:</p>
                        </div>

                        <div class="definicao">
                            <p class="color">5</p>
                            <p class="color">Hidraulica</p>
                            <p class="color">Sim</p>
                            <p class="color">Sim</p>
                            <p class="color">4</p>
                            <p class="color">1</p>
                        </div>
                    </div>

                    <div class="detales-2">
                        <div class="titulo">
                            <p>Ar condicionado:</p>
                            <p>Câmbio:</p>
                            <p>Trava electrica:</p>
                            <p>Feios ABS:</p>
                            <p>Áudios:</p>
                            <p><router-link to="#">Mais detalhes</router-link></p>
                        </div>

                        <div class="definicao">
                            <p class="color">Sim</p>
                            <p class="color">Automático</p>
                            <p class="color">Sim</p>
                            <p class="color">Sim</p>
                            <p class="color">Rádio/USB</p>
                        </div>
                    </div>

                    <div class="pagamento">
                        <div class="att">
                            <p>Pagamentos online</p>
                        </div>
                        <div class="preco">
                            <p>Sem taxas ocultas</p>
                            <h3>27.000kz</h3>
                        </div>
                        <div class="btn-container">
                            <button>
                                <router-link to="#">Continuar ></router-link>
                            </button>
                        </div>
                        <div class="pagamento-option">
                            <router-link to="#">Veja opções de pagamento <i class="ri-bank-card-line"></i></router-link>
                        </div>
                        <div class="confirm">
                            <p>Confirmação online <span><i class="ri-dvd-line"></i></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import GetByElement from "../../services/getBy"
export default {

    mounted() {
        GetByElement.Listar().then(res => {
            console.log(res);
        }).catch(err => console.log(err))
    },
    name: 'Body',

    data() {
        return {
            caminhoDaImagem: require("@/assets/img/empresa.png"),
            alt: "Empresa",
            imgCar: require("@/assets/img/fiat.jpg"),
            nameCar: "Fiat"
        }
    }
}
</script>

<style scoped>
.heading {
    letter-spacing: 1px;
    margin: 3.1rem 0;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.heading h1 {
    font-size: 1.5rem;
    font-weight: 500;
    background-color: #232f33;
    color: #fff;
    padding: 10px 20px;
    text-transform: uppercase;
}

.heading span {
    font-size: 1rem;
    color: #222;
    margin-bottom: 10px;
    letter-spacing: 2px;
    text-transform: uppercase;
}

.detalhes-container {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 5rem;
    border: 1px solid #ccc7c7;
    background-color: white;
}

.header-detalhes {
    background-color: #b8b8b8;
    padding: 1rem;
}

.sub-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #ccc7c7;
}

.empresa {
    display: flex;
    align-items: center;
    margin-right: 1rem;
}


.sub-header p {
    font-weight: bold;
    font-size: 20px;
}

.empresa p {
    margin-right: 1rem;
}

.profile img {
    border: 1px solid #ccc7c7;
    margin-right: 1rem;
    margin-top: 10px;
    max-width: 150px;
    max-height: 50px;
}

.reviews {
    color: #f9d71c;
}

.detalhes-carro {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    padding-bottom: 0.6rem;
}

.detalhe-img {
    width: 500px;
}

.detalhe-img img {
    width: 100%;
    height: 300px;
}

.detales-1,
.detales-2 {
    width: 300px;
    display: flex;
    justify-content: space-between;
}

.detales-1 p,
.detales-2 p {
    line-height: 3rem;
    font-size: 16px;
}

.definicao p {
    text-align: end;
}

.color {
    background-color: #383318;
    color: #fff;
    padding: 0 5px;
}

.pagamento {
    text-align: end;
    margin: 0;
    line-height: 2rem;
}

.att {
    background-color: #232f33;
    padding: 5px;
    color: #fff;
    margin-bottom: 5px;
}

.preco p {
    font-size: 16px;
}

.preco h3 {
    font-size: 25px;
}

.btn-container button {
    width: 10rem;
    padding: 10px;
    border: none;
    background-color: #6b6851;
    margin-bottom: 5px;
}

.btn-container a {
    color: #fff;
    font-size: 1rem;
}

.btn-container a:hover {
    text-decoration: underline;
}

.pagamento {
    padding: 5px;
    padding-right: 0;
}

.pagamento i {
    color: rgb(230, 95, 95);
}

.confirm {
    border-top: 1px dashed #b8b8b8;
    padding: 5px;
    padding-right: 0;
}</style>