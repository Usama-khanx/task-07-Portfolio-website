

function showNavigatio(){
    var navitems = document.getElementById("navagationItemsid");
    navitems.style.display = 'block';

    var burger = document.getElementById("hamburger");
    burger.style.display = 'none';

    var cancel = document.getElementById("cancel")

    cancel.style.display = 'block';

    
}

function CancelNavigation(){

    var navitems = document.getElementById("navagationItemsid");
    navitems.style.display = 'none';

    var burger = document.getElementById("hamburger");
    burger.style.display = 'block';


    var cancel = document.getElementById("cancel")

    cancel.style.display = 'none';


}