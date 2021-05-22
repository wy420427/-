window.onload =function(){
		document.getElementById("btn").onclick =function(){
		var selectVal= document.getElementById("role");
		// alert(selectVal.value);	
			
		//在div 中显示图片
			var showDiv = document.getElementById("left");	//显示图片
			var description =document.getElementById("right");	//显示角色描述
			//获得下拉列表索引
			var index =selectVal.selectedIndex;
			//按照索引获得值val
			var name =selectVal.options[index].text;
			//使用innerHTML html标签起作用
			 if(name=='艾斯'){
				showDiv.innerHTML="<img  src='./Image/huoaisi.jpg' title='艾斯' width='700px' height='500px'/>";
				description.innerHTML="<font style='font-size: 25px;'><p>萨博与蒙奇·D·路飞的结义兄弟。本名波特卡斯·D·艾斯，实为‘海贼王’哥尔·D·罗杰的遗腹子。烧烧果实的前任能力者，绰号‘火拳’，实力强大。</p><p>顶上战争因为保护路飞用身体挡下了海军大将赤犬的岩浆拳攻击陷入濒死状态，不幸离世。</p><br /><li>能力：<ol>火枪</ol> <ol>阳炎</ol><ol>炎上钢</ol><ol>大炎戒&nbsp;炎帝</ol> </li></font>";
			}else if(name=='路飞'){
				showDiv.innerHTML="<img  src='./Image/lufei.jpg' title='路飞' width='700px' height='500px'/>";
				description.innerHTML="<font style='font-size: 25px;'><p>路飞,19岁的青年海贼，海军英雄蒙奇·D·卡普的孙子，革命军首领龙的儿子，波特卡斯·D·艾斯的义弟，集结香波地群岛的十一超新星之一。</p><p>悬赏金15亿贝里，被称作'草帽'。小时候误食了橡胶果实，所以自己获得如橡胶般收缩自如的能力。梦想是找到传说中的OnePeace，成为海贼王，他是在香克斯启蒙下萌生这个梦想的。口头禅是‘我要成为海贼王!’</p><br /><li>能力：<ol>橡胶丸锯</ol><ol>橡胶暴风雨</ol><ol>橡胶烟花</ol>  </li></font>";
			}else if(name=='萨博'){
				showDiv.innerHTML="<img  src='./Image/sabo.jpg' title='萨博' width='700px' height='500px'/>";
				description.innerHTML="<font style='font-size: 25px;'><p>萨博，是蒙奇·D·路飞与波特卡斯·D·艾斯的结义兄弟。革命军参谋总长，同时也是革命军的二把手，悬赏金6亿200万贝里。</p><p>出身贵族但向往自由，幼时与路飞，艾斯相识并结拜为兄弟。在首次出海时遭到天龙人的袭击，被革命军首领龙（路飞父亲）救下。在龙的教导下，凭借自身的天赋与努力，称为革命军二号人物。在德雷斯罗萨竞技场与路飞重逢，代替路飞出场并赢得比赛，吃下烧烧果实，继承了兄弟艾斯的意志。</p><li>能力：<ol>火拳</ol> <ol>火焰龙爪拳·火焰龙王</ol><ol>龙爪拳</ol> </li></font>";
			}else if(name=='红发'){
				showDiv.innerHTML="<img  src='./Image/hongfa.jpg' title='红发' width='700px' height='500px'/>";
				description.innerHTML="<font style='font-size: 25px;'><p>香克斯，外号‘红发’,红发海贼团团长。新世界的‘四皇之一’，是最年轻的四皇，身为海贼的同时却和世界政府最高领导人五老星都有关系，是充满未知数的男人。</p> <li>能力：<ol>霸王色霸气</ol><ol>霸王色霸气</ol><ol>武器：名刀:格里芬，意为狮鹫，是把以能阻止岩浆之拳的强韧，和狮鹫一般的优美而著称的名刀。</ol></li></font>";
			}
	}
}

/*
	问题：
		通过option value属性 的形式来判断需要在Div中显示哪个图片 ，这个方法有个bug
		前两个值正常，后边的所有值 都会回退到第一个，查了资料也没有解决。
		换成option text属性 问题就轻而易举的解决了。。。
		
		要注意引号的使用，双引号里再使用双引号，稍不留神，就会找不到错误在哪里，F12找吧~ 
		
 */