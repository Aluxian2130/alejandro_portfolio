type Project = {
  title: string;
  description: string;
  image: string;
  size?: string;
};

const projects: Project[] = [
  {
    title: 'Systems Engineering Process Model',
    description:
      'Applied model-based systems Engineering methodologies. It consisted of a detailed analysis of the system requirements and architecture for an automated video doorbell system that mimicked Ring, Google Nest, and other similar products.',
    image: 'assets/images/SEProcess.png',
  },
  {
    title: 'Airborne Ready',
    description:
      'A Full Stack Application for Data management for the United States Army that solved accountability and readiness status issues the Army was dealing with.',
    image: 'assets/images/AReady.png',
  },
  {
    title: 'A-10 USAF Simulator',
    description:
      'Developed and sustained an embedded systems simulator for the United States Air Force. The code was written in C++/ADA and used to simulate the A-10 Thunderbolt II aircraft systems.',
    image: 'assets/images/A10-Thunder.jpg',
  },
  {
    title: 'Soldier Solutions',
    description:
      'A full stack application for managing soldier data and readiness status for the United States Army. Built with a focus on usability and performance.',
    image: 'assets/images/ASWF-header-logo.svg',
    size: 'small',
  },
];

export function initProjects(): void {
  const projectList = document.getElementById('project-list');

  if (!projectList) {
    return;
  }

  projects.forEach((project, index) => {
    const card = document.createElement('div');
    const widthClass = index < 4 ? 'w-[45%]' : 'w-full max-w-xl';

    card.className = `border rounded-xl p-4 shadow-lg bg-white dark:bg-gray-700 ${widthClass}`;
    card.innerHTML = `
      <div class="tilt-wrapper mb-4">
        <div class="tilt-card">
          <div class="tilt-inner static-glow">
            <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover rounded" />
          </div>
        </div>
      </div>
      <h4 class="text-xl font-bold mb-2">${project.title}</h4>
      <p class="text-gray-600 dark:text-gray-300">${project.description}</p>
    `;

    projectList.appendChild(card);
  });
}
