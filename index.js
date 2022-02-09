mn=setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();

    hrotations = 30*htime + mtime/2;
    mrotations = 6*mtime;
    srotations = 6*stime;

    hour.style.transform = `rotate(${hrotations}deg)`;
    minute.style.transform = `rotate(${mrotations}deg)`;
    second.style.transform = `rotate(${srotations}deg)`;
}, 1000);

op = window.prompt("Are you excited to see this Project 😍 !!");
    if (op == "yes" || op=="Yes" || op=="YES"){
        alert("You can now go inside and check Wonderful Project \uD83D\uDE80");
    }
    else{
        clearInterval(mn);
        alert("Now this Project will not work 😥");
    }
    
    