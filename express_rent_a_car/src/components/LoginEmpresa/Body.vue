<template>
    <div>
        <div class="loginEmpresa-conteiner">
            <div class="loginEmpresa-content">
                <div class="navbar-logo">
                    <router-link to="/">
                        <i class="ri-roadster-fill"></i><span>Express<span class="color">RentaCar</span></span>
                    </router-link>
                </div>

                <div class="text-sci">
                    <h2>Bem-vindo! <br><span>Ao seu novo website</span></h2>
                </div>

                <div class="text-sci">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eveniet unde odio perspiciatis? Velit, itaque nam
                        repudiandae, maxime a quibusdam ipsa quo nobis reprehenderit iusto nihil! Vero eos voluptatum molestiae.
                    </p>

                    <div class="social-icon">
                        <a href="#"><i class="bx bxl-linkedin"></i></a>
                        <a href="#"><i class="bx bxl-facebook"></i></a>
                        <a href="#"><i class="bx bxl-instagram"></i></a>
                        <a href="#"><i class="bx bxl-whatsapp"></i></a>
                    </div>
                </div>
            </div>

            <div class="logreg-boxEmpresa">
                <div class="form-box login">
                    <form action="#">
                        <h2>Entrar</h2>

                        <div class="inputs">
                            <input type="email" id="email" placeholder="E-mail" required>

                            <input type="password" id="passoword" placeholder="Password" required>
                        </div>

                        <div class="remember-forgot">
                            <label for="">
                                <input type="checkbox"> Lembre-me
                            </label>
                            <a href="#">Esqueceu a senha?</a>
                        </div>

                        <button type="submit" class="btn">Entrar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Body'
    }
</script>

<style scoped>
    @import '@/Styles/LoginEmpresa/Body.sass';
</style>