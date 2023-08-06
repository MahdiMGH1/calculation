function update(){
    let mrvalue='';
    mrvalue =localStorage.getItem('mr');
    if (mrvalue===''){
        mrvalue=0;
    }
    return mrvalue;
}

let calculate='';
function getitems (num){
    (calculate += num);
    display();
    return calculate;
}
console.log(final);
function display (){
    document.querySelector('.display').innerHTML=calculate;
    if(calculate===''){
        document.querySelector('.display').innerHTML=0;
    }
}
localStorage.setItem('mr',calculate);