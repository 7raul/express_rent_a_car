<template>
    <div>
        <div class="feedback-container">
            <header>
                <div class="form-container">
                    <div class="content-container">
                        <div class="feedback-content">
                            <h3>Feedback</h3>

                            <p>Opine e leia opiniões dos usuários</p>
                        </div>

                        <div class="feedback">
                            <textarea placeholder="Escreva sua opinião..."></textarea>
                            <button>Publicar</button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FeedbackCliente'
    }
</script>

<style scoped>
    @import '@/Styles/FeedbackClientes/FeedbackClientes.sass';
</style>