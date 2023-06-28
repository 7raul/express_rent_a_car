<template>
    <div>
        <div class="reclamacao-container">
            <div class="form-container">
                <div class="content-container">
                    <div class="reclamacao-content">
                        <h3>Reclamacões</h3>

                        <p>Apresente aqui suas reclamações</p>
                        <p>A nossa equipe terá muito praser de atenter</p>
                        <p>Obrigado!</p>
                    </div>

                    <div class="reclamacao">
                        <form>
                            <input type="text" placeholder="Escreva o assunto...">
                            <textarea placeholder="Escreva sua reclamação..."></textarea>
                            <button>Publicar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Reclamacao'
    }
</script>

<style scoped>
    @import '@/Styles/Reclamacao/Reclamacao.sass'
</style>