import {defineStore} from 'pinia';
export const userStore=defineStore('userInfo',{
    state:()=>{
        return{
            userInfo:{
                name:'',
                age:7,
                grade:1,
                word:'',
                monthlyPay:'',
            }
        }
    },
    actions:{
        ageAdd (){
            this.userInfo.age++
            this.userInfo.grade++
        }
    },
    getters:{
        getUserInfo:state=>state.userInfo
    }
})
// export default userStore