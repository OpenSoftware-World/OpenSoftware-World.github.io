window.onload = function() {
    var lang = navigator.language;
    
    // Navbar Elements

    var About = document.getElementById("About");
    var Updates = document.getElementById("Updates");
    var Contracts = document.getElementById("Contracts");
    var Philosophy = document.getElementById("Philosophy");
    var Support = document.getElementById("Support");

    // Footer Elements

    var Help = document.getElementById("Help");

    // Button Elements

    var Go = document.querySelectorAll(".Go");

    // Content Elements

    var ContentTitle1 = document.getElementById("ContentTitle1");
    var ContentTitle2 = document.getElementById("ContentTitle2");
    var ContentTitle3 = document.getElementById("ContentTitle3");
    var ContentTitle4 = document.getElementById("ContentTitle4");
    var ContentTitle5 = document.getElementById("ContentTitle5");

    var ContentText1 = document.getElementById("ContentText1");
    var ContentText2 = document.getElementById("ContentText2");
    var ContentText3 = document.getElementById("ContentText3");
    var ContentText4 = document.getElementById("ContentText4");
    var ContentText5 = document.getElementById("ContentText5");

    if (lang.startsWith("en")) {
        About.innerHTML = "About";
        Updates.innerHTML = "Updates";
        Contracts.innerHTML = "Contracts";
        Philosophy.innerHTML = "Our Philosophy";
        Support.innerHTML = "Support";
        Help.innerHTML = "Help (Web Site)";
        Go.innerHTML = "Go";
        ContentTitle1.innerHTML = "About Artado Search and Updates";
        ContentTitle2.innerHTML = "AdWMGUI will be rewritten (New version)";
        ContentTitle3.innerHTML = "AdWM (Advanced Windows Manager) software has been removed";
        ContentTitle4.innerHTML = "AdWMGUI (Advanced Windows Manager GUI) will be published today";
        ContentTitle5.innerHTML = "AdWMGUI (Advanced Windows Manager GUI) has been published";
        ContentText1.innerHTML = 'The <a class="link-underline-primary" href="https://github.com/Artado-Project/artadosearch">"Artado Search"</a> product is developed by the <a class="home" href="https://github.com/Artado-Project">Artado-Project</a> team and has been contributed to by <a class="home" href="https://github.com/OpenSoftware-World/">OpenSoftware-World (My Github Account)</a>, an advanced search engine.';
        ContentText2.innerHTML = 'We have decided that the AdWM (Advanced Windows Manager) software, which we published on September 8, 2023, needs to be rewritten as of 1/23/2024 (January 23, 2024). The new version will now include a Graphical User Interface (GUI).';
        ContentText3.innerHTML = 'We have decided to remove the AdWM (Advanced Windows Manager) software, which we published on September 8, 2023, on January 25, 2024, due to the new version. The new version will be called AdWMGUI and after the new version is published, the old version will no longer be available for download. (The "AdWM" github repository created for the old version has been deleted.)';
        ContentText4.innerHTML = 'We had said that the AdWMGUI version would come in place of the AdWM software, which was removed from publication on 1/25/2024. The AdWMGUI version is complete and the AdWMGUI version will be published on 1/28/2024 at 00:00.';
        ContentText5.innerHTML = 'It has been published on 1/28/2024 at 00:00.';
    }
    else if (lang.startsWith("tr")) {
        About.innerHTML = "Hakkımda";
        Updates.innerHTML = "Güncellemeler";
        Contracts.innerHTML = "Sözleşmeler";
        Philosophy.innerHTML = "Felsefemiz";
        Support.innerHTML = "Yardım";
        Help.innerHTML = "Yardım (Web Site)";
        Go.innerHTML = "Git";
        ContentTitle1.innerHTML = "Artado Search ve Yenilikler hakkında";
        ContentTitle2.innerHTML = "AdWMGUI yeniden yazılacaktır (Yeni sürüm)";
        ContentTitle3.innerHTML = "AdWM (Advanced Windows Manager) yazılımı kaldırılmıştır";
        ContentTitle4.innerHTML = "AdWMGUI (Advanced Windows Manager GUI) Bugün yayınlanıcaktır";
        ContentTitle5.innerHTML = "AdWMGUI (Advanced Windows Manager GUI) yayımlandı";
        ContentText1.innerHTML = '<a class="link-underline-primary" href="https://github.com/Artado-Project/artadosearch">"Artado Search"</a> ürünü <a class="home" href="https://github.com/Artado-Project">Artado-Project</a> ekibi tarafından geliştirilmiş ve <a class="home" href="https://github.com/OpenSoftware-World/">OpenSoftware-World (Github Hesabım)</a> tarafından katkılada bulunulmuş gelişmiş bir Arama motorudur...';
        ContentText2.innerHTML = "8 Eylül, 2023 tarihinde yayınlamış olduğumuz AdWM (Advanced Windows Manager) adlı yazılımı 1/23/2024 (23 Ocak, 2024) tarihinden itibaren yeniden yazılması gerektiğine karar verdik. yeni sürüm artık bir Grafik Kullanıcı Arayüzü (GUI) içericektir.";
        ContentText3.innerHTML = '8 Eylül, 2023 tarihinde yayınlamış olduğumuz AdWM (Advanced Windows Manager) adlı yazılımı yeni sürüm sebebiyle 01/25/2024 tarihinde kaldırmaya karar verdik. Yeni sürüm AdWMGUI olarak adlandırılacaktır ve yeni sürüm yayımlandıktan sonra artık eski sürüm indirelemez olacaktır. (Eski sürüm için oluşturulan "AdWM" github deposu silinmiştir.)';
        ContentText4.innerHTML = "1/25/2024 Tarihinde yayından kaldırılan AdWM yazılımının yerine AdWMGUI sürümünün geliceğini söylemiştik. AdWMGUI sürümü tamamlanmıştır 1/28/2024 00:00 Tarihinde AdWMGUI sürümü yayınlanıcaktır.";
        ContentText5.innerHTML = "1/28/2024 00:00 Tarihinde yayımlanmıştır.";
    }

    Go.forEach(function(element) {
            element.textContent = Go.innerHTML;
    });

};