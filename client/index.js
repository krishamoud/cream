Template.mainScene.flavor = function(){
	var flavor = ['Banana Fudge Walnut', 'Cinnamon Chill','Chocolate Chip Cookie Dough','Coconut', 'Cup Of Joe', 'Cookies and Cream','French Vanillia','Royal Carmel Swirl', 'Peanut Butter Twist', 'Matchta Green Tea', 'Green Mint Chocolate Chip', 'Soy Mint Chip','Soy Vanilla', 'Rocky Road', 'Very Berry Strawberry', 'Strawberry Cheesecake', 'Chocoholic', 'Salted Caramel', 'Pistachio Delight', 'Butter Pecan' ];
	console.log(flavor.length);
	var flavor1 = flavor[Math.floor(Math.random()*flavor.length)];
	var flavor2 = flavor[Math.floor(Math.random()*flavor.length)];
	var milkshakeFlavor = flavor1 + " " + flavor2;
	console.log(milkshakeFlavor);
	//return milkshakeFlavor;
	return flavor1;
}

Template.mainScene.events({
	'#newFlavor click':function(){
		alert('hi');
	}
});
