<template>
    <div>
        <div class="container-empresa-register">
            <div class="content-empresa-register">
                <div class="navbar-logo-empresa">
                    <router-link to="/">
                        <i class="ri-roadster-fill"></i><span>Express<span class="color">RentaCar</span></span>
                    </router-link>
                </div>

                <div class="text-sci-empresa">
                    <h2>Bem-vindo! <br><span>Ao seu novo website</span></h2>
                </div>

                <div class="text-sci-empresa">
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

                        <input type="text" placeholder="Nome da empresa">
                        
                        <input type="email" placeholder="E-mail da empresa">

                        <input type="number" placeholder="Telefone da empresa">

                        <button type="submit" class="btn" @click.prevent="activateForm('another')">Continuar</button>
                        <button type="submit" class="btn-google"><i class="fa-brands fa-google-plus-g"></i> Cadastrar com google</button>
                        
                        <div class="register">
                            <p>Já tem uma conta? <a href="#" @click="redirectToLogin">Entrar</a></p>
                        </div>
                    </form>
                </div>

                <div class="form-box another"  :class="{ active: activeForm === 'another' }">
                    <form action="#">
                        <FileEmpresa />

                        <div class="btn-option">
                            <button type="submit" class="btn-cad" @click.prevent="activateForm('the-end')" >Continuar</button>
                            <button type="submit" class="btn" @click.prevent="activateForm('register')">Voltar</button>
                        </div>
                    </form>
                </div>

                <div class="form-box the-end" :class="{ active: activeForm === 'the-end' }">
                    <form action="#">
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
                console.log('Activating form:', formName);
                this.activeForm = formName;
            }
        }
    }
</script>

<style scoped>
    @import '@/Styles/RegisterEmpresa/Empresa.sass';
</style>