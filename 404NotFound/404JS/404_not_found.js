window.onload = function() {
    var lang = navigator.language;
    var ErrorTitle = document.getElementById("ErrorTitle");
    var ErrorDescription = document.getElementById("ErrorDescription");
    var MainPage = document.getElementById("MainPage");
    var SupportPage = document.getElementById("SupportPage");

    if (lang.startsWith("en")) {
        ErrorTitle.innerHTML = "404 not found error";
        ErrorDescription.innerHTML = "The page you are looking for was not found or the page does not exist 404 not found error.";
        MainPage.innerHTML = "OpenSoftware-World - Main page";
        SupportPage.innerHTML = "OpenSoftware-World - Support page";
        console.error("OpenSoftware-World: 404 not found error. Sorry! The page or content you are trying to search for on this website may have been moved or deleted...");
        alert("Sorry! The page or content you are looking for on this website may have been moved or deleted... Error code: 404");
        document.title = "OpenSoftware-World - 404 Not found";
    }
    else if (lang.startsWith("tr")) {
        ErrorTitle.innerHTML = "404 bulunamadı hatası";
        ErrorDescription.innerHTML = "Aradığınız sayfa bulunamadı veya sayfa mevcut değil 404 bulunamadı hatası.";
        MainPage.innerHTML = "OpenSoftware-World - Ana sayfa";
        SupportPage.innerHTML = "OpenSoftware-World - Destek sayfası";
        console.error("OpenSoftware-World: 404 bulunamadı hatası. Üzgünüm! bu web sitesinde aramaya çalıştığınız sayfa veya içerik taşınmış veya silinmiş olabilir...");
        alert("Üzgünüm! bu web sitesinde aramaya çalıştığınız sayfa veya içerik taşınmış veya silinmiş olabilir... Hata kodu: 404");
        document.title = "OpenSoftware-World - 404 bulunamadı";
    }
};