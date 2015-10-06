document.addEventListener('DOMContentLoaded', function(){
	var img = document.getElementById("barcode-img");
	chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
		var uri = img.src = tabs[0].url;
		var encoded = encodeURI(uri);
		console.log("encoded:");
		console.log(encoded);
		
		var chartUri = "https://chart.googleapis.com/chart?cht=qr&chs=500x500&chl="
				+ encoded;
		img.src = chartUri;
	});	
});