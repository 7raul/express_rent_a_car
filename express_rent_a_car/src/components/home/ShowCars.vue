<template>
    <div>
        <div class="showcar_container">
            <div class="car_cards">
                <div class="car_card">
                    <div class="car_img">
                        <img :src="carImg" :alt="alt">
                    </div>

                    <div class="detals_car">
                        <div class="car_name">
                            <h3>Fiat 500</h3>
                        </div>

                        <div class="car_reviews">
                            <div>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                            </div>
                            <p>4.4 <span>(10,482 reviews)</span></p>
                        </div>

                        <div class="car-price">
                            <div class="day">
                                <p>Por dia:</p>
                            </div>
                            <div class="price">
                                <p>27.000kz</p>
                            </div>
                        </div>

                        <div class="reserve">
                            <div class="provincia">
                                <p>Luanda</p>
                            </div>

                            <div class="reserve-btn">
                                <button>Reservar</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="view">
                <a href="/carros">Ver todos</a>
            </div>
        </div>
    </div>
</template>

<script>
import Api from '@/services/getBy'
export default {
    name: 'ShowCars',

    data() {
        return {
            carImg: require("@/assets/img/fiat.jpg"),
            Carro: []
        }
    },
    mounted() {
        Api.ListarCarro().then(res => {
            this.Carro = res.data
        }).catch(err, console.log(err))
    }
}
</script>
<style scoped>
@import '@/Styles/Home/ShowCars.sass';
</style>