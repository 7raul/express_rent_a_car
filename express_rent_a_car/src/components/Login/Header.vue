<template>
    <div>
        <header class="header">
            <nav class="navbar">
                <router-link to="/">Inicio</router-link>
                <a href="#">Sobre</a>
                <a href="#">Reclamação</a>
                <a href="#">Feedback</a>
            </nav>

            <form action="#" class="search-bar">
                <input type="text" placeholder="Pesquisar...">
                <button type="submit"><i class='bx bx-search'></i></button>
        </form>
    </header>
    </div>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style scoped>
    @import '@/Styles/Login/Header.sass';
</style>