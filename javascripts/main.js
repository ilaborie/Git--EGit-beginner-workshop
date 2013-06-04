$(function () {
    // Code beautifier
    if (window.prettyPrint && $.isFunction(prettyPrint)) prettyPrint();

    // add prefix number
    $("article h2").each(autoPrefix);
    $(".nav li a").each(autoPrefix);

    // Optional
    $("a.optional").each(function(idx, elt){
        $(elt).prepend("<em>(Optional)</em> ");
    });
});

var autoPrefix = function(idx, elt){
    $(elt).prepend("" +(idx+1) + ". ");
};
