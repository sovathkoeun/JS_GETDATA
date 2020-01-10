function onFilterInput() {
    var liElement = document.getElementsByTagName("li");
    var resultInput = document.querySelector('input').value;
    var filter = resultInput.toUpperCase();
    var TextValue;
    var number = -1;
    for (let i = 0; i < liElement.length; i++) {
        TextValue = liElement[i].textContent || liElement[i].innerText;
        // console.log(TextValue.indexOf(filter));  
        let isFind = TextValue.toUpperCase().indexOf(filter) > number;
        if(isFind) {
            liElement[i].style.display = "block";
        }else{
            liElement[i].style.display = "none";
        }
    }
}
document.addEventListener('keyup',onFilterInput);
