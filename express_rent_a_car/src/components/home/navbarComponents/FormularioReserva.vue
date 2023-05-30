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
                                <label for="data time">Data e hora de levantamento</label>
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
                        <button>pesquisar</button>
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
.container{
    text-align: center;
    align-items: center;
    justify-content: center;
    display: block;
}
.container .btn-form .color {
    background-color: #5977b1;
    color: #e4e4e4;
    padding: 0.5rem 1rem;
    border: none;
    outline: none;
    border-radius: 20px;
    cursor: pointer;
    transition: scale 0.2 ease;
    margin-right: 1rem;  
    width: 170px;
    height: 45px;
    font-size: 1rem;
    font-weight: bold;
}
.btn-form .color:hover{
    background: transparent;
    border: 3px solid #5977b1;
    color: #5977b1;
    scale: 1.05;
}
.btn-form .color:active{
    scale: 0.95;
}
.container .btn-form .no-color{
    background: transparent;
    border: 3px solid #5977b1;
    color: #5977b1;
    padding: 0.5rem 1rem;
    outline: none;
    border-radius: 20px;
    cursor: pointer;
    transition: scale 0.2 ease;
    margin-right: 1rem;  
    width: 170px;
    height: 45px;
    font-size: 1rem;
    font-weight: bold;   
}
.btn-form .no-color:hover{
    background: #5977b1;
    border: none;
    color: #e4e4e4;
    scale: 1.05;
}
.btn-form .no-color:active{
    scale: 0.95;
}
.form-container{
    display: flex;
    width: 35%;
    padding: 2rem;
    align-items: center;
    justify-content: center;
    text-align: start;
    margin: 0 auto;
    background: transparent;
    backdrop-filter: blur(20px);
    border-radius: 20px;
    color: #e4e4e4;
    margin-top: -20rem;
}
.form-container .sair{
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.sair i{
    font-size: 2rem;
}
.form-container .input-box{
    display: flex;
    flex-direction: column;
}
.input-box label{
    font-weight: 500;
    font-size: 16px;
}
.input-box input {
    background: transparent;
    padding: 10px;
    border-radius: 5px;
    margin-top: 0.5rem;
    width: 32rem;
    height: 40px;
    outline: none;
    border: 1px solid #646464;
    font-size: 16px;
    color: #e4e4e4;
}
.form-container .checkbox{
    margin: 1rem 0;
    display: flex;
}
.checkbox input{
    margin-right: 5px;
}
.container-dates{
    margin-top: 1.5rem;
    display: flex;
}
.container-dates .levantamento{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.levantamento .date-time{
    margin-right: 1.1rem;
}
.date-time input,
.time-date input{
    height: 40px;
    padding: 10px;
    border-radius: 5px;
    outline: none;
    background: transparent;
    border: 1px solid #646464;
    color: #e4e4e4;
    margin-top: .5rem;
}

.obs{
    display: flex;
    margin: 1rem 0;
}

.obs i {
    color: #5977b1;
    margin-left: 3px;
    font-size: 1.3rem; 
}

.btn-pesquisar button{
    background-color: #5977b1;
    color: #e4e4e4;
    padding: 0.5rem 1rem;
    border: none;
    outline: none;
    border-radius: 20px;
    cursor: pointer;
    transition: scale 0.2 ease;
    margin-right: 1rem;  
    width: 100%;
    height: 45px;
    font-size: 1rem;
    font-weight: bold;
}
.btn-pesquisar button:hover{
    scale: 1.05;
}
.btn-pesquisar button:active{
    scale: 0.95;
}
</style>