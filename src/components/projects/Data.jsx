import Project1 from "../../assets/img/jap_memory.png";
import Project2 from "../../assets/img/website_portfolio.png";
import Project3 from "../../assets/img/Process_diagramm.png";


export const projectsData = [
    {
        id: 1,
        image: Project1,
        title: "Japanese Memory Game",
        category: "Game",
        tools: ["Javascript", "HTML", "CSS", "Flexbox", "Transform 3d","Responsive Design"],
        link: "https://hai-mi.de/jap_memory.html"
    },
    {
        id: 2,
        image: Project2,
        title: "This Website Portfolio",
        category: "Website",
        tools: ["React", "useState", "Javascript", "CSS","Responsive Design"],
        link: "#home"
    },
    {
        id: 1,
        image: Project3,
        title: "Clustering of Exit Slips Responses",
        category: "Thesis",
        tools: ["Machine Learning","NLP", "SBERT", "Clustering","K-Means", "Python", "Plotly", "numpy", "pandas", "pytorch"],
        link: ""
    }
];

export const projectsNav = [
    {
        name: "All",
    },
    {
        name: "Game",
    },
    {
        name: "Website",
    },
    {
        name: "Thesis"
    }
];