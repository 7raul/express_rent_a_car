<template>
    <div>
        <header>
            <div class="navbar">
                <router-link to="#" class="logo">
                    <i class="ri-roadster-fill"></i><span>Express Rent a Car</span>
                </router-link>

                <ul class="links" v-show="!isMobile">
                    <li><router-link to="/">Inicio</router-link></li>
                    <li><router-link to="#">Carros</router-link></li>
                    <li><router-link to="/about">Sobre</router-link></li>
                    <li><router-link to="/reclamacao">Reclamação</router-link></li>
                    <li><router-link to="feedback">Feedback</router-link></li>
                </ul>

                <div>
                    <a v-if="!usuarioLogado" href="/login" class="action_btn">
                        <i class="ri-user-fill"></i>Entrar
                    </a>

                    <div v-else class="perfil">
                        <div class="action_perfil" @click="toggleDropdown">
                            <i class="ri-user-fill"></i><i class="ri-arrow-down-s-line"></i>
                            <div class="dropdown_perfil" v-show="dropdownAtivo">
                                <li><router-link to="#">Minhas reservas</router-link></li>
                                <li><router-link to="#">Suporte</router-link></li>
                                <li><router-link to="#">Termos</router-link></li>
                                <li><router-link to="/login">Sair</router-link></li>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="toggle_btn" @click="toggleMenu">
                    <i :class="toggleIcon"></i>
                </div>
            </div>

            <!--Reservado para o main-->
            <div>
                <Main />
            </div>
            
            <div class="dropdown_menu" :class="{ open: isMobileMenuOpen }">
                <li><router-link to="/">Inicio</router-link></li>
                <li><router-link to="#">Carros</router-link></li>
                <li><router-link to="/about">Sobre</router-link></li>
                <li><router-link to="/reclamacao">Reclamação</router-link></li>
                <li><router-link to="feedback">Feedback</router-link></li>
                <a href="#" class="action_btn"><i class="ri-user-fill"></i>Entrar</a>
            </div>
        </header>
    </div>
</template>

<script>
    import Main from './Main.vue'
    export default {
        name: 'Header',
        components: {
            Main
        },

        data() {
            return {
                isMobile: false,
                isMobileMenuOpen: false,
                dropdownAtivo: false,
                usuarioLogado: false
            };
        },

        computed: {
            toggleIcon () {
                return this.isMobileMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
            }
        },

        methods: {
            toggleMenu() {
                this.isMobileMenuOpen = !this.isMobileMenuOpen;
            },
            redirectToLogin() {
                // Redirecionar para a view do Cliente
                this.$router.push('/login');
            },
            toggleDropdown() {
                this.dropdownAtivo = !this.dropdownAtivo;
            }
        },

        mounted() {
            this.isMobile = window.innerWidth <= 992; 
        }
    }
</script>

<style scoped>
    @import '@/Styles/Home/NavbarComponents/Header.sass';
</style>