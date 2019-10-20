function urlDetect() {
    $.ajax({
        url: "/url",
        type: "POST",
        data: {
            url:$("#url").val()

        },
        success: function (response) {
            if(response=="OK"){
                $("#ok").show();
            }
            else{
                $("#danger").show();
            }
          

        }
    });
}

function textDetect(){

    $.ajax({
        url: "/text",
        type: "POST",
        data: {
            text:$("#text").val()

        },
        success: function (response) {
            if(response=="spam"){
                $("#danger2").show();
            }
            else{
                $("#ok2").show();
            }

        }
    });

}