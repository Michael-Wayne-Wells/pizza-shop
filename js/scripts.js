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

PizzaTotal.prototype.addPizza = function(pizza, size, toppings, price) {
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
  pizzaTotal.pizzaPrice.push(this.price);
};
//UI



// function displayPizzaOrder(ordersToDisplay) {
//   var ordersList = $("ul#order-details");
//   var htmlForOrderDetails = "";
//   ordersToDisplay.pizzaOrder.forEach(function(pizza) {
//     htmlForOrderDetails += "<li id=" + pizza.id + ">$" + this.price + "— Pizza" + "</li>";
//   });
//   ordersList.html(htmlForOrderDetails);
// };
Pizza.prototype.pizzaCartDisplay = function() {
  $("#order-details").html("<li id=" + pizzaTotal.pizzaId + ">$"+this.price+"—"+this.size+" inch pizza with: cheese "+this.toppings.join(' ')+"</li>");
  $('#cost').text("$" + pizzaTotal.orderTotal());
};


PizzaTotal.prototype.checkout = function(pizzaId) {
  var pizza = pizzaTotal.findPizza(pizzaId);
  var buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" + this.id + ">Delete</button>");
}
PizzaTotal.prototype.attachOrderListeners = function() {
  $("ul#order-details").on("click", "li", function() {
    pizzaTotal.checkout(this.pizzaId);
  });
  $("#buttons").on("click", ".deleteButton", function() {
    pizzaTotal.deletePizza(this.pizzaId);
    $("#show-pizza").hide();
    pizza.pizzaCartDisplay(pizzaTotal);
  });
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
    $('#size').val('');
    $('#toppings').val('');
    let pizza = new Pizza(size, toppings);
    let price = pizza.priceCalculator();
    pizzaTotal.addPizza(size, toppings, price);
    pizzaTotal.attachOrderListeners(pizza);
    pizza.pizzaCartDisplay(pizzaTotal);
  });
  //
  $('form#submit-order').submit(function(event) {
    event.preventDefault();

    $('#cost').text("$" + pizzaTotal.orderTotal());
    let userName = $('#name').val();
    let userAddress = $('#address').val();
    let userPhone = $('#phone').val();
    let customer = new Customer(userName, userAddress, userPhone);
    displayPizzaOrder(pizza);
  });
});
