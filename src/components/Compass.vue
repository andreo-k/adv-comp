<script setup>
    import {ref, onMounted, onBeforeUnmount} from 'vue'
    import moment from "moment";
    import _ from 'lodash';

    import {DE, NL, RU, US, CA, KZ, AZ, GB, CH, AU, IE, BA, ME} from 'country-flag-icons/string/3x2'
    import {RS,BY, AT} from 'country-flag-icons/string/3x2'
    import {TR} from 'country-flag-icons/string/3x2'

    let days = [ // 24 days
        {
            flag: AZ,
            day: 9,
            done: true,
            welcomeUrl:   'https://drive.google.com/file/d/14Jw7A2Y2N22jCGSoapgQcBBTXWn8-6Jj/view',
            endOfTaskUrl: 'https://drive.google.com/file/d/1CuCl1r1CnJ0kk62pilfAOFWTKxrnQQn9/view',
            symbolUrl: 'https://iili.io/2MIJyN9.png'
        },
        {
            flag: KZ,
            day: 8,
            done: true,
            welcomeUrl:   'https://drive.google.com/file/d/1AjK9dnf8d_uCoabSzqzeKHNU_qyV2_2l/view',
            endOfTaskUrl: 'https://drive.google.com/file/d/1-dtK39-Ljtc2CWdQTnAsQmJrhrK-PQd8/view',
            symbolUrl: 'https://iili.io/2GseAWG.png'
        },
        {
            flag: BY,
            day: 13,
            done: true,
            welcomeUrl:   'https://drive.google.com/file/d/1HvIplUqQLQEy8w7fCpHZ05jCbcZmoCGQ/view',
            endOfTaskUrl: 'https://drive.google.com/file/d/1GZtVr7bScQl4SZyKVFwdUVvSpXIBency/view',
            symbolUrl: 'https://iili.io/2WNrdKb.png'
        },
        {
            flag: ME,
            day: 18,
            done: false,
            welcomeUrl:   'https://drive.google.com/file/d/1zWKW_YAl6bJIWhNbs5QbJ8zxkX_4vBbq/view',
            endOfTaskUrl: 'https://drive.google.com/file/d/1jxdREH2pRmPCcYWLvwxVqpV6m2w2VOUu/view',
            symbolUrl: 'https://iili.io/2jiHXDu.png'
        },
        {
            flag: US,
            day: 24,
            done: false,
            url: 'https://www.yandex.ru'
        },
        {
            flag: US,
            day: 22,
            done: false,
            url: 'https://www.yandex.ru'
        },
        {
            flag: IE,
            day: 14,
            done: true,
            welcomeUrl:   'https://drive.google.com/file/d/1RcWfB_ByRy0ONgNodnmO-qLUVFbWCmxp/view',
            endOfTaskUrl: 'https://drive.google.com/file/d/1XWo-GfTPc41vbD9zl7WVaQeArXG4EYKg/view',
            symbolUrl: 'https://iili.io/2Xu5wdl.png'
        },
        {
            flag: RS,
            day: 1,
            done: true,
            welcomeUrl:   'https://drive.google.com/file/d/1zBCjg7Fz0jRN2Q_bVeFxPyZOqigdQxzK/view',
            endOfTaskUrl: 'https://drive.google.com/file/d/1RwnrXUjjE5rEwnhaNr_KFTiRcFvT5ppb/view',
            symbolUrl: 'https://iili.io/208jbI9.png'
        },
        {
            flag: NL,
            day: 5,
            done: true,
            welcomeUrl:   'https://drive.google.com/file/d/1lO2-g-AWS_l1UhSxmpGw4gZeHn_rTIrj/view',
            endOfTaskUrl: 'https://drive.google.com/file/d/1ypa9Cg3KcnIyvC-IoDGzcsFMWp1_uhau/view',
            symbolUrl: 'https://iili.io/2EEQOXt.png'
        },
        {
            flag: RU,
            day: 19,
            done: false,
            welcomeUrl:   'https://drive.google.com/file/d/1FeXdb8owfj95coT3q-rRXRxAQ0F4TXfw/view',
            endOfTaskUrl: 'https://drive.google.com/file/d/1BsHXzTq2chFyyZA3mOkxaokvP88fmajT/view',
            symbolUrl: 'https://iili.io/2wsEZKv.png'
        },
        {
            flag: GB,
            day: 2,
            done: true,
            welcomeUrl:   'https://drive.google.com/file/d/1EoBiGHivMs6-O_J73mnjV7aZeXAv359C/view',
            endOfTaskUrl: 'https://drive.google.com/file/d/18FjT269IqE6hH7nndwd0CQ3Onli57KWr/view',
            symbolUrl: 'https://iili.io/21uYPqu.png'
        },
        {
            flag: TR,
            day: 20,
            done: false,
            welcomeUrl:   'https://drive.google.com/file/d/1DyPtaIdeL0XwdH7hegFmoKl5rlAShFh6/view',
            endOfTaskUrl: 'https://drive.google.com/file/d/1zTFTTq8XlJg5MRt2ITxwdocSFpM3xLss/view',
            symbolUrl: 'https://iili.io/2NuMKxt.png'
        },
        {
            flag: GB,
            day: 10,
            done: true,
            welcomeUrl:   'https://drive.google.com/file/d/11Qu7XA10jSnsl2wdvnZHHjiWRBOw51wc/view',
            endOfTaskUrl: 'https://drive.google.com/file/d/1wFSmXvIQMaKC7X6rk7C-g6Je0F24cxLd/view',
            symbolUrl: 'https://iili.io/2Mk7NoJ.png'
        },
        {
            flag: AT,
            day: 15,
            done: true,
            welcomeUrl:   'https://drive.google.com/file/d/1p7BLe5a8Am4og_N-PyatLuBTWI8EMfWP/view',
            endOfTaskUrl: 'https://drive.google.com/file/d/1W2PO6wBbToGOYtUAbS5pFtmiHlta1bLq/view',
            symbolUrl: 'https://iili.io/2XwQICg.png'
        },
        {
            flag: CA,
            day: 7,
            done: true,
            welcomeUrl: 'https://drive.google.com/file/d/1AWouNy9mSPleg4h1r370_pgkNWvQ5BSn/view',
            endOfTaskUrl: 'https://drive.google.com/file/d/1dAN3YZjQTG8wqpTGTeAXYAS_9bUJeO2X/view',
            symbolUrl: 'https://iili.io/2GaTfLl.png'
        },
        {
            flag: BA,
            day: 16,
            done: true,
            welcomeUrl: 'https://drive.google.com/file/d/191OMIdkBJ9_2l5Z716nWzgjpxEKGVokn/view',
            endOfTaskUrl: 'https://drive.google.com/file/d/199ljjEMVFciQLfa0JkEl6c3bWCe8dk9g/view',
            symbolUrl: 'https://iili.io/2h0oBna.png'
        },
        {
            flag: CH,
            day: 11,
            done: true,
            welcomeUrl: 'https://drive.google.com/file/d/1-OVJ-hB2O7tR6jxCfjVO7TX9RKJpfZ0V/view',
            endOfTaskUrl: 'https://drive.google.com/file/d/1VOF9T60g1ja79sHEV-znHJ6FR-DPdtrA/view',
            symbolUrl: 'https://iili.io/2Vnonl2.png'
        },
        {
            flag: TR,
            day: 3,
            done: true,
            welcomeUrl: 'https://drive.google.com/file/d/1HnztrFShQ85YqCQcPchDIelnZLuMNwlK/view',
            endOfTaskUrl: 'https://drive.google.com/file/d/1MQvrZ_0K7sf0IrU8YR5MfKOxM0hUhu1C/view',
            symbolUrl: 'https://iili.io/21MusXs.png'
        },
        {
            flag: DE,
            day: 6,
            done: true,
            welcomeUrl: 'https://drive.google.com/file/d/1wdE2kIkCGuycb5xtwvgj5qCcRgUC8SKS/view',
            endOfTaskUrl: 'https://drive.google.com/file/d/14-LIMHRS0TkYx63otuH-IrKBQmHnfwJs/view',
            symbolUrl: 'https://iili.io/2EbZSx2.png'
        },
        {
            flag: US,
            day: 21,
            done: false,
            url: 'https://www.yandex.ru'
        },
        {
            flag: US,
            day: 17,
            done: true,
            welcomeUrl:   'https://drive.google.com/file/d/1o_UUen3kuNLNl64txDYQb0sN661xZAFG/view',
            endOfTaskUrl: 'https://drive.google.com/file/d/1R05y2X4F8GJM4yN3imgJF_WONN2eLsG7/view',
            symbolUrl: 'https://iili.io/2hp4Op2.png'
        },
        {
            flag: RU,
            day: 4,
            done: true,
            welcomeUrl:   'https://drive.google.com/file/d/1H_D3-1bDQhiaUN3LqE2kMjuR5iePZ29p/view',
            endOfTaskUrl: 'https://drive.google.com/file/d/1b_k_Z3nATJL5rKhtCSooB5RZRJ8bSV7c/view',
            symbolUrl: 'https://iili.io/2EHLXXn.png'
        },
        {
            flag: AU,
            day: 12,
            done: true,
            welcomeUrl:   'https://drive.google.com/file/d/1thJ_h_T6jPh5sQwo4aDi2zVZleQsiz7D/view',
            endOfTaskUrl: 'https://drive.google.com/file/d/1WgIGTcDl88NtF14LrzuHcIFOjHZem9Zm/view',
            symbolUrl: 'https://iili.io/2VOil2I.png'
        },
        {
            flag: US,
            day: 23,
            done: false,
            url: 'https://www.yandex.ru'
        },


    ]

    let rotation = ref(0);

    let permissionButton = ref(false);

    const handleOrientation = (event) => {
        if (typeof event.alpha === 'number') {
            rotation.value = event.alpha;
        }
    };


    const requestPermission = async () => {
        try {
            const permission = await DeviceOrientationEvent.requestPermission();
            if (permission != 'granted') {
                alert('Permission denied. Unable to access compass.');
                return;
            }

            permissionButton.value = false;

            window.addEventListener('deviceorientation', handleOrientation);
        } catch (error) {
            console.error('Permission request failed', error);
        }
    };

    const clickDay = (day) => {
        console.log('!!! day');
        window.open(day.done ? day.endOfTaskUrl : day.welcomeUrl, '_blank');
    }

    const clickPrize = (day) => {
        console.log('!!! prize');
        window.open(day.symbolUrl, '_blank');
    }

    onMounted(async () => {
        if (!window.DeviceOrientationEvent) {
            alert('Device orientation not supported on your device');
            return;
        }

        if (typeof DeviceOrientationEvent.requestPermission == 'function') {
            permissionButton.value = true;
            return;
        }

        window.addEventListener('deviceorientation', handleOrientation);

        // setInterval(() => {
        //     rotation.value = (rotation.value + 1) % 360;
        // }, 20)
    });

    onBeforeUnmount(() => {
        window.removeEventListener('deviceorientation', handleOrientation);
    });

</script>

<template>

    <button class="bg-blue-500 text-white py-2 px-4 rounded" v-if="permissionButton" @click="requestPermission()">
        Enable Compass
    </button>
    <div v-else class="wrapper">

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

                <div v-for="(day, idx) of days" class="compass-flags__item">
                    <div v-if="day.done || day.day == moment().date() && (rotation > idx * 360 / 24 - 7.5) && (rotation < (idx + 1) * 360 / 24 - 7.5)"
                         v-on:click="clickDay(day)"
                    >
                        <div v-html="day.flag">
                        </div>
                    </div>
                    <span v-else class="text-[0.05em] absolute bottom-0 left-[0.8em]">?</span>
                </div>

            </div>

            <div class="compass-prizes">

                <div v-for="(day) of days" class="compass-prizes__item">
                    <div v-if="day.done" @click="clickPrize(day)">
                        <img
                                :src="day.symbolUrl"
                        ></img>
                    </div>
                </div>

            </div>


            <div class="arrow_wrapper">
                <div class="compass_arrow"
                     :style="{ transform: `rotateZ(${rotation}deg)` }"
                ></div>
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

    .compass-prizes {
        position: absolute;
        width: 115%;
        height: 115%;
        left: 50%;
        top: 50%;

        transform: translate(-50%, -50%);
        border-radius: 50%;

        z-index: 0;
    }

    .compass-prizes__item {
        position: absolute;

        left: calc(50% - 0.05em);
        top: -0.025em;
        width: 0.1em;
        height: 0.066em;

        -webkit-transform-origin: center;
        transform-origin: center 0.60em;

        z-index: 0;
        /*background: green;*/
    }

    .compass-prizes__item:nth-of-type(2) {
        transform: rotateZ(calc(15deg * 1));
    }

    .compass-prizes__item:nth-of-type(3) {
        transform: rotateZ(calc(15deg * 2));
    }

    .compass-prizes__item:nth-of-type(4) {
        transform: rotateZ(calc(15deg * 3));
    }

    .compass-prizes__item:nth-of-type(5) {
        transform: rotateZ(calc(15deg * 4));
    }

    .compass-prizes__item:nth-of-type(6) {
        transform: rotateZ(calc(15deg * 5));
    }

    .compass-prizes__item:nth-of-type(7) {
        transform: rotateZ(calc(15deg * 6));
    }

    .compass-prizes__item:nth-of-type(8) {
        transform: rotateZ(calc(15deg * 7));
    }

    .compass-prizes__item:nth-of-type(9) {
        transform: rotateZ(calc(15deg * 8));
    }

    .compass-prizes__item:nth-of-type(10) {
        transform: rotateZ(calc(15deg * 9));
    }

    .compass-prizes__item:nth-of-type(11) {
        transform: rotateZ(calc(15deg * 10));
    }

    .compass-prizes__item:nth-of-type(12) {
        transform: rotateZ(calc(15deg * 11));
    }

    .compass-prizes__item:nth-of-type(13) {
        transform: rotateZ(calc(15deg * 12));
    }

    .compass-prizes__item:nth-of-type(14) {
        transform: rotateZ(calc(15deg * 13));
    }

    .compass-prizes__item:nth-of-type(15) {
        transform: rotateZ(calc(15deg * 14));
    }

    .compass-prizes__item:nth-of-type(16) {
        transform: rotateZ(calc(15deg * 15));
    }

    .compass-prizes__item:nth-of-type(17) {
        transform: rotateZ(calc(15deg * 16));
    }

    .compass-prizes__item:nth-of-type(18) {
        transform: rotateZ(calc(15deg * 17));
    }

    .compass-prizes__item:nth-of-type(19) {
        transform: rotateZ(calc(15deg * 18));
    }

    .compass-prizes__item:nth-of-type(20) {
        transform: rotateZ(calc(15deg * 19));
    }

    .compass-prizes__item:nth-of-type(21) {
        transform: rotateZ(calc(15deg * 20));
    }

    .compass-prizes__item:nth-of-type(22) {
        transform: rotateZ(calc(15deg * 21));
    }

    .compass-prizes__item:nth-of-type(23) {
        transform: rotateZ(calc(15deg * 22));
    }

    .compass-prizes__item:nth-of-type(24) {
        transform: rotateZ(calc(15deg * 23));
    }

    .compass-flags {
        position: absolute;
        width: 80%;
        height: 80%;
        left: 50%;
        top: 50%;

        transform: translate(-50%, -50%);
        border-radius: 50%;
        z-index: 20;
        /*border: solid 1px yellow;*/
    }

    .compass-flags__item {
        position: absolute;

        left: calc(50% - 0.05em);
        top: -10px;
        width: 0.1em;
        height: 0.066em;

        -webkit-transform-origin: center;
        transform-origin: center 0.43em;

        z-index: 20;
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

        left: calc(50% - 1px);
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
        left: calc(50% - 4px);
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