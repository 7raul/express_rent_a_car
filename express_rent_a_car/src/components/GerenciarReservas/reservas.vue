<template>
    <div>
        <div class="reservas-container">
            <h2>Minhas reservas</h2>
            <table>
                <thead>
                    <tr>
                        <th>Empresa</th>
                        <th>Carro</th>
                        <th>Valor</th>
                        <th>Região</th>
                        <th></th> 
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Artur Rent a car</td>
                        <td>Fiat 500</td>
                        <td>25.00kz</td>
                        <td class="warning">Luanda</td>
                        <td class="btn-reserve">
                            <button v-if="!reservaCumprida" class="vermelho">Cancelar</button>
                            <button v-else class="vermelho">Eliminar</button>
                            <button class="verde">Editar</button>
                        </td>
                    </tr>

                    
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'reservas',

        data() {
            return {
                reservaCumprida: false,
                dataDaReserva: '2023-07-15' // Coloque a data da reserva aqui
            }
        },

        computed: {
            reservaExpirada() {
                const dataAtual = new Date().toISOString().split('T')[0]; // Obtém a data atual no formato AAAA-MM-DD
                return dataAtual > this.dataDaReserva; // Verifica se a data atual é maior que a data da reserva
            }
        },

        watch: {
            reservaExpirada(novaExpiracao) {
                this.reservaCumprida = novaExpiracao;
            }
        }
    }
</script>

<style scoped>
    @import '@/Styles/GerenciarReservas/reservas.sass';
</style>