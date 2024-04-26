<script>



export default {
  // 父層傳入的參數
  props: {
    // content: String,
    content: {
      type: [String, Number],
      required: true,
      default: '',
    },
    bgColor: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
  },
};
</script>

<template>

    <div class="flex justify-center items-center  text-white rounded-md px-4 py-1 cursor-pointer" :class="bgColor">
        {{ content }}
    </div>
</template>
