const {createApp} = Vue;

createApp({

  data(){
    return{
      name: 'Mario',
      surname: 'Rossi',
      accentColor: 'text_red',
      pathImg: ''
    }
  },

  methods:{

  }
}).mount('#app')