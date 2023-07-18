<template>
    <div>
        <div class="editarPerfil-container">
            <h4>Editar Perfil</h4>

            <div class="editar-perfil">
                <div class="img-profile">
                    <img :src="imgProfile">

                    <i class="ri-image-edit-line"></i>
                </div>

                <div class="editar-content">
                    <form action="#">
                        <div class="form1">
                            <div class="input-box">
                                <label for="#">Editar nome</label>
                                <input type="text" placeholder="Editar nome da empresa">
                            </div>

                            <div class="input-box">
                                <label for="#">Editar Endereço</label>
                                <input type="text" placeholder="Editar endereço da empresa">
                            </div>

                            <div class="input-box">
                                <label for="#">Editar Telefone</label>
                                <input type="text" placeholder="Editar telefone da empresa">
                            </div>

                            <div class="input-box">
                                <label for="#">Editar E-mail</label>
                                <input type="text" placeholder="Editar e-mail da empresa">
                            </div>
                        </div>

                        <div class="form2">
                            <div class="link-box">
                                <i class="ri-facebook-circle-line"></i>
                                <input type="text" placeholder="URL">
                            </div>
                            <div class="link-box">
                                <i class="ri-instagram-line"></i>
                                <input type="text" placeholder="URL">
                            </div>
                            <div class="link-box">
                                <i class="ri-whatsapp-line"></i>
                                <input type="text" placeholder="URL">
                            </div>
                            <div class="link-box">
                                <i class="ri-linkedin-box-fill"></i>
                                <input type="text" placeholder="URL">
                            </div>
                        </div>

                        <div class="textbox-box">
                            <label for="#">Editar Biográfia</label>
                            <textarea placeholder="Editar biográfia da empresa..."></textarea>
                        </div>

                        <div class="btn-editar">
                            <button>Editar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'EditarPerfil',

        data() {
            return {
                imgProfile: require("@/assets/img/userPerfil.png")
            }
        }
    }
</script>

<style scoped>
    @import '@/Styles/Admin/EditarPerfil/EditarPerfil.sass';
</style>