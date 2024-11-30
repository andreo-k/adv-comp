<script setup>
    import { US } from 'country-flag-icons/string/3x2'
    import { TZ } from 'country-flag-icons/string/3x2'





</script>

<template>
    <div class="wrapper">
        <div class="compass">
            <div class="compass-circles">
                <div class="compass-circles__item"></div>
                <div class="compass-circles__item"></div>
                <div class="compass-circles__item"></div>
                <div class="compass-circles__item">
                </div>
            </div>
            <div class="compass-indicators">
                <div class="compass-indicators__item"></div>
                <div class="compass-indicators__item"></div>
                <div class="compass-indicators__item"></div>
                <div class="compass-indicators__item"></div>
                <div class="compass-indicators__item"></div>
                <div class="compass-indicators__item"></div>
                <div class="compass-indicators__item"></div>
                <div class="compass-indicators__item"></div>
            </div>
            <div class="compass-flags">
                <div class="compass-flags__item">
                    <div v-html="US"></div>
                </div>
                <div class="compass-flags__item">
                    <div v-html="TZ"></div>
                </div>
                <div class="compass-flags__item">
                    <span class="text-[0.05em] absolute bottom-0 left-[0.8em]">?</span>
                </div>
                <div class="compass-flags__item">
                    <span class="text-[0.05em] absolute bottom-0 left-[0.8em]">?</span>
                </div>
                <div class="compass-flags__item">
                    <span class="text-[0.05em] absolute bottom-0 left-[0.8em]">?</span>
                </div>
                <div class="compass-flags__item"></div>
                <div class="compass-flags__item"></div>
                <div class="compass-flags__item"></div>
                <div class="compass-flags__item"></div>
                <div class="compass-flags__item"></div>
                <div class="compass-flags__item"></div>
                <div class="compass-flags__item"></div>
                <div class="compass-flags__item">
                    <span class="text-[0.05em] absolute bottom-0 left-[0.8em]">?</span>
                </div>
                <div class="compass-flags__item"></div>
                <div class="compass-flags__item"></div>
                <div class="compass-flags__item"></div>
                <div class="compass-flags__item"></div>
                <div class="compass-flags__item "></div>
                <div class="compass-flags__item"></div>
                <div class="compass-flags__item"></div>
                <div class="compass-flags__item"></div>
                <div class="compass-flags__item"></div>
                <div class="compass-flags__item"></div>
                <div class="compass-flags__item"></div>
            </div>
            <div class="arrow_wrapper">
                <div class="compass_arrow"></div>
            </div>
        </div>
    </div>

</template>

<style>
    .wrapper {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #f3fbff;
    }

    .compass {
        width: 1em;
        height: 1em;
        font-size: 300px;
        border-radius: 50%;
        position: relative;
    }

    @media (min-width: 601px) and (min-height: 601px) {
        .compass {
            font-size: 500px;
        }
    }

    @media (min-width: 1024px) and (min-height: 1024px) {
        .compass {
            font-size: 700px;
        }
    }

    .compass-circles {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        position: relative;
    }
    .compass-circles__item {
        border-radius: 50%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 1em;
        height: 1em;
    }
    .compass-circles__item:nth-child(1) {
        background-image: linear-gradient(to bottom, #00c0ff, #ffcf00, #fc4f4f, #0e22c3);
        box-shadow: 0px 30px 40px 0px rgba(72, 30, 202, 0.2);
        font-size: 100%;
    }
    .compass-circles__item:nth-child(2) {
        background-image: linear-gradient(to bottom, #027fff, #491bc9);
        font-size: 95%;
        box-shadow: 0px 10px 20px 0px rgba(42, 17, 121, 0.5);
    }
    .compass-circles__item:nth-child(3) {
        font-size: 60%;
        box-shadow: inset 0px 20px 40px rgba(0, 0, 0, 0.1), inset 0px 0px 40px rgba(37, 13, 105, 0.55), 0px 5px 0px #5430ff, 0px -1px 0px 3px rgba(14, 29, 169, 0.35);
    }
    .compass-circles__item:nth-child(4) {
        background: #3349c9;
        font-size: 35px;
        box-shadow: inset 0px 0px 10px 0px rgba(0, 0, 0, 0.2), inset 0px 0px 20px 1px rgba(54, 21, 148, 0.3);
    }

    .compass-flags {
        position: absolute;
        width: 80%;
        height: 80%;
        left: 50%;
        top: 50%;

        transform: translate(-50%, -50%);
        border-radius: 50%;
        /*border: solid 1px yellow;*/
    }

    .compass-flags__item {
        position: absolute;

        left: calc(50% - 0.05em) ;
        top: -10px;
        width: 0.1em;
        height: 0.066em;

        -webkit-transform-origin: center;
        transform-origin: center 0.43em;

        z-index: 2;
        background: green;
    }

    .compass-flags__item:nth-of-type(2) {
        transform: rotateZ(calc(15deg * 1));
    }
    .compass-flags__item:nth-of-type(3) {
        transform: rotateZ(calc(15deg * 2));
    }
    .compass-flags__item:nth-of-type(4) {
        transform: rotateZ(calc(15deg * 3));
    }
    .compass-flags__item:nth-of-type(5) {
        transform: rotateZ(calc(15deg * 4));
    }
    .compass-flags__item:nth-of-type(6) {
        transform: rotateZ(calc(15deg * 5));
    }
    .compass-flags__item:nth-of-type(7) {
        transform: rotateZ(calc(15deg * 6));
    }
    .compass-flags__item:nth-of-type(8) {
        transform: rotateZ(calc(15deg * 7));
    }
    .compass-flags__item:nth-of-type(9) {
        transform: rotateZ(calc(15deg * 8));
    }
    .compass-flags__item:nth-of-type(10) {
        transform: rotateZ(calc(15deg * 9));
    }
    .compass-flags__item:nth-of-type(11) {
        transform: rotateZ(calc(15deg * 10));
    }
    .compass-flags__item:nth-of-type(12) {
        transform: rotateZ(calc(15deg * 11));
    }
    .compass-flags__item:nth-of-type(13) {
        transform: rotateZ(calc(15deg * 12));
    }
    .compass-flags__item:nth-of-type(14) {
        transform: rotateZ(calc(15deg * 13));
    }
    .compass-flags__item:nth-of-type(15) {
        transform: rotateZ(calc(15deg * 14));
    }
    .compass-flags__item:nth-of-type(16) {
        transform: rotateZ(calc(15deg * 15));
    }
    .compass-flags__item:nth-of-type(17) {
        transform: rotateZ(calc(15deg * 16));
    }
    .compass-flags__item:nth-of-type(18) {
        transform: rotateZ(calc(15deg * 17));
    }
    .compass-flags__item:nth-of-type(19) {
        transform: rotateZ(calc(15deg * 18));
    }
    .compass-flags__item:nth-of-type(20) {
        transform: rotateZ(calc(15deg * 19));
    }
    .compass-flags__item:nth-of-type(21) {
        transform: rotateZ(calc(15deg * 20));
    }
    .compass-flags__item:nth-of-type(22) {
        transform: rotateZ(calc(15deg * 21));
    }
    .compass-flags__item:nth-of-type(23) {
        transform: rotateZ(calc(15deg * 22));
    }
    .compass-flags__item:nth-of-type(24) {
        transform: rotateZ(calc(15deg * 23));
    }

    .compass-indicators {
        position: absolute;
        width: 60%;
        height: 60%;
        left: 50%;
        top: 50%;
        /*transform: translate(-50%, -50%) rotate(-45deg);*/
        transform: translate(-50%, -50%);
        border-radius: 50%;
        /*border: solid 1px yellow;*/
    }
    .compass-indicators__item {
        position: absolute;

        left: calc(50% - 1px) ;
        top: 2%;
        width: 2px;
        height: 96%;

        -webkit-transform-origin: center center;
        transform-origin: center center;

        z-index: 2;
        border-radius: 1px;
        background: none;
    }
    .compass-indicators__item:after {
        content: "";
        position: absolute;
        width: 2px;
        height: 7px;
        background: white;
        left: 0;
        top: 0;
        border-radius: 10px;
    }
    .compass-indicators__item:nth-child(1), .compass-indicators__item:nth-child(3), .compass-indicators__item:nth-child(5), .compass-indicators__item:nth-child(7) {
        width: 8px;
        left: calc(50% - 4px) ;
    }
    .compass-indicators__item:nth-child(1):after, .compass-indicators__item:nth-child(3):after, .compass-indicators__item:nth-child(5):after, .compass-indicators__item:nth-child(7):after {
        height: 10px;
        width: 6px;
    }
    .compass-indicators__item:nth-of-type(2) {
        transform: rotateZ(calc(45deg * 1));
    }
    .compass-indicators__item:nth-of-type(3) {
        transform: rotateZ(calc(45deg * 2));
    }
    .compass-indicators__item:nth-of-type(4) {
        transform: rotateZ(calc(45deg * 3));
    }
    .compass-indicators__item:nth-of-type(5) {
        transform: rotateZ(calc(45deg * 4));
    }
    .compass-indicators__item:nth-of-type(6) {
        transform: rotateZ(calc(45deg * 5));
    }
    .compass-indicators__item:nth-of-type(7) {
        transform: rotateZ(calc(45deg * 6));
    }
    .compass-indicators__item:nth-of-type(8) {
        transform: rotateZ(calc(45deg * 7));
    }

    .arrow_wrapper {
        position: absolute;
        width: 70%;
        height: 70%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        /*border: solid 1px yellow;*/
    }
    .compass_arrow {
        position: absolute;

        width: 0.06em;
        height: 0.3em;

        left: calc(50% - 0.03em);
        top: calc(50% - 0.25em);
        /*90 = 110 - 20*/

        clip-path: polygon(50% 0%, 100% 100%, 50% 90%, 0% 100%);

        /*transform-origin: bottom center;*/
        transform-origin: 0.03em 0.25em;

        z-index: 2;
        background-image: linear-gradient(to top, #e45753 0%, #ca09e8 100%);

        /*animation: time 2s linear infinite;*/

    }

    @keyframes time {
        to {
            transform: rotateZ(360deg);
        }
    }

</style>