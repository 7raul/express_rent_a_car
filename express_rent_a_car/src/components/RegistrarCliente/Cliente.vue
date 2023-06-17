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
                    <form action="#" @submit.prevent="matuta">
                        <h2>Cliente</h2>

                        <div class="input-box">
                            <span class="icon"><i class="bx bxs-user"></i></span>
                            <input type="text" required v-model="cliente.nome">
                            <label for="name">Nome</label>
                        </div>

                        <div class="input-box">
                            <span class="icon"><i class="bx bxs-envelope"></i></span>
                            <input type="email" required v-model="cliente.email">
                            <label for="email">E-mail</label>
                        </div>

                        <div class="input-box">
                            <span class="icon"><i class="bx bxs-phone"></i></span>
                            <input type="number" required v-model="cliente.telefone">
                            <label for="number">Telefone</label>
                        </div>

                        <button type="submit" class="btn" @click="activateContinue">Continuar</button>

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
                            <input type="password" required v-model="cliente.password">
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
import dados from "@/services/getBy"
export default ({



    name: 'Cliente',



    data() {
        return {
            isRegisterActive: false,
            cliente: {
                nome: "",
                email: "",
                password: "",
                telefone: "",
            }
        }
    },

    mounted() {


    },
    methods: {
        matuta() {
            alert("Salvo")
            if (dados.CriarCliente(this.cliente.nome, "jkdshlje897ew78t") && dados.CriarSenha(this.cliente.password)) {
            }
        },
        activateContinue() {
            this.isRegisterActive = true;
        },

        deactivateContinue() {
            this.isRegisterActive = false;
        },
        redirectToLogin() {
            // Redirecionar para a view da Empresa
            this.$router.push('/login');
        },

    }
})
</script>

<style scoped>
@import '@/Styles/RegisterCliente/Cliente.sass'
</style>