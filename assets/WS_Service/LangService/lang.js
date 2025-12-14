var lang = navigator.language;
if (lang.startsWith("tr"))
{
    document.location.href = "/";
}
else if (lang.startsWith("en"))
{
    document.location.href = "/";
}
else
{
    alert("Your browser language is not Turkish or English. Support for other languages is not provided.");
    console.log("[linuxuserslinuxmint.github.io]: Your browser language is not Turkish or English. Support for other languages is not provided.");
}