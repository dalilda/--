function $(id){
	return document.getElementById(id);
}
window.onload=function(){
	updateZJ();
	//绑定事件
	var fruitTbl = $("tbl_fruit");
	var rows = fruitTbl.rows;//获取表格中所有的行
	//alert("helloworld");
	for (var i =1;i<rows.length-1 ;i++ )
	{
		var tr = rows[i];
		trBind(tr);

		
	}
	var addTbl = $("add_table");
	var rows = addTbl.rows;
	//rows[0].cells[1].firstChild.onkeydown = checkInput;
	rows[1].cells[1].firstChild.onkeydown = checkInput;
	rows[2].cells[1].firstChild.onkeydown = checkInput;
	//rows[0].cells[1].onclick = newEditName;
	//rows[1].cells[1].onclick = newEditPrice;
	//rows[2].cells[1].onclick = newEditNumber;
	rows[3].cells[0].onclick = click1;
	//rows[3].cells[1].onclick = click2;


}

function trBind(tr){
//1.绑定鼠标悬浮以及离开时设置背景颜色事件
		tr.onmouseover = showBGColor;
		tr.onmouseout = clearBGColor;

		var cells = tr.cells;
		var priceTd = cells[1];
		//2.绑定鼠标悬浮在单价单元格变手势事件
		priceTd.onmouseover  = showHand;//不能加括号，不然直接调用了
		//3.绑定鼠标点击单元格事件
		priceTd.onclick = editPrice;

		//7.绑定删除小图标的点击事件
		var img = cells[4].firstChild;
		if (img && img.tagName=="IMG")
		{
			img.onclick = delFruit;
		}
}
function click1(){
	if (event && event.srcElement &&event.srcElement.tagName =="INPUT"){
		var addTbl = $("add_table");
		var rows = addTbl.rows;
		var name = rows[0].cells[1].firstChild.value;
		var price = rows[1].cells[1].firstChild.value;
		var number = rows[2].cells[1].firstChild.value;
		
		var xj = parseInt(price)*parseInt(number);

		if(event.srcElement.value=="添加"){
			alert("添加");
			var fruitTbl = $("tbl_fruit");
			var rows = fruitTbl.rows
			var row = fruitTbl.insertRow(rows.length-1);
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);
			var cell4 = row.insertCell(3);
			var cell5 = row.insertCell(4);
			cell1.innerHTML = name;
			cell2.innerHTML = price;
			cell3.innerHTML = number;
			cell4.innerHTML = xj;
			cell5.innerHTML = "<img src = 'a.jpg' class = 'delImg'/>";
			row.onmouseover = showBGColor;
			row.onmouseout = clearBGColor;
			priceTd = cell2;
			priceTd.onmouseover  = showHand;
			priceTd.onclick = editPrice;
			cell5.firstChild.onclick = delFruit;
			updateZJ();
		}
		if(event.srcElement.value=="重填"){
			th = event.srcElement.parentElement;
			tr = th.parentElement;
			tb = tr.parentElement;
			rows = tb.rows;
			rows[0].cells[1].firstChild.value = "";
			rows[1].cells[1].firstChild.value = "";
			rows[2].cells[1].firstChild.value = "";
		}
	}

}
function click2(){
	if (event && event.srcElement){
		alert(event.srcElement.value);
	}

}
function newEditName(){
	
}
function newEditPrice(){
	if (event && event.srcElement && event.srcElement.tagName=="INPUT")
	{
		var input = event.srcElement;
		input.onkeydown = checkInput;
	}
}

function delFruit(){
	if (event && event.srcElement && event.srcElement.tagName=="IMG")
	{
		//alert表示弹出对话框，只有确定按钮
		//confirm表示弹出对话框，有确定和取消按钮
		if (window.confirm("是否确认删除当前库存记录"))
		{
			var img = event.srcElement;
			var tr = img.parentElement.parentElement;
			var fruitTbl = $("tbl_fruit");
			fruitTbl.deleteRow(tr.rowIndex);
			updateZJ();
		}
		
	}
}

//点击单价单元格时进行价格编辑
function editPrice(){
	if (event && event.srcElement && event.srcElement.tagName=="TD")
	{
		var priceTd = event.srcElement;
		//目的是判断当前priceTd有子节点，而且第一个子节点是文本节点
		if (priceTd.firstChild &&priceTd.firstChild.nodeType==3)//3是文本1是元素
		{
			//表示设置或者获取当前节点内部文本
			var oldPrice = priceTd.innerText;

			//innerHTML表示设置当前节点的内部html
			priceTd.innerHTML="<input type='text'/ size = '4'>";//js中单双引号都一样，这里只是外面用了双，所以里面用单
			/*
			<td>5</td>变成了
			<td><input type='text'/ size = '4'></td>
			*/
			var input = priceTd.firstChild;
			if(input.tagName = "INPUT"){
				input.value = oldPrice;
				//选中输入框内部的文本
				input.select();
				//4.绑定输入框失去焦点事件，失去焦点，更新单价
				input.onblur = updatePrice;
				//8.绑定键盘按下的事件，此处需要保证用户输入的是数字
				input.onkeydown = checkInput;
			}
		}
	}
}
function checkInput(){
	var kc = event.keyCode;
	console.log(kc);
	//0~9 ascii码是 48~57 
	//backspace:8 
	//enter:13
	if (!((kc>=48 && kc<=57)||kc==8||kc==13))
	{
		event.returnValue = false;
	}
	if(kc==13){
		event.srcElement.blur();
	}
}
function updatePrice(){
	if(event && event.srcElement && event.srcElement.tagName=="INPUT"){
		var input = event.srcElement;
		var newPrice = input.value;
		var priceTd = input.parentElement;
		priceTd.innerText = newPrice;
		//5.更新当前单元格小计
		//td的parent是tr
		updateXJ(priceTd.parentElement);
	}
}
function updateXJ(tr){
	if (tr && tr.tagName=="TR")
	{
		var tds = tr.cells;
		var price = tds[1].innerText;
		var count = tds[2].innerText;
		//innerText是str,要转换成int才能相乘
		var xj = parseInt(price)*parseInt(count);
		tds[3].innerText = xj;
		//6.更新总计
		updateZJ();
	}
}
function updateZJ(){
	var fruitTbl = $('tbl_fruit');
	var rows = fruitTbl.rows;
	var sum = 0;
	for(var i = 1;i<rows.length-1;i++){
		var tr = rows[i];
		var xj = parseInt(tr.cells[3].innerText);//没有.innerText会出现NAN not a number错误
		sum+=xj;
	}
	rows[rows.length-1].cells[1].innerText = sum;
}


//当鼠标悬浮时，显示背景颜色
function showBGColor(){
	//event: 当前发生的事件
	//事件源，也是就下面的tr
	//<tr onmousehover="showBGColor()">
	//alert(event.srcElement);
	//alert(event.srcElement.tagName);
	if (event && event.srcElement && event.srcElement.tagName=="TD")
	{
		var td = event.srcElement;
		//td.parentElement 表示获取td的父元素->TR
		var tr = td.parentElement;
		//如果想要
		tr.style.backgroundColor = "navy";
		//tr.cells表示获取这个tr中所有的单元格
		var tds = tr.cells;
		for (var i=0;i<tds.length ;i++ )
		{
			tds[i].style.color="white";
		}
	}

}


function clearBGColor(){
	if (event && event.srcElement && event.srcElement.tagName=="TD")
	{
		var td = event.srcElement;
		var tr = td.parentElement;
		tr.style.backgroundColor = "transparent";
		var tds = tr.cells;
		for (var i=0;i<tds.length ;i++ )
		{
			tds[i].style.color="threeddarkshadow";
		}
	}
	
}
function showHand(){
	if (event && event.srcElement && event.srcElement.tagName=="TD")
	{
		var td = event.srcElement;
		td.style.cursor="hand";
	}
}
