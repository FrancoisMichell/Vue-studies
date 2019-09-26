new Vue({
  el: '#desafio',
  data: {
    nome: 'François',
    idade: 24,
    image: 'https://image.tmdb.org/t/p/original/AgDZ0yW2Me7pB7ZLVb4ynbBxRZp.jpg'
  },
  methods: {
    random() {
      return Math.random()
    }
  }
})