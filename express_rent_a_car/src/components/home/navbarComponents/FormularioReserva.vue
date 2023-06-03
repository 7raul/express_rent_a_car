<template>
    <div class="container">
        <div class="btn-form">
            <button class="color" @click="mostrarFormulario">Reservar</button>
            <button class="no-color">Explorar</button>
        </div>

        <div class="form-container" v-if="exibirFormulario">
            <div class="sair">
                <i class="ri-close-fill" @click="fecharFormulario"></i>
            </div>
            <form action="#">
                <div class="input-container">
                    <div class="input-box">
                        <label for="levantamento">Local de levantamento</label>
                        <input type="search" placeholder="Digite um aeroporto ou hotel" required>
                    </div>
                    <div class="checkbox">
                        <input type="checkbox" required v-model="devolucaoNoMesmoLocal">
                        <span>Devolvel a viatura no mesmo local</span>
                    </div>
                    <div class="input-box" v-show="!devolucaoNoMesmoLocal">
                        <label for="devolucao">Local de devolução</label>
                        <input type="search" placeholder="Digite um aeroporto ou hotel"  required>
                    </div>

                    <div class="container-dates">
                        <div class="levantamento">
                            <div class="date-time">
                                <label for="data time">Data e hora de levantamento</label>
                                <input type="date">
                                <input type="time">
                            </div>
                            <div class="time-date">
                                <label for="data time">Data e hora de devoluão   </label>
                                <input type="date">
                                <input type="time">
                            </div>
                        </div>
                    </div>
                    <div class="obs">
                        <p>Condutor com a idade entre 27 á 57 anos </p>
                        <i class="ri-information-fill"></i>
                    </div>
                    <div class="btn-pesquisar">
                        <button>Pesquisar</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FormularioReserva',

        data() {
            return {
                exibirFormulario: false,
                devolucaoNoMesmoLocal: true
            }
        },

        methods: {
            mostrarFormulario() {
                this.exibirFormulario = true;
            },

            fecharFormulario() {
                this.exibirFormulario = false;
            }
        }
    }
</script>

<style scoped>
    @import '@/Styles/Home/NavbarComponents/FormularioReserva.sass'
</style>