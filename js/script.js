var users = [
    {
        name: 'Pedro',
        gender: 'M',
        hobby: 'Pets',
        avatar: 'avatar1.png'
    },
    {
        name: 'Carlos',
        gender: 'M',
        hobby: 'Pets',
        avatar: 'avatar2.png'
    },
    {
        name: 'María',
        gender: 'F',
        hobby: 'Music',
        avatar: 'avatar3.png'
    },
    {
        name: 'Juliana',
        gender: 'F',
        hobby: 'Sports',
        avatar: 'avatar4.png'
    },
    {
        name: 'Lucía',
        gender: 'F',
        hobby: 'Reading',
        avatar: 'avatar5.png'
    },
    {
        name: 'Paul',
        gender: 'M',
        hobby: 'Shopping',
        avatar: 'avatar6.png'
    },
    {
        name: 'Sara',
        gender: 'F',
        hobby: 'Pets',
        avatar: 'avatar7.png'
    },
];

window.addEventListener('load', function(){

    function search(){

        //get hobby
        var hobbyField = document.getElementById('hobby');
        var hobby = hobbyField.value;
        console.log(hobby);

        //get gender
        var genderField = document.getElementById('gender');
        var selected = genderField.selectedIndex;
        var gender = genderField.options[selected].value;
        console.log(gender); 

        var resultsHTML = '';
        var numUsers = users.length;

        for(var i = 0; i < numUsers; i++){
            resultsHTML +=  '<div class="person-row">\
                                <img src="images/' + users[i].avatar + '">\
                                <div class="person-info">\
                                    <div>' + users[i].name + '</div>\
                                    <div>' + users[i].hobby + '</div>\
                                </div>\
                                <button>Add as friend</button>\
                            </div>';
        }

        results.innerHTML = resultsHTML;
    }
    
    var results = document.getElementById('results');
    var searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener('click', search);
});