<template>
    <div>
        <div class="container-carros">
            <header>
                <div class="header-carros">
                    <div class="buscar-carros">
                        <form action="#" @submit.prevent="salvar">
                            <div class="input-box">
                                <label for="#">Pesquisar carro</label>
                                <input type="text" placeholder="Marca ou modelo" v-model="modelo">
                            </div>

                            <div class="select-box">
                                <label for="#">Selecione a região</label>
                                <select>
                                    <option>Luanda</option>
                                    <option>Benguela</option>
                                    <option>Malanje</option>
                                </select>
                            </div>

                            <div class="select-box">
                                <label for="#">Kilometragrm</label>
                                <select>
                                    <option>Ilimitada</option>
                                    <option>Limitada</option>
                                </select>
                            </div>

                            <button type="submit">Buscar</button>
                        </form>
                    </div>
                </div>
            </header>

            <div class="darros-disponiveis">
                <div class="carros">


                    <div v-for="carros in carro" :key="carro.id" class="carro">

                        <div class="img">
                            <img :src="carImg" :alt="alt">
                        </div>

                        <div class="detalhes">
                            <div class="title">
                                <h3>{{ carros.nome }}</h3>
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

                            <div class="price-container">
                                <div class="dia">
                                    <p>Por dia:</p>
                                </div>
                                <div class="price">
                                    <p>{{ carros.valorAluguel }}</p>
                                </div>
                            </div>

                            <div class="reservar">
                                <div class="provincia">
                                    <p>Luanda</p>
                                </div>

                                <div class="btn-reservar">
                                    <button>Reservar</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Api from "@/services/getBy"
export default ({

    name: 'Carros',

    data() {
        return {
            carImg: require("@/assets/img/fiat.jpg"),
            alt: "alt",

            carro: [],
            modelo: ""

        }
    },

    mounted() {
        Api.ListarCarro().then(e => {
            this.carro = e.data
        }).catch(error => console.log("Deu erro", error))


    },
    methods: {

        salvar() {

            Api.ListarCarroModelo(this.modelo).then(e => {
                this.carro = e.data
            }).catch(err => console.log("deu Erro =>", err))
        }
    }
})
</script>

<style scoped>
@import '@/Styles/Carros/carros.sass';
</style>