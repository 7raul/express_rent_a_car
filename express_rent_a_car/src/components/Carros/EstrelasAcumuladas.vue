<template>
    <div class="reviews">
        <div>
            <i class="fas fa-star" v-for="index in 5" :key="index" :class="{ 'fa-star': index <= filledStars, 'fa-star-o': index > filledStars }"></i>
        </div>
        <p>{{ averageStars }} <span>({{ totalReviews }} reviews)</span></p>
    </div>
</template>
  
<script>
    export default {
        name: 'EstrelasAcumuladas',
        props: {
            averageStars: {
                type: Number,
                required: true,
            },
            totalReviews: {
                type: Number,
                required: true,
            },
            filledStars: {
                type: Number,
                required: true,
            },
        },
    };
  </script>
  
  <style>
  /* Adicione estilos conforme necessário */
  </style>