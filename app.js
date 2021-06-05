function myfun(event){
    if(document.querySelector("#area").classList.contains("area")){
        document.querySelector("#area").classList.remove("area");
    }
    else{
        document.querySelector("#area").classList.add("area");
    }
}