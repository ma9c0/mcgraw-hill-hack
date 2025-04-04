console.log('hi main.js')
try{
    let url = window.location.href

    if (url.match('connect.router.integration.prod.mheducation.com/app/#/connect/coversheet')){
        var begin_button = document.getElementsByClassName("btn btn-primary connect-primary-btn coversheet-btn-size")
        if (begin_button){
            begin_button[0].addEventListener('click', function(e) {
                e.preventDefault();
                const targetUrl = this.getAttribute('data-target-url');
                console.log('New URL would be: ' + targetUrl);
                var start = document.querySelector('[data-automation-id="welcome--start_button"]')

                if (start){
                    start.click()
                    console.log("start questions button clicked")
                }
                else{
                    throw('start questions button not found by automation id')
                }
              });

            begin_button[0].click()
        }
        else{
            throw('begin button not found')
        }
    }

    
    url = window.location.href
    if (url.match('/learning.mheducation.com')){
        console.log('about to start questions')
    }
    else{
        throw("begin button led you to somewhere else")
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