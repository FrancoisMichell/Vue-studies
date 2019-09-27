new Vue({
  el: '#projeto',
  data: {
    iniciado: false,
    fimDeJogo: false,
    jogador: 100,
    monstro: 100,
    mensagem: '',
    statusJogador: 'green',
    statusMonstro: 'green',
    logs: []
  },
  watch: {
    jogador() {
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
    monstro() {
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
      this.fimDeJogo = false
      this.resetar()
      this.iniciado = true
    },
    atacar() {
      const { usuario, monstro } = this.ataque()
      this.atualizaVida(usuario, monstro, false)
      this.geraLog('jogador', usuario, monstro)
    },
    ataqueEspecial() {
      const { usuario, monstro } = this.ataque()
      this.atualizaVida(usuario + 1, monstro, false)
      this.geraLog('jogador', usuario + 1, monstro)
    },
    curar() {
      const { usuario, monstro } = this.ataque()
      this.atualizaVida(usuario + 1, monstro, true)
      this.geraLog('cura', usuario + 1, monstro)
    },
    resetar() {
      this.logs = []
      this.iniciado = false
      this.jogador = 100
      this.monstro = 100
    },
    ataque() {
      const monstro = parseInt(Math.random() * 10) + 2
      const usuario = parseInt(Math.random() * 10) + 1
      return { usuario, monstro }
    },
    atualizaVida(usuario, monstro, cura) {
      this.jogador -= monstro
      if (cura) this.jogador + usuario > 100
        ? this.jogador = 100
        : this.jogador += usuario
      else this.monstro -= usuario
    },
    geraLog(acao, usuario, monstro) {
      this.logs.unshift({ bateu: acao, hit: usuario })
      this.logs.unshift({ bateu: 'monstro', hit: monstro })
    }
  }
})
