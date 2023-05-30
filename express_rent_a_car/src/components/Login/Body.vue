<template>
    <div>
        <div class="backgound"></div>
        <div class="container">
            <div class="content">
                <a href="#" class="logo">
                    <i class="ri-roadster-fill"></i><span>Express Rent a Car</span>
                </a>

                <div class="text-sci">
                    <h2>Bem-vindo! <br><span>Ao seu novo website</span></h2>
                </div>

                <div class="text-sci">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eveniet unde odio perspiciatis? Velit, itaque nam
                        repudiandae, maxime a quibusdam ipsa quo nobis reprehenderit iusto nihil! Vero eos voluptatum molestiae.
                    </p>

                    <div class="social-icon">
                        <a href="#"><i class="bx bxl-linkedin"></i></a>
                        <a href="#"><i class="bx bxl-facebook"></i></a>
                        <a href="#"><i class="bx bxl-instagram"></i></a>
                        <a href="#"><i class="bx bxl-whatsapp"></i></a>
                    </div>
                </div>
            </div>
            
            <div class="logreg-box" :class="{ active: isRegisterActive }">
                <div class="form-box login">
                <form action="#">
                    <h2>Entrar</h2>

                    <div class="input-box">
                    <span class="icone"><i class="bx bxs-envelope"></i></span>
                    <input type="email" required>
                    <label for="email">E-mail</label>
                    </div>

                    <div class="input-box">
                    <span class="icone"><i class="bx bxs-lock-alt"></i></span>
                    <input type="password" required>
                    <label for="password">Senha</label>
                    </div>

                    <div class="remember-forgot">
                        <label for="">
                            <input type="checkbox"> Lembre-me
                        </label>
                        <a href="#">Esqueceu a senha?</a>
                    </div>

                    <button type="submit" class="btn">Entrar</button>

                    <div class="login-register">
                        <p>Ainda não tem uma conta? <a href="#" class="register-link" @click="activateRegister">Registrar</a></p>
                    </div>
                </form>
                </div>

                <div class="form-box register">
                <form action="#">
                    <h2>Registrar como</h2>

                    <div class="btn-option">
                        <button type="submit" class="btn-empresa" @click="redirectToEmpresa">Empresa</button>
                        <button type="submit" class="btn-cliente" @click="redirectToCliente">Cliente</button>
                    </div>

                    <div class="login-register">
                    <p>Já tem uma conta? <a href="#" class="login-link" @click="deactivateRegister">Entrar</a></p>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Body',

        data() {
            return {
                isRegisterActive: false
            };
        },
        methods: {
            activateRegister() {
                this.isRegisterActive = true;
            },
            deactivateRegister() {
                this.isRegisterActive = false;
            },
            redirectToEmpresa() {
                // Redirecionar para a view da Empresa
                this.$router.push('/empresa');
            },
            redirectToCliente() {
                // Redirecionar para a view do Cliente
                this.$router.push('/cliente');
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
        background: url('@/assets/img/backgroun-login.jpg') no-repeat;
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

    .container .logreg-box{
        position: absolute;
        top: 0;
        right: 0;
        width: calc(100% - 58%);
        height: 100%;
        overflow: hidden;
    }

    .logreg-box .form-box{
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

    .logreg-box .form-box.login{
        transform: translateX(0);
        transition: transform .6s ease;
        transition-delay: .7s;
    }

    .logreg-box.active .form-box.login{
        transform: translateX(540px);
        transition-delay: 0s;
    }
    .logreg-box .form-box.register{
        transform: translateX(540px);
        transition: transform .6s ease;
        transition-delay: 0;
    }

    .logreg-box.active .form-box.register{
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
        font-size: 16px;
        color: #e4e4e4;
        font-weight: 500;
        outline: none;
        padding-right: 26px;
    }

    .input-box label{
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        font-size: 16px;
        font-weight: 500px;
        pointer-events: none;
        transition: .5s;
    }

    .input-box input:focus~label,
    .input-box input:valid~label{
        top: -5px;
    }

    .input-box .icone{
        position: absolute;
        right: 0;
        top: 13px;
        font-size: 19px;
    }

    .form-box .remember-forgot{
        font-size: 14.5px;
        font-weight: 500;
        margin: -15px 0 15px;
        display: flex;
        justify-content: space-between;
    }

    .remember-forgot label input{
        accent-color: #e4e4e4;
        margin-right: 3px;  
    }

    .remember-forgot a{
        color: #e4e4e4;
        text-decoration: none;
    }

    .remember-forgot a:hover{
        text-decoration: underline;
    }

    .btn,
    .btn-empresa,
    .btn-cliente{
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

    .form-box .login-register{
        font-size: 14.5px;
        font-weight: 500;
        text-align: center;
        margin-top: 25px;
    }

    .login-register p a{
        color: #e4e4e4;
        font-weight: 600;
        text-decoration: none;
    }

    .login-register a:hover{
        text-decoration: underline;
    }

    .btn-option{
        margin-top: 3rem;
    }

    .btn-empresa{
        margin-bottom: 1.5rem;
    }
    </style>