// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
    lactoseFree: true,
    nutFree: true,
    organic: true,
    baby: false,
		price: 1.99
	},
	{
		name: "crackers",
		vegetarian: true,
		glutenFree: false,
    lactoseFree: true,
    nutFree: true,
    organic: true,
    baby: false,
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
    lactoseFree: true,
    nutFree: true,
    organic: false,
    baby: false,
		price: 9.99
	},
  {
    name: "yogurt",
		vegetarian: true,
		glutenFree: true,
    lactoseFree: false,
    nutFree: true,
    organic: false,
    baby: false,
		price: 4.49
  },
  {
    name: "almond granola",
		vegetarian: true,
		glutenFree: false,
    lactoseFree: true,
    nutFree: false,
    organic: true,
    baby: false,
		price: 5.99
  },
  {
    name: "cheese",
		vegetarian: false,
		glutenFree: true,
    lactoseFree: false,
    nutFree: true,
    organic: false,
    baby: false,
		price: 5.49
  },
  {
    name: "apple",
		vegetarian: true,
		glutenFree: true,
    lactoseFree: true,
    nutFree: true,
    organic: true,
    baby: false,
		price: 1.29
  },
  {
    name: "chicken",
		vegetarian: false,
		glutenFree: true,
    lactoseFree: true,
    nutFree: true,
    organic: false,
    baby: false,
		price: 8.29
  },
  {
    name: "pasta",
		vegetarian: true,
		glutenFree: false,
    lactoseFree: true,
    nutFree: false,
    organic: false,
    baby: false,
		price: 3.99
  },
  {
    name: "peanut butter",
		vegetarian: true,
		glutenFree: true,
    lactoseFree: true,
    nutFree: false,
    organic: true,
    baby: false,
		price: 4.79
  },
  {
    name: "baby formula",
		vegetarian: true,
		glutenFree: true,
    lactoseFree: false,
    nutFree: true,
    organic: false,
    baby: true,
		price: 5.89
  },
  {
    name: "apple puree",
		vegetarian: true,
		glutenFree: true,
    lactoseFree: true,
    nutFree: true,
    organic: true,
    baby: true,
		price: 2.00
  },
  {
    name: "rice cereal",
		vegetarian: true,
		glutenFree: true,
    lactoseFree: true,
    nutFree: true,
    organic: false,
    baby: true,
		price: 3.79
  }
];



// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let products = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			products.push(prods[i]);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			products.push(prods[i]);
		}
		else if ((restriction == "LactoseFree") && (prods[i].lactoseFree == true)){
			products.push(prods[i]);
		}
    else if ((restriction == "NutFree") && (prods[i].nutFree == true)){
			products.push(prods[i]);
		}
    else if ((restriction == "Baby") && (prods[i].baby == true)){
			products.push(prods[i]);
		}
    else if (restriction == "None"){
			products.push(prods[i]);
		}
	}
	return products;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice.toFixed(2);
}
