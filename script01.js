const container = document.getElementById("issuesContainer");
const count = document.getElementById("issueCount");
const loader = document.getElementById("loader");

let allIssues = [];

function loadIssues() {
  loader.classList.remove("hidden");

  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((res) => res.json())
    // .then((data) => console.log(data));
    .then((data) => {
      allIssues = data.data;

      displayIssues(allIssues);

      loader.classList.add("hidden");
    });
}

loadIssues();

function displayIssues(issues) {
  container.innerHTML = "";

  count.innerText = `${issues.length} Issues`;

  issues.forEach((issue) => {
    const card = document.createElement("div");

    const border = issue.status === "open" ? "green" : "purple";

    const icon = issue.status === "open" ? "text-green-600" : "text-purple-600";

    card.className = `bg-white p-4 rounded shadow cursor-pointer border-t-4`;

    card.style.borderColor = border;

    card.innerHTML = `

<div class="flex justify-between">

<span class="${icon} text-lg">●</span>

<span class="text-xs bg-gray-200 px-2 py-1 rounded">
${issue.priority}
</span>

</div>

<h3 class="font-bold mt-2">
${issue.title}
</h3>

<p class="text-sm text-gray-500">
${issue.description}
</p>

<div class="flex flex-wrap gap-1 mt-2">

${issue.labels
  .map(
    (label) =>
      `<span class="text-xs bg-yellow-200 px-2 py-1 rounded">
${label}
</span>`,
  )
  .join("")}

</div>

<p class="text-xs text-gray-400 mt-2">
by ${issue.author}
</p>

`;

    card.onclick = () => loadSingleIssue(issue.id);

    container.appendChild(card);
  });
}

function setActive(btn) {
  document.querySelectorAll(".tab").forEach((b) => {
    b.classList.remove("bg-purple-600", "text-white");

    b.classList.add("bg-gray-200");
  });

  btn.classList.add("bg-purple-600", "text-white");
}

document.getElementById("allBtn").onclick = function () {
  setActive(this);

  displayIssues(allIssues);
};

document.getElementById("openBtn").onclick = function () {
  setActive(this);

  const openIssues = allIssues.filter((issue) => issue.status === "open");

  displayIssues(openIssues);
};

document.getElementById("closedBtn").onclick = function () {
  setActive(this);

  const closedIssues = allIssues.filter((issue) => issue.status === "closed");

  displayIssues(closedIssues);
};

function loadSingleIssue(id) {
  fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`)
    .then((res) => res.json())

    .then((data) => {
      const issue = data.data;

      const modal = document.getElementById("modal");

      modal.classList.remove("hidden");
      modal.classList.add("flex");

      document.getElementById("modalContent").innerHTML = `

<h2 class="text-xl font-bold">
${issue.title}
</h2>

<p class="text-gray-600 mt-2">
${issue.description}
</p>

<p class="mt-2">
Priority: ${issue.priority}
</p>

<p>
Author: ${issue.author}
</p>

<div class="flex flex-wrap gap-1 mt-2">

${issue.labels
  .map(
    (label) =>
      `<span class="text-xs bg-yellow-200 px-2 py-1 rounded">
${label}
</span>`,
  )
  .join("")}

</div>

`;
    });
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

document.getElementById("searchBtn").onclick = searchIssues;

function searchIssues() {
  const text = document.getElementById("searchInput").value;

  loader.classList.remove("hidden");

  fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${text}`)
    .then((res) => res.json())

    .then((data) => {
      displayIssues(data.data);

      loader.classList.add("hidden");
    });
}
