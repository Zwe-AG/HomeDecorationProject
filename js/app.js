$("document").ready(function(){

    // Start Back to top 
    $(".btn-backtotops").hide();
    $(window).scroll(function(){
        let getScrollTop = $(this).scrollTop();
        // console.log(getScrollTop);
        if(getScrollTop >= 370){
            $(".btn-backtotops").fadeIn(1000);
        }else{
            $(".btn-backtotops").fadeOut(1000);
        }
    });
    // End Back to top 

    // Start Header 
    // Start Navbar 
    // for bugger 
    $(".navbutton").click(()=>{
        $(".navbutton").toggleClass("crossxs");
    })
    //for scroll
    $(window).scroll(()=>{
        let getScrollTop = $(this).scrollTop();
        // console.log(getScrollTop);
        if(getScrollTop >= 200){
            $(".navbar").addClass("navmenu");
        }else{
            $(".navbar").removeClass("navmenu");
        }
    });


    // For properties 
    $(".propertylists").click(function(){
        // for active item 
        // $(this).addClass("activeitems");
        // $(this).siblings().removeClass("activeitems");
        $(this).addClass("activeitems").siblings().removeClass("activeitems");

        // for filter 
        let getAttributeValue = $(this).attr("data-filter");
        // console.log(getAttributeValue);
        if(getAttributeValue === "all"){
            $(".filters").show("slide",500);
        }else{
            $(".filters").hide();
            $(".filters").not("."+getAttributeValue).hide("slide",500);
            $(".filters").filter("."+getAttributeValue).show("slide",500);
        }
    });

    // For Image overlay or lightbox2 
    lightbox.option(
        {
            showImageNumberLabel : false
        }
    );

    $(window).scroll(function(){
        let getScrollTop = $(this).scrollTop();
        if(getScrollTop >= 900){
            $(".advimages").addClass("fromlefts");
            $(".advtexts").addClass("fromrights");
        }else{
            $(".advimages").removeClass("fromlefts");
            $(".advtexts").removeClass("fromrights");
        }
    })
    // End Navbar 
    // End Header 

    // Start Footer 
    let getYear = $("#getYear");
    let getFullYear = new Date().getFullYear();
    getYear.text(getFullYear);
    // End Footer 
})


