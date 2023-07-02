window.addEventListener('load', function(){
    console.log('se ha cargado la página');

    var searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener('click', function(){
        console.log('click');
    });
});