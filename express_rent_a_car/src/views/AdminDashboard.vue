<template>
    <div>
        <Dashboard />
    </div>
</template>

<script>
    import Dashboard from '@/components/AdminDashboard/Dashboard.vue'
    export default {
        components: {
            Dashboard
        }
    }
</script>

<style scoped>
    @import '@/Styles/AdminDashboard/AdminDashboard.sass';
</style>