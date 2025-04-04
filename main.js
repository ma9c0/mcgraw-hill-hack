console.log('hi main.js')
document.addEventListener('DOMContentLoaded', function() {
    console.log('inside dom')
    try{
        let url = window.location.href

        if (url.includes('connect.router.integration.prod.mheducation.com/app/#/connect/coversheet')){
            var begin_button = document.getElementsByClassName("btn btn-primary connect-primary-btn coversheet-btn-size")
            if (begin_button){
                begin_button[0].click()
            }
            else{
                throw('begin button not found')
            }
        }
        else if (url.includes('/learning.mheducation.com')) {
            console.log('On learning page, waiting for start button...');
            let checkStartButton = setInterval(() => {
            let startButton = document.querySelector('[data-automation-id="welcome--start_button"]');
            if (startButton) {
                console.log('Start button found, clicking it...');
                startButton.click();
                clearInterval(checkStartButton);
            }
            }, 500);
        }

    }
    catch(err){
        console.log(err)
    }
})