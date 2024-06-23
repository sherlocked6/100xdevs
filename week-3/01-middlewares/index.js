let numberOfRequestsForUser = {};


function rateLimitter(userid){
    console.log(numberOfRequestsForUser);
    if(numberOfRequestsForUser[userid]){
      numberOfRequestsForUser[userid]++;
    }
    else{
      numberOfRequestsForUser[userid] =   1;
    }
  
    if(numberOfRequestsForUser[userid] >= 5){
      console.log("Limit exceeded");
    }
  }
rateLimitter(12);
rateLimitter(12);
rateLimitter(12);
rateLimitter(12);
rateLimitter(12);
