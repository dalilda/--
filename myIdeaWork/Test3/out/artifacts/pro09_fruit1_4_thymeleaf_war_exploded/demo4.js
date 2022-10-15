function $(id){
	return document.getElementById(id);
}
window.onload=function(){
	updateZJ();
	//���¼�
	var fruitTbl = $("tbl_fruit");
	var rows = fruitTbl.rows;//��ȡ��������е���
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
//1.����������Լ��뿪ʱ���ñ�����ɫ�¼�
		tr.onmouseover = showBGColor;
		tr.onmouseout = clearBGColor;

		var cells = tr.cells;
		var priceTd = cells[1];
		//2.����������ڵ��۵�Ԫ��������¼�
		priceTd.onmouseover  = showHand;//���ܼ����ţ���Ȼֱ�ӵ�����
		//3.���������Ԫ���¼�
		priceTd.onclick = editPrice;

		//7.��ɾ��Сͼ��ĵ���¼�
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

		if(event.srcElement.value=="���"){
			alert("���");
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
		if(event.srcElement.value=="����"){
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
		//alert��ʾ�����Ի���ֻ��ȷ����ť
		//confirm��ʾ�����Ի�����ȷ����ȡ����ť
		if (window.confirm("�Ƿ�ȷ��ɾ����ǰ����¼"))
		{
			var img = event.srcElement;
			var tr = img.parentElement.parentElement;
			var fruitTbl = $("tbl_fruit");
			fruitTbl.deleteRow(tr.rowIndex);
			updateZJ();
		}
		
	}
}

//������۵�Ԫ��ʱ���м۸�༭
function editPrice(){
	if (event && event.srcElement && event.srcElement.tagName=="TD")
	{
		var priceTd = event.srcElement;
		//Ŀ�����жϵ�ǰpriceTd���ӽڵ㣬���ҵ�һ���ӽڵ����ı��ڵ�
		if (priceTd.firstChild &&priceTd.firstChild.nodeType==3)//3���ı�1��Ԫ��
		{
			//��ʾ���û��߻�ȡ��ǰ�ڵ��ڲ��ı�
			var oldPrice = priceTd.innerText;

			//innerHTML��ʾ���õ�ǰ�ڵ���ڲ�html
			priceTd.innerHTML="<input type='text'/ size = '4'>";//js�е�˫���Ŷ�һ��������ֻ����������˫�����������õ�
			/*
			<td>5</td>�����
			<td><input type='text'/ size = '4'></td>
			*/
			var input = priceTd.firstChild;
			if(input.tagName = "INPUT"){
				input.value = oldPrice;
				//ѡ��������ڲ����ı�
				input.select();
				//4.�������ʧȥ�����¼���ʧȥ���㣬���µ���
				input.onblur = updatePrice;
				//8.�󶨼��̰��µ��¼����˴���Ҫ��֤�û������������
				input.onkeydown = checkInput;
			}
		}
	}
}
function checkInput(){
	var kc = event.keyCode;
	console.log(kc);
	//0~9 ascii���� 48~57 
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
		//5.���µ�ǰ��Ԫ��С��
		//td��parent��tr
		updateXJ(priceTd.parentElement);
	}
}
function updateXJ(tr){
	if (tr && tr.tagName=="TR")
	{
		var tds = tr.cells;
		var price = tds[1].innerText;
		var count = tds[2].innerText;
		//innerText��str,Ҫת����int�������
		var xj = parseInt(price)*parseInt(count);
		tds[3].innerText = xj;
		//6.�����ܼ�
		updateZJ();
	}
}
function updateZJ(){
	var fruitTbl = $('tbl_fruit');
	var rows = fruitTbl.rows;
	var sum = 0;
	for(var i = 1;i<rows.length-1;i++){
		var tr = rows[i];
		var xj = parseInt(tr.cells[3].innerText);//û��.innerText�����NAN not a number����
		sum+=xj;
	}
	rows[rows.length-1].cells[1].innerText = sum;
}


//���������ʱ����ʾ������ɫ
function showBGColor(){
	//event: ��ǰ�������¼�
	//�¼�Դ��Ҳ�Ǿ������tr
	//<tr onmousehover="showBGColor()">
	//alert(event.srcElement);
	//alert(event.srcElement.tagName);
	if (event && event.srcElement && event.srcElement.tagName=="TD")
	{
		var td = event.srcElement;
		//td.parentElement ��ʾ��ȡtd�ĸ�Ԫ��->TR
		var tr = td.parentElement;
		//�����Ҫ
		tr.style.backgroundColor = "navy";
		//tr.cells��ʾ��ȡ���tr�����еĵ�Ԫ��
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
