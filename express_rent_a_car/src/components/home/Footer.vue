<template>
    <div >
        <div id="footer-container">
            <router-link to="#" class="logo">
                <i class="ri-roadster-fill"></i><span>Express Rent a Car</span>
            </router-link>

            <ul class="footer-links" v-show="!isMobile">
                <li><router-link to="/">Inicio</router-link></li>
                <li><router-link to="#">Carros</router-link></li>
                <li><router-link to="/about">Sobre</router-link></li>
                <li><router-link to="/reclamacao">Reclamação</router-link></li>
                <li><router-link to="feedback">Feedback</router-link></li>
            </ul>

            <div class="privacidade-termos">
                <li><router-link to="/">Privacidade</router-link></li>
                <span>|</span>
                <li class="another"><router-link to="#">Termos</router-link></li>
            </div>

            <div class="footer-social-icon">
                <a href="#"><i class="bx bxl-linkedin"></i></a>
                <a href="#"><i class="bx bxl-facebook"></i></a>
                <a href="#"><i class="bx bxl-instagram"></i></a>
                <a href="#"><i class="bx bxl-whatsapp"></i></a>
            </div>

            <footer>
                <p>Express Rent A Car &copy;2023</p>
            </footer>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'Footer'
    }

</script>

<style scoped>
    @import '@/Styles/Home/Footer.sass';
</style>