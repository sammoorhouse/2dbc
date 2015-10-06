document.addEventListener('DOMContentLoaded', function(){
	var img = document.getElementById("barcode-img");
	chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
		var uri = img.src = tabs[0].url;
		var encoded = encodeURI(uri);
		var chartUri = "https://chart.googleapis.com/chart?cht=qr&chs=500x500&chl="
				+ encoded;
		img.src = chartUri;
	});	
});