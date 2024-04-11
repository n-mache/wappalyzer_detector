function check_wappalyzer() {
    try{
        var ajax = new XMLHttpRequest();
        ajax.open("GET", "chrome-extension://gppongmhjkpfnbhagpmjfkannfbllamg/js/js.js",false);
        ajax.send();
        return true;
    }catch(e){
        return false;
    }
}
