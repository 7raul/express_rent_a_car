<template>
    <div>
        <Header />
        <Body />
        <Footer />
    </div>
</template>

<script>
    import Header from '../components/about/Header.vue'
    import Footer from '../components/home/Footer.vue'
    import Body from '../components/DetalhesCarro/body.vue'
    export default {
        name: 'DetalhesCarro',

        components: {
            Header,
            Body,
            Footer
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
        background-color: #ecf7fa;
        color: #232f33;
        box-sizing: border-box;
    }
</style>