let attempts = 0;
let index = 0;

function appStart() {
  const handleEnterKey = () => {
    console.log("엔터키");
  };
  const handlekeydown = (event) => {
    const key = event.key.toUpperCase();
    const keyCode = event.keyCode;
    const thisblock = document.querySelector(
      `.board-block[date-index='${attempts}${index}']`
    );
    if (event.key === "Enter") {
      handleEnterKey();
    } else if (index === 5) return;
    else if (65 <= keyCode && keyCode <= 90) {
      thisblock.innerText = key;
      index += 1;
    }
  };
  window.addEventListener("keydown", handlekeydown);
}

appStart();
