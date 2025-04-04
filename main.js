try{
    let url = window.location.href
    if (url == 'https://connect.router.integration.prod.mheducation.com/app/#/connect/coversheet'){
        console.log('url loaded successfully')
    }
    else{
        console.log('wrong url')
    }
}
catch{
    console.log('some problem with fetching url')
}

