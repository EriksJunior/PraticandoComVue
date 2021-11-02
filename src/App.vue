<template>
  <div id="container">
    <div id="appNav">
      <Navigation />
    </div>

    <div class="container">
      <FormCliente />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from "@/components/nav/nav.vue";
import FormCliente from "@/components/FormCliente/formCliente.vue";

export default {
  name: "App",
  components: {
    Navigation,
    FormCliente,
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
