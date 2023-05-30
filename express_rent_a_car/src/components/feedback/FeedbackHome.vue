<template>
    <div>
        <section></section>
        <div class="feedback-container">
            <div class="paragraph">
                <p>Faça e leia os feedbaks dos nossos clientes aqui</p>
            </div>

            <div class="form-container">
                <form>
                    <h2>Faça seu feedback</h2>
                    <div class="id">
                        <input type="text" placeholder="Nome" required>
                        <i class="far fa-user"></i>
                    </div>
                    <div class="id">
                        <input type="email" placeholder="email" required>
                        <i class="far fa-envelope"></i>
                    </div>
                    <textarea placeholder="Coloca seu feedback aqui..." required></textarea>
                    <button>Enviar</button>
                </form>
            </div>
            
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FeedbackHome'
    }
</script>

<style scoped>
    section{
        position: relative;
        height: 100%;
        width: 100%;
        background-image: url("@/assets/img/feedback.jpg");
        background-size: cover;
        background-position: center;
        filter: blur(2px) brightness(30%);
    }

    .feedback-container{
        position: relative;
        height: 100%;
        width: 100%;
        background-image: url("@/assets/img/feedback.jpg");
        background-size: cover;
        background-position: center;
        display: flex;
        min-height: 100vh;
        align-items: center;
        justify-content: center;
        color: #fff;
    }

    .paragraph{
        width: 400px;
    }

    .paragraph p{
        position: relative;
        font-size: 50px;
        font-weight: bold;
        margin-right: 2rem;
    }

    .form-container{
        width: 400px;
        background: #000; 
        box-shadow: 0 0 8px rgba(250,250,250,0.6);
        opacity: .6;
    }

    .form-container form{
        width: 100%;
        text-align: center;
        padding: 10px 0;
    }

    form h2{
        font-weight: 200;
        padding: 10px 0;
    }

    form .id{
        position: relative;
    }

    .id i{
        position: absolute;
        font-size: 20px;
        top: 50%;
        right: 60px;
        transform: translateY(-50%);
        color: #fff;
    }

    form input{
        width: 80%;
        height: 50px;
        margin: 4px;
        border: 1px solid #5c5c5c;
        background: #181717;
        padding: 0 15px;
        padding-right: 50px;
        font-size: 20px;
        color: #fff;
        font-weight: 200;
    }

    form textarea{
        padding: 5px 15px;
        border: 1px solid #5c5c5c;
        background: #181717;
        font-size: 20px;
        width: 80%;
        margin: 0 auto;
        margin-top: 5px;
        margin-bottom: 4px;
        display: block;
        height: 100px;
        color: #fff;
    }

    form button{
        margin-top: 5px;
        margin-bottom: 25px;
        border: none;
        background-color: #222;
        color: #fff;
        padding: 10px 0;
        width: 80%;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
    }

    form input:focus,
    form textarea:focus{
        border: 1px solid #00fff0;
        color: #00fff0;
        transition: all 0.3s ease;
    }

    form input:focus::placeholder,
    form textarea:focus::placeholder{
        padding-left: 4px;
        color: #00fff0;
        transition: all 0.3s ease;
    }

    form input:focus  + i{
        color: #00fff0;
        transition: all 0.3s ease;
    }
</style>