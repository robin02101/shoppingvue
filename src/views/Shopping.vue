
<script >
import {mapActions} from 'pinia';
import {useCounterStore}from '@/stores/counter';
export default {

  data() {
    return {
        rule:1,
        arr:[],
        buyArr:[],
        arr: [{"id":1,"name":"Bytecard","pic": " https://fakeimg.pl/300/", "description":"Immunization not carried out because of caregiver refusal","price":954,"quantity":1},
{"id":2,"name":"Alphazap","pic": " https://fakeimg.pl/300/", "description":"Unspecified symptoms and signs involving cognitive functions following other cerebrovascular disease","price":776,"quantity":1},
{"id":3,"name":"Ronstring","pic": " https://fakeimg.pl/300/", "description":"Unspecified fracture of shaft of unspecified tibia, initial encounter for open fracture type I or II","price":670,"quantity":1},
{"id":4,"name":"Bitchip","pic": " https://fakeimg.pl/300/", "description":"Displaced fracture of coracoid process, right shoulder, subsequent encounter for fracture with delayed healing","price":346,"quantity":1},
{"id":5,"name":"Andalax","pic": " https://fakeimg.pl/300/", "description":"Nondisplaced oblique fracture of shaft of left radius, sequela","price":515,"quantity":1},
{"id":6,"name":"Hatity","pic": " https://fakeimg.pl/300/", "description":"Dislocation of L4/L5 lumbar vertebra, subsequent encounter","price":707,"quantity":1},
{"id":7,"name":"Ronstring","pic": " https://fakeimg.pl/300/", "description":"Unspecified fracture of upper end of right radius, subsequent encounter for closed fracture with delayed healing","price":640,"quantity":1},
{"id":8,"name":"Konklab","pic": " https://fakeimg.pl/300/", "description":"Partial physeal arrest, left proximal humerus","price":534,"quantity":1},
{"id":9,"name":"Lotlux","pic": " https://fakeimg.pl/300/", "description":"Contracture, unspecified shoulder","price":705,"quantity":1},
{"id":10,"name":"Aerified","pic": " https://fakeimg.pl/300/", "description":"Other disorders of vitreous body","price":826,"quantity":1},
{"id":11,"name":"Bamity","pic": " https://fakeimg.pl/300/", "description":"Mechanical complication of coronary artery bypass graft and biological heart valve graft","price":651,"quantity":1},
{"id":12,"name":"Bigtax","pic": " https://fakeimg.pl/300/", "description":"Other mechanical complication of carotid arterial graft (bypass), sequela","price":851,"quantity":1},
{"id":13,"name":"Domainer","pic": " https://fakeimg.pl/300/", "description":"Other osteoporosis with current pathological fracture, right shoulder, sequela","price":418,"quantity":1},
{"id":14,"name":"Tresom","pic": " https://fakeimg.pl/300/", "description":"Exposure to reduction in atmospheric pressure while surfacing from underground, initial encounter","price":754,"quantity":1},
{"id":15,"name":"Duobam","pic": " https://fakeimg.pl/300/", "description":"Displaced unspecified fracture of left great toe, initial encounter for closed fracture","price":7686,"quantity":1},
{"id":16,"name":"Duobam","pic": " https://fakeimg.pl/300/", "description":"Mixed cellularity Hodgkin lymphoma, spleen","price":788,"quantity":1},
{"id":17,"name":"Lotstring","pic": " https://fakeimg.pl/300/", "description":"Lead-induced gout, unspecified site","price":3115,"quantity":1},
{"id":18,"name":"Tres-Zap","pic": " https://fakeimg.pl/300/", "description":"Complete traumatic transphalangeal amputation of other and unspecified finger(s)","price":2734,"quantity":1},
{"id":19,"name":"Zaam-Dox","pic": " https://fakeimg.pl/300/", "description":"Nondisplaced segmental fracture of shaft of right femur","price":415,"quantity":1},
{"id":20,"name":"Voyatouch","pic": " https://fakeimg.pl/300/", "description":"Other fracture of shaft of left ulna, subsequent encounter for closed fracture with routine healing","price":398,"quantity":1}],
    }
  },
  computed:{


},
  mounted(){
        this.fetchData();
      if(localStorage.getItem('buyArr')){
      this.buyArr = JSON.parse(localStorage.getItem('buyArr'));

    }
          },
  methods:{
    // ...mapActions(useCounterStore , ['addCount']),
    // fetchData(){
    //   fetch('./MOCK_DATA.json')
    //     .then(response => response.json())
    //     .then(data => {
    //       this.arr = data;
    //     })
    // },
    rule01(){
        this.rule = 1;
      },
      rule02(){
        this.rule = 2;
      },
      addNumber(index){
        this.arr[index].quantity++;
        localStorage.setItem('arr', JSON.stringify(this.arr));
      },
      removeNumber(index){
        if(this.arr[index].quantity >1){
          this.arr[index].quantity --;
        }
        localStorage.setItem('arr', JSON.stringify(this.arr));
      },
      buyCart(index){
    //     if (index < 0 || index >= this.arr.length) {
    //     console.error("Invalid index");
    //     return;
    // }


    let existingItemIndex = this.buyArr.findIndex(item => item.id === this.arr[index].id);

    if (existingItemIndex !== -1) {
      
        this.buyArr[existingItemIndex].quantity += this.arr[index].quantity;
    } else {
          this.buyArr.push({
            id: this.arr[index].id,
            name:this.arr[index].name,
            price:this.arr[index].price,
            quantity: this.arr[index].quantity
        });
    }
      this.addCount(this.buyArr.length);
            localStorage.setItem('buyArr', JSON.stringify(this.buyArr));
            
      },
  },

}
</script>

<template>
            <div class="nav p-3 cursor-pointer ">
                <!-- 標題 -->
                <h1 class="text-3xl font-black">商品列表</h1>
                <!-- 切換頁面欄 -->
                <div class="flex justify-end" v-if="rule === 1">
                    <img src="../assets/image/1-2.png">
                    <img src="../assets/image/2-1.png" @click="rule02()">
                </div>
                <div class="flex justify-end" v-if="rule === 2">
                    <img src="../assets/image/1-1.png" @click="rule01()">
                    <img src="../assets/image/2-2.png">
                    
                </div>
            </div>
            
            <!-- 商品頁 -->
            <div class="w-full flex flex-wrap justify-center pr-16 pl-16"  v-if="rule === 1">
                <div class="w-60 border-2 border-black rounded-lg overflow-hidden  mr-2 ml-2 mb-4" v-for="(item,index) in arr" :key="item.id">
                    <img src="../assets/image/300x300_0.png">
                    <div class="h-[200px] pt-2 pl-2">
                        <h2>商品名稱:{{ item.name }}</h2><br>
                        <p>商品介紹:{{ item.description }}</p>
                        <p>價格:{{ item.price}}</p>
                    </div>
                    <div class="h-[70px] flex">
                         數量:
                        <div class="w-[150px] h-[30px] border-[1px] rounded-lg border-black flex justify-around ml-6">
                            <button class="text-3xl mt-[-5px]" @click="removeNumber(index)">-</button>
                            <div class="w-1/5 text-center">{{ item.quantity }}</div>
                            <button class="text-3xl mt-[-5px]" @click="addNumber(index)">+</button>
                        </div>
                    </div>

                    <div class="flex justify-center bg-slate-700">
                        <button class="text-white" @click="buyCart(index)">加入購物車</button>
                    </div>
                </div>
               
            </div>

            <div class="w-full " v-if="rule===2">
      <div class="flex border-t-2 border-b-2 mb-3 ml-8 mr-8">
        <div class="w-1/5 text-center">商品圖片</div>
        <div class="w-1/5 text-center">商品名稱</div>
        <div class="w-1/5 text-center">商品描述</div>
        <div class="w-1/5 text-center">價錢</div>
        <div class="w-1/5"></div>
      </div>
          <div class="flex mb-5 ml-8 mr-8" v-for="(item,index) in arr" :key="item.id">
            <div class=""><img  class="object-cover h-full" src="../assets/image/300x300_0.png" alt=""></div>
            <div class="w-1/5 flex justify-center items-center ">{{ item.name }}</div>
            <div class="w-1/5 flex justify-center items-center">{{ item.description }}</div>
            <div class="w-1/5 flex justify-center items-center">{{ item.price}}</div>
            <div class="flex w-1/5 flex-wrap items-center justify-center">
                <button class="text-3xl mt-[-5px]" @click="removeNumber(index)">-</button>
            <div class="w-1/5 text-center">{{ item.quantity }}</div>
            <button class="text-3xl mt-[-5px]" @click="addNumber(index)">+</button>
            <button class="w-full bg-violet-900 text-white" @click="buyCart(index)">加入購物車</button>
            </div>
          </div>

    </div>
</template>