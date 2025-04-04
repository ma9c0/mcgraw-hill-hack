try{
    let url = window.location.href
        if (url.match('/learning.mheducation.com')){
            console.log('url loaded')
        }
        else{
            console.log('wrong url')
        }

}
catch{
    console.log('some problem with fetching url')
}

document.body.insertAdjacentHTML("beforeend", '<div id="bennettc" style="z-index:1;position:absolute;width:400px;height:200px;background:#e6fff0;bottom:0;left:0;font-size:12px;font-family:monospace;"><input id="bennettin" style="width:400px;height:30px;" autocomplete="off"><div id="bennettl" style="display:flex;flex-direction:column-reverse;color:black;overflow-y:scroll;height:170px;"></div></div>')


