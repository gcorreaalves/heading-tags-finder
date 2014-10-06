var headings = document.querySelectorAll('.chrome-extension-show-heading-tags');
[].filter.call(headings,function(tag){
   var parent = tag.parentNode;
   parent.removeChild(tag);
   parent.style.border = 0;
});