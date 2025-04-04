console.log('hi main.js')
document.addEventListener('DOMContentLoaded', function(){

    url = window.location.href

    //if in the coversheet page
    if (url.includes('connect.router.integration.prod.mheducation.com/app/#/connect/coversheet')){
        const beginButton = document.querySelector('.btn.btn-primary.connect-primary-btn.coversheet-btn-size');
        if (beginButton){
            (function(history) {
                const originalPushState = history.pushState;
                history.pushState = function(state, title, url) {
                console.log('Navigating to:', url);
                window.open(url)
                return originalPushState.apply(history, arguments);
                };
            })(window.history);
            beginButton.click()
        }
        else{
            alert('begin button not found')
        }
    }

})