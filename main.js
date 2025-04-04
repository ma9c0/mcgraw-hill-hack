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

