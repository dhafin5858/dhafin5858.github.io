const titles = ["Muhammad Dhafin", "Cybersecurity Analyst"];
const element = document.getElementById("animatedText");

let titleIndex = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
  const fullText = titles[titleIndex];
  
  if (isDeleting) {
    currentText = fullText.substring(0, charIndex--);
  } else {
    currentText = fullText.substring(0, charIndex++);
  }

  element.textContent = currentText;

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && currentText === fullText) {
    speed = 1500; 
    isDeleting = true;
  } else if (isDeleting && currentText === "") {
    isDeleting = false;
    titleIndex = (titleIndex + 1) % titles.length;
    speed = 700;
  }

  setTimeout(typeEffect, speed);
}

document.addEventListener("DOMContentLoaded", typeEffect);

const username = "dhafin5858"; 
const card = document.getElementById("github-card")

fetch(`https://api.github.com/users/${username}`)
  .then(res => res.json())
  .then(data => {
    card.innerHTML = `
      <img src="${data.avatar_url}" alt="${data.login}" class="w-24 h-24 rounded-full mx-auto border-2 border-[#00C834]" />
      <h2 class="text-xl font-bold">${data.name ?? data.login}</h2>
      <p class="text-sm text-gray-400">@${data.login}</p>
      <p class="text-sm">${data.bio ?? "No bio provided"}</p>
      <div class="flex justify-center gap-6 text-sm pt-2">
              <span>📦 ${data.public_repos} Repos</span>

        <span>👥 ${data.followers} Followers</span>
        <span>🔁 ${data.following} Following</span>
      </div>
      <a href="${data.html_url}" target="_blank" class=" mt-8 inline-block mt-4 px-4 py-2 bg-[#00C834] text-black rounded hover:bg-green-500 transition">
        View GitHub
      </a>
    `;
  })
  .catch(error => {
    card.innerHTML = `<p class="text-red-500">Failed to load GitHub data.</p>`;
    console.error(error);
  });

 const hackerLine = "http://xxxx.com/uploads/shell.php?cmd=whoami";
let terminalIndex = 0;
const terminalTarget = document.getElementById("terminalText");

function typeHackerLine() {
  if (terminalIndex < hackerLine.length) {
    terminalTarget.innerHTML += hackerLine.charAt(terminalIndex);
    terminalIndex++;
    setTimeout(typeHackerLine, 80); // typing speed
  } else {
    setTimeout(() => {
      terminalTarget.innerHTML = "";      // clear text
      terminalIndex = 0;                  // reset index
      typeHackerLine();                   // restart typing
    }, 1500); // wait before restarting
  }
}

typeHackerLine();
