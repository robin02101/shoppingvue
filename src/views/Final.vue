<script >
export default {

  data() {
    return {
    idArr:[],
    buyArr:[],
    checkArr:[],
    }
  },
  mounted(){
      if(localStorage.getItem('checkArr')){
      this.checkArr = JSON.parse(localStorage.getItem('checkArr'));
    }
    if(localStorage.getItem('idArr')){
      this.idArr = JSON.parse(localStorage.getItem('idArr'));
    }
    },
  methods:{
    remove(){
      localStorage.removeItem('idArr');
      localStorage.removeItem('checkArr');
      localStorage.removeItem('buyArr');
    },
  },

}
</script>

<template>
  <div class="w-full p-3 px-5">
      <div>
        <h1 class="mb-3 text-3xl font-bold">完成購買 </h1>
      </div>
      <div class="mb-6 px-5">
        <div class="grid-table">
          <div class="grid-thead">
            <div class="grid-cols-4 grid border-y border-main-deep text-main-deep font-bold py-1 gap-x-3" >
              <div class="gird-th text-center">商品圖片</div>
              <div class="gird-th">商品名稱</div>
              <div class="gird-th text-center">價錢</div>
              <div class="gird-th text-center">數量</div>
            </div>
          </div>
          <div class="grid-tbody">
            <div class="grid-tr grid-cols-4 grid py-1 border-b border-main-deep min-h-[80px] gap-x-3" v-for="(item,index) in checkArr" :key="item.id">
              <div class="flex justify-center">
                <img src="../assets/image/300x300_0.png" alt="商品圖示" class="w-[100px] h-full ">
              </div>
              <div class="flex items-center">{{ item.name }}</div>
              <div class="gird-td flex justify-center items-center"> ${{ item.price * item.quantity}}</div>
              <div class="gird-td flex justify-center items-center">
                <div class="card-btns-list flex-col">{{item.quantity}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  <div class="mb-6 px-5">
    <div class="grid-table">
      <div class="grid-thead">
        <div class="grid-cols-6 grid border-y border-main-deep text-main-deep font-bold py-1 gap-x-3" >
          <div class="gird-th">姓名</div>
          <div class="gird-th">電話</div>
          <div class="gird-th">地址</div>
          <div class="gird-th">付款方式</div>
          <div class="gird-th">電子信箱</div>
          <div class="gird-th">運送方式</div>
        </div>
      </div>
        <div class="grid-tbody">
            <div class="grid-tr grid-cols-6 grid py-1 border-b border-main-deep min-h-[80px] gap-x-3" v-for="(item,index) in idArr" :key="item.id">
              <div class="flex items-center">{{ item.name }}</div>
              <div class="flex items-center">{{ item.phone }}</div>
              <div class="flex items-center">{{ item.address }}</div>
              <div class="flex items-center">{{ item.buy}}</div>
              <div class="flex items-center">{{ item.email }}</div>
              <div class="flex items-center">{{ item.gogoro }}</div>
            </div>
        </div>
      </div>
      <RouterLink to="/" @click="remove()"><div class="flex justify-center items-center bg-[#50468c] text-white rounded-md px-4 py-1 cursor-pointer">
        <span> 回首頁 </span>
      </div></RouterLink>
    </div>
</template>