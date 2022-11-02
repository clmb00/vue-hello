const {createApp} = Vue;

createApp({

  data(){
    return{
      name: 'Mario',
      surname: 'Rossi',
      accentColor: 'text_red',
      pathArray: ['blue_landscape', 'city_grey', 'cliff_sea', 'forest', 'underwater'],
      indexCarousel: 0,
      borderColor: 'border_red',
      showTextToggle: false
    }
  },

  methods:{

    changeColor(color){
      this.accentColor = 'text_' + color;
      this.borderColor = 'border_' + color;
    },

    changeCarousel(right){
      if(right){
        this.indexCarousel++;
        if(this.indexCarousel == this.pathArray.length) this.indexCarousel = 0;
      } else {
        this.indexCarousel--;
        if(this.indexCarousel == -1) this.indexCarousel = this.pathArray.length - 1;
      }
    }

  }
}).mount('#app')