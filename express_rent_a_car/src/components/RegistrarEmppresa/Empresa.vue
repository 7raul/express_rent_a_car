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

            <div class="registro-box">
                <div class="form-box register" :class="{ active: activeForm === 'register' }">
                    <form action="#">
                        <h2>Empresa</h2>

                        <div class="input-box">
                            <span class="icon"><i class="bx bxs-user"></i></span>
                            <input type="text">
                            <label for="name">Nome da empresa</label>
                        </div>

                        <div class="input-box">
                            <span class="icon"><i class="bx bxs-envelope"></i></span>
                            <input type="email">
                            <label for="email">E-mail da empresa</label>
                        </div>

                        <div class="input-box">
                            <span class="icon"><i class="bx bxs-phone"></i></span>
                            <input type="number">
                            <label for="number">Telefone da empresa</label>
                        </div>

                        <button type="submit" class="btn" @click.prevent="activateForm('another')">Continuar</button>

                        <div class="register">
                            <p>Já tem uma conta? <a href="#" @click="redirectToLogin">Entrar</a></p>
                        </div>
                    </form>
                </div>

                <div class="form-box another"  :class="{ active: activeForm === 'another' }">
                    <form action="#">
                        <h2>Empresa</h2>

                        <FileEmpresa />

                        <div class="btn-option">
                            <button type="submit" class="btn-cad" @click.prevent="activateForm('the-end')">Continuar</button>
                            <button type="submit" class="btn" @click.prevent="activateForm('register')">Voltar</button>
                        </div>
                    </form>
                </div>

                <div class="form-box the-end" :class="{ active: activeForm === 'the-end' }">
                    <form action="#">
                        <h2>Empresa</h2>

                        <PassWord />

                        <div class="btn-option">
                            <button type="submit" class="btn-cad">Cadastrar</button>
                            <button type="submit" class="btn" @click.prevent="activateForm('another')">Voltar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FileEmpresa from '@/components/RegistrarEmppresa/FileEmpresa.vue'
    import PassWord from '@/components/RegistrarEmppresa/PassWord.vue'
    export default {
        name: 'Empresa',
        components: {
            FileEmpresa,
            PassWord
        },
        data () {
            return {
                activeForm: 'register'
            }
        },
        methods: {
            redirectToLogin() {
                // Redirecionar para a view da Empresa
                this.$router.push('/login');
            },
            activateForm(formName) {
                this.activeForm = formName
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

    .form-box h2{
        font-size: 32px;
        text-align: center;
        margin-bottom: 1rem;
    }

    .text-sci h2 span{
        font-size: 25px;
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

    /* Reserva do slide */
    .registro-box {
        display: flex;
        flex-wrap: wrap;
        overflow: hidden;
        width: 100%;
        transition: height 0.6s ease;
    }

    .form-box {
        width: 100%;
        transform: translateX(100%);
        transition: transform 0.6s ease;
    }

    .form-box.active {
        transform: translateX(0);
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

    .btn-option{
        margin-top: 2rem;
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