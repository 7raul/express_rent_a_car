<template>
    <div>
        <div class="container-message">
            <div class="content-message">
                <h2>Envie uma mensagem</h2>
                <p>Obterá sua resposta no intervalo de 4 horas</p>
            </div>

            <div class="form-message">
                <div class="form-box-message">
                    <form action="#">
                        <div class="input-box-message">
                            <label for="text">Nome</label>
                            <input type="text" placeholder="Seu nome" required> 
                            <span class="icone"><i class="bx bxs-user"></i></span> 
                        </div>
                        <div class="input-box-message">
                            <label for="email">E-mail</label>
                            <input type="email" placeholder="Seu e-mail" required>
                            <span class="icone"><i class="bx bxs-envelope"></i></span>
                        </div>
                        <div class="input-box-message">
                            <label for="message">Mensagem</label>  
                            <textarea name="message" id="message" placeholder="Escreva sua mensagem"></textarea>
                        </div>

                        <div class="mensage-btn">
                            <button type="submit">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Mensagem'
    }
</script>

<style scoped>
    @import '@/Styles/Home/Mensagem.sass'
</style>
