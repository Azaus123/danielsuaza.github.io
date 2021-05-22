const btnToggle = document.querySelector('.toggle-btn');

btnToggle.addEventListener('click', function(){
    document.getElementById('sidebar').classList.toggle('active');

})


var titles = [];
        var titleInput = document.getElementById("title");
        var messageBox = document.getElementById("display");
        function Allow()
        {
        
        window.location.reload()
        }
        function insert () {
        titles.push(titleInput.value);
        clearAndShow();
        }
        function clearAndShow ()
        {
        titleInput.value = "";
        messageBox.innerHTML = "";
        messageBox.innerHTML += " " + titles.join("<br/> ") + "<br/>";
        }

 

        /*modooscuro*/



 const btnSwitch = document.querySelector('#switch');
 
 btnSwitch.addEventListener('click', () =>{
     document.body.classList.toggle('dark');

 });
     
