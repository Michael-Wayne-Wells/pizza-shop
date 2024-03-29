//Backend
Customer = function(name, phone, address) {
  this.name = name,
  this.phone = phone,
  this.address = address
};
PizzaTotal = function() {
  this.pizzaPrice = [],
  this.pizzaOrder = [],
  this.pizzaId = 0
};
PizzaTotal.prototype.addPizza = function(pizza, size, toppings, price) {
  pizza.id = this.assignId();
  this.pizzaOrder.push(size, toppings, price);
};
PizzaTotal.prototype.assignId = function() {
  this.pizzaId += 1;
  return this.pizzaId;
};
PizzaTotal.prototype.orderTotal = function() {
  let orderTotal = 0;
  for(i=0;i<this.pizzaPrice.length;i++) {
    orderTotal += this.pizzaPrice[i]
  };
  return orderTotal;
};
Pizza = function(size, toppings) {
  this.size = size,
  this.toppings = toppings,
  this.price = 0
};
Pizza.prototype.priceCalculator = function() {
  toppingTotal = this.toppings.length;
  this.price = this.size + toppingTotal;
  pizzaTotal.pizzaPrice.push(this.price);
};
//UI
Customer.prototype.submitOrder = function(customer) {
  var orderDetails = $('#delivery-details')
  $('#submit-order').hide();
  $('.pre-submit').hide();
  $('.order-confirmation').show();
  Object.keys(customer).forEach(function(key) {
    orderDetails.append('<li>' + customer[key] + '</li>')
  })
}
PizzaTotal.prototype.pizzaCartDisplay = function(pizza, pizzaTotal) {
  $("#order-details").append("<li id=" + pizzaTotal.pizzaId + ">$"+pizza.price+" | "+pizza.size+" inch pizza with: cheese "+pizza.toppings.join(' ')+"</li>");
  $('#cost').text("$" + pizzaTotal.orderTotal());
  $('.show-order').show();
};
let pizzaTotal = new PizzaTotal();
$(document).ready(function() {
  $('form#build').submit(function(event) {
    event.preventDefault();
    let toppings = [];
    $.each($("input[name='toppings']:checked"), function(){
      toppings.push($(this).val());
    });
    let size = parseInt($('#size').val());
    $('#size').val('13');
    $('input[type="checkbox"]').prop('checked', false);;
    let pizza = new Pizza(size, toppings);
    let price = pizza.priceCalculator();
    pizzaTotal.addPizza(size, toppings, price);
    pizzaTotal.pizzaCartDisplay(pizza, pizzaTotal);
  });
  $('#checkout').click(function(event) {
    event.preventDefault();
    $('#submit-order').show();
    $('#customer-order-input').hide();
  });
  $('form#submit-order').submit(function(event) {
    event.preventDefault();
    let userName = $('#name-input').val();
    let userAddress = $('#address-input').val();
    let userPhone = $('#phone-input').val();
    let customer = new Customer(userName, userAddress, userPhone);
    customer.submitOrder(customer);
  });
});
