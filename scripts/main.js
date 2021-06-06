
// open and close closable menu items on click
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function goToCart() {
  var checkout = document.getElementById("checkout");
  var shop = document.getElementById("shop");
  checkout.style.display = "grid";
  shop.style.display = "none";
}

function goToProducts() {
  var checkout = document.getElementById("checkout");
  var shop = document.getElementById("shop");
  checkout.style.display = "none";
  shop.style.display = "grid";
}
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct2) {
    var s2 = document.getElementById(slct2);

	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
    restrictions = document.getElementsByName("dietSelectOption");
    var restriction;
    for (i = 0; i < restrictions.length; i++) {
      if (restrictions[i].checked) {
        restriction = restrictions[i].value;
      }
    }

	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, restriction);
    var checkbox = document.getElementById("organic");
    if (checkbox.checked) {
      var organicProducts = [];
      for (let i = 0; i < optionArray.length; i++) {
        if (optionArray[i].organic == true) {
          organicProducts.push(optionArray[i]);
        }
      }
      optionArray = organicProducts;
    }

    // sort the product list in price order
    for (i = 0; i < optionArray.length - 1; i++) {
      for (j = i + 1; j < optionArray.length; j++) {
        if (optionArray[i].price > optionArray[j].price) {
          var temp = optionArray[j];
          optionArray[j] = optionArray[i];
          optionArray[i] = temp;
        }
      }
    }


	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>

	for (i = 0; i < optionArray.length; i++) {

		var product = optionArray[i];
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = product.name;
		s2.appendChild(checkbox);

		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = product.name;
		label.appendChild(document.createTextNode(product.name + " $" + product.price));
		s2.appendChild(label);

		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));

    var prodInfo = document.getElementById("productInfo");
    if (optionArray.length > 0){
      prodInfo.innerHTML = "We preselected products based on your restrictions.";
    } else {
      prodInfo.innerHTML = "Select a filter to see products";
    }
	}
}

// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph)
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){

	var ele = document.getElementsByName("product");
	var chosenProducts = [];

	var c = document.getElementById('displayCart');
	c.innerHTML = "";

	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) {
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
  var numOfItems = document.getElementById("numOfItems");
  numOfItems.innerHTML = chosenProducts.length;

	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is $" + getTotalPrice(chosenProducts)));

}
