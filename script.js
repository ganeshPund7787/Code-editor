// This is for line number
const line = document.querySelector("#line");
for (let i = 1; i < 24; i++) {
    line.innerHTML += i + '<br>';
}

// Change Files

const HtmlFile = document.querySelector("#html");
const CssFile = document.querySelector("#css");
const JsFile = document.querySelector("#js");


const files = document.querySelectorAll(".files");
const CodeFile = document.querySelectorAll("textarea");

files.forEach((evt) => {
    evt.addEventListener("click", (e) => {
        ShowActive(e);
    });
});

const ShowActive = (e) => {
    files.forEach((file) => {
        file.classList.remove('file-active');
    });
    e.target.classList.add('file-active');

    CodeFile.forEach((text) => {
        if (e.target.innerHTML == 'Style.css') {
            text.parentElement.classList.add('none');
            CssFile.classList.remove('none');
        } else if (e.target.innerHTML == "Script.js") {
            text.parentElement.classList.add('none');
            JsFile.classList.remove('none');
        } else {
            text.parentElement.classList.add('none');
            HtmlFile.classList.remove('none');
        }

    });
}


// ++++++++++++++  Run Code   +++++++++++

const RunBtn = document.getElementById('RunBtn');
const OutPut = document.getElementById('OutPut');
RunBtn.addEventListener("click", RunCode);

const NewCssCode = document.createElement('style');
const NewJsCode = document.createElement('script');

function RunCode() {
    OutPut.innerHTML = HtmlFile.firstElementChild.value;
    NewCssCode.innerText = CssFile.firstElementChild.value;
    NewJsCode.innerText = JsFile.firstElementChild.value;
    document.head.appendChild(NewCssCode);
    document.body.appendChild(NewJsCode);
    ScrollScreen();
};

// Scroll the OutPut
function ScrollScreen() {
    window.scrollTo({    // Scroll to the bottom of the page
        top: document.body.scrollHeight,
        behavior: 'smooth' // Smooth scrolling animation
    });
}

// Theme Change
const theme = document.querySelector("#theme");
theme.addEventListener("click", ThemeChange);

function ThemeChange(e) {
    CodeFile.forEach((file) => {
        file.classList.toggle("bg-white");
        file.classList.toggle("text-dark");
    });
    line.classList.toggle("bg-white");
    line.classList.toggle("text-dark");
    theme.firstChild.classList.toggle('text-dark');
    theme.firstChild.classList.toggle('bg-white');
}