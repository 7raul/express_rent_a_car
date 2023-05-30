<template>
    <div>
        <div class="container">
            <div class="heading">
                <span>Reclamação</span>
                <h1>Express rent a car</h1>
            </div>

            <div class="reclame-container">
                <p>Apresente aqui sua reclamação</p>

                <form action="#" class="form-container">
                    <div class="input-group">
                        <div class="input-box">
                            <label for="name">Nome: <span>*</span></label>
                            <input type="text" id="name" name="name" placeholder="Digite o seu nome" required>
                        </div>

                        <div class="input-box">
                            <label for="E-mail">E-mail: <span>*</span></label>
                            <input type="email" id="email" name="email" placeholder="Digite seu E-mail" required>
                        </div>

                        <div class="input-box">
                            <label for="name">Entidade: <span>*</span></label>
                            <input type="text" id="name" name="name" placeholder="Digite a empresa ou entidade que pretende reclamar" required>
                        </div>

                        <div class="input-box">
                            <label for="assunto">Assunto: <span>*</span></label>
                            <input type="text" id="assunto" name="assunto" placeholder="Digite o asunto a reclamar" required>
                        </div>

                        <div class="input-box">
                            <label for="nota_fiscal">Nota fiscal: </label>
                            <input type="file" id="nota_fiscal" name="nota_fiscal">
                        </div>
                        
                        <div class="input-box">
                            <label for="nota_fiscal">Apresente sua reclamação: <span>*</span></label>
                            <textarea name="reclamacao" id="reclamacao" placeholder="Ecreva a sua reclamação..." required></textarea>
                        </div>
                    </div>

                    <button>Enviar reclamação</button>
                </form>
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
    .container{
        text-align: center;
        margin: 5rem 13rem;
    }

    .heading{
        letter-spacing: 1px;
        margin: 3.1rem 0;
        padding: 10px 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .heading h1{
        font-size: 1.5rem;
        font-weight: 500;
        background-color: #232f33;
        color: #fff;
        padding: 10px 20px;
        text-transform: uppercase;
    }

    .heading span{
        font-size: 1rem;
        color: #222;
        margin-bottom: 10px;
        letter-spacing: 2px;
        text-transform: uppercase;
    }

    .reclame-container{
        background-color: #232f33;
        width: 100%;
        margin-top: 5rem;
        margin-bottom: 5rem;
        text-align: center;
        padding: 5rem;
        color: #fff;
    }

    .reclame-container p{
        text-align: center;
        font-size: 18px;
        margin-bottom: 2rem;
    }

    .input-group{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        margin: 1rem;
    }

    .input-box{
        display: flex;
        flex-direction: column;
        margin-right: 20px;
        margin-top: 1.5rem;
        margin-bottom: 1rem;
    }

    .input-box label{
        margin: auto;
        margin-left: 0;
        padding-bottom: 5px;
        color: #fff;
        font-weight: bold;
        font-size: 13px;
    }

    span{
        color: red;
    }

    .input-box input{
        font-size: 18px;
        padding: 10px;
        border: none;
        width: 400px;
    }

    .input-box input:focus-visible{
        outline: 1px solid #222;
    }

    .input-box input[type="file"]{
        background-color: #fff;
    }

    .input-box textarea{
        font-size: 18px;
        width: 400px;
        height: 200px;
        border: none;
        padding: 10px;
    }

    .input-box textarea:focus-visible{
        outline: 1px solid #222;
    }

    button{
        padding: 16px;
        width: 300px;
        border: none;
        background-color: #0AC4FF;
        color: #fff;
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 2rem;
    }   

    button:hover{
        background-color: transparent;
        color: #0AC4FF;
        font-weight: bold;
        border: 2px solid #0AC4FF;
    }
</style>