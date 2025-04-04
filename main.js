try{
    let url = window.location.href

    if (url.match('/learning.mheducation.com')){
        console.log('url loaded')
    }
    else if (url.match('connect.router.integration.prod.mheducation.com/app/#/connect/coversheet')){
        var begin_button = document.getElementsByClassName("btn btn-primary connect-primary-btn coversheet-btn-size")
        if (begin_button){
            begin_button[0].click()
        }
        else{
            throw('begin button not found')
        }
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