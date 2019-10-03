<template>
  <div class="componente">
    <h2>As Informações de Usuário</h2>
    <p>Vários detalhes...</p>
    <p>
      Nome do usuário
      <strong>{{inverterNome()}}</strong>
    </p>
    <p>Idade do usuário <strong>{{idade}}</strong></p>
    <button @click="reiniciarNome">Reiniciar nome</button>
    <button @click="reiniciarFn">Reiniciar nome (callback)</button>
  </div>
</template>

<script>
import barramento from '@/barramento'

export default {
  props: {
    nome: {
      type: String,
      //   required: true
      //   default: function() {
      //     return Array(10)
      //       .fill(0)
      //       .join(",");
      //   }
      default: "Anonimo"
    },
    reiniciarFn: Function,
    idade: Number
  },
  methods: {
    inverterNome() {
      return this.nome
        .split("")
        .reverse()
        .join("");
    },
    reiniciarNome() {
        this.nome = 'Pedro'
        this.$emit('nomeMudou', this.nome)
    }
  },
  created() {
      barramento.quandoIdadeMudar(idade => {
          this.idade = idade
      })
  }
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
