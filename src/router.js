import VueRouter from 'vue-router'
import AllMembers from './pages/AllMembers'
import Member from './pages/Member'
import newMember from './pages/newMember'
const router =  new VueRouter({
    routes: [
        {
            name: 'allMembers',
            path: '',
            component: AllMembers
        },
        {
            name: 'member',
            path: '/member/:id',
            component: Member,
        },
        {
            name: 'newMember',
            path: '/addMember',
            component: newMember
        }
    ],
    mode: 'history',

})
export default router