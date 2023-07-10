<template>
    <div>
        <Header />
        <reservas />
        <Footer />
    </div>
</template>

<script>
    import Header from '@/components/home/Header.vue'
    import reservas from '@/components/GerenciarReservas/reservas.vue'
    import Footer from '@/components/home/Footer.vue'
    export default {
        name: 'GerenciarReservas',

        components: {
            Header,
            reservas,
            Footer
        }
    }
</script>