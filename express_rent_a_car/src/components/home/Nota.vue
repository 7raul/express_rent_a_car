<template>
    <div>
        <div class="nota-container">
            <div class="links">
                <div class="link-1">
                    <div class="element">
                        <p>Faça sua reserva a qualquer hora, em qualquer lugar</p>
                        <router-link to="#">>Reservar</router-link>
                    </div>
                </div>

                <div class="links-1-2">
                    <div class="link-2">
                        <div class="element-2">
                            <p>Conheça as empresas ligadas a <span>Express rent a car</span></p>
                            <router-link to="#">>Conhecer</router-link>
                        </div>
                    </div>

                    <div class="link-3">
                        <div class="element-3">
                            <p>Saiba mais sobre a <span>Express rent a car</span></p>
                            <router-link to="#">>Saber</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Nota',

    }
</script>

<style scoped>
    .nota-container{
        width: 100%;
        margin-bottom: 7rem;
        box-sizing: border-box;
    }

    .nota-container .links{
        height: 600px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;   
    }

    .link-1{
        position: relative;
        width: 700px;
        height: 100%;
        background-image: url("@/assets/img/link-1.jpg");
        background-size: cover;
        background-position: center;
    }

    .element{
        position: absolute;
        bottom: 0;
        padding: 3rem;
    }

    .element,
    .element-2,
    .element-3{
        color: #fff;
    }

    .element p{
        font-size: 30px;
        margin-bottom: 1rem;
        text-shadow: black 3px 2px 3px
    }

    .element a{
        font-size: 25px;
        text-shadow: black 3px 2px 3px
    }

    .link-2{
        position: relative;
        width: 700px;
        height: 50%;
        background-image: url("@/assets/img/link-2.jpg");
        background-size: cover;
        background-position: center;   
    }

    .element-2,
    .element-3{
        position: absolute;
        bottom: 0;
        padding: 3rem;
    }

    .element-2 p,
    .element-3 p{
        font-size: 25px;
        text-shadow: black 4px 2px 4px
    }

    .element-2 a,
    .element-3 a{
        font-size: 25px;
        font-weight: bold;
        text-shadow: black 4px 2px 4px
    }

    .element a:hover,
    .element-2 a:hover,
    .element-3 a:hover{
        text-decoration: underline;
    }

    .link-3{
        position: relative;
        width: 700px;
        height: 50%;
        background-image: url("@/assets/img/link-3.jpg");
        background-size: cover;
        background-position: center;   
    }

</style>