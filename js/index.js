const process = [
  "Create a Production/Upstream Repo on GitHub",
  "Each team member makes a FORK of that repo, and clones it locally",
  "The local clone should have a `remote` added that points to the upstream",
  "Team members should ALWAYS use a local feature branch to write new code",
  "Before PUSHING to your fork, commit to FEATURE, checkout MASTER, then PULL UPSTREAM into MASTER",
  "Then MERGE FEATURE into MASTER, and PUSH MASTER up to the FORK",
  "FINALLY, create a PULL REQUEST, to send the fork to the UPSTREAM",
  "...REPEAT as needed",
];

document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("steps");
  for (let text of process) {
    const newStep = document.createElement("li");
    newStep.textContent = text;
    list.appendChild(newStep);
  }
});
