$.getJSON( "https://randomuser.me/api/", function( randomusers ) 
    var user = randomusers.results[ 0 ];
    var img = document.createElement('IMG');
    img.setAttribute('src', user.picture.large);
    document.getElementById("picturegenerator").appendChild(img);} ); 
