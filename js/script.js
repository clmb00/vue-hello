const {createApp} = Vue;

createApp({

  data(){
    return{
      name: 'Mario',
      surname: 'Rossi',
      accentColor: 'text_red',
      pathImg: 'underwater',
      borderColor: 'border_red'
    }
  },

  methods:{

    changeColor(color){
      this.accentColor = 'text_' + color;
      this.borderColor = 'border_' + color;
    }

  }
}).mount('#app')