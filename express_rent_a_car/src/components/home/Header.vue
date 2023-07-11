<template>
    <div>
        <header>
            <nav class="header-navbar">
                <div class="navbar-left">
                    <div class="navbar-logo">
                        <router-link to="/">
                            <i class="ri-roadster-fill"></i><span>Express<span class="color">RentaCar</span></span>
                        </router-link>
                    </div>

                    <form action="#">
                        <div class="navbar-search">
                            <input type="text" class="search-query" placeholder="Pesquisar...">
                            <span class="search-icon">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </span>
                            <button class="btn" type="button">Pesquisar</button>
                        </div>
                    </form>
                </div>

                <div class="navbar-center">
                    <ul class="navbar-links">
                        <li><router-link to="/" exact class="nav-link">Inicio</router-link></li>
                        <li><router-link to="/carros" class="nav-link">Carros</router-link></li>
                        <li><router-link to="/about" class="nav-link">Sobre</router-link></li>
                        <li><router-link to="/reclamacao" class="nav-link">Reclamação</router-link></li>
                        <li><router-link to="/feedback" class="nav-link">Feedback</router-link></li>
                    </ul>
                </div>

                <div class="navbar-right">
                    <div class="login-logout">
                        <a v-if="!loggedIn" href="/login" class="action_btn">
                            <i class="ri-user-fill"></i>Entrar
                        </a>

                        <div v-if="loggedIn" class="user">
                            <a href="#" class="user-profile" @click="showDropdown = !showDropdown">
                                <img :src="userProfile" alt="Profile" class="avatar">
                            </a>
                            <div class="user-link-dropdown" v-show="showDropdown">
                                <a href="#" class="dropdown-item">Reservas</a>
                                <a href="#" class="dropdown-item">Editar Perfil</a>
                                <a href="#" class="dropdown-item">Sair</a>
                            </div>
                        </div>
                    </div>

                    <div class="toggle_btn" @click="toggleMenu" v-show="screenWidth <= 1300">
                        <i v-show="!menuOpen" class="fa-solid fa-bars"></i>
                        <i v-show="menuOpen" class="fa-solid fa-xmark"></i>
                    </div>
                </div>
            </nav>

            <div class="toggle_dropdown" v-show="menuOpen && screenWidth <= 1300">
                <ul class="navbar-links">
                    <li>
                        <div class="login-logout">
                            <a v-if="!loggedIn" href="/login" class="action_btn">
                                <i class="ri-user-fill"></i>Entrar
                            </a>
                            
                            <div v-if="loggedIn" class="user">
                                <a href="#" class="user-profile" @click="showDropdown = !showDropdown">
                                    <img :src="userProfile" alt="Profile" class="avatar">
                                </a>
                                <div class="user-link-dropdown" v-show="showDropdown">
                                    <a href="/reservas" class="dropdown-item">Gerenciar Reservas</a>
                                    <a href="#" class="dropdown-item">Editar Perfil</a>
                                    <a href="#" class="dropdown-item">Sair</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li><router-link to="/">Inicio</router-link></li>
                    <li><router-link to="/carros">Carros</router-link></li>
                    <li><router-link to="/about">Sobre</router-link></li>
                    <li><router-link to="/reclamacao">Reclamação</router-link></li>
                    <li><router-link to="feedback">Feedback</router-link></li>
                </ul>
            </div>
        </header> 
    </div>
</template>

<script>
    export default {
        name: 'Header',

        data() {
            return{
                userProfile: require("@/assets/img/userPerfil.png"),
                showDropdown: false,
                loggedIn: false,
                menuOpen: false,
                screenWidth: window.innerWidth
            }
        },
        // MenuDropdown
        mounted() {
            window.addEventListener('resize', this.handleResize);
        },
        destroyed() {
            window.removeEventListener('resize', this.handleResize);
        },
        methods: {
            login() {
                // Lógica de autenticação
                this.loggedIn = true;
            },

            // MenuDropdown
            handleResize() {
                this.screenWidth = window.innerWidth;
            },
            toggleMenu() {
                this.menuOpen = !this.menuOpen;
            }
        }
    }
</script>

<style scoped>
    @import '@/Styles/Home/Header.sass';
</style>