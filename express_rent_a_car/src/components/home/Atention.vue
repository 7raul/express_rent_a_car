<template>
    <div>
        <div class="atention-container">
            <div class="links">
                <div class="link-1">
                    <div class="element-1">
                        <p>Faça sua reserva qualquer hora em qualquer lugar</p>
                        <router-link to="#">>Reservar</router-link>
                    </div>
                </div>

                <div class="links-1-2">
                    <div class="link-2">
                        <div class="element-2">
                            <p>Conheça as empresas ligadas a <span>Express Rent a Car</span></p>
                            <router-link to="#">>Conhecer</router-link>
                        </div>
                    </div>

                    <div class="link-3">
                        <div class="element-3">
                            <p>Saiba mais sobre a Express Rent a Car</p>
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
        name: 'Atention'
    }
</script>

<style scoped>
    @import '@/Styles/Home/Atention.sass';
</style>