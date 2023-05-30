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
    .header{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        padding: 25px 12.5%;
        background: transparent;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 100;
    }

    .navbar a{
        position: relative;
        font-size: 16px;
        color: #e4e4e4;
        text-decoration: none;
        font-weight: 500;
        margin-right: 30px;
    }

    .navbar a:hover{
        color: #9ABCFF;
    }

    .search-bar {
        width: 250px;
        height: 45px;
        background: transparent;
        border: 2px solid #e4e4e4;
        border-radius: 6px;
        display: flex;
        align-items: center;
    }

    .search-bar input{
        width: 100%;
        background: transparent;
        border: none;
        outline: none;
        font-size: 16px;
        color: #e4e4e4;
        padding-left: 10px;
    }

    .search-bar input::placeholder{
        color: #e4e4e4;
    }

    .search-bar button{
        width: 40px;
        height: 100%;
        background: transparent;
        border: none;
        outline: none;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .search-bar button i{
        font-size: 22px;
        color: #fff;
    }

</style>