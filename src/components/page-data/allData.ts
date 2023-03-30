import project1 from '../../../public/images/_projects/an-employee-directory.jpeg'
import project2 from "../../../public/images/_projects/virtual-lolly-app.jpeg";
import project3 from "../../../public/images/_projects/project-12a-gatsby-blogsite-with-contentful.jpeg";
import project4 from "../../../public/images/_projects/project-12d-bookmarking-application.jpeg";
import project5 from "../../../public/images/_projects/serverless-crud-app.jpeg";
import project6 from "../../../public/images/_projects/panaverse-dao-syllabus-website-redesign.jpeg";
import project7 from "../../../public/images/_projects/shopping-basket.jpeg";
import project8 from "../../../public/images/_projects/quiz-app-with-pwa-and-fcm.jpeg";
import project9 from "../../../public/images/_projects/jamstack-serverless-todo-app.jpeg";

/************* all skills logo *****************/

import Html from "../../../public/images/_skills/html.png";
import Css from "../../../public/images/_skills/css.png";
import Javascript from "../../../public/images/_skills/javascript.png";
import ReactImg from "../../../public/images/_skills/react.png";
import Tailwind from "../../../public/images/_skills/tailwind.png";
import Github from "../../../public/images/_skills/github1.png";
import Firebase from "../../../public/images/_skills/firebase.png";
import NextJS from "../../../public/images/_skills/nextjs.png";
import Typescript from "../../../public/images/_skills/typescript.png";
import ChakraUI from "../../../public/images/_skills/chakra-ui.svg";
import Docker from "../../../public/images/_skills/docker.png";
import Kubernetes from "../../../public/images/_skills/kubernetes.png";
import AWS_CDK from "../../../public/images/_skills/aws-cdk.png";
import Faunadb from "../../../public/images/_skills/faunadb.png";
import GatsbyJS from "../../../public/images/_skills/gatsby-js.png";
import Netlify from "../../../public/images/_skills/netlify.png";
import Graphql from "../../../public/images/_skills/graphql.png";
import AWS_DynamoDB from "../../../public/images/_skills/dynamo-db.png";


export const techs = [
    {
        id: 1,
        title: "HTML",
        src: Html,
    },
    {
        id: 2,
        title: "CSS",
        src: Css,
    },
    {
        id: 3,
        title: "JavaScript",
        src: Javascript,
    },
    {
        id: 4,
        title: "Typescript",
        src: Typescript,
    },
    {
        id: 5,
        title: "React",
        src: ReactImg,
    },
    {
        id: 6,
        title: "GatsbyJS",
        src: GatsbyJS,
    },
    {
        id: 7,
        title: "Next.js",
        src: NextJS,
    },
    {
        id: 8,
        title: "Tailwind",
        src: Tailwind,
    },
    {
        id: 9,
        title: "Chakra ui",
        src: ChakraUI,
    },
    {
        id: 10,
        title: "Firebase",
        src: Firebase,
    },
    {
        id: 11,
        title: "Netlify",
        src: Netlify,
    },
    {
        id: 12,
        title: "Github",
        src: Github,
    },
    {
        id: 13,
        title: "Docker",
        src: Docker,
    },
    {
        id: 14,
        title: "Kubernetes",
        src: Kubernetes,
    },
    {
        id: 15,
        title: "AWS CDK",
        src: AWS_CDK,
    },
    {
        id: 16,
        title: "FaunaDB",
        src: Faunadb,
    },
    {
        id: 17,
        title: "Graphql",
        src: Graphql,
    },
    {
        id: 18,
        title: "DynamoDB",
        src: AWS_DynamoDB,
    },
];


export const projects = [
    {
        id: 1,
        image: project1,
        project_name: "The Employee Directory App",
        languages: "Typescript",
        description:
            "This Employee Directory App was created with Next.js and Chakra-UI and deployed to Vercel.",
        github_link:
            "https://github.com/HamzaAhmedSheikh/an-employee-directory-with-Chakra-UI-and-Next.js",
        live_link:
            "https://an-employee-directory-with-chakra-ui-and-next-h8pxzqbo8.vercel.app/",
    },
    {
        id: 2,
        image: project2,
        project_name: "Virtual Lolly App",
        languages: "JavaScript",
        description:
            "Gatsby, Netlify, FaunaDB, Formik, and Storybook 6 were used to create this Virtual Lolly App, which was then deployed to Netlify.",
        github_link:
            "https://github.com/HamzaAhmedSheikh/project-12E-Virtual-Lolly",
        live_link: "https://project-12e-virtual-lolly.netlify.app/",
    },
    {
        id: 3,
        image: project3,
        project_name: "Blog Site",
        languages: "JavaScript & Typescript",
        description:
            "This Blog Site was created with Gatsby.js, Contentful, and TypeScript. and deployed to Netlify.",
        github_link:
            "https://github.com/HamzaAhmedSheikh/project-12A-Gatsby-Blog-with-Contentful",
        live_link:
            "https://project-12a-gatsby-blogsite-with-contentful.netlify.app/",
    },
    {
        id: 4,
        image: project4,
        project_name: "Bookmarking Application",
        languages: "Javascript",
        description:
            "This Bookmarking Application was created with FaunaDB and Netlify and deployed to Netlify.",
        github_link:
            "https://github.com/HamzaAhmedSheikh/project-12D_Bookmarking-Application",
        live_link: "https://project-12d-bookmarking-application.netlify.app/",
    },
    {
        id: 5,
        image: project5,
        project_name: "CRUD App",
        languages: "Typescript",
        description:
            "This Serverless CRUD App was created with Netlify Functions, Formik, Material-UI, and FaunaDB and deployed to Netlify.",
        github_link:
            "https://github.com/HamzaAhmedSheikh/project-12B_Serverless-CRUD-App",
        live_link: "https://serverless-crud-app-hamza.netlify.app/",
    },
    {
        id: 6,
        image: project6,
        project_name: "Panaverse Dao Syllabus Website",
        languages: "Typescript",
        description:
            "This Panaverse Dao Syllabus Website was created with  Next.js and Chakra-UI and deployed to Vercel.",
        github_link:
            "https://github.com/HamzaAhmedSheikh/panaverse-dao-syllabus-website-redesign",
        live_link: "https://panaverse-dao-syllabus-website-redesign.vercel.app/",
    },
    {
        id: 7,
        image: project7,
        project_name: "Shopping Basket App",
        languages: "Typescript",
        description:
            "This Shopping Basket App was created with React, Redux Toolkit, and Typescript and deployed to Surge.sh.",
        github_link:
            "https://github.com/HamzaAhmedSheikh/shopping-basket-with-redux-toolkit",
        live_link: "https://project-9a_shopping-basket.surge.sh/",
    },
    {
        id: 8,
        image: project8,
        project_name: "The Quiz App",
        languages: "Typescript",
        description:
            "This Quiz App was created with React, TypeScript, PWA, and Firebase FCM and deployed to Firebase.",
        github_link:
            "https://github.com/HamzaAhmedSheikh/quiz-app-with-pwa-and-fcm",
        live_link: "https://quiz-app-with-pwa-and-fcm.firebaseapp.com/",
    },
    {
        id: 9,
        image: project9,
        languages: "Javascript",
        description:
            "This Todo App was created with React Gatsby.js, Netlify, and FaunaDB and deployed to Netlify.",
        project_name: "JAMstack Todo App",
        github_link: "https://github.com/HamzaAhmedSheikh/JAMstack-TodoApp",
        live_link: "https://jamstackserverlesstodoapp.netlify.app/",
    },
];