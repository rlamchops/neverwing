/*document.addEventListener("DOMContentLoaded", function(event) {
  var list = document.querySelectorAll("div._497p._11es");
  while(list[0]) {
    list[0].parentNode.removeChild(list[0]);
  }
});
*/
/*document.addEventListener("DOMContentLoaded", function(event) {
  var myScript = document.createElement('script');
  myScript.textContent = actualCode;
  (document.head||document.documentElement).appendChild(myScript);
  myScript.parentNode.removeChild(myScript);
});*/

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: `
      var list = Array.prototype.slice.call(document.querySelectorAll("div._497p._11es"));
      while(list[0]) {
        console.log(list[0].innerHTML);
        list[0].style.display = 'none';
        list.shift();
        if (!list[0]) {break;}
        console.log(list[0].innerHTML);
      }
    `
  });
});
