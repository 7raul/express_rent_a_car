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

                <a href="/login" class="action_btn"><i class="ri-user-fill"></i>Entrar</a>

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
            }
        },

        mounted() {
            this.isMobile = window.innerWidth <= 992; 
            // Define a largura em que a exibição móvel deve ser ativada (992px no exemplo original)
        }
    }
</script>

<style scoped>
    @import '@/Styles/Home/NavbarComponents/Header.sass';
</style>