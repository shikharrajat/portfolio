import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'UniConnect - AI Powered University Based Ecosystem',
        description: "Me and My Team spearheaded the development of an AI-powered standalone application built on Trumio’s base platform, designed to enhance its ecosystem. The project involved designing and implementing a comprehensive backend and database schema to ensure robust data management. I also devised advanced community platforms featuring nested-level post embedding and channel-based posts, enabling dynamic user interactions. Additionally, I integrated AI-driven Collective Intelligence Agents (CIAs) and leveraged the ChatGPT API to enhance project management, code review, and mentorship, significantly improving the platform's efficiency and user experience.",
        tools: ['Node.js','React','Express', 'MongoDB','Flutter','Firebase' ,'OpenAI API', 'Chat GPT API'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'TalkWave',
        description: 'I developed a robust and secure messaging app using Flutter, Firebase, and Zegocloud, integrating advanced features to enhance user experience. The app offers seamless phone number authentication to ensure top-notch security. It supports multimedia sharing, real-time video calling, and a dynamic story feature where content disappears after 24 hours. To foster user engagement, I implemented group chat functionality, online/offline status indicators, seen message notifications, and customizable dark/light themes. Additionally, the app includes auto-scroll for new messages and the ability to reply by tagging specific messages, all powered by Riverpod for state management.',
        tools: ['Flutter', 'FireBase', "RiverPod", "ZegoCloud"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'ImageVerse - Generate, Share, and Download Infinite Imagination!',
        description: 'I developed an innovative full-stack web application that enables users to generate AI images from custom prompts and share them within the ImageVerse Community. The platform showcases user-generated images along with associated prompts and user information, allowing community members to explore and download images directly from the showcase. Additionally, the application features a random prompt generator to inspire creativity. The project was built using a robust tech stack, including React, Node.js, Express, MongoDB, OpenAI, and Cloudinary.',
        tools: ['React', 'NodeJS', 'MongoDB', 'Express', 'Open AI API','Cloudinary'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Technical Board Website',
        description: "My team and I designed a dynamic website to showcase the Technical Board and its affiliated clubs, integrating Sanity.io CMS for easy content management and updates. The site features detailed profiles for each club, highlighting their activities, projects, and achievements, along with key events organized by the Technical Board, such as Kriti and the Inter-Hostel Technical Competition. The project was built using HTML, CSS, JavaScript, ReactJs, and Sanity.io, ensuring a user-friendly and easily maintainable platform.",
        tools: ['HTML', 'CSS', 'JavaScript', 'React', "Sanity.io"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },