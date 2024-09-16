
const likeCounts = {};

const likeIcons = document.querySelectorAll('.like-icon');
const projectTitles = document.querySelectorAll('.project-title');

likeIcons.forEach((icon, index) => {
  const projectTitle = projectTitles[index].textContent.trim();

  icon.addEventListener('click', () => {
    icon.querySelector('i').classList.toggle('fa-solid');
    icon.querySelector('i').classList.toggle('fa-regular');
    icon.querySelector('i').classList.toggle('text-red');

    if (!likeCounts[projectTitle]) {
      likeCounts[projectTitle] = 0;
    }

    if (icon.querySelector('i').classList.contains('fa-solid')) {
      likeCounts[projectTitle]++;
    } else {
      likeCounts[projectTitle]--;
    }

    // Display the updated like count (optional)
    console.log(`${projectTitle} likes: ${likeCounts[projectTitle]}`);
  });
});