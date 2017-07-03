var listCount = 0; // This iterates over the list items, and is used to ID newly added elements

// This activates when you push the "submitItem" button. It takes in the value of #newItem
// (which is the text box), and then creates a new div with an iterated ID and in the "a-list-item"
// class. It then adds the value into the html. 
// {
$("#submitItem").click(function() {
    inItem = $("#newItem").val();
    var $div = $("<div>", {id: listCount, "class": "a-list-item"});
    $div.html(inItem + ' <img src="download.png" "class"="redx" height=15px />');
    console.log($div.children());
    $div.children().click(function () {
        ////get the text of the parent
        console.log("a");
        var swapHTML1 = $(this).parent().html().slice(0, -51);
        ////change the text of the parent to strikethrough
        $(this).parent().html("<s>" + swapHTML1 + "</s>");
    });
    $("#list-items").append($div);
    listCount += 1;
});


//$div.children(".red-x").click(function () {
//    ////get the text of the parent
//    console.log("a");
//    var swapHTML1 = $(this).parent().html().slice(0, -51);
//    ////change the text of the parent to strikethrough
//    $(this).parent().html("<s>" + swapHTML1 + "</s>");
//});


//To Do: figure out order of events, and if click function can be added to a new element
