$(function(){
  var characters = new CharacterCollection();
  var formView = new FormView({collection: characters});
  var listView = new ListView({collection: characters});
  characters.fetch();
});
