//****************  With vanilla javascript ****************/

let typesList = document.querySelector(".types__list");
let typesItem = document.querySelectorAll(".types__item");
let resourceList = document.querySelectorAll(".resources-container");

typesList.addEventListener('click', (e)=>{

    //removing active class from all items
    typesItem.forEach(item=>{
        item.classList.remove("active-type");
    })

    //adding active class to the clicked item
    e.target.classList.add("active-type");

    //remove active class from all resources
    resourceList.forEach(item => {
        item.classList.remove("active-resource");
    });

    //adding active class to the clicked reource
    let resource = document.querySelector(`.${e.target.id}`);
    resource.classList.add("active-resource");

});



//****************  With jQuery ****************/
/*
$(document).ready(function () {
    let typesList = $(".types__list");
    let typesItem = $(".types__item");
    let resourceList = $(".resources-container");

    typesList.click(function (e) {

        //removing active class from all items
        typesItem.each((i, item) => {
            $(item).removeClass("active-type");
        });

        //adding active class to the clicked item
        $(e.target).addClass("active-type");

        //remove active class from all resources
        resourceList.each((i, item) => {
            $(item).removeClass("active-resource");
        });

        //adding active class to the clicked reource
        let resource = $("." + e.target.id);
        resource.addClass("active-resource");
    });

});
*/