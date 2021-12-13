let pass_string = document.getElementById("givenText");
let gen_button = document.querySelector(".buttons_gen");
let pass_in = document.querySelector(".pass_input");
let pass_output = document.querySelector(".pass_output");
let buttonCopy = document.querySelector(".buttons_copy");
let copyMsgText = document.querySelector(".copy_msg")
let genPass;

gen_button.addEventListener('click', () => {
    let givenText = pass_string.value;
    if(givenText == null || givenText == "") {
        console.log("No text")
        pass_in.classList.add("pass_input--err");
    } else {
        pass_in.classList.remove("pass_input--err");
        passEncoder(givenText);

    }
})

buttonCopy.addEventListener('click', ()=>{
    if(genPass == null || genPass == undefined) return;
    (async () => {
        await navigator.clipboard.writeText(genPass);
        copyMsgText.style.visibility = "visible"
    })();
    setTimeout(()=>{
        copyMsgText.style.visibility = "hidden"
    }, 1500)

})

let passEncoder = (pass) => {
    genPass = pass.split('').map(v => v.charCodeAt(0)).reduce((a, v) => a + ((a << 7) + (a << 3)) ^ v).toString(16);
    if(String(genPass).charAt(0) == "-"){
        genPass = genPass.substring(1)
    }
    buttonCopy.classList.add("buttons_copy--mod");
    pass_output.classList.add("pass_output--border");
    pass_output.textContent = genPass;
}

