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
    @import '@/Styles/Login/Body.sass';    
</style>