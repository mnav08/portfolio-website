// accessible tab functionality

//tabs and panels are now NodeLists — like arrays of DOM elements.
const tabs = document.querySelectorAll('[role="tab"]');
const panels = document.querySelectorAll('[role="tabpanel"]');

// the switch panels function
const activateTab = (selectedTab) => {
  //reads aria-control panel ID e.i "panel-1"
  const targetPanelId = selectedTab.getAttribute("aria-controls");

  // reset tabs
  tabs.forEach((tab) => {
    tab.setAttribute("aria-selected", "false");
  });

  // hide panels (content info)
  panels.forEach((panel) => {
    panel.hidden = true;
  });

  // activate selected
  selectedTab.setAttribute("aria-selected", "true");
  document.getElementById(targetPanelId).hidden = false;
};

//loops over every tab and runs a function when's clicked.
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    activateTab(tab);
  });

  //keyboard navigation
  // e is the keyboard event obj
  tab.addEventListener("keydown", (e) => {
    let index = Array.from(tabs).indexOf(tab); //converts the NodeList into array so we can use .indexOf to find index of the tab beign iterated

    if (e.key === "ArrowRight") {
      tabs[(index + 1) % tabs.length].focus(); // If you're on the last tab and press right, % wraps you back to tab 0. Without it, index + 1 would go out of bounds.
    }

    if (e.key === "ArrowLeft") {
      tabs[(index - 1 + tabs.length) % tabs.length].focus(); //The + tabs.length before the % prevents negative numbers
    }

    /*focus() only moves the keyboard cursor — it doesn't activate the tab.
    So pressing Enter or Space while a tab is focused triggers the actual switch*/
    if (e.key === "Enter" || e.key === " ") {
      activateTab(tab);
    }
  });
});

// contact form email message
const formMessage = document.getElementById("toast-msg");
const scriptURL =
  "https://script.google.com/macros/s/AKfycbwgvQPFEk-sJLbo9aNw-RYhsEHwR3zB6yOp4cdy2Eg28pGrh5Lm9EnWndv0L117rtdu/exec";
const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => response.json())
    .then((response) => {
      ((formMessage.innerText = "Your message has been sent ✅"),
        setTimeout(() => {
          formMessage.innerText = "";
        }, 5000));
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
