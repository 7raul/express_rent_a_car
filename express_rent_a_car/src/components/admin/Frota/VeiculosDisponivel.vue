<template>
    <div>
        <div class="listaDeVeiculos-container">
            <h4>Veiculos disponível</h4>

            <div class="listar-veiculos">
                <div class="veiculo">
                    <div class="dados-veiculo">
                        <div class="foto-viatura">
                            <img :src="imgViatura">
                        </div>

                        <div class="detalhes-optcioes">
                            <div class="detalhes-viatura">
                                <div class="sobre-viatura">
                                    <p>Marca:</p>
                                    <h5>FIAT</h5>
                                </div>

                                <div class="sobre-viatura">
                                    <p>Modelo:</p>
                                    <h5>500</h5>
                                </div>

                                <div class="sobre-viatura">
                                    <p>Preço:</p>
                                    <h5>27.00kz</h5>
                                </div>
                            </div>
                            
                            <div class="options-disponivel">
                                <button>Desabilitar</button>
                                <button class="editar">Editar</button>
                            </div>
                        </div>
                    </div> 
                </div>

                <div class="veiculo">
                    <div class="dados-veiculo">
                        <div class="foto-viatura">
                            <img :src="imgViatura">
                        </div>

                        <div class="detalhes-optcioes">
                            <div class="detalhes-viatura">
                                <div class="sobre-viatura">
                                    <p>Marca:</p>
                                    <h5>FIAT</h5>
                                </div>

                                <div class="sobre-viatura">
                                    <p>Modelo:</p>
                                    <h5>500</h5>
                                </div>

                                <div class="sobre-viatura">
                                    <p>Preço:</p>
                                    <h5>27.00kz</h5>
                                </div>
                            </div>
                            
                            <div class="options-disponivel">
                                <button>Desabilitar</button>
                                <button class="editar">Editar</button>
                            </div>
                        </div>
                    </div> 
                </div>

                <div class="veiculo">
                    <div class="dados-veiculo">
                        <div class="foto-viatura">
                            <img :src="imgViatura">
                        </div>

                        <div class="detalhes-optcioes">
                            <div class="detalhes-viatura">
                                <div class="sobre-viatura">
                                    <p>Marca:</p>
                                    <h5>FIAT</h5>
                                </div>

                                <div class="sobre-viatura">
                                    <p>Modelo:</p>
                                    <h5>500</h5>
                                </div>

                                <div class="sobre-viatura">
                                    <p>Preço:</p>
                                    <h5>27.00kz</h5>
                                </div>
                            </div>
                            
                            <div class="options-disponivel">
                                <button>Desabilitar</button>
                                <button class="editar">Editar</button>
                            </div>
                        </div>
                    </div> 
                </div>

                <div class="veiculo">
                    <div class="dados-veiculo">
                        <div class="foto-viatura">
                            <img :src="imgViatura">
                        </div>

                        <div class="detalhes-optcioes">
                            <div class="detalhes-viatura">
                                <div class="sobre-viatura">
                                    <p>Marca:</p>
                                    <h5>FIAT</h5>
                                </div>

                                <div class="sobre-viatura">
                                    <p>Modelo:</p>
                                    <h5>500</h5>
                                </div>

                                <div class="sobre-viatura">
                                    <p>Preço:</p>
                                    <h5>27.00kz</h5>
                                </div>
                            </div>
                            
                            <div class="options-disponivel">
                                <button>Desabilitar</button>
                                <button class="editar">Editar</button>
                            </div>
                        </div>
                    </div> 
                </div>

                <div class="veiculo">
                    <div class="dados-veiculo">
                        <div class="foto-viatura">
                            <img :src="imgViatura">
                        </div>

                        <div class="detalhes-optcioes">
                            <div class="detalhes-viatura">
                                <div class="sobre-viatura">
                                    <p>Marca:</p>
                                    <h5>FIAT</h5>
                                </div>

                                <div class="sobre-viatura">
                                    <p>Modelo:</p>
                                    <h5>500</h5>
                                </div>

                                <div class="sobre-viatura">
                                    <p>Preço:</p>
                                    <h5>27.00kz</h5>
                                </div>
                            </div>
                            
                            <div class="options-disponivel">
                                <button>Desabilitar</button>
                                <button class="editar">Editar</button>
                            </div>
                        </div>
                    </div> 
                </div>

                <div class="veiculo">
                    <div class="dados-veiculo">
                        <div class="foto-viatura">
                            <img :src="imgViatura">
                        </div>

                        <div class="detalhes-optcioes">
                            <div class="detalhes-viatura">
                                <div class="sobre-viatura">
                                    <p>Marca:</p>
                                    <h5>FIAT</h5>
                                </div>

                                <div class="sobre-viatura">
                                    <p>Modelo:</p>
                                    <h5>500</h5>
                                </div>

                                <div class="sobre-viatura">
                                    <p>Preço:</p>
                                    <h5>27.00kz</h5>
                                </div>
                            </div>
                            
                            <div class="options-disponivel">
                                <button>Desabilitar</button>
                                <button class="editar">Editar</button>
                            </div>
                        </div>
                    </div> 
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'VeiculosDisponivel',

        data() {
            return {
                imgViatura: require('@/assets/img/fiat.jpg')
            }
        }
    }
</script>

<style scoped>
    @import '@/Styles/Admin/Frota/VeiculosDisponivel.sass';
</style>

