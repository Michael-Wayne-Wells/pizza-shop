//Backend
Customer = function(name, phone, address) {
  this.name = name,
  this.phone = phone,
  this.address = address
}
PizzaTotal = function() {
  this.pizzaPrice = [];
  this.pizzaOrder = [],
  this.pizzaId = 0
};

PizzaTotal.prototype.addPizza = function(size, topppings, price) {
  pizza.id = this.assignId(),
  this.pizzaOrder.push(size, toppings, price);
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

PizzaTotal.prototype.orderTotal = function() {
  let orderTotal = 0
  for(i=0;i<this.pizzaPrice.length;i++) {
    orderTotal += this.pizzaPrice[i]
  };
  return orderTotal;
};


Pizza = function(size, toppings) {
  this.size = size,
  this.toppings = toppings
  this.price = 0;

};

Pizza.prototype.priceCalculator = function() {
  toppingTotal = this.toppings.length;
  this.price = this.size + toppingTotal;
  pizzaPricce.push(this.price);
};
//UI

Pizza.prototype.pizzaCartDisplay = function() {
  $("#pizza-cart").append("<li>$" + this.price + "—" + this.size + " inch pizza with: cheese " + this.toppings.join(' ') + "</li>");
  $('#cost').text("$" + pizzaTotal.orderTotal());
};

function checkout(pizzaId) {
  var pizza = pizzaTotal.findPizza(pizzaId);

  $("#order-details").html(pizzaTotal.pizzaOrder[0] + "—" + pizzaTotal.pizzaOrder[1] + "\" pizza with Cheese" + pizzaTotal.pizzaOrder[2]);
  $(".last-name").html(contact.toppings);
  $(".phone-number").html(contact.phoneNumber);
  var buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" + contact.id + ">Delete</button>");
}

let pizzaTotal = new PizzaTotal();
$(document).ready(function() {
  $('form#build').submit(function(event) {
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
    pizzaTotal.addPizza(size, toppings, price);
    pizza.pizzaCartDisplay();
  });
  //
  $('form#submit-order').submit(function(event) {
    event.preventDefault();

    $('#cost').text("$" + pizzaTotal.orderTotal());
    let userName = $('#name').val();
    let userAddress = $('#address').val();
    let userPhone = $('#phone').val();
    let customer = new Customer(userName, userAddress, userPhone)

  });
});
