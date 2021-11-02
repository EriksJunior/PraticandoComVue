<template>
  <div id="container">
    <div id="appNav">
      <Navigation />
    </div>

    <router-view />
  </div>
</template>

<script>
import Navigation from "@/components/nav/nav.vue";

export default {
  name: "App",
  components: {
    Navigation,
  },
};
</script>

<style>
#container {
  width: 100%;
  display: flex;
  background-color: rgba(1, 9, 77, 0.712);
}

#appNav {
  background-color: rgba(75, 24, 24, 0.938);
  width: 22%;
  height: 100vh;
}
</style>
