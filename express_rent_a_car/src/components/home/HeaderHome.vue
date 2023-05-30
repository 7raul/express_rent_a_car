<template>
    <div class="container">
        <div class="select-container">
            <div class="select">
                <label for="provincia">Selecione a provincia</label>
                <select name="provincia" id="provincia">
                    <option value="">Luanda</option>
                    <option value="">Benguela</option>
                    <option value="">Malange</option>
                </select>
            </div>

            <div class="disponiveis">
                <p>Carros disponiveis: </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HeaderHome'
    }

</script>

<style scoped>
    .select-container{
        margin-left: 8rem;
        margin-bottom: 2rem;
    }

    .select{
        display: flex;
        flex-direction: column;
    }

    .select label{
        font-size: 18px;
        margin-bottom: .5rem;
    }

    .select select{
        width: 200px;
        padding: 10px;
        border-radius: 20px;
        border: none;
        font-size: 16px;
        margin-bottom: 2rem;
        box-shadow: 2px 2px 30px rgba(0,0,0,0.1);

    }

    .select select:focus-visible{
        outline: 1px solid #232f33;
    }
    
</style>