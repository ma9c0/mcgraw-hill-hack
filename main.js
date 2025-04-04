console.log('hi main.js')

    url = window.location.href

    //if in the coversheet page
    if (url.includes('connect.router.integration.prod.mheducation.com/app/#/connect/coversheet')){
        const beginButton = document.querySelector('.btn.btn-primary.connect-primary-btn.coversheet-btn-size');
        if (beginButton){
            beginButton.addEventListener('click', function(e){
                e.preventDefault();
                let targetUrl = "";
                (function(history) {
                    const originalPushState = history.pushState;
                    history.pushState = function(state, title, newurl) {
                    console.log('Navigating to:', newurl);
                    targetUrl = newurl;
                    return originalPushState.apply(history, arguments);
                    };
                })(window.history);

                console.log("Intercepted begin button click. Target URL:", targetUrl);
            })
            // let targetUrl = "";
            // (function(history) {
            //     const originalPushState = history.pushState;
            //     history.pushState = function(state, title, newurl) {
            //     console.log('Navigating to:', newurl);
            //     targetUrl = newurl;
            //     return originalPushState.apply(history, arguments);
            //     };
            // })(window.history);
            
            beginButton.click();

            // Wait a moment for the targetUrl to be set
            setTimeout(() => {
              if (targetUrl) {
                // Create an iframe to load the learning page
                const iframe = document.createElement('iframe');
                iframe.src = targetUrl;
                iframe.style.width = '50%';
                iframe.style.height = '300px'; 
                document.body.appendChild(iframe);
        
                // When the iframe has loaded, search for the start button and click it.
                iframe.addEventListener('load', function() {
                  console.log('Learning page loaded in iframe.');
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
                  }, 500); // check every 500ms
                });
              } else {
                console.error("Target URL was not captured.");
              }
            }, 1000);


        }
        else{
            alert('begin button not found')
        }
    }
