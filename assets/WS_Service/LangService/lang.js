var lang = navigator.language;
if (lang.startsWith("tr") || lang.startsWith("en"))
{
    document.location.href = "/WS_Pages/mainpage.html";
}
else
{
    alert("Your browser language is not Turkish or English. Support for other languages is not provided.");
    console.log("[opensoftware-world.github.io]: Your browser language is not Turkish or English. Support for other languages is not provided.");
}