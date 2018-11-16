var config={
	GST:1212,
	Shipping:2424,
	handling:22
}
var cart=[{id:'21231',name:'SOLID COTTON GREEN T-Shirt',size:'S',qty:1,price:30,model:'MS13KT225',picPath:'images/image1.jpg',color:'green'},
                {id:'251',name:'Casual Pant',size:'S',qty:1,price:50,model:'Xdqfahdgjh',picPath:'images/image2.jpg',color:'red'}];

var Products=[{id:'21231',name:'Casual Shirt',price:30,model:'Xasdqfahdgjh',sizes:['S','M','L'],picPaths:['images/image1.jpg','images/image1.jpg'],color:['red','green']},
                {id:'251',name:'Casual Pant',price:50,model:'Xasdqfahdgjh',sizes:['S','M','L'],picPaths:['images/image2.jpg','images/image1.jpg'],color:['red','green']}];
function DisplayProducts(){

var data="";

     for(var i=0;i<Products.length;i++)
     {
            var obj=Products[i];
            
            //console.log("sasa");
            data=data+`<div class="item"><div class="content">
			<img src="${obj.picPaths[0]}" alt="image"/>
			<div class="model">${obj.model}</div>
			<div class="Price">${obj.price}</div>
			<button id="detail_${cart[i].id}"  data-product_id="${cart[i].id}">Detail</button>
		    </div></div>`
	}
	console.log(data);
	document.getElementById('product').innerHTML=data;
    
	}




function showCart(){
	var data='<li><div class="main" ><div class="first">'+cart.length+' Items</div><div class="second"><div class="detail">	SIZE</div>'+
				'<div class="detail">QTY</div>	<div class="detail">	PRICE</div></div></div><hr class="hr2"></li>';
				var total=0;
				
	for(var i=0;i<cart.length;i++)
	{
		total=cart[i].price+total;
		data=data+'<li><div class="main" data-product_id="'+cart[i].id+'"><div class="first">'+
				'<div>'+
				    '<img  src="'+cart[i].picPath+'" alt="image1"/>'+
		    	'</div>'+
			   '<div class="desc">'+
              '<div class="desc1">'+cart[i].name+'<br>'+
              '<span class="title" i>STYLE : #'+cart[i].model+'</span><br><br><br>'+
              '<span class="size1" >Size : '+cart[i].size+'</span>'+
              '<span class="qty1" i>Qty :'+cart[i].qty+'</span>'+
              '<span class="price1" ><span class="super">$</span>'+cart[i].price+'</span>'+
              '</div><div class="desc1" id="desc1"><button id="btn_'+cart[i].id+'" data-product_id="'+cart[i].id+'">Edit</button><button id="remoev_'+cart[i].id+'" data-product_id="'+cart[i].id+'">remove</button><button id="save_'+cart[i].id+'" data-product_id="'+cart[i].id+'">Save for later</button></div>'+
              
		    	 '</div>'+
		      '</div>'+
                '<div class="second">'+
		    	'<div class="detail">'+cart[i].size+
		    	'</div>'+
			    '<div class="detail">'+cart[i].qty+
			    '</div>'+
			    '<div class="detail"><span class="super">$</span>'+cart[i].price+
			    '</div></div></div><hr></li>'

	}
	data=data+`<div class="bottom">
	<div  class="bottom1"><p class="text">Need Help <br> or Any question</p>
	<p class="call">Call customer Service at<br>1800-00-33-44</p>
	<p><a href="#">Chat with on of our<br>stylist </a></p>
	<p><a href="#">See Return<br>& Exchange Policy</a></p></div>
	<div  class="bottom2"><div class="priceEstimate"><small>SUBTOTAL</small> <h3 class="total"><span class="super">$</span>${total}</h3></div>
	<div class="priceEstimate">Promo code Applied <h3 class="total"><span class="super">$</span>-7</h3></div>
	<hr id="hr1" class="hr">
	<div class="priceEstimate">ESTIMATED<h3 class="total"><span class="super">$</span>${total-7}</h3></div>
	<hr id="hr1" class="hr">
	<button class="editCart" id="editcart">Checkout</button>
	</div>`

	document.getElementById('list').innerHTML=data;
}

