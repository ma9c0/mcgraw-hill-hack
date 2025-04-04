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
    var start = document.querySelector('[data-automation-id="welcome--start_button"]')

    if (start){
        start.click()
        console.log("start questions button clicked")
    }
    else{
        throw('start questions button not found by automation id')
    }

}
catch(err){
    console.log("start questions button failed to click")
    console.log(err)
}