(function(){

'use strict';

function createData(obj) {

    var data = obj;

    return {

      get: function(key) {
        return data[key] || null;
      },

       set: function(key, value) {
         if (!key || !value) {
           throw new Error('Sprawdz czy klucz i wartosc zostaly podane');
         }
         data[key] = value;
       }
    }
}


var data = createData({});

data.set("name", "Janek");
// data.set('janek');
// data.set(null, 'janek');

console.log( data.get("name") );

})();
