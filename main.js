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
    var start = document.getElementById("welcome--start-button")

    for (var i = 0; i < start.clientHeight; i++){
        start[i].click()
    }

    console.log("start assignment button clicked")
}
catch{
    console.log("start assignment button failed to click")
}