<template>
    <div>
        <div class="background"></div>
        <div class="container">
            <div class="content">
                <a href="#" class="logo">
                    <i class="ri-roadster-fill"></i><span>Express Rent a Car</span>
                </a>

                <div class="text-sci">
                    <h2>Bem-vindo! <br><span>Ao seu novo website</span></h2>
                </div>

                <div class="text-sci">
                    <div class="social-icon">
                        <a href="#"><i class="bx bxl-linkedin"></i></a>
                        <a href="#"><i class="bx bxl-facebook"></i></a>
                        <a href="#"><i class="bx bxl-instagram"></i></a>
                        <a href="#"><i class="bx bxl-whatsapp"></i></a>
                    </div>
                </div>
            </div>

            <div class="registro-box" :class="{ active: isRegisterActive }">
                <div class="form-box register">
                    <form action="#">
                        <h2>Cliente</h2>

                        <div class="input-box">
                            <span class="icon"><i class="bx bxs-user"></i></span>
                            <input type="text" required>
                            <label for="name">Nome</label>
                        </div>

                        <div class="input-box">
                            <span class="icon"><i class="bx bxs-envelope"></i></span>
                            <input type="email" required>
                            <label for="email">E-mail</label>
                        </div>

                        <div class="input-box">
                            <span class="icon"><i class="bx bxs-phone"></i></span>
                            <input type="number" required>
                            <label for="number">Telefone</label>
                        </div>

                        <button type="submit" class="btn" @click="activateContinue" >Continuar</button>

                        <div class="register">
                            <p>Já tem uma conta? <a href="#" @click="redirectToLogin">Entrar</a></p>
                        </div>
                    </form>
                </div>

                <div class="form-box another">
                    <form action="#">
                        <h2>Cliente</h2>

                        <div class="input-box">
                            <span class="icon"><i class="bx bxs-lock-alt"></i></span>
                            <input type="password" required>
                            <label for="password">Senha</label>
                        </div>

                        <div class="input-box">
                            <span class="icon"><i class="bx bxs-lock-alt"></i></span>
                            <input type="password" required>
                            <label for="password">Confirmar senha</label>
                        </div>

                        <div class="btn-option">
                            <button type="submit" class="btn-cad">Cadastrar</button>
                            <button type="submit" class="btn" @click="deactivateContinue">Voltar</button>
                        </div>
                        

                        <div class="register">
                            <p>Já tem uma conta? <a href="#" @click="redirectToLogin">Entrar</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Cliente',
        data () {
            return {
                isRegisterActive: false
            }
        },
        methods: {
            activateContinue() {
                this.isRegisterActive = true;
            },
            deactivateContinue() {
                this.isRegisterActive = false;
            },
            redirectToLogin() {
                // Redirecionar para a view da Empresa
                this.$router.push('/login');
            }
        }
    }
</script>

<style scoped>
    .container{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 75%;
        min-height: 550px;
        background: url('@/assets/img/backgroundCliente.jpg') no-repeat;
        background-size: cover;
        background-position: center;
        border-radius: 10px;
        margin-top: 20px;
    }

    .container .content{
        position: absolute;
        top: 0;
        left: 0;
        width: 58%;
        height: 100%;
        background: transparent;
        padding: 80px;
        color: #e4e4e4;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }

    .logo{
        display: flex;
    }

    .logo i{
        color: #9ABCFF;
        font-size: 30px;
        margin-right: 3px;
    }

    .content a{
        text-decoration: none;
    }

    .logo span{
        color: #e4e4e4;
        font-size: 1.3rem;
        font-weight: 600;
    }

    .text-sci h2{
        font-size: 40px;
        line-height: 1;
    }

    .text-sci h2 span{
        font-size: 25px;
    }

    .text-sci p{
        font-size: 16px;
        margin: 20px 0;
    }

    .social-icon a i{
        font-size: 22px;
        color: #e4e4e4;
        margin-right: 10px;
        transition: .5s ease;
    }

    .social-icon a:hover i{
        transform: scale(1.2);
    }

    .container .registro-box{
        position: absolute;
        top: 0;
        right: 0;
        width: calc(100% - 58%);
        height: 100%;
        overflow: hidden;
    }

    .registro-box .form-box{
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background: transparent;
        backdrop-filter: blur(20px);
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        color: #e4e4e4;
    }  

    .registro-box .form-box.register{
        transform: translateX(0);
        transition: transform .6s ease;
        transition-delay: .7s;
    }

    .registro-box.active .form-box.register{
        transform: translateX(540px);
        transition-delay: 0s;
    }

    .registro-box .form-box.another{
        transform: translateX(540px);
        transition: transform .6s ease;
        transition-delay: 0s;
    }

    .registro-box.active .form-box.another{
        transform: translateX(0);
        transition-delay: .7s;
    }

    .form-box h2{
        font-size: 32px;
        text-align: center;
    }

    .form-box .input-box{
        position: relative;
        width: 340px;
        height: 50px;
        border-bottom: 2px solid #e4e4e4;
        margin: 30px 0;
    }

    .input-box input{
        width: 100%;
        height: 100%;
        background: transparent;
        border: none;
        outline: none;
        padding-right: 28px;
        color: #e4e4e4;
    }

    .input-box label{
        position: absolute;
        top: 50%;
        left: 0;
        transform:translateY(-50%);
        font-size: 16px;
        font-weight: 500;
        pointer-events: none;
        transition: .5s ease;
    }

    .input-box .icon{
        position: absolute;
        right: 0;
        top: 13px;
        font-size: 19px;
    }

    .input-box input:focus~label,
    .input-box input:valid~label{
        top: -5px;
    }
    .btn,
    .btn-cad{
        width: 100%;
        height: 45px;
        background: #c4103d;
        border: none;
        outline: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
        color: #e4e4e4;
        font-weight: 500;
        box-shadow: 0 0 10px rgba(0, 0, 0, .5);
    }

    .btn-cad{
        margin-bottom: 1rem;
    }
    .form-box .register{
        font-size: 14.5px;
        font-weight: 500;
        text-align: center;
        margin-top: 25px;
    }

    .register p a{
        color: #e4e4e4;
        font-weight: 600;
        text-decoration: none;
    }
</style>