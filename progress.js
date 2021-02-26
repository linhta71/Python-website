
// get all the complete button
let complete_button = document.getElementsByClassName("complete-btn");
let num_stage = complete_button.length
let PASSWORD = "success"
let set = new Set()
//set event listener for each button
for (let i = 0; i < num_stage; i++){
    let element = complete_button[i];
    element.addEventListener("click", function (){
        let id = element.id;
        document.getElementById("pass-".concat(id)).style.visibility = "visible";
        document.getElementById("btn-pass-".concat(id)).style.visibility = "visible";
})
}

let pass_input = document.getElementsByClassName("pass-btn");
for (let i = 0; i < pass_input.length; i++){
    let element = pass_input[i];
    let element_id = element.id;
    element.addEventListener("click", function(){
        let pass_element = document.getElementById(element_id.slice(4))
        let pass = pass_element.value;
        if (pass === "success") {
            set.add(element_id);
            document.getElementById("bar").value = set.size/num_stage*100;
            alert("success");
        } else {
            alert("fail");
        }
        pass_element.value = "";
        element.style.visibility = "hidden";
        pass_element.style.visibility = "hidden";
        console.log(document.getElementById("bar").value);
        if (document.getElementById("bar").value == 100) {
            on();
        }
    })
}

