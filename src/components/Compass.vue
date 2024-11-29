<script></script>

<template>
    <div class="compass">
        <div class="needle"></div>
    </div>
</template>

<style>
    .compass {
        width: 300px;
        height: 300px;
        background: #f0f0f0;
        border-radius: 50%;
        position: relative;
        border: 5px solid #ccc;
    }

    .needle {
        width: 10px;
        height: 140px;
        background: red;
        position: absolute;
        top: 50%;
        left: 50%;
        transform-origin: 50% 100%;
        transform: translate(-50%, -100%) rotate(0deg);
    }
</style>