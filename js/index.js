const 정답 = "APPLE";

let attempts = 0;
let index = 0;
let timer;

function appStart() {
  const displayGameover = () => {
    const div = document.createElement("div");
    div.innerText = "정답 입니다";
    div.style =
      "display:flex; justify-content:center; align-items:center; position:absolute; top:40vh; left:38vw; background-color: skyblue; width:200px; height:100px; font-size: 20px; border-radius: 15px;";
    document.body.appendChild(div);
  };
  const gameover = () => {
    window.removeEventListener("keydown", handlekeydown);
    displayGameover();
    clearInterval(timer);
  };

  const displayGameover_false = () => {
    const div = document.createElement("div");
    div.innerText = 정답;
    div.style =
      "display:flex; justify-content:center; align-items:center; position:absolute; top:40vh; left:38vw; background-color: aqua; width:200px; height:100px; font-size: 20px; border-radius: 15px;";
    document.body.appendChild(div);
  };

  const gameover_false = () => {
    window.removeEventListener("keydown", handlekeydown);
    displayGameover_false();
    clearInterval(timer);
  };

  const nextLine = () => {
    if (attempts === 5) return gameover_false();
    attempts += 1;
    index = 0;
  };

  const handleEnterKey = () => {
    let 맞은_갯수 = 0;
    for (let i = 0; i < 5; i++) {
      const block = document.querySelector(
        `.board-block[date-index='${attempts}${i}']`
      );
      const 입력한_글자 = block.innerText;
      const 정답_글자 = 정답[i];
      if (입력한_글자 === 정답_글자) {
        맞은_갯수 += 1;
        block.style.background = "#6AAA64";
      } else if (정답.includes(입력한_글자)) block.style.background = "#C9B458";
      else block.style.background = "#787C7E";
      block.style.color = "white";
    }

    if (맞은_갯수 === 5) gameover();
    else nextLine();
  };

  const handleBackSpace = () => {
    if (index > 0) {
      const prethisblock = document.querySelector(
        `.board-block[date-index='${attempts}${index - 1}']`
      );
      prethisblock.innerText = "";
    }
    if (index !== 0) index -= 1;
  };
  const handlekeydown = (event) => {
    const key = event.key.toUpperCase();
    const keyCode = event.keyCode;
    const thisblock = document.querySelector(
      `.board-block[date-index='${attempts}${index}']`
    );

    if (event.key === "Backspace") handleBackSpace();
    else if (index === 5) {
      if (event.key === "Enter") handleEnterKey();
      else return;
    } else if (65 <= keyCode && keyCode <= 90) {
      thisblock.innerText = key;
      index += 1;
    }
  };

  const startTimer = () => {
    const 시작_시간 = new Date();

    function setTime() {
      const 현재_시간 = new Date();
      const 흐른_시간 = new Date(현재_시간 - 시작_시간);
      const 분 = 흐른_시간.getMinutes().toString().padStart(2, "0");
      const 초 = 흐른_시간.getSeconds().toString().padStart(2, "0");
      const timer = document.querySelector("#timer");
      timer.innerText = `${분}:${초}`;
    }

    // 주기성
    timer = setInterval(setTime, 1000);
    console.log(timer);
  };
  startTimer();
  window.addEventListener("keydown", handlekeydown);
}

appStart();
