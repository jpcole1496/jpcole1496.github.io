

function setup(){
	var url = 'https://newsapi.org/v2/top-headlines?' +
		      'country=us&' +
	          'apiKey=747e8cec0a4d4c67bebbb0c83a25387e';

	var sidebar = document.getElementById("sidebar");
	var newsHeading = document.createElement("H1");
	newsHeading.appendChild(document.createTextNode("The News"));
	sidebar.appendChild(newsHeading);
	sidebar.appendChild(document.createElement("HR"));
	
	noCanvas();

	loadJSON(url, gotData);

	function gotData(data){
		console.log(data);
		console.log(data.articles[2].title);

		var h = [];
		var img = [];
		var divSet = document.getElementById("sidebar")
		
		var headerDiv = []
		
		for(let i = 0; i < data.articles.length; i++){
			h.push(document.createElement("H3"));
			img.push(document.createElement("IMG"));
			headerDiv.push(document.createElement("DIV"));
			headerDiv[i].className = "header";

			img[i].src = data.articles[i].urlToImage;
			img[i].height = "50";
			
			h[i].appendChild(document.createTextNode(data.articles[i].title));
			console.log(img[i].src);
			if(data.articles[i].urlToImage != null){

				headerDiv[i].appendChild(img[i]);
			}
			
			
			headerDiv[i].appendChild(h[i]);
			divSet.appendChild(headerDiv[i]);
		}
		document.body.appendChild(divSet);
		
		
	}
}

/*
var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=747e8cec0a4d4c67bebbb0c83a25387e';


	//noCanvas();
		
	loadJSON(url, gotData);
	
	function gotData(data){
		console.log(data);
		console.log(data.articles[2].title);

		var h = [];
		var img = [];
		var divSet = document.getElementById("sidebar")
		
		var headerDiv = []
		
		for(let i = 0; i < data.articles.length; i++){
			h.push(document.createElement("H1"));
			img.push(document.createElement("IMG"));
			headerDiv.push(document.createElement("DIV"));
			headerDiv[i].className = "header";

			img[i].src = data.articles[i].urlToImage;
			img[i].height = "150";
			
			h[i].appendChild(document.createTextNode(data.articles[i].title));
			console.log(img[i].src);
			if(data.articles[i].urlToImage != null){

				headerDiv[i].appendChild(img[i]);
			}
			
			
			headerDiv[i].appendChild(h[i]);
			divSet.appendChild(headerDiv[i]);
		}
		document.body.appendChild(divSet);
		
		
	}
*/