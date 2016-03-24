document.onkeydown = function(){
	if(event.keyCode == 13 && window.getSelection().toString()!=""&&document.activeElement.tagName!="INPUT"&&document.activeElement.tagName!="TEXTAREA"){
			window.open("http://www.google.co.jp/search?q="+window.getSelection().toString());
	}
}