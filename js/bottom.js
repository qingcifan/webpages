//parent.document.all("iframe_content").style.height=document.body.scrollHeight;	
function reinitIframe()
{
	parent.document.all("iframe_content").style.height=document.body.scrollHeight;
	console.log("bottom.js "+document.body.scrollHeight);	
}

//window.setInterval("reinitIframe()", 1000);
