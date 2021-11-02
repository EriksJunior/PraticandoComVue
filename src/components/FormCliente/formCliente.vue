<template>
  <div id="containerGeral">
    <div>
      <h3
        id="titleCliente"
        style="
          text-align: center;
          color: white;
          font-family: Comic Sans MS, Comic Sans, cursive;
        "
      >
        Cadastro de Cliente
      </h3>
    </div>
    <div id="containerFormCli">
      <form class="row">
        <div class="form-group col-sm-4">
          <input type="text" hidden class="form-control" />
          <label for="exampleInputEmail1" style="color: white">Nome:</label>
          <b-form-input
            id="input-live"
            size="sm"
            v-model="dadosCliente.nome"
            aria-describedby="input-live-help input-live-feedback"
            trim
            max="50"
          ></b-form-input>
        </div>

        <div class="form-group col-sm-4">
          <input type="text" hidden class="form-control" />
          <label for="exampleInputEmail1" style="color: white">Cpf/Cnpj:</label>
          <b-form-input
            id="input-live"
            size="sm"
            v-model="dadosCliente.cpfcnpj"
            aria-describedby="input-live-help input-live-feedback"
            trim
            max="50"
          ></b-form-input>
        </div>

        <div class="form-group col-sm-4">
          <input type="text" hidden class="form-control" />
          <label for="exampleInputEmail1" style="color: white">Endereço:</label>
          <b-form-input
            id="input-live"
            size="sm"
            v-model="dadosCliente.endereco"
            aria-describedby="input-live-help input-live-feedback"
            trim
            max="50"
          ></b-form-input>
        </div>

        <div class="form-group col-sm-4">
          <input type="text" hidden class="form-control" />
          <label for="exampleInputEmail1" style="color: white">Bairro:</label>
          <b-form-input
            id="input-live"
            size="sm"
            v-model="dadosCliente.bairro"
            aria-describedby="input-live-help input-live-feedback"
            trim
            max="50"
          ></b-form-input>
        </div>

        <div class="form-group col-sm-2">
          <input type="text" hidden class="form-control" />
          <label for="exampleInputEmail1" style="color: white">N°:</label>
          <b-form-input
            id="input-live"
            size="sm"
            v-model="dadosCliente.numero"
            trim
            max="50"
          ></b-form-input>
        </div>

        <div class="form-group col-sm-4">
          <input type="text" hidden class="form-control" />
          <label for="exampleInputEmail1" style="color: white">Cidade:</label>
          <b-form-input
            id="input-live"
            size="sm"
            v-model="dadosCliente.cidade"
            aria-describedby="input-live-help input-live-feedback"
            trim
            max="50"
          ></b-form-input>
        </div>

        <div class="form-group col-sm-2">
          <input type="text" hidden class="form-control" />
          <label for="exampleInputEmail1" style="color: white">UF:</label>
          <b-form-input
            id="input-live"
            size="sm"
            v-model="dadosCliente.uf"
            aria-describedby="input-live-help input-live-feedback"
            trim
            max="50"
          ></b-form-input>
        </div>

        <div class="form-group col-sm-3">
          <input type="text" hidden class="form-control" />
          <label for="exampleInputEmail1" style="color: white"
            >Aniversario</label
          >
          <b-form-input
            id="input-live"
            size="sm"
            type="date"
            v-model="dadosCliente.dataNasc"
            aria-describedby="input-live-help input-live-feedback"
            trim
            max="50"
          ></b-form-input>
        </div>
      </form>
      <div id="btnsCliente">
        <b-button variant="success" @click="salvar">Salvar</b-button>
        <b-button variant="danger" class="ml-5">Deletar</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "formCliente",
  data() {
    return {
      dadosCliente: {
        nome: "",
        cpfcnpj: "",
        endereco: "",
        bairro: "",
        numero: "",
        cidade: "",
        uf: "",
        dataNasc: "",
      },
    };
  },
  methods: {
    salvar() {
      console.log(this.dadosCliente);
    },
  },
};
</script>

<style>
#containerFormCli {
  padding: 30px;
  margin-top: 10px;
  border-radius: 50px;
  width: 90%;
  background-color: rgba(1, 9, 77, 0.288);
}

#btnsCliente {
  display: flex;
  justify-content: flex-end;
}

#titleCliente {
  margin-top: 10px;
}

#containerGeral #containerFormCli {
  float: right;
  margin-right: 55px;
}
</style>