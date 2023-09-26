function callback(){
    console.log("complete.");
}


function add(){
    account=document.getElementById("account").value;
    password=document.getElementById("password").value;
    if(account==""){
        alert('no account!');
    }else if(password==""){
        alert('no password!');
    }
    chrome.storage.local.set({"account":account},callback);
    chrome.storage.local.set({"password":password},callback);
    alert('set!');
}


document.getElementById("submit").onclick=add;




