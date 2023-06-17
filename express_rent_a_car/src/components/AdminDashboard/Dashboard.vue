<template>
    <div>
        <div class="container-admin">
            <Aside />
            <Main />
            <Right />
        </div>
    </div>
</template>

<script>
    import Aside from '@/components/AdminDashboard/ComponentsDashboard/Aside.vue'
    import Main from '@/components/AdminDashboard/ComponentsDashboard/Main.vue'
    import Right from '@/components/AdminDashboard/ComponentsDashboard/Right.vue'
    export default {
        name: 'Dashboard',
        components: {
            Aside,
            Main,
            Right
        }
    }
</script>

<style scoped>
    @import '@/Styles/AdminDashboard/AdminDashboard.sass';
</style>