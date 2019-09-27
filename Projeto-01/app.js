new Vue({
  el: '#projeto',
  data: {
    iniciado: false,
    fimDeJogo: false,
    jogador: 100,
    monstro: 100,
    mensagem: '',
    statusJogador:'green',
    statusMonstro:'green',
    logs: []
  },
  watch: {
    jogador(){
      if (this.jogador <= 0) {
        this.jogador = 0
        this.iniciado = false
        this.fimDeJogo = true
        this.mensagem = 'Você morreu!!!'
      } else if (this.jogador <= 20) {
        this.statusJogador = 'red'
      } else {
        this.statusJogador = 'green'
      }
    },
    monstro(){
      if (this.monstro <= 0) {
        this.monstro = 0
        this.iniciado = false
        this.fimDeJogo = true
        this.mensagem = 'Parabéns, você matou o monstro!!!'
      } else if (this.monstro <= 20) {
        this.statusMonstro = 'red'
      } else {
        this.statusMonstro = 'green'
      }
    }
  },
  methods: {
    iniciar() {
      this.logs = []
      this.fimDeJogo = false
      this.jogador = 100
      this.monstro = 100
      this.iniciado = true
    },
    atacar() {
      const hit_monstro = parseInt(Math.random() * 10) + 2
      const hit_usuario = parseInt(Math.random() * 10) + 1
      this.jogador -= hit_monstro
      this.monstro -= hit_usuario
      this.logs.unshift({bateu:'jogador', hit: hit_usuario})
      this.logs.unshift({bateu:'monstro', hit: hit_monstro})
    },
    ataqueEspecial() {
      const hit_monstro = parseInt(Math.random() * 10) + 2
      const hit_usuario = parseInt(Math.random() * 10) + 3
      this.jogador -= hit_monstro
      this.monstro -= hit_usuario
      this.logs.unshift({bateu:'jogador', hit: hit_usuario})
      this.logs.unshift({bateu:'monstro', hit: hit_monstro})
    },
    curar() {
      const hit_monstro = parseInt(Math.random() * 10) + 2
      const cura_usuario = parseInt(Math.random() * 10) + 2
      this.jogador -= hit_monstro
      this.jogador += cura_usuario
      this.logs.unshift({bateu:'cura', hit: cura_usuario})
      this.logs.unshift({bateu:'monstro', hit: hit_monstro})
    },
    desistir() {
      this.iniciado = false
      this.jogador = 100
      this.monstro = 100
    }
  }
})