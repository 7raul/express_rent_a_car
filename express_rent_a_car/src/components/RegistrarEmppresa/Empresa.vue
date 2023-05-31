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
    @import '@/Styles/RegisterEmpresa/Empresa.sass';
</style>