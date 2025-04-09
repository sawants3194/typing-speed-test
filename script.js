let startTime;
let isTyping = false;

function startTyping() {
  const input = document.getElementById("text-input").value;
  const reference = document.getElementById("text-display").innerText;

  if (!isTyping) {
    isTyping = true;
    startTime = new Date();
  }

  const currentTime = new Date();
  const timeTaken = (currentTime - startTime) / 1000; // in seconds

  const wordsTyped = input.trim().split(/\s+/).length;
  const wpm = Math.round((wordsTyped / timeTaken) * 60);

  document.getElementById("time").innerText = Math.floor(timeTaken);
  document.getElementById("wpm").innerText = isNaN(wpm) ? 0 : wpm;
}

let currentParagraph = "";

function loadRandomParagraph() {
  const randomIndex = Math.floor(Math.random() * testParagraphs.length);
  currentParagraph = testParagraphs[randomIndex];
  renderParagraph(); // show with colored spans
  document.getElementById("text-input").value = "";
}

function renderParagraph(input = "") {
  const display = document.getElementById("text-display");
  let html = "";

  for (let i = 0; i < currentParagraph.length; i++) {
    const char = currentParagraph[i];
    const typedChar = input[i];

    if (typedChar == null) {
      html += `<span class="pending">${char}</span>`;
    } else if (typedChar === char) {
      html += `<span class="correct">${char}</span>`;
    } else {
      html += `<span class="incorrect">${char}</span>`;
    }
  }

  display.innerHTML = html;
}

function startTyping() {
  const input = document.getElementById("text-input").value;
  renderParagraph(input);
}

  