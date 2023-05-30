<template>
    <div>
        <buttom class="conteneder-btn-file">  
            <label for="btn-file">Alvará Comercial</label>
            <input type="file" id="btn-file" required>
            <i class="fa-solid fa-file"></i> 
        </buttom>

        <buttom class="conteneder-btn-file">  
            <label for="btn-file">Alvará Comercial</label>
            <input type="file" id="btn-file" required>
            <i class="fa-solid fa-file"></i> 
        </buttom>

        <buttom class="conteneder-btn-file">  
            <label for="btn-file">Alvará Comercial</label>
            <input type="file" id="btn-file" required>
            <i class="fa-solid fa-file"></i> 
        </buttom>

        <buttom class="conteneder-btn-file">  
            <label for="btn-file">Alvará Comercial</label>
            <input type="file" id="btn-file" required>
            <i class="fa-solid fa-file"></i> 
        </buttom>
    </div>
</template>

<script>
    export default {
        name: 'FileEmpresa'
    }

</script>

<style scoped>
    .conteneder-btn-file input[type="file"]{
        appearance: none;
        display: flex;
        visibility: hidden;
        opacity: 0;
    }

    .conteneder-btn-file{
        display: flex;
        position: relative;
        background-color: #353840;
        color: #e4e4e4;
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: 0 0 12px rgba(0, 0, 0, .15);
        cursor: pointer;
        overflow: hidden;
        margin-bottom: 1rem;
    }

    .conteneder-btn-file:hover{
        background-color: transparent;
        border-bottom: 1px solid #e4e4e4;
    }

    .conteneder-btn-file label {
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
        cursor: pointer;
    }

    .conteneder-btn-file > i{
        margin-top: 4px;
    }
</style>