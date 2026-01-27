// document.addEventListener("DOMContentLoaded", () => {
//     const contentContainer = document.getElementById("content");

//     const addStyles = (el, styles) => Object.assign(el.style, styles);
//     const addClass = (el, className) => el.classList.add(className);

//     const createVerticalCard = (item) => {
//         const card = document.createElement("div");
//         //card.classList.add("col-sm-6", "mb-3", "mb-sm-0");
//         //addClass(card, "col-sm-6", "mb-3", "mb-sm-0")
//         addStyles(card, { width: "18rem" });
//         card.innerHTML = `
//             <div class="card">  
//                 <img src="${item.thumbnail || '../img/default-thumbnail.jpg'}" class="card-img-top" alt="${item.title}">
//                 <div class="card-body">
//                     <h5 class="card-title">${item.title}</h5>
//                     <p class="card-text">${item.summary || item.description}</p>
//                     <a href="/blog/1" class="btn btn-primary">Go somewhere</a>
//                 </div>
//             </div>
//         `;
//         return card;
//     };

//     const createHorizontalCard = (item) => {
//         const card = document.createElement("div");
//         addClass(card, "card mb-3");
//         card.innerHTML = `
//             <div class="row g-0">
//                 <div class="col-md-4">
//                     <img src="${item.thumbnail || '../img/default-thumbnail.jpg'}" class="card-img-top" alt="${item.title}">
//                 </div>
//                 <div class="col-md-8">
//                     <div class="card-body">
//                         <h5 class="card-title">${item.title}</h5>
//                         <p class="card-text">${item.summary || item.description}</p>
//                     <div/>
//                     <div class="card-body">
//                         <a href="/blog/1" class="btn btn-primary">Go somewhere</a>
//                     <div/>
//                 </div>
//             </div>
//         `;
//         return card;
//     };

//     const loadHomePage = async () => {
//         const projects = await fetch("../data/projects.json").then(res => res.json());
//         const blogs = await fetch("../data/blogs.json").then(res => res.json());

//         contentContainer.innerHTML = `
//             <section id="home">
//                 <h2>Bienvenido a Game Studio</h2>
//                 <p>Aquí encontrarás información sobre nuestros proyectos y blogs.</p>
//             </section>
//             <section id="projects">
//                 <h2>Projects</h2>
//                 <div class="row" id="projects-container"></div>
//             </section>
//             <section id="blogs">
//                 <h2>Latest Blogs</h2>
//                 <div class="row" id="blogs-container"></div>
//             </section>
//         `;

//         // Load cards for projects
//         const projectsContainer = document.getElementById("projects-container");
//         projects.forEach(project => {
//             const card = createVerticalCard(project);
//             projectsContainer.appendChild(card);
//         });

//         // Load cards for blogs
//         const blogsContainer = document.getElementById("blogs-container");
//         blogs.forEach(blog => {
//             const card = createVerticalCard(blog);
//             blogsContainer.appendChild(card);
//         });
//     };

//     const loadAboutPage = () => {
//         contentContainer.innerHTML = `
//             <section id="about-us">
//                 <h2>Sobre Nosotros</h2>
//                 <p>Somos un estudio de desarrollo de juegos apasionado por crear experiencias únicas.</p>
//             </section>
//         `;
//     };

//     const loadProjectsPage = async (id) => {
//         const projects = await fetch("../data/projects.json").then(res => res.json());
//         const project = blog.find(b => b.id == id);
//         contentContainer.innerHTML = `
//             <section id="projects">
//                 <h2>Proyectos</h2>
//                 <div class="row" id="projects-container"></div>
//             </section>
//         `;
//         const projectsContainer = document.getElementById("projects-container");
//         projects.forEach(project => {
//             const card = createVerticalCard(project);
//             projectsContainer.appendChild(card);
//         });
//     };

//     const loadBlogPage = async (id) => {
//         const blogs = await fetch("../data/blogs.json").then(res => res.json());

//         const blog = blogs.find(b => b.id == id);
//         contentContainer.innerHTML = `
//             <section id="blog">
//                 <h2>${blog.title}</h2>
//                 <p>${blog.body[0].content}</p>
//             </section>
//         `;
//     };

//     const load404 = async () => {
//         contentContainer.innerHTML = `
//             <section id="error">
//                 <h1>404</h1>
//                 <p>La pagina que estas buscando no se encuentra disponible.</p>
//             </section>
//         `;
//     };

//     const handleRouting = () => {
//         const path = window.location.pathname;

//         if (path === "/") {
//             loadHomePage();
//         } else if (path === "/about") {
//             loadAboutPage();
//         } else if (path === "/project/") {
//             const projectId = path.split("/")[2];
//             loadProjectsPage(projectId);
//         } else if (path.startsWith("/blog/")) {
//             const blogId = path.split("/")[2];
//             loadBlogPage(blogId);
//         }
//         else{
//             load404();
//         }
//     };

//     // Manejar la navegación de las rutas
//     const navigate = (event) => {
//         event.preventDefault();
//         const path = event.target.getAttribute("href");
//         history.pushState({}, "", path);
//         handleRouting();
//     };

//     // Asociar los enlaces a las funciones de navegación
//     document.querySelectorAll("a").forEach(link => {
//         link.addEventListener("click", navigate);
//     });

//     window.addEventListener("popstate", handleRouting);

//     handleRouting(); // Cargar la página inicial al cargar
// });




document.addEventListener("DOMContentLoaded", () => {
    const contentContainer = document.getElementById("content");

    const addStyles = (el, styles) => Object.assign(el.style, styles);
    const addClass = (el, className) => el.classList.add(className);

    const createVerticalCard = (item) => {
        const card = document.createElement("div");
        //card.classList.add("col-sm-6", "mb-3", "mb-sm-0");
        //addClass(card, "col-sm-6", "mb-3", "mb-sm-0")
        addStyles(card, { width: "18rem" });
        card.innerHTML = `
            <div class="card">  
                <img src="${item.thumbnail || '../img/default-thumbnail.jpg'}" class="card-img-top" alt="${item.title}">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.summary || item.description}</p>
                    <a href="/blog/1" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        `;
        return card;
    };

    const createHorizontalCard = (item) => {
        const card = document.createElement("div");
        addClass(card, "card mb-3");
        card.innerHTML = `
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${item.thumbnail || '../img/default-thumbnail.jpg'}" class="card-img-top" alt="${item.title}">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.summary || item.description}</p>
                    <div/>
                    <div class="card-body">
                        <a href="/blog/1" class="btn btn-primary">Go somewhere</a>
                    <div/>
                </div>
            </div>
        `;
        return card;
    };

    const loadHomePage = async () => {
        const projects = await fetch("../data/projects.json").then(res => res.json());
        const blogs = await fetch("../data/blogs.json").then(res => res.json());

        contentContainer.innerHTML = `
            <section id="home">
                <h2>Welcome to Game Studio</h2>
                <p>Here you will find information about our projects and blogs.</p>
            </section>
            <section id="projects">
                <h2>Projects</h2>
                <div class="row" id="projects-container"></div>
            </section>
            <section id="blogs">
                <h2>Latest Blogs</h2>
                <div class="row" id="blogs-container"></div>
            </section>
        `;

        // Load cards for projects
        const projectsContainer = document.getElementById("projects-container");
        projects.forEach(project => {
            const card = createVerticalCard(project);
            projectsContainer.appendChild(card);
        });

        // Load cards for blogs
        const blogsContainer = document.getElementById("blogs-container");
        blogs.forEach(blog => {
            const card = createVerticalCard(blog);
            blogsContainer.appendChild(card);
        });
    };

    const loadAboutPage = () => {
        contentContainer.innerHTML = `
            <section id="about-us">
                <h2>About Us</h2>
                <p>We are a game development studio passionate about creating unique experiences.</p>
            </section>
        `;
    };

    const loadProjectsPage = async (id) => {
        const projects = await fetch("../data/projects.json").then(res => res.json());
        const project = projects.find(b => b.id == id);
        contentContainer.innerHTML = `
            <section id="projects">
                <h2>Projects</h2>
                <div class="row" id="projects-container"></div>
            </section>
        `;
        const projectsContainer = document.getElementById("projects-container");
        projects.forEach(project => {
            const card = createVerticalCard(project);
            projectsContainer.appendChild(card);
        });
    };

    const loadBlogPage = async (id) => {
        const blogs = await fetch("../data/blogs.json").then(res => res.json());

        const blog = blogs.find(b => b.id == id);
        contentContainer.innerHTML = `
            <section id="blog">
                <h2>${blog.title}</h2>
                <p>${blog.body[0].content}</p>
            </section>
        `;
    };

    const load404 = async () => {
        contentContainer.innerHTML = `
            <section id="error">
                <h1>404</h1>
                <p>The page you are looking for is not available.</p>
            </section>
        `;
    };

    const handleRouting = () => {
        const path = window.location.pathname;

        if (path === "/") {
            loadHomePage();
        } else if (path === "/about") {
            loadAboutPage();
        } else if (path === "/project/") {
            const projectId = path.split("/")[2];
            loadProjectsPage(projectId);
        } else if (path.startsWith("/blog/")) {
            const blogId = path.split("/")[2];
            loadBlogPage(blogId);
        }
        else{
            load404();
        }
    };

    // Handle route navigation
    const navigate = (event) => {
        event.preventDefault();
        const path = event.target.getAttribute("href");
        history.pushState({}, "", path);
        handleRouting();
    };

    // Attach navigation handlers to links
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", navigate);
    });

    window.addEventListener("popstate", handleRouting);

    handleRouting(); // Load the initial page on load
});
