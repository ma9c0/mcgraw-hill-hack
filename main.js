try{
    let url = window.location.href
    if (url){
        console.log('url loaded successfully')
    }
    else{
        console.log('wrong url')
    }

}
catch{
    console.log('some problem with fetching url')
}

