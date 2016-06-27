var _hiloTip = ' <style> #Tip{ position: absolute; left: 50%;top: 50%;z-index: 9999; width: 200px;height: 100px; margin-top: -50px;margin-left: -100px; } @keyframes hidden { 100%   { opacity: 0.5;top:0} } .Tip{ animation: hidden 10s forwards; } </style> <div id="Tip" class="alert alert-danger hidden"></div> ';
function alerts(msg){
    console.log(msg);
    var node = $('#Tip');
    if(node.length == 0){
        node = $(_hiloTip);
        $('body').append(node);
    }
    $('#Tip').text(msg).removeClass('hidden').addClass('Tip');
    setTimeout(function(){
        node.removeClass('Tip').addClass('hidden');
    }, 9000);
}


/**
 * init function
 * @param myObject
 * @returns {Array}
 */
function array_keys(myObject) {
    output = [];
    for(var key in myObject) {
        output.push(key);
    }
    return output;
}
function array_values(myObject) {
    output = [];
    for(var key in myObject) {
        output.push(myObject[key]);
    }
    return output;
}

Date.prototype.format = function(){
    var d = this;
    return d.getFullYear()+'-' + (d.getMonth()+1)+'-' + d.getDate()+' ' + d.getHours()+':' + d.getMinutes()+':' + d.getSeconds()+''
}

