window.onload = function() {
    var lang = navigator.language;
    var changelocation = document.getElementById("changelocation");
    var lxlmdoc = document.getElementById("lxlmdoc");
    var support_page_title = document.getElementById("support_page_title");
    var go = document.getElementById("go");
    var go_ = document.getElementById("go_");
    var changelocation_description = document.getElementById("changelocation_description");
    var lxlmdoc_description = document.getElementById("lxlmdoc_description");

    if (lang.startsWith("en")) {
        document.title = "OpenSoftware-World - Support Page";
        changelocation.innerHTML = "Change location for the website";
        lxlmdoc.innerHTML = "Documentation for OpenSoftware-World software";
        go.innerHTML = "Go";
        go.href = "/support/linuxuserslinuxmint/location.en";
        go_.innerHTML = "Go";
        changelocation_description.innerHTML = "The OpenSoftware-World website offers content support in Turkish and English. However, if one language is used, the content of the other language cannot be accessed. If you want to access the content of the other language, you must change your location.";
        lxlmdoc_description.innerHTML = "OpenSoftware-World For more information about the software, please refer to the documentation.";
    }
    else if (lang.startsWith("tr")) {
        document.title = "OpenSoftware-World - Destek Sayfası";
        changelocation.innerHTML = "Web sitesi için konum değiştirme";
        lxlmdoc.innerHTML = "OpenSoftware-World yazılımları için dokümanlar";
        go.innerHTML = "Git";
        go.href = "/support/linuxuserslinuxmint/location.tr";
        go_.innerHTML = "Git";
        changelocation_description.innerHTML = "OpenSoftware-World web sitesi, Türkçe ve İngilizce dillerinde içerik desteği sunmaktadır. Ancak, bir dil kullanıldığında diğer dildeki içeriğe erişilemez. Diğer dildeki içeriğe erişmek istiyorsanız, konumunuzu değiştirmeniz gerekir.";
        lxlmdoc_description.innerHTML = "OpenSoftware-World yazılımları hakkında daha fazla bilgi edinmek için dokümanlara göz atınız.";
    }
    support_page_title.innerHTML = document.title;
};