$("#red-x").click(function () {
    ////get the text of the parent
    var swapHTML1 = $(this).parent().html().slice(0, -51);
    ////change the text of the parent to strikethrough
    $(this).parent().html("<s>" + swapHTML1 + "</s>");
});
