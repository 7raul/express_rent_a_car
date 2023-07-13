<template>
    <div>
        <div class="addVeiculos-container">
            <h4>Adicionar Veiculo</h4>

            <div class="formAdd-container">
                <div class="form-body">
                    <form action="#">
                        <div class="top-form">
                            <div class="box-input">
                                <label for="title">Marca <span class="required-field">*</span></label>
                                <input 
                                type="text" 
                                name="title" 
                                id="title" 
                                placeholder="Digite a marca do veiculo"
                                required>
                            </div>

                            <div class="box-input">
                                <label for="model">Modelo <span class="required-field">*</span></label>
                                <input 
                                type="text" 
                                name="model" 
                                id="model" 
                                placeholder="Digite o modelo do veiculo"
                                required>
                            </div>

                            <div class="box-input">
                                <label for="price">Preço <span class="required-field">*</span></label>
                                <input 
                                type="number" 
                                name="price" 
                                id="price" 
                                placeholder="Defina o preço"
                                required>
                            </div>

                            <div class="box-input">
                                <label for="mileage">Kilometragem <span class="required-field">*</span></label>
                                <input 
                                type="text" 
                                name="mileage" 
                                id="mileage" 
                                placeholder="Digite a kilometragem do veiculo"
                                required>
                            </div>
                        </div>

                        <div class="radio-container">
                            <div class="box-input">
                                <p>Tipo de câmbio <span class="required-field">*</span></p>
                                
                                <div class="radio-item">
                                    <div class="radio">
                                        <input type="radio" id="manual" name="gear">
                                        <label for="manual">Manual</label>
                                    </div>
                                    <div class="radio">
                                        <input type="radio" id="manual" name="gear">
                                        <label for="manual">Manual</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="optional-box">
                            <p>Opcionais <span class="required-field">*</span></p>
                            <ul class="optional-list">
                                <div class="check-container">
                                    <li>
                                        <input 
                                        type="checkbox"
                                        id="airbag"
                                        name="optional[]"   
                                        value="airbag">

                                        <label for="airbag">Airbag</label>
                                    </li>
                                    <li>
                                        <input 
                                        type="checkbox"
                                        id="alarm"
                                        name="optional[]"   
                                        value="alarm">
                                        <label for="alarm">Vidros electricos</label>
                                    </li>
                                </div>

                                <div class="check-container">
                                    <li>
                                        <input 
                                        type="checkbox"
                                        id="ac"
                                        name="optional[]"   
                                        value="ac">

                                        <label for="ac">Ar condicionado</label>
                                    </li>
                                    <li>
                                        <input 
                                        type="checkbox"
                                        id="reverse_camera"
                                        name="optional[]"   
                                        value="reverse_camera">
                                        <label for="reverse_camera">Camera Reversa</label>
                                    </li>
                                </div>
                                
                                <div class="check-container">
                                    <li>
                                        <input 
                                        type="checkbox"
                                        id="reverse_camera"
                                        name="optional[]"   
                                        value="reverse_camera">
                                        <label for="reverse_camera">USB</label>
                                    </li>
                                    
                                    <li>
                                        <input 
                                        type="checkbox"
                                        id="reverse_camera"
                                        name="optional[]"   
                                        value="reverse_camera">
                                        <label for="reverse_camera">Radio</label>
                                    </li>
                                </div>
                                
                                <div class="check-container">
                                    <li>
                                        <input 
                                        type="checkbox"
                                        id="smartphone"
                                        name="optional[]"   
                                        value="smartphone">
                                        <label for="smartphone">Integração com celular</label>
                                    </li>

                                    <li>
                                        <input 
                                        type="checkbox"
                                        id="leather_seat"
                                        name="optional[]"   
                                        value="leather_seat">
                                        <label for="leather_seat">Banco de couro</label>
                                    </li>
                                </div>
                                
                            </ul>
                        </div>

                        <div class="addveiculo">
                            <div class="insert-veiculo">
                                <p>Imagens do carro <span class="required-field">*</span></p>
                                <div class="add-veiculo">
                                    <input 
                                    type="file"
                                    multiple
                                    accept="image/png image/jpg"
                                    id="images"
                                    name="images"
                                    required>
                                </div>
                            </div>

                            <button class="btn-cadastrar">Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AddVeiculo'
    }
</script>

<style scoped>
    @import '@/Styles/Admin/Frota/AddVeiculo.sass';
</style>