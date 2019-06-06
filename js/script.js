function hideWelcome() {
    // hide welcome div and button
    var div = document.getElementsById('welcome');
    div.classList.add("invisible");

    div = document.getElementsById('welcomebutton');
    div.classList.add("invisible");

    // show navbar
    div = document.getElementsById('navbar');
    div.classList.remove("invisible");

    // show home page
    div = document.getElementsById('home');
    div.classList.remove("invisible");
}