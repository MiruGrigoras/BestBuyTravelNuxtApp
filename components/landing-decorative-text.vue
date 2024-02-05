<template>
  <div class="frame-container">
    <p class="frame-text">IMAGINE A PLACE WHERE YOU CAN BE YOURSELF.</p>
  </div>
</template>
<script>
export default {
  props: {
    position: {
      type: String,
      default: "up",
      validator: function (value) {
        return ["up", "down"].includes(value);
      },
    },
  },
};
</script>
<style>
.frame-container {
  position: relative;
  display: inline-block;
  margin: 50px; /* Adjust as needed */
  padding: 20px; /* Adjust as needed */
}

.frame-text {
  font-family: "Arial", sans-serif;
  font-size: 24px;
  color: white;
  text-align: center;
  position: relative;
  z-index: 1;
}

.frame-container::before,
.frame-container::after {
  content: "";
  position: absolute;
  background-color: white;
  z-index: 0;
}

.frame-container::before {
  top: 20px;
  bottom: 0;
  left: 0;
  width: 2px;
  box-shadow: 0 20px 0 0 white, 0 -20px 0 0 white; /* Adjust shadow size to change the length of the lines */
}

.frame-container::after {
  top: 0;
  left: 20px;
  right: 0;
  height: 2px;
  box-shadow: 20px 0 0 0 white, -20px 0 0 0 white; /* Adjust shadow size to change the length of the lines */
}
</style>
