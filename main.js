try{
    let url = window.location.href
    if (url.match('https://connect.router.integration.prod.mheducation.com/app/#/connect/coversheet')){
        console.log('url loaded successfully')
    }
    else{
        console.log('wrong url')
    }

    // Save the original location.assign function
    const originalAssign = window.location.assign;

    // Override the function
    window.location.assign = function(url) {
    console.log('Intercepted navigation to:', url);
    // Instead of navigating, fetch the content via AJAX
    fetch(url)
        .then(response => response.text())
        .then(html => {
        console.log("Fetched page HTML:", html);
        // Process or display the content as needed
        // e.g., document.getElementById('content').innerHTML = html;
        })
        .catch(error => console.error("Error fetching the new page:", error));

    // Optionally, if you want to navigate after fetching, call:
    // originalAssign.call(window.location, url);
    };

}
catch{
    console.log('some problem with fetching url')
}

