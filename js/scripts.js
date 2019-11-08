//Backend

Customer = function(name, address, phone) {
  this.name = name,
  this.address = address,
  this.phone = phone
};



Pizza = function(size, toppings) {
  this.size = size,
  this.toppings = toppings
  this.pizzaOrder = []
};

Pizza.prototype.priceCalculator = function() {
  toppingTotal = this.toppings.length;
  var pizzaTotal = this.size + toppingTotal;
  this.pizzaOrder.push(pizzaTotal)
  return pizzaTotal
};

Pizza.prototype.orderTotal = function() {
  let orderTotal = 0
  for(i=0;i<this.pizzaOrder.length;i++) {
    orderTotal += this.pizzaOrder[i]
  };
  return orderTotal;
};
//UI

$(document).ready(function() {

  $('form').submit(function(event) {
    event.preventDefault();
    $(".order").show();
    // $(".build").hide();
    var userName = $('#name').val();
    var userAddress = $('#address').val();
    var userPhone = $('#phone').val();
    var customer = new Customer(userName, userAddress, userPhone)

    var toppings = [];
            $.each($("input[name='toppings']:checked"), function(){
                toppings.push($(this).val());
            });
    var size = parseInt($('#size').val());
$('#size').val('');
$('#toppings').val('');


    var pizza = new Pizza(size, toppings);
    var price = pizza.priceCalculator();
    var customer = new Customer(userName, userAddress, userPhone)


    $('#cost').text("$" + pizza.orderTotal());

  });

});
