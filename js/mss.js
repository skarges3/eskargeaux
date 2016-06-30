function returnQueryValue(match) {
    var query = location.search.substr(1);
    var pairs = query.split("&");
    for(i=0;i<pairs.length;i++){
        var name = pairs[i].split("=")[0];
        var val = pairs[i].split("=")[1];
        if(name==match){
            val = unescape(val.replace(/\+/g, " "));
            return val;
        }
    }
}

function writeCustomHeader(match,id) {
    var newHeader=returnQueryValue(match);
    if(!newHeader)return;
    var id = document.getElementById(id);
    var h1 = document.getElementsByTagName('h1')[0];
    if(newHeader.length>0 && id && id!='undefined'){
        id.innerHTML=newHeader
        h1.className=h1.className+" small";
        document.getElementById('customHeader').className="block";
    }
}