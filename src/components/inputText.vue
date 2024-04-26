<script>
export default {
  props: {
    valueData: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
    required: Boolean,
  },
  
  data() {
    return {
     
    };
  },
  watch: {
    
  },
};
</script>

<template>
  <div class="mb-6 px-5">
                <label for="phone" class="block mb-2 text-lg font-bold">{{content}}
                    <span v-show="required" class="text-red-500">*</span>
                </label>
                <input type="text" id="phone" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" required="">
            </div>
</template>