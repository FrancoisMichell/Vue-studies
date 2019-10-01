<template>
  <div id="app">
    {{titulo}}
    <button @click="titulo += '#'">Alterar</button>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      titulo: "Teste Data usando vue JS!!"
    };
  }
};
</script>

<style>
#app {
  background-color: chocolate;
  color: #fff;
}
</style>