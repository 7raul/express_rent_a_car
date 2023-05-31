<template>
    <div>
        <div class="input-box">
            <span class="icon"><i class="bx bxs-lock-alt"></i></span>
            <input type="password" required>
            <label for="password">Senha</label>
        </div>

        <div class="input-box">
            <span class="icon"><i class="bx bxs-lock-alt"></i></span>
            <input type="password" required>
            <label for="password">Confirmar senha</label>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PassWord'
    }
</script>

<style scoped>
    @import '@/Styles/RegisterEmpresa/PassWord.sass'
</style>