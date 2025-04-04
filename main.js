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

try{
    var start = document.getElementById("welcome--start_button")

    for (var i = 0; i < start.clientHeight; i++){
        start[i].click()
    }

    console.log("start questions button clicked")
}
catch(err){
    console.log("start questions button failed to click")
    console.log(err)
}