<template>
    <div :class="['mb-4', 'alert', alertClass]">
      {{ msg }}
    </div>
  </template>
  
  <script setup>
  import { defineProps, ref, onMounted } from 'vue';

    let props = defineProps({
        type: String,
        msg: String,
    })

    // const visaible = ref(true);
  
  // Computed property to determine the alert class based on the type prop
    const alertClass = (() => {
        switch (props.type) {
            case 'success':
                return 'alert-success text-success';
            case 'info':
                return 'alert-info text-info';
            case 'warning':
                return 'alert-warning text-warning';
            case 'danger':
                return 'alert-danger text-danger';
            default:
                return '';
            }
    })();

    // onMounted(() => {
    //     setTimeout(() => {
    //         visible.value = false;
    //     }, 5000);
    // });
  </script>