<template>
    <div>
        <div class="container-admin">
            <Aside />
            <Main />
        </div>
    </div>
</template>

<script>
    import Aside from '@/components/AdminDashboard/ComponentsDashboard/Aside.vue'
    import Main from '@/components/AdminDashboard/ComponentsDashboard/Main.vue'
    export default {
        name: 'Dashboard',
        components: {
            Aside,
            Main
        }
    }
</script>

<style scoped>
    @import '@/Styles/AdminDashboard/AdminDashboard.sass';
</style>