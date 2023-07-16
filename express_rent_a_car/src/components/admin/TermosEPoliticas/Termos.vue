<template>
    <div>
        <div class="termos-container">
            <h4>Termos</h4>

            <div class="content-termos">
                <h5>Termos da Plataforma de Express Rent a car</h5>

                <div class="termo">
                    <h6>Reservas e Pedidos</h6>

                    <p>
                        Os clientes podem realizar pedidos e reservas de carros através da plataforma, 
                        selecionando o local, data e horário desejados para o aluguel.
                    </p>
                    <p>
                        As reservas são flexíveis, permitindo que os clientes possam modificar ou cancelar 
                        suas reservas sem custos adicionais até um determinado prazo estabelecido na plataforma.
                    </p>
                </div>

                <div class="termo">
                    <h6>Entrega dos Veículos</h6>

                    <p>
                        Os carros podem ser entregues aos clientes nos seguintes locais: hotéis, aeroportos e 
                        balcões de atendimento das empresas alocadoras, conforme indicado pelo cliente durante 
                        o processo de reserva.
                    </p>
                    <p>
                        As informações específicas sobre os locais de entrega serão disponibilizadas ao cliente
                        após a confirmação da reserva.
                    </p>
                </div>

                <div class="termo">
                    <h6>Contato com os Clientes</h6>

                    <p>
                        Após a efetuação da reserva, a empresa alocadora entrará em contato com o cliente por 
                        meio do e-mail ou telefone fornecidos durante o processo de reserva.
                    </p>
                    <p>
                        O objetivo do contato é confirmar os detalhes da reserva, fornecer informações adicionais 
                        e garantir uma comunicação eficaz para atender às necessidades do cliente.
                    </p>
                </div>

                <div class="termo">
                    <h6>Responsabilidade das Empresas Alocadoras</h6>

                    <p>
                        As empresas alocadoras são responsáveis por fornecer informações precisas e atualizadas 
                        sobre os veículos disponíveis para aluguel na plataforma.
                    </p>
                    <p>
                        As empresas alocadoras comprometem-se a manter seus veículos em boas condições de funcionamento, 
                        limpeza e com a documentação em dia.
                    </p>
                </div>

                <div class="termo">
                    <h6>Responsabilidade dos Clientes</h6>

                    <p>
                        Os clientes são responsáveis por fornecer informações precisas durante o processo de 
                        reserva, garantindo que seus dados de contato estejam corretos.
                    </p>
                    <p>
                        Os clientes devem respeitar os termos de cancelamento e modificar suas reservas dentro 
                        dos prazos estabelecidos.
                    </p>
                </div>
            </div>

            <p class="resume">
                Ao utilizar a plataforma de pesquisa, avaliação e aluguel de carros, os clientes e empresas 
                alocadoras concordam em cumprir com estes Termos e Políticas de Uso. A plataforma visa 
                aproximar os clientes das empresas alocadoras, tornando o processo de aluguel de carros mais 
                conveniente e eficiente para ambas as partes.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Termos'
    }
</script>

<style scoped>
    @import '@/Styles/Admin/TermosEPoliticas/Termos.sass';
</style>