const titles = ["Web Penetration Tester", "Incident Response Team"];
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
    speed = 2000; 
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
const card = document.getElementById("github-card");
const reposContainer = document.getElementById("repos"); 

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

// Fetch GitHub repositories
fetch(`https://api.github.com/users/${username}/repos`)
  .then(res => res.json())
  .then(repos => {
    reposContainer.innerHTML = "";

    repos.forEach(repo => {
      const repoCard = `
    <div class="p-4 rounded-lg shadow-md space-y-4 border border-[#00C834]">
  <h2 class="text-xl font-semibold">${repo.name}</h2>
  <p class="text-gray-600 mt-2">${repo.description || "No description available"}</p>

  <a href="${repo.html_url}" target="_blank" class="inline-block">
    <button
      class="overflow-hidden relative w-28 h-10 bg-[#00C834] text-black border-none rounded-md text-sm cursor-pointer z-10 group"
    >
      View
      <span
        class="absolute w-28 h-24 -top-8 -left-2 bg-[#00e03a] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-400 duration-700 origin-bottom"
      ></span>
      <span
        class="absolute w-28 h-24 -top-8 -left-2 bg-[#00b82f] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-600 origin-bottom"
      ></span>
      <span
        class="absolute w-28 h-24 -top-8 -left-2 bg-[#009924] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-600 duration-500 origin-bottom"
      ></span>
      <span
        class="group-hover:opacity-100 group-hover:duration-700 duration-100 opacity-0 absolute top-2.5 left-8 z-10 text-black"
        >GitHub</span
      >
    </button>
  </a>
</div>

      `;
      reposContainer.innerHTML += repoCard;
    });
  })
  .catch(error => {
    reposContainer.innerHTML = `<p class="text-red-500">Failed to load repositories.</p>`;
    console.error(error);
  });
 const hackerLine = "http://xxxx.com/uploads/shell.php?cmd=whoami";
let terminalIndex = 0;
const terminalTarget = document.getElementById("terminalText");

function typeHackerLine() {
  if (terminalIndex < hackerLine.length) {
    terminalTarget.innerHTML += hackerLine.charAt(terminalIndex);
    terminalIndex++;
    setTimeout(typeHackerLine, 82); // typing speed
  } else {
    setTimeout(() => {
      terminalTarget.innerHTML = "";      // clear text
      terminalIndex = 0;                  // reset index
      typeHackerLine();                   // restart typing
    }, 3599); // wait before restarting
  }
}

typeHackerLine();

 const navbar = document.getElementById('navbar');
    const mobileMenu = document.getElementById('mobile-menu');
    const toggleBtn = document.getElementById('mobile-menu-btn');

    toggleBtn.addEventListener('click', () => {
      toggleBtn.classList.toggle('active');
      mobileMenu.classList.toggle('hidden');
    });

    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        navbar.classList.remove('bg-[#161616]');
        navbar.classList.add('bg-transparent', 'backdrop-blur-sm');
      } else {
        navbar.classList.remove('bg-transparent', 'backdrop-blur-sm');
        navbar.classList.add('bg-[#161616]');
      }
    });

  const cursor = document.getElementById('cursor');

  document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX - 8}px, ${e.clientY - 8}px)`;
  });
