<template>
  <!-- 
    In a real application such as AQID we would have a lot to consider
    when building a component such as accessibility, document structure etc.
    Here we don't mind about structure so stick to using the following elements:
    - <div>
    - <img />
    - <p>
  -->
  <div>
    <!-- 
      1. Add your profile image
      2. Add your name
      3. Add your role
    -->
    <img src="" alt="" />
    <p>Jamie Halvorson</p>
    <p>Frontend Developer</p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "",
      required: false
    },
    role: {
      type: String,
      default: "",
      required: false
    },
    avatar: {
      type: Object,
      default: () => ({
        url: '',
        alt: ''
      }),
      required: false
    }
  }
}
</script>

<style lang="scss">
  .profile {
    background: green;
  }
</style>
