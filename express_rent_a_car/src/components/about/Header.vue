<template>
    <div>
        <div class="container">
            <header>    
                <router-link to="#" class="logo">
                    <i class="ri-roadster-fill"></i><span>Express Rent a Car</span>
                </router-link>

                <ul class="navbar">
                    <li><router-link to="/" class="active">Inicio</router-link></li>
                    <li><router-link to="/about">Sobre</router-link></li>
                    <li><router-link to="/reclamacao">Reclamação</router-link></li>
                    <li><router-link to="feedback">Feedback</router-link></li>
                </ul>

                <div class="main">
                    <router-link to="#" class="user"><i class="ri-user-fill"></i>Entrar</router-link>
                    <router-link to="#">Registrar</router-link>

                    <div class="bx bx-menu" id="menu-icon"></div>
                </div>
            </header>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Header'
    }

</script>

<style scoped>
    .container{
        width: 100%;
        background-color: #232f33;
    }

    header{
        position: relative;
        top: 0;
        right: 0;
        z-index: 1000;
        display: flex;
        justify-content: space-between;
        padding: 28px 12%;
        box-sizing: border-box;
        transition: all .50s ease;
    }

    .logo{
        display: flex;
    }

    .logo i{
        color: var(--main-color);
        font-size: 30px;
        margin-right: 3px;
        text-shadow: black 4px 2px 4px;
    }

    .logo span{
        color: var(--text-color);
        font-size: 1.3rem;
        font-weight: 600;
        text-shadow: black 4px 2px 4px;
    }

    .navbar{
        display: flex;
    }

    .navbar a{
        color: var(--text-color);
        font-size: 1.2rem;
        font-weight: 500;
        text-shadow: black 4px 2px 4px;
        padding: 5px 0;
        margin: 0px 30px;
        transition: all .50s ease;
    }

    .navbar a:hover{
        color: var(--main-color);
    }

    .navbar a.active{
        color: var(--main-color);
    }

    .main{
        display: flex;
    }

    .main a{
        margin-right: 25px;
        margin-left: 10px;
        color: var(--text-color);
        font-size: 1.2rem;
        font-weight: 500;
        text-shadow: black 4px 2px 4px;
        transition: all .50s ease;
    }

    .user{
        display: flex;
    }

    .user i{
        color: var(--main-color);
        font-size: 30px;
        margin-right: 7px;
    }

    .main a:hover{
        color: var(--main-color);
    }

    #menu-icon{
        font-size: 37px;
        color: var(--text-color);
        cursor: poiter;
        display: flex;
    }

    #main-banner{
        margin-top: 15rem;
    }
</style>