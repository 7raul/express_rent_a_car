<template>
    <div>
        <router-view/>
    </div>
</template>

<script>

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Martel+Sans:wght@700&family=Poppins:wght@300;400;500;600;700&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Martel sans', sans-serif;
    }

    :root{
        --bg-color: #222327;
        --text-color: #fff;
        --main-color: #9ABCFF;
    }

    body{
        position: relative;
        min-height: 100vh;
        background: var(--bg-color);
        color: var(--text-color);
    }

    a{
        text-decoration: none;
    }

    li{
        list-style: none;
    }
</style>
