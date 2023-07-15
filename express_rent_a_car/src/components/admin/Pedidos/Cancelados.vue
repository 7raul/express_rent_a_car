<template>
    <div>
        <div class="cancelados-container">
            <h4>Cancelados</h4>

            <table id="posts">
                <thead>
                    <tr>
                        <th>Cliente</th>
                        <th>E-mail</th>
                        <th>Telefone</th>
                        <th>B.I</th>
                        <th>Viatura</th>
                        <th>Duração</th>
                        <th>Estado</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Raúl</td>
                        <td>raulmigueleb7@gmail.com</td>
                        <td>932157393</td>
                        <td>123456789LA22</td>
                        <td>Fiat500</td>
                        <td>24h</td>
                        <td>Cancelado</td>
                        <td class="btn-solicitacao">
                            <button><i class="ri-delete-bin-2-line"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Cancelados'
    }
</script>

<style scoped>
    @import '@/Styles/Admin/Pedidos/Cancelados.sass';
</style>