$(document).ready(function(){function e(){var t=new Date,o=t.getHours(),u=t.getMinutes(),c=t.getSeconds();u=n(u),c=n(c),document.getElementById("clock").innerHTML=o+":"+u+":"+c;setTimeout(e,500)}function n(e){return 10>e&&(e="0"+e),e}e()});