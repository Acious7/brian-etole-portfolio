import React from 'react';
import { Project, Client, Testimonial, BlogPost, PodcastEpisode, GalleryImage } from './types';

export const PROJECTS: Project[] = [
    {
        id: 1,
        title: 'Community Conservation in Amboseli',
        category: 'Conservation',
        imageUrl: 'https://picsum.photos/seed/amboseli/1000/800',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        client: 'WWF-Kenya',
        description: 'Documented extensive conservation efforts in the SOKNOT landscape, focusing on community rangers, renewable energy solutions, and human-wildlife coexistence initiatives. The film highlights the delicate balance between local communities and the preservation of iconic wildlife.'
    },
    {
        id: 2,
        title: 'RIKA 2025: Indigenous Knowledge',
        category: 'Culture',
        imageUrl: 'https://picsum.photos/seed/rika/1000/800',
        client: 'TICAH',
        description: 'Produced a series of documentaries exploring indigenous knowledge, cultural practices, and intergenerational stories. This residency project aimed to preserve and amplify the voices of elders and community historians.'
    },
    {
        id: 3,
        title: 'Digital Rights & Inclusion Forum',
        category: 'Advocacy',
        imageUrl: 'https://picsum.photos/seed/drif/1000/800',
        client: 'BeySix Studios',
        description: 'Covered the DRIF 23 & 25 conferences in Kenya and Rwanda, creating dynamic multimedia content that merged advocacy with creative expression. The work captured keynotes, panel discussions, and the vibrant atmosphere of digital rights advocacy in Africa.'
    },
    {
        id: 4,
        title: 'XYZ Mtaani: Satire for Social Change',
        category: 'Advocacy',
        imageUrl: 'https://picsum.photos/seed/xyz/1000/800',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        client: 'Buni Media',
        description: 'Contributed to the grassroots spinoff of the acclaimed XYZ Show. Using humor, puppetry, and live performance, this project engaged communities on critical issues like politics, health, and social justice in an accessible and entertaining format.'
    },
    {
        id: 5,
        title: 'The El Molo: A Disappearing Heritage',
        category: 'Personal',
        imageUrl: 'https://picsum.photos/seed/elmolo/1000/800',
        client: 'Personal Project',
        description: 'An ongoing documentary series and film project focusing on Kenya’s smallest tribe, the El Molo. The project chronicles their history, cultural rites of passage, and the severe environmental challenges threatening their way of life on the shores of Lake Turkana.'
    },
    {
        id: 6,
        title: 'Youth in Governance',
        category: 'Corporate',
        imageUrl: 'https://picsum.photos/seed/somasawa/1000/800',
        client: 'Soma Sawa',
        description: 'Created visual stories documenting youth participation in governance and civic initiatives across Kenya, highlighting the impact of young leaders in shaping their communities.'
    }
];

export const CLIENTS: Client[] = [
    { name: 'WWF-Kenya' },
    { name: 'TICAH' },
    { name: 'BeySix Studios' },
    { name: 'Buni Media' },
    { name: 'Soma Sawa' },
    { name: 'Acious Media' }
];

export const TESTIMONIALS: Testimonial[] = [
    {
        quote: "Brian has an unparalleled ability to capture the soul of a story. His work in Amboseli was not just documentation; it was a powerful narrative that connected our conservation efforts with a global audience. His professionalism and creative vision are second to none.",
        name: "Jane Odongo",
        role: "Head of Communications",
        company: "WWF-Kenya"
    },
    {
        quote: "Working with Brian during the RIKA residency was a transformative experience. He approached our indigenous stories with profound respect and sensitivity, creating films that were both beautiful and deeply authentic. He is a true collaborator and a gifted storyteller.",
        name: "Dr. Kendi Mwenda",
        role: "Cultural Programs Director",
        company: "TICAH"
    },
    {
        quote: "The energy of the DRIF conference is hard to capture, but Brian and his team did it flawlessly. They produced content that was sharp, engaging, and perfectly aligned with our advocacy goals. I would highly recommend him for any high-stakes event coverage.",
        name: "David Chen",
        role: "CEO",
        company: "BeySix Studios"
    }
];

export const BLOG_POSTS: BlogPost[] = [
    {
        id: 1,
        title: "Finding the Story: A Week with the El Molo",
        category: "Field Notes",
        imageUrl: "https://picsum.photos/seed/blog1/1200/800",
        author: "Brian Etole",
        authorImageUrl: "https://picsum.photos/seed/brian-etole/100/100",
        date: "October 26, 2023",
        excerpt: "The dust of Lake Turkana settles on everything, but it also reveals truths. Spending a week with the El Molo community was a profound lesson in resilience, culture, and the encroaching threat of climate change...",
        // FIX: Replaced JSX with React.createElement to be compatible with a .ts file.
        content: React.createElement(
            React.Fragment,
            null,
            React.createElement('p', { className: "mb-4" }, "The dust of Lake Turkana settles on everything, but it also reveals truths. Spending a week with the El Molo community was a profound lesson in resilience, culture, and the encroaching threat of climate change. From the moment our boat landed on the rocky shores of their village, I knew this was a story that demanded more than just a camera; it required presence, listening, and a deep respect for a way of life that hangs in a delicate balance."),
            React.createElement('p', { className: "mb-4" }, "Our goal was to document the traditional fishing practices, which have sustained the El Molo for centuries. We followed the fishermen at dawn, their silhouettes stark against the rising sun. The lake, once abundant, now offers a meager catch. Elders spoke of a time when the water was sweeter and the fish plentiful. Their words were not just nostalgia; they were a chronicle of environmental loss, a story mirrored in communities across the globe."),
            React.createElement('img', { src: "https://picsum.photos/seed/blog1-content/1000/600", alt: "El Molo fishermen", className: "rounded-lg my-6" }),
            React.createElement('h3', { className: "text-2xl font-bold font-serif mb-3" }, "The Weight of Heritage"),
            React.createElement('p', null, "Beyond the environmental narrative, I was captivated by the cultural rites of passage. I was privileged to witness the preparations for a naming ceremony, a vibrant ritual that binds the individual to the collective. The songs, the beadwork, the shared meal—every element was a thread in a rich tapestry of identity. Capturing these moments felt like holding something sacred, a responsibility I did not take lightly. It's in these intimate spaces that the true story of the El Molo unfolds: a story of a people fighting to keep their heritage alive against formidable odds.")
        ),
        likes: 142,
        comments: [
            { id: 1, author: "Asha Jama", avatarUrl: "https://picsum.photos/seed/avatar1/50/50", date: "October 26, 2023", text: "Incredible work, Brian. This story needs to be told." },
            { id: 2, author: "Leo Carter", avatarUrl: "https://picsum.photos/seed/avatar2/50/50", date: "October 27, 2023", text: "The photography is stunning. Really captures the atmosphere." }
        ]
    },
    {
        id: 2,
        title: "The Ethics of the Lens: Storytelling with Dignity",
        category: "Reflections",
        imageUrl: "https://picsum.photos/seed/blog2/1200/800",
        author: "Brian Etole",
        authorImageUrl: "https://picsum.photos/seed/brian-etole/100/100",
        date: "September 15, 2023",
        excerpt: "As visual storytellers, we hold a certain power. The power to frame, to edit, to represent. But with that power comes a profound responsibility: to tell stories with dignity, respect, and consent...",
        // FIX: Replaced JSX with React.createElement to be compatible with a .ts file.
        content: React.createElement(
            React.Fragment,
            null,
            React.createElement('p', { className: "mb-4" }, "As visual storytellers, we hold a certain power. The power to frame, to edit, to represent. But with that power comes a profound responsibility: to tell stories with dignity, respect, and consent. This isn't just a professional guideline; it's a moral compass that must guide every project, especially when working with vulnerable communities or on sensitive subjects."),
            React.createElement('p', { className: "mb-4" }, "I've learned that the most important work often happens before the camera is even switched on. It's in the conversations, the shared cups of tea, the time taken to understand context and build trust. It's about ensuring that the people whose stories we are telling are partners in the process, not just subjects. Their voice should shape the narrative, and they should have agency over how their image and story are used. This collaborative approach doesn't weaken the story; it makes it stronger, more authentic, and more impactful.")
        ),
        likes: 215,
        comments: []
    }
];

export const PODCAST_EPISODES: PodcastEpisode[] = [
    {
        id: 1,
        episodeNumber: 12,
        series: "Season 1: Creative Conversations",
        topics: ["Conservation", "Community"],
        title: "The Sound of Conservation with Dr. Irene Nkosi",
        imageUrl: "https://picsum.photos/seed/podcast1/800/800",
        description: "In this episode, I sit down with renowned conservationist Dr. Irene Nkosi to discuss the role of community-led initiatives in protecting Kenya's biodiversity. We explore the challenges of human-wildlife conflict and the innovative solutions that are making a difference on the ground. Dr. Nkosi shares insights from her decades of work in the field and offers a hopeful perspective on the future of conservation in Africa.",
        duration: "45:30",
        releaseDate: "November 5, 2023",
        comments: [
             { id: 1, author: "EcoWarrior22", avatarUrl: "https://picsum.photos/seed/p-avatar1/50/50", date: "November 5, 2023", text: "Fantastic interview! Dr. Nkosi is such an inspiration." },
        ]
    },
    {
        id: 2,
        episodeNumber: 11,
        series: "Season 1: Creative Conversations",
        topics: ["Advocacy", "Art", "Social Change"],
        title: "Creative Advocacy: A Conversation with the Buni Media Team",
        imageUrl: "https://picsum.photos/seed/podcast2/800/800",
        description: "How can satire and art drive social change? I'm joined by the creative minds behind the XYZ Show to talk about their journey, the power of humor in political commentary, and the importance of taking art to the grassroots level with projects like XYZ Mtaani. We discuss the risks and rewards of using comedy to tackle sensitive issues.",
        duration: "52:10",
        releaseDate: "October 20, 2023",
        comments: []
    },
    {
        id: 3,
        episodeNumber: 1,
        series: "Season 2: Field Notes",
        topics: ["Culture", "Personal", "Fieldwork"],
        title: "Solo Notes: Reflections from El Molo",
        imageUrl: "https://picsum.photos/seed/podcast3/800/800",
        description: "A different format for this episode. I share some personal reflections and audio diaries from my recent trip to document the El Molo community. I discuss the logistical challenges, the emotional weight of the stories, and the moments of unexpected beauty that arise when you immerse yourself in a place and its people.",
        duration: "31:15",
        releaseDate: "October 5, 2023",
        comments: [
            { id: 1, author: "StorySeeker", avatarUrl: "https://picsum.photos/seed/p-avatar2/50/50", date: "October 6, 2023", text: "Loved this format. So raw and honest." },
            { id: 2, author: "Alex R.", avatarUrl: "https://picsum.photos/seed/p-avatar3/50/50", date: "October 7, 2023", text: "Makes me want to visit Lake Turkana. Thank you for sharing this." }
        ]
    },
    {
        id: 4,
        episodeNumber: 10,
        series: "Season 1: Creative Conversations",
        topics: ["Filmmaking", "Storytelling"],
        title: "The Craft of the Documentary Interview",
        imageUrl: "https://picsum.photos/seed/podcast4/800/800",
        description: "What makes a good interview? In this episode, I break down my process for preparing, conducting, and editing interviews for documentary films. I share tips on building rapport, asking effective questions, and listening for the story beneath the words.",
        duration: "38:45",
        releaseDate: "September 28, 2023",
        comments: []
    }
];


export const GALLERY_IMAGES: GalleryImage[] = [
    { id: 1, src: 'https://picsum.photos/seed/gallery1/800/1000', alt: 'Portrait of an elder', colSpan: 'col-span-1', rowSpan: 'row-span-2' },
    { id: 2, src: 'https://picsum.photos/seed/gallery2/1200/800', alt: 'Children playing in a village', colSpan: 'col-span-2', rowSpan: 'row-span-1' },
    { id: 3, src: 'https://picsum.photos/seed/gallery3/800/600', alt: 'Conservation ranger on patrol', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
    { id: 4, src: 'https://picsum.photos/seed/gallery4/800/1000', alt: 'Detailed shot of traditional beadwork', colSpan: 'col-span-1', rowSpan: 'row-span-2' },
    { id: 5, src: 'https://picsum.photos/seed/gallery5/800/600', alt: 'Fisherman casting a net at dawn', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
    { id: 6, src: 'https://picsum.photos/seed/gallery6/1200/800', alt: 'Wide landscape of the Amboseli', colSpan: 'col-span-2', rowSpan: 'row-span-1' },
    { id: 7, src: 'https://picsum.photos/seed/gallery7/800/600', alt: 'A community meeting in progress', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
];