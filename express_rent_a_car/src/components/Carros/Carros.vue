<template>
    <div>
        <div class="container-carros">
            <header>
                <div class="header-carros">
                    <div class="buscar-carros">
                        <form action="#" @submit.prevent="listarPesquisa">
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

                            <button>Buscar</button>
                        </form>
                    </div>
                </div>
            </header>

            <div class="darros-disponiveis">
                <div class="carros">
                    <div class="carro" v-for="carro of Carros" :key="carro.id">
                        <div class="img">
                            <img :src="carImg" :alt="alt">
                        </div>

                        <div class="detalhes">
                            <div class="title">
                                <h3>{{ carro.nome }}</h3>
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
                                    <p>27.000kz</p>
                                </div>
                            </div>

                            <div class="reservar">
                                <div class="provincia">
                                    <p>Luanda</p>
                                </div>

                                <div class="btn-reservar">
                                    <button @click="showDetalhes = true">Reservar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="show-detalhes" v-if="showDetalhes">
                    <Detalhes />
                    <div class="xmark">
                        <i class="fa-solid fa-xmark" @click="closeDetalhes"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Detalhes from '@/components/Carros/Detalhes.vue'
import Api from "@/services/getBy"
export default {
    name: 'Carros',




    data() {
        return {
            carImg: require("@/assets/img/fiat.jpg"),
            showDetalhes: false,
            Carros: [],
            modelo: "",
        }
    },

    mounted() {
        Api.ListarCarro().then(res => {
            this.Carros = res.data
        }).catch(erro => console.log(erro))
    },

    components: {
        Detalhes
    },
    methods: {
        listarPesquisa() {
            Api.ListarCarroPeloNome(this.modelo).then(res => {
                this.Carros = res.data
            }).catch(erro => console.log(erro))
        },
        closeDetalhes() {
            this.showDetalhes = false;
        }
    }
}
</script>

<style scoped>
@import '@/Styles/Carros/carros.sass';
</style>