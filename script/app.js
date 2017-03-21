(function(){
var app = angular.module('store', []);

app.controller('MyController', function() {
this.products = gems;
});

var gems = [
{
 name: 'Dodecahedron',
 price: 2.95,
 description: '. . .',
 canpurchase:true,
 
},
{
 name: '"Pentagonal Gem',
 price: 5.95,
 description: '. . .',
 canpurchase:false,

},
];
})();
