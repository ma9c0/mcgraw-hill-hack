console.log('hi main.js')

    url = window.location.href

    //if in the coversheet page
    if (url.includes('connect.router.integration.prod.mheducation.com/app/#/connect/coversheet')){
        const beginButton = document.querySelector('.btn.btn-primary.connect-primary-btn.coversheet-btn-size');
        if (beginButton){
            (function(history) {
                const originalPushState = history.pushState;
                history.pushState = function(state, title, newurl) {
                console.log('Navigating to:', newurl);
                return originalPushState.apply(history, arguments);
                };
            })(window.history);
            
            const iframe = document.createElement('iframe')
            iframe.src = newurl
            document.body.appendChild(iframe);
            iframe.addEventListener('load', function() {
                console.log('Learning page loaded in iframe.');
                // Check periodically for the start button in the iframe's content.
                const checkInterval = setInterval(function() {
                  try {
                    const startButton = iframe.contentWindow.document.querySelector('[data-automation-id="welcome--start_button"]');
                    if (startButton) {
                      console.log('Start button found inside iframe. Clicking it...');
                      startButton.click();
                      clearInterval(checkInterval);
                    }
                  } catch (e) {
                    console.error('Error accessing iframe content:', e);
                    clearInterval(checkInterval);
                  }
                }, 500);
              });


        }
        else{
            alert('begin button not found')
        }
    }
