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
    .input-box{
        position: relative;
        width: 340px;
        height: 50px;
        border-bottom: 2px solid #e4e4e4;
        margin: 30px 0;
    }

    .input-box input{
        width: 100%;
        height: 100%;
        background: transparent;
        border: none;
        outline: none;
        padding-right: 28px;
        color: #e4e4e4;
    }

    .input-box label{
        position: absolute;
        top: 50%;
        left: 0;
        transform:translateY(-50%);
        font-size: 16px;
        font-weight: 500;
        pointer-events: none;
        transition: .5s ease;
    }

    .input-box .icon{
        position: absolute;
        right: 0;
        top: 13px;
        font-size: 19px;
    }

    .input-box input:focus~label,
    .input-box input:valid~label{
        top: -5px;
    }
</style>