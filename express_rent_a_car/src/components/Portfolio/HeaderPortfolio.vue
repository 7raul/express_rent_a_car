<template>
    <div class="container-header-port">
        <div class="navbar-portfolio">
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
    </div>
</template>

<script>
    export default {
        name: 'HeaderPortfolio',
    }
</script>

<style scoped>

</style>