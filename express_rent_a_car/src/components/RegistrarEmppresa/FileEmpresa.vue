<template>
    <div>
        <label for="file-register" class="file-label">Registro da empresa</label>
        <input type="file" id="file-register" required>


        <label for="file-register" class="file-label">Licença de actividade</label>
        <input type="file" id="file-register" required>

        <label for="file-register" class="file-label">Alvará comercial</label>
        <input type="file" id="file-register" required>
    </div>
</template>

<script>
    export default {
        name: 'FileEmpresa'
    }

</script>

<style scoped>
    @import '@/Styles/RegisterEmpresa/FileEmpresa.sass';
</style>