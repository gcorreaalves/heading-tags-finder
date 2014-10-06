var 
headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6"),
heading = {},
tagCurrent = "";

[].filter.call( headings, function ( tag ) {
	
	tagCurrent = tag.tagName;

	if ( !heading.hasOwnProperty(tagCurrent) ) {
		heading[tagCurrent] 		= {};
		heading[tagCurrent].qt 		= 0;
		heading[tagCurrent].tag 	= tagCurrent;
		heading[tagCurrent].color 	= (~~(Math.random()*(1<<24))).toString(16);
		heading[tagCurrent].html 	= "<div class='chrome-extension-show-heading-tags' style='position:absolute; right:0;top:0; text-indent: 0;background:#ccc; width:50px; height:50px; border-radius: 100%; color: #000; text-align:center;line-height:50px;'>" + tagCurrent + "</div>";
	}

    tag.style.border 	= "5px solid #" + heading[tagCurrent].color;
    tag.style.position  = "relative";
    tag.innerHTML += heading[tagCurrent].html;
    heading[tagCurrent].qt++;

});

heading;