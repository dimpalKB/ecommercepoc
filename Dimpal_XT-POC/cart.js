showCart();
initEvents();

function initEvents() {
	var model=document.getElementById('myModal');
	jQuery('[id^=btn_]').on('click', function() {
		console.log(jQuery(this).attr('data-product_id'));
	     model.style.display="block";
	     show(jQuery(this).attr('data-product_id'));
	})



	jQuery(document).on('click', '[id^=edit_]', function() {
		console.log(jQuery(this).attr('data-product_id'));

	     let id=jQuery(this).attr('data-product_id')
	     let size=jQuery('#size').val();
	     let quantity=jQuery('#qty').val();;
	     let color='red';
	     updateCart(id,size,quantity,color);
	     model.style.display = "none";
	     showCart(cart);
	     destroyEvents();
	     initEvents();
	   
	})

	jQuery(document).on('click', '.close', function() {
		model.style.display = "none";
	})
}

function destroyEvents() {
	jQuery(document).off('click', '[id^=edit_]');
	jQuery(document).off('click', '.close');
	jQuery(document).off('click', '[id^=btn_]');
}

function _getAvailableColors(product_id) {
	for(var i=0;i<Products.length;i++)
	{
		if (product_id===Products[i].id) {
			return Products[i].color;
		}
	}
	return [];
}
function _getAvailableSizes(id)
{
	for(var i=0;i<Products.length;i++)
	{
		if (id===Products[i].id) {
			return Products[i].sizes;
		}
	}
	return [];
}

function show(id){
	for(let index=0;index<cart.length;index++){
		if(cart[index].id===id){
			var _template, _color_template, _size_template, _quantity_template;

			_color_template = "";
			_size_template = "";
			_quantity_template = "";

            var colorArray=_getAvailableColors(id);
            var sizeArray=_getAvailableSizes(id);
			for(let i=0;i<colorArray.length;i++){
				_color_template += `<div id="color_${colorArray[i]}" class="productColorBox" data-product_color="${colorArray[i]}" style="background-color:${colorArray[i]};">&nbsp;</div>`
			}

			_color_template = `
				<div>
					${_color_template}
				</div>`;

            for(let i=0;i<sizeArray.length;i++){
				_size_template +=`<option>${sizeArray[i]}</option>`
			}
			_size_template=`
					<select id="size">
						${_size_template}
					</select>`;

             _quantity_template+=`
             <select id="qty">
	             <option>1</option>
	             <option>2</option>
	             <option>3</option>
	             <option>4</option>
	             <option>5</option>
             </select>`;;

			_template = `
				<div class="productInforapper">
					<div class="productDetailswrapper">
					    <hr class="hr">
						<h3>${cart[index].name}</h3>
						<div class="productPrice"><span class="doller">$</span>${cart[index].price}</div>
						<div class="productColors">${_color_template}</div>
						<div class="productSizes">${_size_template}</div>
						<div class="productSizes">${_quantity_template}</div>
						<div><button class="editCart" id=edit_${id} data-product_id="${id}" >Edit</button></div>
					</div>
					<div class="productImageWrapper">
						<img class="image" src="${cart[index].picPath}" alt="image"/>
					</div>
				</div>`;
		
			$('.modal-body').html('');
			$('.modal-body').html(_template);
		}
	}
}

function updateCart(id, size, quantity, color){
 
  for(var i=0;i<cart.length;i++)
 {
 	if(cart[i].id===id){
       cart[i].size=size;
       cart[i].qty=quantity;
       cart[i].price=quantity*cart[i].price;
 	}
 }

}