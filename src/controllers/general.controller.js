import aboutJson from "../data/about.json" with { type: "json" };
import faqJson from "../data/faq.json" with { type: "json" };
import teamJson from "../data/team.json" with { type: "json" };
import projectsJson from "../data/projects.json" with { type: "json" };
import newsJson from "../data/news.json" with { type: "json" };

const controller = {};

controller.get404 = (req, res) => {
    res.status(404).render("404", {
        title: "Page Not Found",
        url: req.originalUrl
    });
};

controller.getHome = async (req, res) => {
    res.render("home", {
        title: "Home",
        projects: projectsJson,
        news: newsJson.slice(0, 3)
    });
}

controller.getAbout = async (req, res) => {
    res.render("about", {
        title: "About Us",
        sections: aboutJson
    });
}

controller.getFAQ = async (req, res) => {
    res.render("faq", {
        title: "FAQ",
        faq: faqJson
    });
}

controller.getTeam = async (req, res) => {
    res.render("team", {
        title: "Team",
        team: teamJson
    });
}

controller.getProjectDetail = async (req, res) => {
    const id = Number(req.params.id);

    const projectItem = projectsJson.find(n => n.id === id);

    if (!projectItem) {
        return res.status(404).render("404", {
            title: "Project not found",
            url: req.originalUrl
        });
    }

    res.render("projectDetail", {
        title: projectItem.title,
        projectItem
    });
}

controller.getNews = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = 10;

    const sortedNews = [...newsJson].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );

    const totalPages = Math.ceil(sortedNews.length / limit);
    const start = (page - 1) * limit;

    const paginatedNews = sortedNews.slice(start, start + limit);

    res.render("news", {
        title: "News",
        news: paginatedNews,
        currentPage: page,
        totalPages
    });
}

controller.getNewsDetail = async (req, res) => {
    const id = Number(req.params.id);

    const newsItem = newsJson.find(n => n.id === id);

    if (!newsItem) {
        return res.status(404).render("404", {
            title: "News not found",
            url: req.originalUrl
        });
    }

    res.render("newsDetail", {
        title: newsItem.title,
        newsItem
    });
}


export default controller;