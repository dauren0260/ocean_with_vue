import VueRouter from 'vue-router'

import IndexPage from '../views/IndexPage'
import FrontIndex from '../views/FrontIndex'
import spotRefer from '../views/spotRefer/spotRefer'
import diaryInside from '../views/diary/diaryInside'
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
            path:'/spotRefer',
            component: spotRefer,
            meta:{title:'海中日子 | 潛點推薦'}
        },
        {
            path:'/diaryInside',
            component: diaryInside,
            meta:{title:'海中日子 | 潛點日誌'}
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