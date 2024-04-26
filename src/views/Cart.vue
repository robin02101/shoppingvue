<script>

import allBtn from '@/components/allBtn.vue';
export default {
    components: {
    
    allBtn,
    
  },
  data() {
    return{
        buyArr:[],
        checkArr: []

    }
  },
 mounted(){
      if(localStorage.getItem('buyArr')){
      this.buyArr = JSON.parse(localStorage.getItem('buyArr'));
          }
    
   
    },
    computed: {
    totalQuantity() {
      return this.checkArr.reduce((total, item) => total +  item.quantity, 0);
    },
    totalPrice(){
      return this.checkArr.reduce((total, item) => total +  item.price * item.quantity, 0);
    },
  },
  methods:{
    addNumber(index){
        this.buyArr[index].quantity++;
      },
      removeNumber(index){
        if(this.buyArr[index].quantity >1){
          this.buyArr[index].quantity --;
        }
      },
      saveBuy(){
        const checkedItems = this.buyArr.filter(item => item.check);
        localStorage.setItem('checkArr', JSON.stringify(checkedItems));
       if (this.checkArr.length === 0){
        alert('請選擇要購買的商品');
       }
      },
      backBtn(){
        if (this.checkArr.length === 0){
          this.$router.push('/Cart'); 
       }else{
        localStorage.setItem('checkArr', JSON.stringify(checkedItems));
       }
        
      },
      handleCheck(item) {
      if (item.check) {
        this.checkArr.push(item);
      } else {
        const index = this.checkArr.findIndex(i => i === item);
        if (index !== -1) {
          this.checkArr.splice(index, 1);
        }
      }
    },
     
    
  },
};
</script>

<template>
   
    <div class="w-full p-3 px-5 ">
        <div>
         <h1 class="mb-3 text-3xl font-bold">購物車確認</h1>
        </div>
            
        <div class="grid-thead">
            <div class="grid-cols-6 grid border-y border-main-deep text-main-deep font-bold py-1 gap-x-3">
           
                <div class="gird-th text-center"></div>
                <div class="gird-th text-center">商品圖片</div>
                <div class="gird-th">商品名稱</div>
                <div class="gird-th text-center">價錢</div>
                <div class="gird-th opacity-0">操作</div>
            </div>
        </div>
     
    <div class="grid-thead"> 
        <div class="grid-cols-6 grid border-y border-main-deep text-main-deep font-bold py-1 gap-x-3 " v-for="(item,index) in buyArr" :key="item.id">
        <div class="gird-th text-center flex justify-center ">
            <input type="checkbox" class="w-5"  v-model="item.check" @change="handleCheck(item)">
        </div>
        <img src="../assets/image/300x300_0.png" alt="">
        <div class="gird-th flex items-center">{{ item.name }}</div>
        <div class="gird-th justify-center flex items-center">{{ item.price * item.quantity}}</div>
        <div class="gird-th flex items-center">
            <div class="w-[150px] h-[30px] border-[1px] rounded-lg border-black flex justify-around ml-6">
                 <button class="text-3xl mt-[-5px]" @click="removeNumber(index)">-</button>
                 <div class="w-1/5 text-center">{{ item.quantity }}</div>
                 <button class="text-3xl mt-[-5px]" @click="addNumber(index)">+</button>
            </div>
        </div>  
    </div>
    <div class="flex justify-end flex-wrap">
        <h2 class="text-2xl text-end font-bold w-full flex justify-end ">商品數量: 
          <div >
            {{  totalQuantity }}
          </div>
        </h2>
        <h2 class="text-2xl text-end font-bold w-full flex justify-end ">商品總金額:$ 
          <div > 
            {{ totalPrice }}
          </div>
        </h2>
       
    </div>
    <div class="flex justify-between gap-4 mt-20">
        <RouterLink to="/" >
          <allBtn content="回上一頁繼續購買" bg-color="bg-[#8c5046]" />
        </RouterLink>
            <RouterLink to="/Checkbuy" @click="backBtn()">
              <allBtn content="確認購買" bg-color="bg-[#50468c]" @click="saveBuy()"/>
            </RouterLink>
    </div>
</div>
    </div>
</template>