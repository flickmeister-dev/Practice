document.addEventListener('DOMContentLoaded',() => {
    const menuButton = document.getElementById('menu');
    const chatButton = document.getElementById('chat');
    const storeButton = document.getElementById('store');
    const store = document.getElementById('main-content-store');
    const chat = document.getElementById('main-content-chat');
    const menu = document.getElementById('main-content-menu');


    menuButton.onclick = function () {
        menu.style.display='block';
        chat.style.display='none';
        store.style.display='none';
    };

    chatButton.onclick = function () {
        chat.style.display='block';
        menu.style.display='none';
        store.style.display='none';
    };

    storeButton.onclick = function () {
        store.style.display='block';
        chat.style.display='none';
        menu.style.display='none';
    };


});