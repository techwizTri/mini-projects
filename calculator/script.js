"use strict";
// NEW ES6 calculator
class Calculator {
  constructor() {
    this.screen = document.querySelector(".screen");
    this.buttons = document.querySelectorAll(".btn");
    this.clear = document.querySelector(".btn-clear");
    this.equal = document.querySelector(".btn-equal");

    this.clearBtn = this.clearBtn.bind(this);
    this.operandBtn = this.operandBtn.bind(this);
    this.equalBtn = this.equalBtn.bind(this);
  }

  clearBtn() {
    this.screen.value = "";
  }

  operandBtn(e) {
    let display = e.target.dataset.num;
    if (display === "." && this.screen.value.includes(".")) return;

    this.screen.value += display;
  }

  equalBtn() {
    if (this.screen.value === "") {
      this.screen.value = "Please Enter";
    } else {
      let answer = eval(this.screen.value);
      this.screen.value = answer;
    }
  }

  attachListeners() {
    this.buttons.forEach((button) => {
      button.addEventListener("click", this.operandBtn);
    });
    this.clear.addEventListener("click", this.clearBtn);
    this.equal.addEventListener("click", this.equalBtn);
  }
}

const calculator = new Calculator();
calculator.attachListeners();
