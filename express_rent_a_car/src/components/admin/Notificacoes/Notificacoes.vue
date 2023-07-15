<template>
    <div>
        <div class="notificacao-container">
            <h4>Notificações</h4>

            <div class="notificacoes">
                <div class="notificacao">
                    <a href="#">
                        <span class="bold">Raúl Miguel</span> cancelou a sua reserva para a viatura de marca <span class="bold">FIAT 500</span> que se encontra disponível na vossa alocadora
                    </a>

                    <div class="date">
                        <span>15/07/2023</span>
                    </div>
                </div>

                <div class="notificacao">
                    <a href="#">
                        <span class="bold">Raúl Miguel</span> solicita a viatura de marca <span class="bold">FIAT 500</span> que se encontra disponível na vossa alocadora
                    </a>

                    <div class="date">
                        <span>15/07/2023</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Notificacoes'
    }
</script>

<style scoped>
    @import '@/Styles/Admin/Notificacoes/Notificacoes.sass';
</style>