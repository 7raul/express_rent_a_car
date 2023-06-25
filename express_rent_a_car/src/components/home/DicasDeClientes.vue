<template>
    <div>
        <div class="DicasDeclientes-_container">
            <h3>Clientes falam</h3>

            <div class="dicas">

                <div class="dica">
                    <div class="dica_top">
                        <div class="cliente_profile">
                            <!--Img-->
                            <div class="profile-img">
                                <img :src="caminhoDaImagem" alt="Foto de perfil">
                            </div>

                            <!--Nome de usuario-->
                            <div class="name">
                                <strong>Edmilson EB</strong>
                            </div>
                        </div>

                        <!--Reviews-->
                        <div class="reviews">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                    </div>

                    <div class="dica_down">
                        <div class="dica-cliente">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil enim deserunt possimus. 
                                Eligendi inventore sit alias repellendus, dolores eveniet! Facilis natus voluptates 
                                quibusdam aspernatur! Possimus reiciendis quia quidem eveniet commodi?
                            </p>
                        </div>
                    </div>
                </div>

                
                <div class="dica">
                    <div class="dica_top">
                        <div class="cliente_profile">
                            <!--Img-->
                            <div class="profile-img">
                                <img :src="caminhoDaImagem" alt="Foto de perfil">
                            </div>

                            <!--Nome de usuario-->
                            <div class="name">
                                <strong>Edmilson EB</strong>
                            </div>
                        </div>

                        <!--Reviews-->
                        <div class="reviews">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                    </div>

                    <div class="dica_down">
                        <div class="dica-cliente">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil enim deserunt possimus. 
                                Eligendi inventore sit alias repellendus, dolores eveniet! Facilis natus voluptates 
                                quibusdam aspernatur! Possimus reiciendis quia quidem eveniet commodi?
                            </p>
                        </div>
                    </div>
                </div>

                
                <div class="dica">
                    <div class="dica_top">
                        <div class="cliente_profile">
                            <!--Img-->
                            <div class="profile-img">
                                <img :src="caminhoDaImagem" alt="Foto de perfil">
                            </div>

                            <!--Nome de usuario-->
                            <div class="name">
                                <strong>Edmilson EB</strong>
                            </div>
                        </div>

                        <!--Reviews-->
                        <div class="reviews">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                    </div>

                    <div class="dica_down">
                        <div class="dica-cliente">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil enim deserunt possimus. 
                                Eligendi inventore sit alias repellendus, dolores eveniet! Facilis natus voluptates 
                                quibusdam aspernatur! Possimus reiciendis quia quidem eveniet commodi?
                            </p>
                        </div>
                    </div>
                </div>

                
                <div class="dica">
                    <div class="dica_top">
                        <div class="cliente_profile">
                            <!--Img-->
                            <div class="profile-img">
                                <img :src="caminhoDaImagem" alt="Foto de perfil">
                            </div>

                            <!--Nome de usuario-->
                            <div class="name">
                                <strong>Edmilson EB</strong>
                            </div>
                        </div>

                        <!--Reviews-->
                        <div class="reviews">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                    </div>

                    <div class="dica_down">
                        <div class="dica-cliente">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil enim deserunt possimus. 
                                Eligendi inventore sit alias repellendus, dolores eveniet! Facilis natus voluptates 
                                quibusdam aspernatur! Possimus reiciendis quia quidem eveniet commodi?
                            </p>
                        </div>
                    </div>
                </div>

                
                <div class="dica">
                    <div class="dica_top">
                        <div class="cliente_profile">
                            <!--Img-->
                            <div class="profile-img">
                                <img :src="caminhoDaImagem" alt="Foto de perfil">
                            </div>

                            <!--Nome de usuario-->
                            <div class="name">
                                <strong>Edmilson EB</strong>
                            </div>
                        </div>

                        <!--Reviews-->
                        <div class="reviews">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                    </div>

                    <div class="dica_down">
                        <div class="dica-cliente">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil enim deserunt possimus. 
                                Eligendi inventore sit alias repellendus, dolores eveniet! Facilis natus voluptates 
                                quibusdam aspernatur! Possimus reiciendis quia quidem eveniet commodi?
                            </p>
                        </div>
                    </div>
                </div>
            </div> 

            <div class="left_right">
                <a class="left"><i class="fa-solid fa-arrow-left"></i></a>
                <a class="right"><i class="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DicasDeClientes',
        data() {
            return {
                caminhoDaImagem: require("@/assets/img/userPerfil.png")
            }
        }
    }
</script>

<style scoped>
    @import '@/Styles/Home/DicasDeClientes.sass';
</style>