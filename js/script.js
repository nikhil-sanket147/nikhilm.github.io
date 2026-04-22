// =============================
// DARK MODE TOGGLE
// =============================

const toggle = document.getElementById("theme-toggle");

if (toggle) {
    toggle.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }

    });
}


// =============================
// LOAD SAVED THEME
// =============================

window.addEventListener("load", () => {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }

});


// =============================
// MOBILE MENU
// =============================

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

if (hamburger && navMenu) {

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

}


// =============================
// SMOOTH SCROLLING
// =============================

document.querySelectorAll("a[href^='#']").forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const targetId = this.getAttribute("href");

        if (targetId && targetId !== "#") {

            e.preventDefault();

            const targetElement =
                document.querySelector(targetId);

            if (targetElement) {

                targetElement.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }

    });

});

// =============================
// SCROLL REVEAL
// =============================

const reveals = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {

    reveals.forEach(section => {

        const windowHeight = window.innerHeight;
        const elementTop = section.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            section.classList.add("show");

        }

    });

});

// =============================
// INITIAL SCROLL REVEAL
// =============================

function revealOnLoad() {

    const reveals = document.querySelectorAll(".section");

    reveals.forEach(section => {

        const windowHeight = window.innerHeight;
        const elementTop =
            section.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            section.classList.add("show");

        }

    });

}

window.addEventListener(
    "DOMContentLoaded",
    revealOnLoad
);


// =============================
// CONTACT FORM
// =============================

const form = document.getElementById("contact-form");
const message = document.getElementById("form-message");

if (form && message) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        message.textContent =
            "Message sent successfully!";

        message.style.color = "green";

        form.reset();

    });

}


// =============================
// PROJECTS + MODAL SYSTEM
// =============================



const container =
    document.getElementById("projects-container");

const modal =
    document.getElementById("project-modal");

const modalTitle =
    document.getElementById("modal-title");

const modalPeriod =
    document.getElementById("modal-period");

const modalRole =
    document.getElementById("modal-role");

const modalDescription =
    document.getElementById("modal-description");

const modalTech =
    document.getElementById("modal-tech");

const modalMetrics =
    document.getElementById("modal-metrics");

const closeBtn =
    document.querySelector(".close-btn");


// =============================
// RENDER PROJECT CARDS
// =============================

function renderProjects() {

    if (!container || typeof projects === "undefined") {
        return;
    }

    container.innerHTML = "";

    projects.forEach(project => {

        const techBadges =
    project.technologies
        .map(tech =>
            `<span class="tech-badge">${tech}</span>`
        )
        .join("");

        const card =
            document.createElement("div");

        card.classList.add("project-card");

        card.innerHTML = `

        <h3>${project.title}</h3>

        <p class="project-period">
        ${project.period}
        </p>

        <p>
        ${project.description.substring(0, 100)}...
        </p>

        <div class="tech-container">
        ${techBadges}
        </div>

        <button class="btn-small">
        View Details
        </button>

        `;

        card.addEventListener("click", () => {
            openModal(project);
        });

        container.appendChild(card);

    });

}


// =============================
// OPEN MODAL
// =============================

function openModal(project) {

    if (!modal) return;

    modal.style.display = "flex";

    if (modalTitle)
        modalTitle.textContent =
            project.title;

    if (modalPeriod)
        modalPeriod.textContent =
            "Duration: " + project.period;

    if (modalRole)
        modalRole.textContent =
            "Role: " + project.role;

    if (modalDescription)
        modalDescription.textContent =
            project.description;


    // Technologies

    if (modalTech) {

        modalTech.innerHTML = "";

        project.technologies.forEach(tech => {

            const li =
                document.createElement("li");

            li.textContent = tech;

            modalTech.appendChild(li);

        });

    }


    // Metrics

    if (modalMetrics) {

        modalMetrics.innerHTML = "";

        project.metrics.forEach(metric => {

            const li =
                document.createElement("li");

            li.textContent = metric;

            modalMetrics.appendChild(li);

        });

    }

}


// =============================
// CLOSE MODAL
// =============================

if (closeBtn) {

    closeBtn.addEventListener("click", () => {

        modal.style.display = "none";

    });

}


window.addEventListener("click", (e) => {

    if (modal && e.target === modal) {
        modal.style.display = "none";
    }

});


// =============================
// INITIALIZE PROJECTS
// =============================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderProjects();

    }
);

// =============================
// SKILLS RENDERING
// =============================

const skillsContainer =
    document.getElementById("skills-container");

function renderSkills() {

    if (!skillsContainer ||
        typeof skillsData === "undefined") {
        return;
    }

    skillsContainer.innerHTML = "";

    skillsData.forEach(category => {

        const categoryDiv =
            document.createElement("div");

        categoryDiv.classList.add(
            "skills-category"
        );

        const title =
            document.createElement("h3");

        title.classList.add(
            "skills-category-title"
        );

        title.textContent =
            category.category;

        categoryDiv.appendChild(title);

        const grid =
            document.createElement("div");

        grid.classList.add(
            "skills-grid"
        );

        category.skills.forEach(skill => {

            const skillDiv =
                document.createElement("div");

            skillDiv.classList.add(
                "skill"
            );

            skillDiv.textContent =
                skill;

            grid.appendChild(skillDiv);

        });

        categoryDiv.appendChild(grid);

        skillsContainer.appendChild(
            categoryDiv
        );

    });

}


// Initialize skills

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderSkills();

    }
);

// =============================
// EXPERIENCE RENDERING
// =============================

const experienceContainer =
    document.getElementById(
        "experience-container"
    );

function renderExperience() {

    if (!experienceContainer ||
        typeof experienceData === "undefined") {
        return;
    }

    experienceContainer.innerHTML = "";

    experienceData.forEach(job => {

        const card =
            document.createElement("div");

        card.classList.add(
            "experience-card"
        );

        const responsibilitiesList =
            job.responsibilities
                .map(item =>
                    `<li>${item}</li>`
                )
                .join("");

        const techBadges =
            job.technologies
                .map(tech =>
                    `<span class="tech-badge">${tech}</span>`
                )
                .join("");

        card.innerHTML = `

            <h3 class="experience-title">
                ${job.title}
            </h3>

            <p class="experience-company">
                ${job.company} | ${job.location}
            </p>

            <p class="experience-period">
                ${job.period}
            </p>

            <ul class="experience-list">
                ${responsibilitiesList}
            </ul>

            <div class="tech-container">
                ${techBadges}
            </div>

        `;

        experienceContainer.appendChild(card);

    });

}


// Initialize

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderExperience();

    }
);

// =============================
// EDUCATION RENDERING
// =============================

const educationContainer =
    document.getElementById(
        "education-container"
    );

function renderEducation() {

    if (!educationContainer ||
        typeof educationData === "undefined") {
        return;
    }

    educationContainer.innerHTML = "";

    educationData.forEach(item => {

        const card =
            document.createElement("div");

        card.classList.add(
            "education-card"
        );

        card.innerHTML = `

            <h3>
                ${item.degree}
            </h3>

            <p class="education-university">
                ${item.university}
            </p>

            <p class="education-period">
                ${item.period}
            </p>

            <p class="education-score">
                Score: ${item.score}
            </p>

        `;

        educationContainer.appendChild(card);

    });

}


// =============================
// CERTIFICATIONS RENDERING
// =============================

const certificationsContainer =
    document.getElementById(
        "certifications-container"
    );

function renderCertifications() {

    if (!certificationsContainer ||
        typeof certificationsData === "undefined") {
        return;
    }

    certificationsContainer.innerHTML = "";

    certificationsData.forEach(cert => {

        const card =
            document.createElement("div");

        card.classList.add(
            "certificate-card"
        );

        card.innerHTML = `

            <div class="certificate-icon">

                📄

            </div>

            <div class="certificate-content">

                <h4>
                    ${cert.name}
                </h4>

                <p class="certificate-issuer">
                    ${cert.issuer}
                </p>

                <a
                    href="${cert.pdf}"
                    target="_blank"
                    class="certificate-link"
                >
                    View Certificate
                </a>

            </div>

        `;

        certificationsContainer.appendChild(card);

    });

}

document.addEventListener(
    "DOMContentLoaded",
    renderCertifications
);

// =============================
// ACHIEVEMENTS RENDERING
// =============================

const achievementsContainer =
    document.getElementById(
        "achievements-container"
    );

function renderAchievements() {

    if (!achievementsContainer ||
        typeof achievementsData === "undefined") {
        return;
    }

    achievementsContainer.innerHTML = "";

    achievementsData.forEach(item => {

        const li =
            document.createElement("li");

        li.textContent =
            item.text;

        achievementsContainer.appendChild(li);

    });

}


// Initialize

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderEducation();
        renderCertifications();
        renderAchievements();

    }
);

// =============================
// ACTIVE NAV LINK HIGHLIGHT
// =============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 100;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});