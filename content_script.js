function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}




var link=window.location.href;




var account;        //define account and password
var password;



chrome.storage.local.get("account",function(acct){
    console.log(acct);
    if(typeof acct.account=="undefined"){
        alert("no account! please click icon to set.");
    }else{
        account=acct;
        chrome.storage.local.get("password",function(pwd){
            console.log(pwd);
            if(typeof pwd.password=="undefined"){
                alert("no password! please click icon to set.");
            }else{
                password=pwd;

                var account_area=getElementByXpath("//input[@name='username']");
                var password_area=getElementByXpath("//input[@name='password']");

                account_area.value=account;
                password_area.value=password;
            
                var submit;

                if(link.includes("cloudpath.ccu.edu.tw")){
                    submit=getElementByXpath("//a[@id='continue-button']");
                    submit.click();
                }else if(link.includes("wlc.ccu.edu.tw")){
                    submit=getElementByXpath("//input[@type='button']");
                    submit.click();
                }else{
                    console.log("test");
                }

            }
        })
    }
})
















// close();



