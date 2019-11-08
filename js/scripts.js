//Backend

PizzaTotal = function() {
  this.pizzaOrder = [],
  this.pizzaId = 0
};

PizzaTotal.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId(),
  this.pizzaOrder.push(pizza)
}

PizzaTotal.prototype.assignId = function() {
  this.pizzaId += 1;
  return this.pizzaId;
}

PizzaTotal.prototype.findPizza = function(id) {
  for (let i=0; i< this.pizzaOrder.length; i++) {
    if (this.pizzaOrder[i]) {
      if (this.pizzaOrder[i].id == id) {
        return this.pizzaOrder[i];
      }
    }
  };
  return false;
}

PizzaTotal.prototype.deletePizza = function(id) {
  for (let i=0; i< this.pizzaOrder.length; i++) {
    if (this.pizzaOrder[i]) {
      if (this.pizzaOrder[i].id == id) {
        delete this.pizzaOrder[i];
        return true;
      }
    }
  };
  return false;
}

Pizza = function(size, toppings) {
  this.size = size,
  this.toppings = toppings

};

Pizza.prototype.priceCalculator = function() {
  toppingTotal = this.toppings.length;
  let pizzaTotal = this.size + toppingTotal;
  return pizzaTotal
};

PizzaTotal.prototype.orderTotal = function() {
  let orderTotal = 0
  for(i=0;i<this.pizzaOrder.length;i++) {
    orderTotal += this.pizzaOrder[i]
  };
  return orderTotal;
};
//UI

let pizzaTotal = new PizzaTotal();
$(document).ready(function() {
  $('form#build').submit(function(event) {
    console.log('hi');
    event.preventDefault();
    let toppings = [];
    $.each($("input[name='toppings']:checked"), function(){
      toppings.push($(this).val());
    });
    let size = parseInt($('#size').val());
    $('#size').val('');
    $('#toppings').val('');
    let pizza = new Pizza(size, toppings);
    let price = pizza.priceCalculator();
    let newPizza = [pizza, price];
    pizzaTotal.addPizza(newPizza);
    // pizzaOrder.push(pizza.size, pizza.toppings, price)
    $('#cost').text("$" + pizzaTotal.orderTotal());
  console.log(newPizza);
  });
// 
//   $('form#submit-order').submit(function(event) {
//     event.preventDefault();
//     // $(".order").show();
// $('#cost').text("$" + pizzaTotal.orderTotal());
//     // let userName = $('#name').val();
//     // let userAddress = $('#address').val();
//     // let userPhone = $('#phone').val();
//     // // let pizzaOrder = [pizza.size, pizza.toppings, price]
//     // let customer = new Customer(userName, userAddress, userPhone)
// $('#cost').text("$" + customer.orderTotal());
//
//
//   });

  //
  // $('#cost').text("$" + pizza.orderTotal());



});
