<template>
    <div>
        <li class="messageLi" v-for="(item, index) in msgList" :key="index">
            <img :src="item.avatarImg" alt="member Photo">
            <div class="personInfo">
                <div>{{ item.avatarName }}</div>
                <div>{{ item.msgTime }}</div>
            </div>
            <div class="text">{{ item.msgText }}</div>
            <font-awesome-icon icon="fa-solid fa-circle-info" />
        </li>
    </div>
</template>

<script>
export default {
    name: 'Message',
    data(){
        return{
            msgList: [
                {
                    avatarImg: require('../../assets/img/member/member/14-小叮噹.jpg'),
                    avatarName: "哆啦A夢",
                    msgTime: "1個月前",
                    msgText: "真的很美!!上禮拜才去過回來，超級推薦的!!"
                },
                {
                    avatarImg: require('../../assets/img/member/member/1-nobita.png'),
                    avatarName: "野比大雄",
                    msgTime: "1個月前",
                    msgText: "平常都靠哆啦A夢的道具看生物，這次要來點不一樣的親身經驗!!"
                },
                {
                    avatarImg: require('../../assets/img/member/member/1-suizukaNor.png'),
                    avatarName: "源靜香",
                    msgTime: "2個月前",
                    msgText: "平常看不到的海洋生物，這邊輕輕鬆鬆就看到了，值回票價唷!"
                },
                {
                    avatarImg: require('../../assets/img/member/member/1-1-character_8.png'),
                    avatarName: "野比玉子",
                    msgTime: "3個月前",
                    msgText: "下定決心帶小孩來一回，因為想讓她更近距離看到海中生物，這裡也不太危險，都有專業教練帶領，很值得來一趟!"
                },
            ]
        }
    }
}
</script>

<style lang="scss">
.messageLi{
    margin: 0 auto;
    display: flex;
    width: 80%;
    position: relative;
    border-bottom: 1px solid white;
    padding: 10px 0;

    div{
        margin-left: 15px;
    }

    .personInfo{
        width: 80px;
    }

    img{
        width: 35px;
        height: 35px;
        border-radius: 50%;
    }

    .text{
        width: 80%;
        padding: 0 10px;
    }

    svg{
        position: absolute;
        right: 0;

        &:hover{
            cursor: pointer;
        }
    }

}
</style>