let count= 0;

//setInterval(()=>{
//    console.log("1 second passed")
//},1000)


function counter(){
    setTimeout(() => {
        console.log("1 sec passed")
        counter();
    }, 1000)
}

counter()