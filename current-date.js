/* 
	Current Date script - ThemeLib
	
	Author : ThemeLib
	Link : http://themelib.com
	
	Reference from  http://www.tizag.com/javascriptT/javascriptdate.php
*/

function showCurrentDate(text)
{
	var dayarray = new Array("الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت");
	var montharray = new Array("يناير","فبراير","مارس","أبريل","ماي","يونيو","يوليوز","غشت","شتنبر","أكتوبر","نونبر","دجنبر");

	var themelib = new Date();

	var day = themelib.getDay();
	var month = themelib.getMonth();
	var daym = themelib.getDate();
	var year = themelib.getFullYear();

	if (daym < 10)
		daym = "0" + daym;
	
	document.write(dayarray[day] + ", " + montharray[month] + " " + daym + ", " + year);
}