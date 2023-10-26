import VueRouter from 'vue-router'

import IndexPage from '../views/IndexPage'
import FrontIndex from '../views/FrontIndex'
import spot from '../views/spotRefer/Spot'
import SpotArea from '../views/spotRefer/SpotArea'
import SpotRefer from '../views/spotRefer/SpotRefer'
import diaryInside from '../views/diary/diaryInside'
import diaryAdd from '../views/diary/diaryAdd'
import course from "../views/course/Course"
import Shop from '../views/shop/Shop'
import Cart from '../views/shop/Cart'
import GameIntro from '../views/game/gameIntro'

const router = new VueRouter({
    routes:[
        {
            path: '/', 
            component: IndexPage,
            meta:{title:'海中日子'}
        },
        {
            path:'/frontIndex',
            component: FrontIndex,
            meta:{title:'海中日子'}
        },
        {
            path:'/spot',
            component: spot,
            meta:{title:'海中日子 | 潛點推薦'},
            children:[
                {
                    name: 'SpotArea',
                    path: 'spotArea/:stationId',
                    component: SpotArea,
                    meta:{title:'海中日子 | 潛點推薦'},
                    props($route){
                        return { stationId: $route.params.stationId }
                    },
                },
            ]
        },
        {           
            name:'SpotRefer' ,
            path: '/spotRefer/:itemId',
            component: SpotRefer,
            meta:{title:'海中日子 | 潛點介紹'},
            props($route){
                return { itemId: $route.params.itemId }
            }
        },
        {
            path:'/diaryInside',
            component: diaryInside,
            meta:{title:'海中日子 | 潛點日誌'}
        },
        {
            path:'/diaryAdd',
            component: diaryAdd,
            meta:{title:'海中日子 | 潛點日誌'}
        },
        {
            path:'/course',
            component: course,
            meta:{title:'海中日子 | 潛點課程'}
        },
        {
            path:'/shop',
            component: Shop,
            meta:{title:'海中日子 | 購物商城'}
        },
        {
            path:'/cart',
            component: Cart,
            meta:{title:'海中日子 | 購物車'}
        },
        {
            path:'/gameIntro',
            component: GameIntro,
            meta:{title:'海中日子 | 下潛遊戲'}
        },
    ]
})

export default router

router.afterEach((to,from)=>{
    document.title = to.meta.title || '海中日子'
    let path = String(to.path).slice(1)
    sessionStorage.setItem('path',path)
})