<template>
    <div class="spotarea">
        <div class="spotBlock spotRight">
            <h2>{{ showAreaName }}</h2>
            <h5>{{ showSlogan }}</h5>

            <div class="spotRightblock spotWeather">
                <ul class="spotRightBlockList">
                    <li>即時<br />氣象</li>
                    <li><font-awesome-icon icon="fa-solid fa-wind"></font-awesome-icon></li>
                    <li><font-awesome-icon icon="fa-solid fa-umbrella-beach" /></li>
                    <li><font-awesome-icon icon="fa-solid fa-temperature-high"></font-awesome-icon></li>
                </ul>
            </div>

            <div class="spotRightblock spotData" id="spotData">
                <ul class="spotRightBlockList">
                    <li class="spotDataNum">21</li>
                    <li>潛水<br />課程</li>
                    <li class="spotDataNum">12</li>
                    <li>潛水<br />日誌</li>
                    <li class="spotDataNum">66</li>
                    <li>踩過<br />此點</li>
                </ul>
            </div>

            <div class="spotRightblock spotFont">
                <p>{{ showInfoFront }} <br /> {{ showInfoBack }}</p>
            </div>

            <div class="spotRightblock spotPush">
                <div class="spotPushBlock">
                    <a href=""><img src="../../assets/img/diary/diaryphoto8.png" /></a>
                    <span>最新日誌</span>
                </div>
                <div class="spotPushBlock">
                    <a href=""><img src="../../assets/img/class/classpic05-1.jpg" /></a>
                    <span>最新課程</span>
                </div>

            </div>

            <div class="spotMore_rwd">
                <font-awesome-icon icon="fa-arrow-alt-circle-down"></font-awesome-icon>
            </div>
        </div>
        <div class="spotBlock spotLeft">
            <div class="spotLeftImage">
                <router-link v-for="(item, i) of eachAreaList" :key="i" :to="{ name: 'SpotRefer', params: { itemId: item.itemId }}">
                    <img :src="item.itemImg" />
                    <span>{{ item.itemName }}</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SpotArea',
    data() {
        return {
            areaInfo: [
                {
                    stationName: '綠島',
                    stationId: 467660,
                    stationId_sea: "WRA007",
                    station_slogan: '無與倫比的潛水寶地',
                    station_info:'譽為世界級的潛水寶地<br />全球百大必潛地',
                    station_area:[
                        {
                            itemId: 22665,
                            itemName: '海底教堂',
                            itemImg: require("../../assets/img/spot/spotGiLittle-01.png"),
                        },
                        {
                            itemId: 22639,
                            itemName: '鋼鐵礁',
                            itemImg: require("../../assets/img/spot/spotGiLittle-02.png"),
                        },
                        {
                            itemId: 22656,
                            itemName: '石朗大香菇',
                            itemImg: require("../../assets/img/spot/spotGiLittle-03.png"),
                        },
                        {
                            itemId: 22691,
                            itemName: '海底大峽谷',
                            itemImg: require("../../assets/img/spot/spotGiLittle-04.png"),
                        },
                        {
                            itemId: 22638,
                            itemName: '雞仔礁',
                            itemImg: require("../../assets/img/spot/spotGiLittle-05.png"),
                        },
                    ]
                },
                {
                    stationName: '蘭嶼',
                    stationId: 467620,
                    stationId_sea: "C6S94",
                    station_slogan: '台灣最美潛水天堂',
                    station_info:'坐擁水下能見度高達50公尺的澄澈玻璃海<br />充滿部落風情的人之島',
                    station_area:[
                        {
                            itemId: 22084,
                            itemName: '母雞岩',
                            itemImg: require("../../assets/img/spot/spotEncLittle-03.png"),
                        },
                        {
                            itemId: 22024,
                            itemName: '八代灣沉船',
                            itemImg: require("../../assets/img/spot/spotKdLittle-01.png"),
                        },
                        {
                            itemId: 22050,
                            itemName: '椰油斷層',
                            itemImg: require("../../assets/img/spot/spotLyLittle-03.png"),
                        },
                        {
                            itemId: 22039,
                            itemName: '野銀小峽谷',
                            itemImg: require("../../assets/img/spot/spotLyLittle-04.png"),
                        },
                        {
                            itemId: 22008,
                            itemName: '四條溝',
                            itemImg: require("../../assets/img/spot/spotLyLittle-05.png"),
                        },
                    ]
                },
                {
                    stationName: '墾丁',
                    stationId: 467790,
                    stationId_sea: "46759A",
                    station_slogan: '全台最具代表性的珊瑚礁生態系統所在地',
                    station_info:'得天獨厚的地理條件<br />孕育富饒的海洋生物獨具特色',
                    station_area:["後壁湖", "出水口", "雙峰藍洞", "合界"],
                    station_area:[
                        {
                            itemId: 21950,
                            itemName: '後壁湖',
                            itemImg: require("../../assets/img/spot/spotLyLittle-02.png"),
                        },
                        {
                            itemId: 21942,
                            itemName: '出水口',
                            itemImg: require("../../assets/img/spot/spotGiLittle-00.jpg"),
                        },
                        {
                            itemId: 21917,
                            itemName: '雙峰藍洞',
                            itemImg: require("../../assets/img/spot/spotPic-2.png"),
                        },
                        {
                            itemId: 21951,
                            itemName: '合界',
                            itemImg: require("../../assets/img/spot/spotPic-0.png"),
                        },
                    ]
                },
                {
                    stationName: '小琉球',
                    stationId: 'C0R640',
                    stationId_sea: "46714D",
                    station_slogan: '號稱海龜島的島嶼',
                    station_info:'台灣唯一的珊瑚礁島<br />海龜目擊率極高',
                    station_area:[
                        {
                            itemId: 22355,
                            itemName: '花瓶岩',
                            itemImg: require("../../assets/img/spot/spotSrkLittle-01.png"),
                        },
                        {
                            itemId: 22353,
                            itemName: '美人洞',
                            itemImg: require("../../assets/img/spot/spotLyLittle-02.png"),
                        },
                        {
                            itemId: 22340,
                            itemName: '衫福沈船',
                            itemImg: require("../../assets/img/spot/spotSrkLittle-03.png"),
                        },
                        {
                            itemId: 22320,
                            itemName: '鎮海艦',
                            itemImg: require("../../assets/img/spot/spotSrkLittle-04.png"),
                        },
                        {
                            itemId: 22326,
                            itemName: '厚石礁群',
                            itemImg: require("../../assets/img/spot/spotSrkLittle-05.png"),
                        },
                    ]
                },
                {
                    stationName: '東北角',
                    stationId: 466900,
                    stationId_sea: "46694A",
                    station_slogan: '海底絢麗繽紛的微距聖地',
                    station_info:'初學者的天然訓練場<br />滿足你按耐不住的潛水心',
                    station_area:["和美", "龍洞", "潮境公園", "鼻頭角"],
                    station_area:[
                        {
                            itemId: 25079,
                            itemName: '和美',
                            itemImg: require("../../assets/img/spot/spotEncLittle-03.png"),
                        },
                        {
                            itemId: 25099,
                            itemName: '龍洞',
                            itemImg: require("../../assets/img/spot/spotEncLittle-01.png"),
                        },
                        {
                            itemId: 25146,
                            itemName: '潮境公園',
                            itemImg: require("../../assets/img/spot/spotPic-5.png"),
                        },
                        {
                            itemId: 25129,
                            itemName: '鼻頭角',
                            itemImg: require("../../assets/img/spot/spotPic-6.png"),
                        },
                    ]
                },

            ],
            showAreaName: '',
            showSlogan:'',
            showInfoFront:'',
            showInfoBack:'',
        }

    },
    props: ['stationId'],
    computed:{
        areaIndex(){
            let areaInfo = this.areaInfo
            for (let i = 0; i < areaInfo.length; i++) {
                if(areaInfo[i].stationId == this.stationId) {
                    this.showAreaName = areaInfo[i].stationName
                    this.showSlogan = areaInfo[i].station_slogan
                    let infoString = areaInfo[i].station_info.split("<br />")
                    this.showInfoFront = infoString[0]
                    this.showInfoBack = infoString[1]
                    return areaInfo[i]
                }
            }
        },
        eachAreaList(){
            return this.areaIndex.station_area
        }
    },
}
</script>

<style lang="scss">
.spotMain {
    color: #fefefe;
    margin-bottom: 30px;
}

.spotMain section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
}

.spot .spotContents {
    width: 90vw;
}

@media all and (max-width: 992px) {
    .spot .spotContents {
        width: 100%;
        text-align: center
    }
}

.spotContents .spotarea {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    text-align: center;
    font-size: 0;
}

@media all and (max-width: 992px) {
    .spotContents .spotarea{
        flex-direction: column;
    }

}

.spotContents .spotBlock {
    display: inline-block;
    vertical-align: top;
}

.spotRight {
    width: 40%;
    margin: 0 auto;
    text-align: left;
}

@media all and (max-width: 992px) {
    .spotRight {
        width: 100%;
        margin: 0 auto;
        text-align: center
    }
}

.spotRight h2 {
    font-size: 40px
}

@media all and (max-width: 992px) {
    .spotRight h2 {
        text-align: center
    }
}

.spotRight>h5 {
    font-size: 16px;
    line-height: 40px;
    margin-bottom: 20px;
    color: rgba(254, 254, 254, .75)
}

.spotRightblock {
    padding: 10px 0;
    font-size: 16px
}

@media all and (max-width: 992px) {
    .spotRightblock {
        margin: 0 auto
    }
}

.spotRightblock ul {
    display: flex;
    flex-direction: row;
    justify-items: baseline
}

@media all and (max-width: 992px) {
    .spotRightblock ul {
        display: block
    }
}

.spotRightblock ul li {
    display: inline-block
}

.spotWeather {
    border-radius: 10px;
    background-color: rgba(254, 254, 254, .377);
    padding: 10px;
    margin-bottom: 10px;
    display: inline-block;
    vertical-align: middle
}

@media all and (max-width: 992px) {
    .spotWeather {
        margin: 0
    }
}

.spotWeather ul {
    font-size: 6px
}

@media all and (max-width: 992px) {
    .spotWeather ul {
        padding: 0 10px
    }
}

.spotWeather ul li {
    padding: 0 2px;
    vertical-align: middle
}

.spotWeather ul li svg {
    font-size: 14px;
    margin: 5px;
    vertical-align: middle
}

@media all and (max-width: 992px) {
    .spotWeather ul li svg {
        font-size: 6px;
        vertical-align: middle
    }
}

@media all and (max-width: 992px) {
    .spotData {
        padding-left: 10px
    }
}

.spotData ul li {
    font-size: 16px;
    display: inline-block;
    margin: 0 5px;
    padding: 0 10px 0 2px;
    color: rgba(254, 254, 254, .75)
}

.spotData ul .spotDataNum {
    font-size: 31px;
    padding-right: 0;
    margin: 0;
    color: #fefefe
}

.spotFont {
    border: 0;
    display: block;
    width: 100%
}

.spotFont p {
    width: 100%;
    line-height: 30px
}

.spotPush {
    width: 60%;
    display: flex;

    flex-direction: row;
    
    img {
        height: 80px;
        max-width: 100%;
        width: 124px;
    }
}

@media all and (max-width: 992px) {
    .spotPush {
        text-align: center;
        justify-content: center
    }
}

.spotPushBlock {
    border-radius: 5px;
    margin: 0 10px 0 0;
    display: inline-block;
    overflow: hidden;
    text-align: center;

    img {
        width: 124px;
        height: 80px;
    }
}

.spotPushBlock span {
    font-size: 14px;
    color: rgba(254, 254, 254, .75)
}

.spotPushBlock a {
    display: inline-block;
    width: 100%
}

.spotPushBlock img {
    opacity: 0.8;
}

.spotPushBlock img:hover {
    opacity: 1
}

.spotMore_rwd {
    display: none
}

@media all and (max-width: 992px) {
    .spotMore_rwd {
        display: block;
        font-size: 30px;
        padding-bottom: 30px;
        margin-bottom: 50px;
        animation: box .8s infinite;
        position: relative
    }

    .spotMore_rwd svg {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, 0)
    }

    @keyframes box {
        0% {
            top: 30px
        }

        20% {
            border-radius: 2px
        }

        50% {
            top: 60px;
            border-bottom-right-radius: 25px
        }

        80% {
            border-radius: 2px
        }

        100% {
            top: 30px
        }
    }
}

.spotLeft {
    width: 60%;
    max-width: 800px;
    max-height: 590px;
    margin: 0 auto;
    text-align: center
}
@media all and (max-width: 1200px) {
    .spotLeft{
        max-height: max-content;
    }
}

@media all and (max-width: 992px) {
    .spotLeft {
        width: 100%;
        margin: 5% auto;
    }
}

.spotLeft .spotLeftImage {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
}

.spotLeft .spotLeftImage a {
    display: block;
    margin: 5px 3.5px;
    overflow: hidden;
    font-size: 0;
    width: 250px;
    flex-grow: 1;
    position: relative;

}

.spotLeft .spotLeftImage a:nth-child(3),
.spotLeft .spotLeftImage a:nth-child(4),
.spotLeft .spotLeftImage a:nth-child(5){
    width: 225px;
    flex-grow: 0;
    flex-shrink: 3;
}

@media all and (max-width: 992px) {
    .spotLeft .spotLeftImage {
        width: 100%;
        justify-content: space-around;
        
        a {
            width: 550px;
            flex-grow: 0;
        }

        a:nth-child(3),
        a:nth-child(4),
        a:nth-child(5){
            width: 250px;
        }
    }
}

@media all and (max-width: 577px) {
    .spotLeft .spotLeftImage a{
        width: 250px;
    }
}

.spotLeft .spotLeftImage a .spotLeftImageAd {
    font-size: 0;
    width: 100%;
    position: relative;
}

.spotLeft .spotLeftImage a span {
    background-color: #073977;
    border-radius: 0 0 15px 0;
    font-size: 11px;
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px;
    color: rgba(254, 254, 254, .75);
}

.spotLeft .spotLeftImage a:hover span {
    color: #fefefe
}

.spotLeft .spotLeftImage a img {
    width: 100%
}

.spotLeft .spotLeftTwoPic {
    max-height: 266px
}

.spotLeft .spotLeftTwoPic a {
    width: 50%
}

.spotLeft .spotLeftThreePic {
    max-height: 266px
}

.spotLeft .spotLeftThreePic a {
    flex: 3
}

</style>