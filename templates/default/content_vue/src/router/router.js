import App from '../App'


const city = r => require.ensure([], () => r(require('../page/city/city')), 'city')
const msite = r => require.ensure([], () => r(require('../page/msite/msite')), 'msite')
const search = r => require.ensure([], () => r(require('../page/search/search')), 'search')
const shop = r => require.ensure([], () => r(require('../page/shop/shop')), 'shop')
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')
const profile = r => require.ensure([], () => r(require('../page/profile/profile')), 'profile')
const forget = r => require.ensure([], () => r(require('../page/forget/forget')), 'forget')
const order = r => require.ensure([], () => r(require('../page/order/order')), 'order')
const orderDetail = r => require.ensure([], () => r(require('../page/order/children/orderDetail')), 'orderDetail')
const vipcard = r => require.ensure([], () => r(require('../page/vipcard/vipcard')), 'vipcard')
const invoiceRecord = r => require.ensure([], () => r(require('../page/vipcard/children/invoiceRecord')), 'invoiceRecord')
const useCart = r => require.ensure([], () => r(require('../page/vipcard/children/useCart')), 'useCart')
const vipDescription = r => require.ensure([], () => r(require('../page/vipcard/children/vipDescription')), 'vipDescription')
const food = r => require.ensure([], () => r(require('../page/food/food')), 'food')
const confirmOrder = r => require.ensure([], () => r(require('../page/confirmOrder/confirmOrder')), 'confirmOrder')
const remark = r => require.ensure([], () => r(require('../page/confirmOrder/children/remark')), 'remark')
const payment = r => require.ensure([], () => r(require('../page/confirmOrder/children/payment')), 'payment')
const userValidation = r => require.ensure([], () => r(require('../page/confirmOrder/children/userValidation')), 'userValidation')
const invoice = r => require.ensure([], () => r(require('../page/confirmOrder/children/invoice')), 'invoice')
const chooseAddress = r => require.ensure([], () => r(require('../page/confirmOrder/children/chooseAddress')), 'chooseAddress')
const addAddress = r => require.ensure([], () => r(require('../page/confirmOrder/children/children/addAddress')), 'addAddress')
const searchAddress = r => require.ensure([], () => r(require('../page/confirmOrder/children/children/children/searchAddress')), 'searchAddress')
const foodDetail = r => require.ensure([], () => r(require('../page/shop/children/foodDetail')), 'foodDetail')
const shopDetail = r => require.ensure([], () => r(require('../page/shop/children/shopDetail')), 'shopDetail')
const shopSafe = r => require.ensure([], () => r(require('../page/shop/children/children/shopSafe')), 'shopSafe')
const info = r => require.ensure([], () => r(require('../page/profile/children/info')), 'info')
const setusername = r => require.ensure([], () => r(require('../page/profile/children/children/setusername')), 'setusername')
const address = r => require.ensure([], () => r(require('../page/profile/children/children/address')), 'address')
const add = r => require.ensure([], () => r(require('../page/profile/children/children/children/add')), 'add')
const addDetail = r => require.ensure([], () => r(require('../page/profile/children/children/children/children/addDetail')), 'addDetail')
const balance = r => require.ensure([], () => r(require('../page/balance/balance')), 'balance')
const balanceDetail = r => require.ensure([], () => r(require('../page/balance/children/detail')), 'balanceDetail')
const benefit = r => require.ensure([], () => r(require('../page/benefit/benefit')), 'benefit')
const coupon = r => require.ensure([], () => r(require('../page/benefit/children/coupon')), 'coupon')
const hbDescription = r => require.ensure([], () => r(require('../page/benefit/children/hbDescription')), 'hbDescription')
const hbHistory = r => require.ensure([], () => r(require('../page/benefit/children/hbHistory')), 'hbHistory')
const exchange = r => require.ensure([], () => r(require('../page/benefit/children/exchange')), 'exchange')
const commend = r => require.ensure([], () => r(require('../page/benefit/children/commend')), 'commend')
const points = r => require.ensure([], () => r(require('../page/points/points')), 'points')
const pointsDetail = r => require.ensure([], () => r(require('../page/points/children/detail')), 'pointsDetail')
const service = r => require.ensure([], () => r(require('../page/service/service')), 'service')
const questionDetail = r => require.ensure([], () => r(require('../page/service/children/questionDetail')), 'questionDetail')
const find = r => require.ensure([], () => r(require('../page/find/find')), 'find')
const download = r => require.ensure([], () => r(require('../page/download/download')), 'download')
const page = r => require.ensure([], () => r(require('../page/html/page')), 'page')






const phpcmv = r => require.ensure([], () => r(require('../page/phpcmv/index')), 'bog')
const phpcmv_login = r => require.ensure([], () => r(require('../page/phpcmv/children/login')), 'phpcmv_login')
const phpcmv_home = r => require.ensure([], () => r(require('../page/phpcmv/children/home')), 'phpcmv_home')
const phpcmv_register = r => require.ensure([], () => r(require('../page/phpcmv/children/register')), 'phpcmv_register')
const phpcmv_news = r => require.ensure([], () => r(require('../page/phpcmv/children/news')), 'phpcmv_news')
const phpcmv_newsinside = r => require.ensure([], () => r(require('../page/phpcmv/children/newsinside')), 'phpcmv_newsinside')
const phpcmv_skill = r => require.ensure([], () => r(require('../page/phpcmv/children/skill')), 'phpcmv_skill')
const phpcmv_storage = r => require.ensure([], () => r(require('../page/phpcmv/children/children/storage')), 'phpcmv_storage')
const phpcmv_direactives = r => require.ensure([], () => r(require('../page/phpcmv/children/children/direactives')), 'phpcmv_direactives')
const phpcmv_components = r => require.ensure([], () => r(require('../page/phpcmv/children/children/components')), 'phpcmv_components')
const phpcmv_normal = r => require.ensure([], () => r(require('../page/phpcmv/children/children/normal')), 'phpcmv_normal')



const fabia = r => require.ensure([], () => r(require('../page/fabia/index')), 'fabia')
const fabia_login = r => require.ensure([], () => r(require('../page/fabia/children/login')), 'fabia_login')
const fabia_register = r => require.ensure([], () => r(require('../page/fabia/children/register')), 'fabia_register')
const fabia_home = r => require.ensure([], () => r(require('../page/fabia/children/home')), 'fabia_home')
const fabia_gmail = r => require.ensure([], () => r(require('../page/fabia/children/gmail')), 'fabia_gmail')
const fabia_case = r => require.ensure([], () => r(require('../page/fabia/children/case')), 'fabia_case')
const fabia_case2 = r => require.ensure([], () => r(require('../page/fabia/children/case2')), 'fabia_case2')
const fabia_regmail = r => require.ensure([], () => r(require('../page/fabia/children/regmail')), 'fabia_regmail')
const fabia_finish = r => require.ensure([], () => r(require('../page/fabia/children/finish')), 'fabia_finish')

export default [{
    path: '/',
    component: App, //?????????????????????index.html
    children: [ //?????????????????????App.vue
        //?????????????????????home??????
        {
            path: '',
            redirect: '/fabia/fabia_login'
        },

        {
            path: '/fabia',
            component: fabia,
            children: [
                {
                    path: 'fabia_login', //?????????
                    component: fabia_login,
                },
                {
                    path: 'fabia_register', //??????
                    component: fabia_register,
                },
                {
                    path: 'fabia_home', //??????
                    component: fabia_home,
                },
                {
                    path: '/fabia_gmail/:aid', //??????GMAIL
                    component: fabia_gmail,
                },
                {
                    path: '/fabia_regmail/:aid', //????????????
                    component: fabia_regmail,
                },
                {
                    path: 'fabia_case', //????????????
                    component: fabia_case,
                },
                {
                    path: 'fabia_case2', //????????????
                    component: fabia_case2,
                },
                {
                    path: 'fabia_finish', //????????????
                    component: fabia_finish,
                },

            ]
        },

        {
            path: '/phpcmv',
            component: phpcmv,
            children: [
                {
                    path: 'phpcmv_login', //?????????
                    component: phpcmv_login,
                },
                {
                    path: 'phpcmv_home', //??????
                    component: phpcmv_home,
                },
                {
                    path: 'phpcmv_register', //?????????
                    component: phpcmv_register,
                },
                {
                    path: 'phpcmv_news', //?????????
                    component: phpcmv_news,
                },
                {
                    path: '/phpcmv_newsinside/:aid', //?????????
                    component: phpcmv_newsinside,
                },
                {
                    path: 'phpcmv_skill', //?????????
                    component: phpcmv_skill,
                    children: [
                        {
                        path: 'phpcmv_storage', //????????????
                        component: phpcmv_storage,
                        },
                        {
                            path: 'phpcmv_direactives', //????????????
                            component: phpcmv_direactives,
                        },
                        {
                            path: 'phpcmv_components', //????????????
                            component: phpcmv_components,
                        },
                        {
                            path: 'phpcmv_normal', //????????????
                            component: phpcmv_normal,
                        },

                        ]
                },

            ]
        },
        //?????????????????????

        {
            path: '/page',
            component: page
        },
        //?????????????????????
        {
            path: '/city/:cityid',
            component: city
        },
        //?????????????????????
        {
            path: '/msite',
            component: msite,
            meta: { keepAlive: true },
        },
        //?????????????????????
        {
            path: '/food',
            component: food
        },
        //?????????
        {
            path: '/search/:geohash',
            component: search
        },
        //???????????????
        {
            path: '/shop',
            component: shop,
            children: [{
                path: 'foodDetail', //???????????????
                component: foodDetail,
            }, {
                path: 'shopDetail', //???????????????
                component: shopDetail,
                children: [{
                    path: 'shopSafe', //?????????????????????
                    component: shopSafe,
                }, ]
            }]
        },
        //???????????????
        {
            path: '/confirmOrder',
            component: confirmOrder,
            children: [{
                path: 'remark', //????????????
                component: remark,
            }, {
                path: 'invoice', //????????????
                component: invoice,
            }, {
                path: 'payment', //????????????
                component: payment,
            }, {
                path: 'userValidation', //????????????
                component: userValidation,
            }, {
                path: 'chooseAddress', //????????????
                component: chooseAddress,
                children: [{
                    path: 'addAddress', //????????????
                    component: addAddress,
                    children: [{
                        path: 'searchAddress', //????????????
                        component: searchAddress,
                    }]
                }, ]
            }, ]
        },
        //???????????????
        {
            path: '/login',
            component: login
        },
        //???????????????
        {
            path: '/profile',
            component: profile,
            children: [{
                path: 'info', //?????????????????????
                component: info,
                children: [{
                    path: 'setusername',
                    component: setusername,
                },{
                    path: 'address',
                    component: address,     //????????????
                    children:[{
                        path:'add',
                        component:add,
                        children:[{
                            path:'addDetail',
                            component:addDetail
                        }]
                    }]
                }]
            },
            {
                path: 'service', //????????????
                component: service,
            },]
        },
        //???????????????
        {
            path: '/forget',
            component: forget
        },
        //???????????????
        {
            path: '/order',
            component: order,
            children: [{
                path: 'orderDetail', //???????????????
                component: orderDetail,
            }, ]
        },
        //vip??????
        {
            path: '/vipcard',
            component: vipcard,
            children: [{
                path: 'invoiceRecord', //?????????
                component: invoiceRecord,
            }, {
                path: 'useCart', //???????????????
                component: useCart,
            }, {
                path: 'vipDescription', //????????????
                component: vipDescription,
            },]
        },
        //?????????
        {
            path: '/find',
            component: find
        },
        //?????????
        {
            path: '/download',
            component: download
        },
        //????????????
        {
            path: '/service',
            component: service,
             children: [{
                path: 'questionDetail', //???????????????
                component: questionDetail,
            }, ]
        },
        //??????
        {
            path: 'balance',
            component: balance,
            children: [{
                path: 'detail', //????????????
                component: balanceDetail,
            }, ]
        },
        //???????????????
        {
            path: 'benefit',
            component: benefit,
            children: [{
                path: 'coupon', //???????????????
                component: coupon,
            }, {
                path: 'hbDescription', //????????????
                component: hbDescription,
            }, {
                path: 'hbHistory', //????????????
                component: hbHistory,
            }, {
                path: 'exchange', //????????????
                component: exchange,
            }, {
                path: 'commend', //????????????
                component: commend,
            },]
        },
        //???????????????
        {
            path: 'points',
            component: points,
            children: [{
                path: 'detail', //????????????
                component: pointsDetail,
            }, ]
        },
    ]
}]
