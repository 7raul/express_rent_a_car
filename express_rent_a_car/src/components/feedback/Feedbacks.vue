<template>
    <div>
        <!--Feedbacks-->
        <div id="feedbacks">
            
            <!--Cabeçalho-->
            <div class="feedbacks-heading">
                <span>Feedbacks</span>
                <h1>Clientes dizem</h1>
            </div>

            <!--Feedbacks.box-container-->
            <div class="feedback-container">


                <!--Box-1-->
                <div class="feedback-box">

                    <!--Top-->
                    <div class="box-top">

                        <!--Profile-->
                        <div class="profile">
                            
                            <!--Img-->
                            <div class="profile-img">
                                <img :src="caminhoDaImagem" alt="Foto de perfil">
                            </div>

                            <!--Nome de usuario-->
                            <div class="name">
                                <strong>Edmilson EB</strong>
                                <span>@edmilsoneb7</span>
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

                    <!--Feedback-->
                    <div class="client-feedback">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil enim deserunt possimus. 
                            Eligendi inventore sit alias repellendus, dolores eveniet! Facilis natus voluptates 
                            quibusdam aspernatur! Possimus reiciendis quia quidem eveniet commodi?
                        </p>
                    </div>

                </div>

                <!--Box-2-->
                <div class="feedback-box">

                    <!--Top-->
                    <div class="box-top">

                        <!--Profile-->
                        <div class="profile">
                            
                            <!--Img-->
                            <div class="profile-img">
                                <img :src="caminhoDaImagem" alt="Foto de perfil">
                            </div>

                            <!--Nome de usuario-->
                            <div class="name">
                                <strong>Edmilson EB</strong>
                                <span>@edmilsoneb7</span>
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

                    <!--Feedback-->
                    <div class="client-feedback">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil enim deserunt possimus. 
                            Eligendi inventore sit alias repellendus, dolores eveniet! Facilis natus voluptates 
                            quibusdam aspernatur! Possimus reiciendis quia quidem eveniet commodi?
                        </p>
                    </div>

                </div>

                                <!--Box-1-->
                <div class="feedback-box">

                    <!--Top-->
                    <div class="box-top">

                        <!--Profile-->
                        <div class="profile">
                            
                            <!--Img-->
                            <div class="profile-img">
                                <img :src="caminhoDaImagem" alt="Foto de perfil">
                            </div>

                            <!--Nome de usuario-->
                            <div class="name">
                                <strong>Edmilson EB</strong>
                                <span>@edmilsoneb7</span>
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

                    <!--Feedback-->
                    <div class="client-feedback">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil enim deserunt possimus. 
                            Eligendi inventore sit alias repellendus, dolores eveniet! Facilis natus voluptates 
                            quibusdam aspernatur! Possimus reiciendis quia quidem eveniet commodi?
                        </p>
                    </div>

                </div>

                <!--Box-2-->
                <div class="feedback-box">

                    <!--Top-->
                    <div class="box-top">

                        <!--Profile-->
                        <div class="profile">
                            
                            <!--Img-->
                            <div class="profile-img">
                                <img :src="caminhoDaImagem" alt="Foto de perfil">
                            </div>

                            <!--Nome de usuario-->
                            <div class="name">
                                <strong>Edmilson EB</strong>
                                <span>@edmilsoneb7</span>
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

                    <!--Feedback-->
                    <div class="client-feedback">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil enim deserunt possimus. 
                            Eligendi inventore sit alias repellendus, dolores eveniet! Facilis natus voluptates 
                            quibusdam aspernatur! Possimus reiciendis quia quidem eveniet commodi?
                        </p>
                    </div>

                </div>

            </div>

            <ButtomVerMais />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Feedbacks',

        data() {
            return {
                caminhoDaImagem: require("@/assets/img/userPerfil.png")
            }
        }
    }
</script>

<style scoped>
    a{
        text-decoration: none;
    }
    
    /* Feedbacks */
    #feedbacks{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        margin-bottom: 4rem;
    }

        /* Cabeçalho */
    .feedbacks-heading{
        letter-spacing: 1px;
        margin: 3.1rem 0;
        padding: 10px 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .feedbacks-heading h1{
        font-size: 1.5rem;
        font-weight: 500;
        background-color: #232f33;
        color: #fff;
        padding: 10px 20px;
        text-transform: uppercase;
    }

    .feedbacks-heading span{
        font-size: 1rem;
        color: #222;
        margin-bottom: 10px;
        letter-spacing: 2px;
        text-transform: uppercase;
    }

    .feedback-container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        widows: 100%;
    }

    .feedback-box{
        width: 500px;
        box-shadow: 2px 2px 30px rgba(0,0,0,0.1);
        background-color: #fff;
        padding: 20px;
        margin: 15px;
        cursor: pointer;
    }

    .box-top{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }

    .profile-img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
        margin: 10px;
    }

    .profile-img img{
        width: 100px;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    .profile{
        display: flex;
        align-items: center;
    }
    .name{
        display: flex;
        flex-direction: column;
    }

    .name strong{
        color: #3d3d3d;
        font-size: 1.1rem;
        letter-spacing: 0.5px;
    }

    .name span{
        color: #979797;
        font-size: 0.8rem;
    }

    .reviews{
        color: #f9d71c;
    }

    .client-feedback{
        font-size: 0.9rem;
        color: #4b4b4b;
    }

    .feedback-box:hover{
        transform: translateY(-10px);
        transition: all ease 0.3s;
    }

    /* Responsividade */
    @media(max-width:1060px){
        .feedback-box{
            width: 45%;
            padding: 10px;
        }
    }

    @media(max-width: 790px){
        .feedback-box{
            width: 100%;
        }

        .feedbacks-heading h1{
            font-size: 1.4rem;
        }

    }

    @media(max-width: 340px){
        .box-top{
            flex-wrap: wrap;
        }

        .reviews{
            margin-top: 10px;
        }
    }

    ::selection{
        color: #fff;
        background-color: #252525;
    }
</style>