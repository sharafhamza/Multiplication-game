// ====Player One start===
let playerone = document.querySelector(".playerone");
let playeroneinput = document.querySelector(".playeroneinput");
let playeronebutton = document.querySelector(".playeronebutton");
let playeronenumber;
// ====Player One end===
// ====Player two start===
let playertwo = document.querySelector(".playertwo");
let playertwoinput = document.querySelector(".playertwoinput");
let playertwobutton = document.querySelector(".playertwobutton");
// ====Player two end===
// ====Player three start===
let playerthree = document.querySelector(".playerthree");
let playerthreeinput = document.querySelector(".playerthreeinput");
let playerthreebutton = document.querySelector(".playerthreebutton");
// ====Player three end===
// ====Player four start===
let playerfour = document.querySelector(".playerfour");
let playerfourinput = document.querySelector(".playerfourinput");
let playerfourbutton = document.querySelector(".playerfourbutton");
// ====Player four end===

let playertwoheader = document.querySelector(".playertwoheader");
let text;
let type;
let typecount = -1;
let notice = document.querySelector(".notice");
let notice2 = document.querySelector(".notice2");
let notice3 = document.querySelector(".notice3");
let area = document.querySelector(".area");
let area2 = document.querySelector(".area2");
let area3 = document.querySelector(".area3");
let area4 = document.querySelector(".area4");
let body = document.querySelector("body");
let ani = document.querySelector(".ani");
// wrapper variables start
let playertwowrapper = document.querySelector(".playertwowrapper");
let playeronewrapper = document.querySelector(".playeronewrapper");
let playerthreewrapper = document.querySelector(".playerthreewrapper");
let playerfourwrapper = document.querySelector(".playerfourwrapper");
// wrapper variables end
// area error start
let areaerror = document.querySelector(".areaerror");
let areaerror2 = document.querySelector(".areaerror2");
let areaerror3 = document.querySelector(".areaerror3");
let areaerror4 = document.querySelector(".areaerror4");
let areabutton = document.querySelector(".areabutton");
let areabutton2 = document.querySelector(".areabutton2");
let areabutton3 = document.querySelector(".areabutton3");
let areabutton4 = document.querySelector(".areabutton4");
let error = document.querySelector(".error");
let error2 = document.querySelector(".error2");
let error3 = document.querySelector(".error3");
let error4 = document.querySelector(".error4");
// area error end
// success part start
let success = document.querySelector(".success");
let success2 = document.querySelector(".success2");
let success3 = document.querySelector(".success3");
let success4 = document.querySelector(".success4");
// success part end
// chance part start
let chance = document.querySelector(".chance");
let chance4 = document.querySelector(".chance4");
let chance3 = document.querySelector(".chance3");
let count = 5;
let count4 = 5;
let count3 = 5;
// chance part end
// gif part start
let gif = document.querySelector(".gif");
let gif2 = document.querySelector(".gif2");
let gif3 = document.querySelector(".gif3");
let gif4 = document.querySelector(".gif4");
// gif part end
// heading part start
let heading = document.querySelector(".heading");
let playertwoheading = document.querySelector(".playertwoheading");
let playerthreeheading = document.querySelector(".playerthreeheading");
let playerfourheading = document.querySelector(".playerfourheading");
// heading part end
let box = document.querySelector(".box");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let finalvalue;
let playerfourvalue;

// Player one satrt
playeronebutton.addEventListener("click", () => {
  if (playeroneinput.value) {
    if (playeroneinput.value - 11) {
      if (playeroneinput.value <= 12 && playeroneinput.value >= 1) {
        playeronenumber = playeroneinput.value * 9;
        playertwo.style.display = "block";
        playerone.style.display = "none";
      } else {
        area.style.flexDirection = "column";
        areaerror.style.width = "100%";
        areabutton.style.width = "100%";
        areabutton.style.margin = "12px";
        areaerror.style.transform = "translateY(0)";
        areaerror.classList.remove("hidden");
        playeronewrapper.style.transform = "translateY(0)";
        error.innerHTML = "Please give number between 1 to 12";
        type = error.innerHTML;
        text = error.innerHTML.split("");
        error.innerHTML = "";
        let errorjs = () => {
          typecount++;
          error.innerHTML += type.charAt(typecount);
          error.classList.add("add");

          if (typecount > text.length) {
            clearInterval(stop);
            typecount = -1;
            error.classList.remove("add");
            areabutton.classList.remove("hidden");
            areabutton.style.transform = "translateX(0)";
          }
        };
        let stop = setInterval(() => {
          errorjs();
        }, 250);
        areabutton.addEventListener("click", () => {
          function textminus() {
            error.classList.add("add");
            text.pop();
            error.innerHTML = text.join("");

            if (text.length == 0) {
              error.classList.remove("add");
              clearInterval(clear);
              areaerror.classList.add("hidden");
              areabutton.classList.add("hidden");
              areabutton.style.margin = "0";
              area.style.flexDirection = "row";
              playeronewrapper.style.transform = "translateY(22px)";
            }
          }
          let clear = setInterval(() => {
            textminus();
          }, 250);
        });
      }
    } else {
      areaerror.style.transform = "translateY(0)";
      areaerror.classList.remove("hidden");
      playeronewrapper.style.transform = "translateY(0)";
      error.innerHTML = "Please give number";
      type = error.innerHTML;
      text = error.innerHTML.split("");
      error.innerHTML = "";
      let errorjs = () => {
        typecount++;
        error.innerHTML += type.charAt(typecount);
        error.classList.add("add");
        if (typecount > text.length) {
          clearInterval(stop);
          typecount = -1;
          error.classList.remove("add");
          areabutton.classList.remove("hidden");
          areabutton.style.transform = "translateX(0)";
        }
      };
      let stop = setInterval(() => {
        errorjs();
      }, 250);
      areabutton.addEventListener("click", () => {
        function textminus() {
          error.classList.add("add");
          text.pop();
          error.innerHTML = text.join("");
          if (text.length == 0) {
            error.classList.remove("add");
            clearInterval(clear);
            areabutton.classList.add("hidden");
            areaerror.classList.add("hidden");
            playeronewrapper.style.transform = "translateY(22px)";
            areabutton.style.transform = "translateX(110px)";
            areaerror.style.transform = "translateY(54px)";
          }
        }
        let clear = setInterval(() => {
          textminus();
        }, 250);
      });
    }
  } else {
    areaerror.style.transform = "translateY(0)";
    areaerror.classList.remove("hidden");
    playeronewrapper.style.transform = "translateY(0)";
    error.innerHTML = "Please give a value";
    type = error.innerHTML;
    text = error.innerHTML.split("");
    error.innerHTML = "";
    let errorjs = () => {
      typecount++;
      error.innerHTML += type.charAt(typecount);
      error.classList.add("add");
      if (typecount > text.length) {
        error.classList.remove("add");
        clearInterval(stop);
        typecount = -1;
        areabutton.classList.remove("hidden");
        areabutton.style.transform = "translateX(0)";
      }
    };
    let stop = setInterval(() => {
      errorjs();
    }, 250);
    areabutton.addEventListener("click", () => {
      function textminus() {
        error.classList.add("add");
        text.pop();
        text.join();
        error.innerHTML = text.join("");
        if (text.length == 0) {
          clearInterval(clear);
          areabutton.classList.add("hidden");
          areaerror.classList.add("hidden");
          playeronewrapper.style.transform = "translateY(22px)";
          areabutton.style.transform = "translateX(110px)";
          areaerror.style.transform = "translateY(54px)";
        }
      }
      let clear = setInterval(() => {
        textminus();
      }, 400);
    });
  }
});
// Player one end
// Player two start
playertwobutton.addEventListener("click", () => {
  if (playertwoinput.value) {
    if (playertwoinput.value - 11) {
      if (playertwoinput.value <= 108 && playertwoinput.value >= 1) {
        count--;
        if (count != 0) {
          if (playeronenumber == playertwoinput.value) {
            heading.innerHTML = "winner board";
            gif.style.display = "none";
            notice.style.display = "none";
            success.innerHTML = "Congratulations!</br> Player 2 is winner";
            playertwobutton.style.display = "none";
            playertwoinput.style.display = "none";
            success.style.display = "block";
            chance.innerHTML = "Your Chance is over";
            box.style.transform = "translateX(-115%)";
            box2.style.opacity = "1";
            box2.style.visibility = "visible";
            finalvalue = 2;
            playertwoheading.innerHTML = "Winner Board";
            area2.style.display = "none";
            playertwo.style.paddingBottom = "20px";
          } else {
            chance.innerHTML = "Your Chance is remaining " + count;
          }
        } else {
          playertwo.style.paddingBottom = "20px";
          area2.style.display = "none";
          gif.style.display = "none";
          notice.style.display = "none";
          success.innerHTML = "Congratulations!</br> Player 1 is winner";
          playertwobutton.style.display = "none";
          playertwoinput.style.display = "none";
          chance.innerHTML = "Your Chance is over";
          success.style.display = "block";
          gif.style.display = "none";
          box.style.transform = "translateX(-115%)";
          heading.innerHTML = "";
          box2.style.opacity = "1";
          box2.style.visibility = "visible";
          finalvalue = 1;
          playertwoheading.innerHTML = "Winner Board";
        }
      } else {
        area2.style.flexDirection = "column";
        areaerror2.style.width = "100%";
        areabutton2.style.width = "100%";
        areabutton2.style.margin = "12px";
        areaerror2.style.transform = "translateY(0)";
        areaerror2.classList.remove("hidden");
        playertwowrapper.style.transform = "translateY(0)";
        error2.innerHTML = "Please give number between 1 to 108";
        type = error2.innerHTML;
        text = error2.innerHTML.split("");
        error2.innerHTML = "";
        let errorjs = () => {
          typecount++;
          error2.innerHTML += type.charAt(typecount);
          error2.classList.add("add");

          if (typecount > text.length) {
            clearInterval(stop);
            typecount = -1;
            error2.classList.remove("add");
            areabutton2.classList.remove("hidden");
            areabutton2.style.transform = "translateX(0)";
          }
        };
        let stop = setInterval(() => {
          errorjs();
        }, 250);
        areabutton2.addEventListener("click", () => {
          function textminus() {
            error2.classList.add("add");
            text.pop();
            error2.innerHTML = text.join("");

            if (text.length == 0) {
              error2.classList.remove("add");
              clearInterval(clear);
              playertwowrapper.style.transform = "translateY(22px)";
              playertwowrapper.style.marginBottom = "0";
              areaerror2.classList.add("hidden");
              areabutton2.classList.add("hidden");
              areabutton2.style.margin = "0";
              area2.style.flexDirection = "row";
              area2.style.marginTop = 0;
            }
          }
          let clear = setInterval(() => {
            textminus();
          }, 250);
        });
      }
    } else {
      areaerror2.style.transform = "translateY(0)";
      areaerror2.classList.remove("hidden");
      playertwowrapper.style.transform = "translateY(0)";
      error2.innerHTML = "Please give number";
      type = error2.innerHTML;
      text = error2.innerHTML.split("");
      error2.innerHTML = "";
      let errorjs = () => {
        typecount++;
        error2.innerHTML += type.charAt(typecount);
        error2.classList.add("add");

        if (typecount > text.length) {
          clearInterval(stop);
          typecount = -1;
          error2.classList.remove("add");
          areabutton2.classList.remove("hidden");
          areabutton2.style.transform = "translateX(0)";
        }
      };
      let stop = setInterval(() => {
        errorjs();
      }, 250);
      areabutton2.addEventListener("click", () => {
        function textminus() {
          error2.classList.add("add");
          text.pop();
          error2.innerHTML = text.join("");

          if (text.length == 0) {
            error2.classList.remove("add");
            clearInterval(clear);
            areabutton2.classList.add("hidden");
            areaerror2.classList.add("hidden");
            playertwowrapper.style.transform = "translateY(22px)";
            areabutton2.style.transform = "translateX(110px)";
            areaerror2.style.transform = "translateY(54px)";
          }
        }
        let clear = setInterval(() => {
          textminus();
        }, 250);
      });
    }
  } else {
    areaerror2.style.transform = "translateY(0)";
    areaerror2.classList.remove("hidden");
    playertwowrapper.style.transform = "translateY(0)";
    error2.innerHTML = "Please give a value";
    type = error2.innerHTML;
    text = error2.innerHTML.split("");
    error2.innerHTML = "";
    let errorjs = () => {
      typecount++;
      error2.innerHTML += type.charAt(typecount);
      error2.classList.add("add");

      if (typecount > text.length) {
        error2.classList.remove("add");
        clearInterval(stop);
        typecount = -1;
        areabutton2.classList.remove("hidden");
        areabutton2.style.transform = "translateX(0)";
      }
    };
    let stop = setInterval(() => {
      errorjs();
    }, 250);
    areabutton2.addEventListener("click", () => {
      function textminus() {
        error2.classList.add("add");
        text.pop();
        error2.innerHTML = text.join("");

        if (text.length == 0) {
          clearInterval(clear);
          areabutton2.classList.add("hidden");
          areaerror2.classList.add("hidden");
          playertwowrapper.style.transform = "translateY(22px)";
          areabutton2.style.transform = "translateX(110px)";
          areaerror2.style.transform = "translateY(54px)";
        }
      }
      let clear = setInterval(() => {
        textminus();
      }, 400);
    });
  }
});
// Player two end
// Player three start
playerthreebutton.addEventListener("click", () => {
  if (playerthreeinput.value) {
    if (playerthreeinput.value - 11) {
      if (playerthreeinput.value <= 108 && playerthreeinput.value >= 1) {
        count3--;
        if (count3 != 0) {
          if (playeronenumber == playerthreeinput.value) {
            playerfourvalue =
              success3.innerHTML = `Congratulations!</br> Player 3 and Player ${finalvalue} winner`;
            playerthreebutton.style.display = "none";
            playerthreeinput.style.display = "none";
            success3.style.display = "block";
            chance3.innerHTML = "Your Chance is over";
            gif2.style.display = "none";
            box2.style.transform = "translateY(0%)";
            error3.style.display = "none";
            box.style.display = "none";
            playerthreeheading.innerHTML = "Winner Board";
            box2.style.transform = "translateX(-520px)";
            box3.style.transform = "translateY(-268px)";
            box3.style.visibility = "visible";
            box3.style.opacity = "1";
            finalvalue = 3;
            notice2.style.display = "none";
            area3.style.display = "none";
            playerthree.style.paddingBottom = "20px";
          } else {
            chance3.innerHTML = "Your Chance is remaining " + count3;
          }
        } else {
          if (finalvalue == 1) {
            playerfourvalue =
              success3.innerHTML = `Congratulations!</br> Player 1 winner`;
          } else {
            playerfourvalue =
              success3.innerHTML = `Congratulations!</br> Player 1 and Player ${finalvalue} winner `;
          }
          area3.style.display = "none";
          playerthree.style.paddingBottom = "20px";
          playerthreebutton.style.display = "none";
          playerthreeinput.style.display = "none";
          success3.style.display = "block";
          chance3.innerHTML = "Your Chance is over";
          gif.style.display = "none";
          heading.innerHTML = "";
          gif2.style.display = "none";
          box2.style.transform = "translateY(0%)";
          error3.style.display = "none";
          box.style.display = "none";
          playerthreeheading.innerHTML = "Winner Board";
          box2.style.transform = "translateX(-520px)";
          box3.style.transform = "translateY(-268px)";
          box3.style.visibility = "visible";
          box3.style.opacity = "1";
          notice2.style.display = "none";
        }
      } else {
        area3.style.flexDirection = "column";
        areaerror3.style.width = "100%";
        areabutton3.style.width = "100%";
        areabutton3.style.margin = "12px";
        areaerror3.style.transform = "translateY(0)";
        areaerror3.classList.remove("hidden");
        playerthreewrapper.style.transform = "translateY(0)";
        error3.innerHTML = "Please give number between 1 to 108";
        type = error3.innerHTML;
        text = error3.innerHTML.split("");
        error3.innerHTML = "";
        let errorjs = () => {
          typecount++;
          error3.innerHTML += type.charAt(typecount);
          error3.classList.add("add");

          if (typecount > text.length) {
            clearInterval(stop);
            typecount = -1;
            error3.classList.remove("add");
            areabutton3.classList.remove("hidden");
            areabutton3.style.transform = "translateX(0)";
          }
        };
        let stop = setInterval(() => {
          errorjs();
        }, 250);
        areabutton3.addEventListener("click", () => {
          function textminus() {
            error3.classList.add("add");
            text.pop();
            error3.innerHTML = text.join("");

            if (text.length == 0) {
              error3.classList.remove("add");
              clearInterval(clear);
              playerthreewrapper.style.transform = "translateY(22px)";
              playerthreewrapper.style.marginBottom = "0";
              areaerror3.classList.add("hidden");
              areabutton3.classList.add("hidden");
              areabutton3.style.margin = "0";
              area3.style.flexDirection = "row";
              area3.style.marginTop = 0;
            }
          }
          let clear = setInterval(() => {
            textminus();
          }, 250);
        });
      }
    } else {
      areaerror3.style.transform = "translateY(0)";
      areaerror3.classList.remove("hidden");
      playerthreewrapper.style.transform = "translateY(0)";
      error3.innerHTML = "Please give number";
      type = error3.innerHTML;
      text = error3.innerHTML.split("");
      error3.innerHTML = "";
      let errorjs = () => {
        typecount++;
        error3.innerHTML += type.charAt(typecount);
        error3.classList.add("add");

        if (typecount > text.length) {
          error3.classList.remove("add");
          clearInterval(stop);
          typecount = -1;
          areabutton3.classList.remove("hidden");
          areabutton3.style.transform = "translateX(0)";
        }
      };
      let stop = setInterval(() => {
        errorjs();
      }, 250);
      areabutton3.addEventListener("click", () => {
        function textminus() {
          error3.classList.add("add");
          text.pop();
          error3.innerHTML = text.join("");

          if (text.length == 0) {
            clearInterval(clear);
            areabutton3.classList.add("hidden");
            areaerror3.classList.add("hidden");
            playerthreewrapper.style.transform = "translateY(22px)";
            areabutton3.style.transform = "translateX(110px)";
            areaerror3.style.transform = "translateY(54px)";
          }
        }
        let clear = setInterval(() => {
          textminus();
        }, 250);
      });
    }
  } else {
    areaerror3.style.transform = "translateY(0)";
    areaerror3.classList.remove("hidden");
    playerthreewrapper.style.transform = "translateY(0)";
    error3.innerHTML = "Please give a value";
    type = error3.innerHTML;
    text = error3.innerHTML.split("");
    error3.innerHTML = "";
    let errorjs = () => {
      typecount++;
      error3.innerHTML += type.charAt(typecount);
      error3.classList.add("add");

      if (typecount > text.length) {
        error3.classList.remove("add");
        clearInterval(stop);
        typecount = -1;
        areabutton3.classList.remove("hidden");
        areabutton3.style.transform = "translateX(0)";
      }
    };
    let stop = setInterval(() => {
      errorjs();
    }, 250);
    areabutton3.addEventListener("click", () => {
      function textminus() {
        error3.classList.add("add");
        text.pop();
        error3.innerHTML = text.join("");

        if (text.length == 0) {
          clearInterval(clear);
          areabutton3.classList.add("hidden");
          areaerror3.classList.add("hidden");
          playerthreewrapper.style.transform = "translateY(22px)";
          areabutton3.style.transform = "translateX(110px)";
          areaerror3.style.transform = "translateY(54px)";
        }
      }
      let clear = setInterval(() => {
        textminus();
      }, 400);
    });
  }
});
// Player three end
// Player four start
playerfourbutton.addEventListener("click", () => {
  if (playerfourinput.value) {
    if (playerfourinput.value - 11) {
      if (playerfourinput.value <= 108 && playerfourinput.value >= 1) {
        count4--;
        if (count4 != 0) {
          if (playeronenumber == playerfourinput.value) {
            box2.style.display = "none";
            success4.innerHTML =
              `${playerfourvalue} and Player 4 winner</br> The muliplication was </br> ${playeroneinput.value} x 9 = ` +
              playeronenumber;
            playerfourbutton.style.display = "none";
            playerfourinput.style.display = "none";
            success4.style.display = "block";
            chance4.innerHTML = "Your chance is over";
            gif4.style.display = "none";
            playerfourheading.innerHTML = "Winner Board";
            notice3.style.display = "none";
            box3.style.transform = "translateY(10px)";
            window.addEventListener("mousemove", function (e) {
              box3.classList.add("move");
              box3.style.transform = `translate(${e.clientX / 5}px, ${
                e.clientY / 5
              }px)`;
            });
            const start = () => {
              setTimeout(function () {
                confetti.start();
              }, 200);
            };
            const stop = () => {
              setTimeout(function () {
                confetti.stop();
              }, 5000);
            };
            start();
            stop();
          } else {
            chance4.innerHTML = "Your chance is remaining " + count4;
          }
        } else {
          let result = playerfourvalue.match("1");
          if (result) {
            success4.innerHTML =
              `${playerfourvalue} </br> The muliplication was </br> ${playeroneinput.value} x 9 = ` +
              playeronenumber;
          } else {
            success4.innerHTML =
              `${playerfourvalue} </br> and Player 1 winner </br> The muliplication was </br> ${playeroneinput.value} x 9 = ` +
              playeronenumber;
          }
          box2.style.display = "none";
          playerfourbutton.style.display = "none";
          playerfourinput.style.display = "none";
          success4.style.display = "block";
          chance4.innerHTML = "Your chance is over";
          gif4.style.display = "none";
          playerfourheading.innerHTML = "Winner Board";
          notice3.style.display = "none";
          box3.style.transform = "translateY(10px)";
          window.addEventListener("mousemove", function (e) {
            box3.classList.add("move");
            box3.style.transform = `translate(${e.clientX / 5}px, ${
              e.clientY / 5
            }px)`;
          });
          const start = () => {
            setTimeout(function () {
              confetti.start();
            }, 200);
          };
          const stop = () => {
            setTimeout(function () {
              confetti.stop();
            }, 5000);
          };
          start();
          stop();
        }
      } else {
        area4.style.flexDirection = "column";
        areaerror4.style.width = "100%";
        areabutton4.style.width = "100%";
        areabutton4.style.margin = "12px";
        areaerror4.style.transform = "translateY(0)";
        areaerror4.classList.remove("hidden");
        playerfourwrapper.style.transform = "translateY(0)";
        error4.innerHTML = "Please give number between 1 to 108";
        type = error4.innerHTML;
        text = error4.innerHTML.split("");
        error4.innerHTML = "";
        let errorjs = () => {
          typecount++;
          error4.innerHTML += type.charAt(typecount);
          error4.classList.add("add");

          if (typecount > text.length) {
            clearInterval(stop);
            typecount = -1;
            error4.classList.remove("add");
            areabutton4.classList.remove("hidden");
            areabutton4.style.transform = "translateX(0)";
          }
        };
        let stop = setInterval(() => {
          errorjs();
        }, 250);
        areabutton4.addEventListener("click", () => {
          function textminus() {
            error4.classList.add("add");
            text.pop();
            error4.innerHTML = text.join("");

            if (text.length == 0) {
              error4.classList.remove("add");
              clearInterval(clear);
              playerfourwrapper.style.transform = "translateY(22px)";
              playerfourwrapper.style.marginBottom = "0";
              areaerror4.classList.add("hidden");
              areabutton4.classList.add("hidden");
              areabutton4.style.margin = "0";
              area4.style.flexDirection = "row";
              area4.style.marginTop = 0;
            }
          }
          let clear = setInterval(() => {
            textminus();
          }, 250);
        });
      }
    } else {
      areaerror4.style.transform = "translateY(0)";
      areaerror4.classList.remove("hidden");
      playerfourwrapper.style.transform = "translateY(0)";
      error4.innerHTML = "Please give number";
      type = error4.innerHTML;
      text = error4.innerHTML.split("");
      error4.innerHTML = "";
      let errorjs = () => {
        typecount++;
        error4.innerHTML += type.charAt(typecount);
        error4.classList.add("add");

        if (typecount > text.length) {
          error4.classList.remove("add");
          clearInterval(stop);
          typecount = -1;
          areabutton4.classList.remove("hidden");
          areabutton4.style.transform = "translateX(0)";
        }
      };
      let stop = setInterval(() => {
        errorjs();
      }, 250);
      areabutton4.addEventListener("click", () => {
        function textminus() {
          error4.classList.add("add");
          text.pop();
          error4.innerHTML = text.join("");

          if (text.length == 0) {
            clearInterval(clear);
            areabutton4.classList.add("hidden");
            areaerror4.classList.add("hidden");
            playerfourwrapper.style.transform = "translateY(22px)";
            areabutton4.style.transform = "translateX(110px)";
            areaerror4.style.transform = "translateY(54px)";
          }
        }
        let clear = setInterval(() => {
          textminus();
        }, 250);
      });
    }
  } else {
    areaerror4.style.transform = "translateY(0)";
    areaerror4.classList.remove("hidden");
    playerfourwrapper.style.transform = "translateY(0)";
    error4.innerHTML = "Please give a value";
    type = error4.innerHTML;
    text = error4.innerHTML.split("");
    error4.innerHTML = "";
    let errorjs = () => {
      typecount++;
      error4.innerHTML += type.charAt(typecount);
      error4.classList.add("add");

      if (typecount > text.length) {
        error4.classList.remove("add");
        clearInterval(stop);
        typecount = -1;
        areabutton4.classList.remove("hidden");
        areabutton4.style.transform = "translateX(0)";
      }
    };
    let stop = setInterval(() => {
      errorjs();
    }, 250);
    areabutton4.addEventListener("click", () => {
      function textminus() {
        error4.classList.add("add");
        text.pop();
        error4.innerHTML = text.join("");
        if (text.length == 0) {
          clearInterval(clear);
          areabutton4.classList.add("hidden");
          areaerror4.classList.add("hidden");
          playerfourwrapper.style.transform = "translateY(22px)";
          areabutton4.style.transform = "translateX(110px)";
          areaerror4.style.transform = "translateY(54px)";
        }
      }
      let clear = setInterval(() => {
        textminus();
      }, 400);
    });
  }
});
// Player four end
