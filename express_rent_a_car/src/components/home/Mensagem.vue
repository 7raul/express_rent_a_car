<template>
    <div>
        <div class="container">
            <div class="contact-container">
                <h2>Envie uma mensagem</h2>
                <p>Num periodo de 4 horas obterá sua resposta</p>

                <form action="#" class="form-container">
                    <div class="input-group">
                        <input type="text" id="name" name="name" required placeholder="Digite o seu nome">
                        <input type="email" id="email" email="email" required placeholder="Digite o seu e-mail">
                    </div>
                    <textarea name="message" id="mwssage" placeholder="Comece escrevendo aqui..."></textarea>
                </form>
                <button>Enviar</button>
            </div>

            <div class="img">
                <div class="element">
                    <p>O carro que você deseja está aqui</p>
                    <router-link to="#">>Ver</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'Mensagem',

        data() {
            return {
                img: require("@/assets/img/mensagem.jpg"),
                alt: "Carro vermelho"
            }
        }
    }

</script>

<style scoped>
    .container{
        margin-right: 4rem;
        margin-left: 4rem;
        display: flex;
        height: 600px;
        margin-bottom: 3rem;
    }

    .img{
        position: relative;
        width: 700px;
        height: 100%;
        background-image: url("@/assets/img/mensagem.jpg");
        background-size: cover;
        background-position: center;
    }
    
    .element{
        position: absolute;
        bottom: 0;
        padding: 3rem;
    }
    .img p{
        font-size: 30px;
        margin-bottom: 1rem;
        color: #fff;
        text-shadow: black 3px 2px 3px
    }

    a{
        font-size: 25px;
        color: #2B59BD;
        text-shadow: black 3px 2px 3px
    }

    a:hover{
        text-decoration: underline;
    }

    .container .contact-container{
        width: 700px;
        height: 100%;
        align-items: center;
        justify-content: center;
        background-color: #9CE7FF;
    }

    .contact-container{
        text-align: center;
        padding: 3rem;
        padding-top: 4.5rem;
    }

    .contact-container h2{
        color: #222327;
        width: 500px;
        margin: 0 auto;
        padding-bottom: 5px;
        font-size: 24px;
        margin-bottom: 1rem;
        border-bottom: 3px solid #222327;   
    }

    .contact-container p{
        font-size: 18px;
        margin-bottom: 2rem;
    }

    .input-group input{
        width: 235px;
        margin: 1rem;
        padding: 1rem;
        border: none;
        font-size: 16px;
    }

    .input-group input:focus-visible{
        outline: 1px solid #222327;
    }

    .form-container textarea{
        width: 500px;
        height: 150px;
        margin-top: 1rem;
        border: none;
        padding: 0.7rem;
        margin-bottom: 1.3rem;
    }

    .form-container textarea:focus-visible{
        outline: 1px solid #222327;
    }

    button{
        width: 500px;
        padding: 0.7rem;
        border: none;
        background-color: #2B59BD;
        color: #ecf7fa;
        font-weight: bold;
        margin-bottom: 1rem;
    }

    button:hover{
        background-color: transparent;
        border: 2px solid #2B59BD;
        color: #2B59BD;
    }
</style>