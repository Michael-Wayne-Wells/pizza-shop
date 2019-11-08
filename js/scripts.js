//Backend
Pizza = function(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.priceCalculator = function() {
  toppingTotal = this.toppings.length
  return this.size + toppingTotal;


};

//UI

$(document).ready(function() {

  $('form').submit(function(event) {
    event.preventDefault();
    $(".order").show();
    $(".build").hide();
    var toppings = [];
            $.each($("input[name='toppings']:checked"), function(){
                toppings.push($(this).val());
            });
    var size = parseInt($('#size').val());

    var pizza = new Pizza(size, toppings);
console.log(pizza);
    $('#cost').text("$" + pizza.priceCalculator());

  });

});
