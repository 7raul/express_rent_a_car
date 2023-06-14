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
                     
                        <input type="text" placeholder="Nome" required>
                        
                        <input type="email" placeholder="E-mail" required>
                        
                        <input type="number" placeholder="Telefone" required>

                        <button type="submit" class="btn" @click="activateContinue">Continuar</button>

                        <div class="register">
                            <p>Já tem uma conta? <a href="#" @click="redirectToLogin">Entrar</a></p>
                        </div>
                    </form>
                </div>

                <div class="form-box another">
                    <form action="#">
                        <h2>Cliente</h2>

                        <input type="password" placeholder="Senha" required>
                        
                        <input type="password" placeholder="Confirmar senha" required>

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
import http from "@/services/api";

export default ({



    name: 'Cliente',

    mounted() {
        http.get("/cliente").then(response => {
            console.log(response.data)
        }).catch(error => {
            console.log("some problem of the getting", error)
        })
    },

    data() {
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
})
</script>

<style scoped>
@import '@/Styles/RegisterCliente/Cliente.sass'
</style>