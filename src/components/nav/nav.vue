<template>
  <div>
    <div id="containerNav">
      <b-nav vertical class="w-45">
        <button
          class="icon"
          style="font-family: Comic Sans MS, Comic Sans, cursive"
        >
          Cadastro de Pet<img src="@/assets/dog.png" width="50" height="45" />
        </button>

        <button
          class="icon"
          style="font-family: Comic Sans MS, Comic Sans, cursive"
        >
          Cadastro Cliente<img
            src="@/assets/usuario.png"
            width="50"
            height="45"
          />
        </button>

        <button
          class="icon"
          style="font-family: Comic Sans MS, Comic Sans, cursive"
        >
          Vendas<img src="@/assets/cesta.png" width="50" height="45" />
        </button>

        <button
          class="icon"
          style="font-family: Comic Sans MS, Comic Sans, cursive"
        >
          Caixa<img src="@/assets/caixa.png" width="50" height="45" />
        </button>
      </b-nav>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.icon {
  color: rgb(0, 0, 0);
  border-radius: 5px;
  width: 95%;
  cursor: pointer;
  height: 55px;
  margin-left: 5px;
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.icon:hover {
  background-color: rgb(22, 22, 92);
  border-radius: 5px;
  width: 95%;
  cursor: pointer;
  color: white;
}

#containerNav {
  margin-top: 10px;
}
</style>