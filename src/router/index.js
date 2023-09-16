import VueRouter from 'vue-router'

import IndexPage from '../views/IndexPage'
import FrontIndex from '../views/FrontIndex'
import spotRefer from '../views/spotRefer/spotRefer'
import diaryInside from '../views/diary/diaryInside'
import Shop from '../views/shop/Shop'
import GameIntro from '../views/game/gameIntro'

const router = new VueRouter({
    routes:[
        {path: '/', component: IndexPage},
        {
            path:'/frontIndex',
            component: FrontIndex,
        },
        {
            path:'/spotRefer',
            component: spotRefer,
        },
        {
            path:'/diaryInside',
            component: diaryInside,
        },
        {
            path:'/shop',
            component: Shop,
        },
        {
            path:'/gameIntro',
            component: GameIntro,
        },
    ]
})

export default router

