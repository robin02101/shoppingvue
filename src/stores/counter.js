
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
state:()=>{
return{
  count:0,
}
},
actions:{
  addCount(num){
    this.count = num;
  }
},
})
