var Character = Backbone.Model.extend({
  defaults: {
    name: '',
    img_url: '',
    coins: 0
  },

  getCoin: function(){
    this.save('coins', this.get('coins') + 1);
  }
});

var CharacterCollection = Backbone.Collection.extend({
  model: Character,
  url: '/characters'
});