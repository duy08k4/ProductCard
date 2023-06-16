const moreBtn = document.querySelector(".moreBtn");

moreBtn.addEventListener("click", () => {
    const outsideChange = document.querySelector(".outside");
    outsideChange.classList.add("outsideActive");

    const boardControl = document.querySelector(".boardControl");
    boardControl.classList.add("boardActive");

    const insideChange = document.querySelector(".inside");
    insideChange.classList.add("insideActive");

    const funcList = document.querySelector(".back");
    funcList.classList.add("backActive");
})

const closeBtn = document.querySelector(".closeBtn");

closeBtn.addEventListener("click", () => {
    const outsideChange = document.querySelector(".outside");
    outsideChange.classList.remove("outsideActive");

    const boardControl = document.querySelector(".boardControl");
    boardControl.classList.remove("boardActive");

    const insideChange = document.querySelector(".inside");
    insideChange.classList.remove("insideActive");

    const funcList = document.querySelector(".back");
    funcList.classList.remove("backActive");
})