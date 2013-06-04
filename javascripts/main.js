$(function () {
    // Code beautifier
    if (window.prettyPrint && $.isFunction(prettyPrint)) prettyPrint();

    // add prefix number
    $("article h2").each(autoPrefix);
    $(".nav li a").each(autoPrefix);

    // Optional
    $("a.optional").each(function (idx, elt) {
        $(elt).prepend("<em>(Optional)</em> ");
    });

    // Remote Repo
    var $form = $("#createRemoteRepo");
    $form.submit(function (e) {
        $.ajax({
            url: "http://192.168.42.1/repo/create",
            data: $form.serialize(),
            success: function (value) {
                var $elt = $("#created");
                $elt.show();
                $elt.find("em").append("http://192.168.42.1/git/" + value);
                $elt.find("a").attr("href", "/gitweb?p=" + value);
            }
        });

        e.preventDefault();
        return false;
    });
})
;

var autoPrefix = function (idx, elt) {
    $(elt).prepend("" + (idx + 1) + ". ");
};
