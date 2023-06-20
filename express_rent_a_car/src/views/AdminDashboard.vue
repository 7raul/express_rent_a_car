<template>
    <div>
        <div class="wrapper">
            <Navbar />
            <MainMainDashboard />
        </div>
    </div>
</template>

<script>
    import Navbar from '../components/AdminDashboard/NavbarDashboard/Navbar.vue'
    export default {
        name: 'AdminDashboard',

        components: {
            Navbar
        }
    }
</script>

<style scoped>
    @import '../Styles/AdminDashboard/AdminDashboard.sass';
</style>