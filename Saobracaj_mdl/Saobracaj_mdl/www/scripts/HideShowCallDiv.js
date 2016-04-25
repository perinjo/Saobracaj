$(document).ready(function () {
    $("#testHide").hide();
    
    $("#testLink").click(function () {
        $("#testHide").show();
        $("#testShow").hide();
        document.body.querySelector('.mdl-layout__obfuscator.is-visible').click();
    });
});

