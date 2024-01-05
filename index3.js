let filterInput = document.getElementById('filterInput'); //getting input lement

filterInput.addEventListener('keyup', filterNames); //adding eventlistener

function filterNames(){
    //getting value of input
    let filtervalue = document.getElementById('filterInput').value.toUpperCase(); //as we have provided contacts in uppercase

    //get names ul
    let ul=document.getElementById('names');

    //get lis from ul
    let li=ul.querySelectorAll('li.collection-item');

    //loop through collection item list
    for(let i=0;i<li.length;i++){
        let a=li[i].getElementsByTagName('a')[0];

        //if matches
        if(a.innerHTML.toUpperCase().indexOf(filtervalue)>-1){
            li[i].style.display= '';
        } else{
            li[i].style.display='none';
        }
    }
    }
