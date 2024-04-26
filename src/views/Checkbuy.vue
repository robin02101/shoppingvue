<script >
import allBtn from '@/components/allBtn.vue';
import inputText from '@/components/inputText.vue';
import { registerRuntimeCompiler } from 'vue';
export default {
    components: {
    
    allBtn,
    inputText,
  },
  data() {
   return{
   
    idArr:[],
    nameValue:'',
    phoneValue:'',
    addaddressValue:'',
    emailValue:'',
    rule01:'',
    rule02:'',
   }
  },
  mounted(){
     
    },

  methods:{
    addName(e){
      this.nameValue = e.target.value;
    },
    addPhone(e){
      this.phoneValue = e.target.value;
    },
    addaddress(e){
      this.addaddressValue = e.target.value;
    },
    addEmail(e){
      this.emailValue = e.target.value;
    },
    saveBuy(){
        if (this.nameValue === '' || this.phoneValue === '' || this.addaddressValue === '' || this.emailValue === ''|| this.rule01 === '' || this.rule02 === '' ) {
    
    alert('請輸入正確資訊');
    return;
  }
        if(this.rule01=='ture' && this.rule02=='ture'){
            this.idArr=[{
                name:this.nameValue,
            phone:this.phoneValue,
            address:this.addaddressValue,
            email:this.emailValue,
                buy:'信用卡',
                gogoro:'宅配',
            }];
        }else if(this.rule01=='ture' && this.rule02=='false'){
            this.idArr=[{
                name:this.nameValue,
            phone:this.phoneValue,
            address:this.addaddressValue,
            email:this.emailValue,
            buy:'信用卡',
            gogoro:'超商取貨',
            }];
        }
        else if(this.rule02=='ture' && this.rule01=='false' ){
            this.idArr=[{
                name:this.nameValue,
            phone:this.phoneValue,
            address:this.addaddressValue,
            email:this.emailValue,
            buy:'貨到付款',
                gogoro:'宅配',
            }];
        }else{
            this.idArr=[{
            name:this.nameValue,
            phone:this.phoneValue,
            address:this.addaddressValue,
            email:this.emailValue,
            buy:'貨到付款',
            gogoro:'超商取貨',       }];
        }
        localStorage.setItem('idArr', JSON.stringify(this.idArr));
    },
   
    checkBox01(){
        this.rule01='ture';
    },
    checkBox02(){
        this.rule01='false';
    },
    checkBox03(){
        this.rule02='ture';
    },
    checkBox04(){
        this.rule02='false';
    },
    backBtn(){
        if (this.nameValue === '' || this.phoneValue === '' || this.addaddressValue === '' || this.emailValue === ''|| this.rule01 === '' || this.rule02 === '' ){
            this.$router.push('/Checkbuy');
        }
    },
  },
}
</script>

<template>
<div class="w-full p-3 px-5">
    <div>
        <h1 class="mb-3 text-3xl font-bold">購買確認及填寫資訊</h1>
    </div>
   
        <form>
         
            <inputText content="姓名" required @change = "(e) =>addName(e)"/>
            <inputText content="電話" required @change = "(e) =>addPhone(e)"/>
            <inputText content="地址" required @change = "(e) =>addaddress(e)"/>
            <inputText content="電子信箱" required @change = "(e) =>addEmail(e)"/>

            <div class="mb-6 px-5">
                <label for="paymentMethod" class="block mb-2 text-lg font-bold">付款方式</label>
                <div class="flex gap-5">
                    <div class="flex items-center">
                        <input type="radio" name="1" class="mr-2" @click=" checkBox01()">
                        <label for="paymentMethod1">信用卡</label>
                    </div>
                    <div class="flex items-center">
                    <input type="radio" name="1" class="mr-2" @click=" checkBox02()">
                    <label for="paymentMethod2">貨到付款</label>
                    </div>
                </div>
            </div>
            <div class="mb-6 px-5">
                <label for="shippingMethod" class="block mb-2 text-lg font-bold">運送方式</label>
                <div class="flex gap-5">
                    <div class="flex items-center">
                        <input type="radio" name="2" class="mr-2" @click="checkBox03()">
                        <label for="shippingMethod1">宅配</label>
                    </div>
                    <div class="flex items-center">
                        <input type="radio" name="2" class="mr-2" @click="checkBox04()">
                        <label for="shippingMethod2">超商取貨</label>
                    </div>
                </div>
            </div>
        </form>
        <div class="flex justify-end flex-wrap mb-5" v-for="(item,index) in buyArr" :key="item.id">
            <h2 class="text-2xl font-bold w-full text-end">商品數量:{{ item.quantity }}</h2>
            <h2 class="text-2xl font-bold w-full text-end">商品金額:${{ item.price * item.quantity}} </h2>
        </div>
        <div class="w-full flex justify-between">
            <RouterLink to="/Cart"><allBtn content="回上一頁繼續加購" bg-color="bg-[#8c5046]"/></RouterLink>
            <RouterLink to="/Final" @click="backBtn()"><allBtn content="確認送出" bg-color="bg-[#50468c]" @click="saveBuy()"/></RouterLink>
        </div>
</div>

</template>