function showHeadings(e) {	
	var btnText = e.target.innerText;
	if ( btnText === 'Exibir' ) {
		e.target.innerText = 'Ocultar';
		chrome.tabs.executeScript(null,
		    {
		     	file: 'show.js',
			}, function(results){
				var htmlResult = '', result = results[0];
				for ( r in result ) {					
					if ( result.hasOwnProperty(r) ) {
						console.log(result[r]);
						htmlResult += '<li>' + result[r].tag +  ' : ' + result[r].qt  + '</li>' ;
					}
				}
				document.querySelector('.headings').innerHTML = htmlResult;
			}
		);
	} else {
		e.target.innerText = 'Exibir';
		chrome.tabs.executeScript(null,
		    {
		     	file: 'hide.js'
			}
		);
		document.querySelector('.headings').innerHTML = '';
	}
};	 
document.addEventListener('DOMContentLoaded', function () {
  var button = document.querySelector('button');
   button.addEventListener('click', showHeadings);
});