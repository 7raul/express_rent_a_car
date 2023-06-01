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
    @import '@/Styles/Home/Nota.sass'
</style>