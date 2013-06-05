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
            url: "http://192.168.42.1/create/repo",
            data: $form.serialize(),
            method: "POST",
            success: function (value) {
                var $elt = $("#created")
                    .append('Your remote repository URL is <em>http://192.168.42.1/git/' + value + '</em>.<br>')
                    .append('Go to <a href="/gitweb?p=' + value + '" target="_blank">remote server</a>');
                $elt.show();
            },
            error: function () {
                $("#created").empty()
                    .append('<p class="text-error"><strong>Oops !</strong><br>' +
                        'Failure, use the fallback solution above' +
                        '</p>')
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
