<template>
    <div >
        <div id="footer-container">
            <router-link to="#" class="logo">
                <i class="ri-roadster-fill"></i><span>Express Rent a Car</span>
            </router-link>

            <div class="footer-social-icon">
                <a href="#"><i class="bx bxl-linkedin"></i></a>
                <a href="#"><i class="bx bxl-facebook"></i></a>
                <a href="#"><i class="bx bxl-instagram"></i></a>
                <a href="#"><i class="bx bxl-whatsapp"></i></a>
            </div>

            <footer>
                <p>Copyright &copy;2023 Express Rent A Car</p>
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