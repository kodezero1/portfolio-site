import { Project } from '../../types'

// FitSync
import LiftClubMain from '/public/img/projects/liftclub/liftclub-main.jpeg'
import LiftClubPurpose from '/public/img/projects/liftclub/liftclub-purpose.png'
import LiftClubUserProfile from '/public/img/projects/liftclub/user-profile.png'
import LiftClubLog from '/public/img/projects/liftclub/workout-log-2.png'
// NeoLogos
import NeoLogosDesktop1 from '/public/img/projects/neologos/neologos-desktop1.jpg'
import NeoLogosDesktop2 from '/public/img/projects/neologos/neologos-desktop2.jpg'
import NeoLogosDesktop3 from '/public/img/projects/neologos/neologos-desktop3.jpg'
import NeoLogosMain from '/public/img/projects/neologos/neologos-main.jpeg'
import NeoLogosMobile1 from '/public/img/projects/neologos/neologos-mobile1.jpg'
import NeoLogosMobile2 from '/public/img/projects/neologos/neologos-mobile2.jpg'
// LofiWaves
import LofiWavesDesktop from '/public/img/projects/lofiwaves/lofiwaves-desktop.jpg'
import LofiWavesMain from '/public/img/projects/lofiwaves/lofiwaves-main.jpeg'

export const ProjectState: Project[] = [
   {
    title: 'FitSync',
    date: 'Jul 2023',
    tags: ['personal'],
    desktopImgs: [LiftClubMain, LiftClubPurpose],
    mobileImgs: [LiftClubUserProfile, LiftClubLog],
    externalLink: 'https://fitness-sync.vercel.app/',
    github: 'https://github.com/kodezero1/fitsync',
    slug: 'FitSync',
    summary: 'Track your workout progress with little effort and gain big insights',
    details: [
      {
        title: 'Purpose',
        description:
          'FitSync is a social fitness app that gives you the power to find well structured workouts and track your progress as you improve.',
      },
      {
        title: 'Join',
        description:
          'Best experienced as a lightweght PWA, meaning that there is no download required. By adding the web page to your home screen, users can access FitSync and have a native-like app experience.',
      },
      {
        title: 'Features',
        description:
          'Build workouts from an extensive list of default exercises, create your own exercises, organize workouts on a calendar to create a schedule to follow, and assemble teams where others can follow your routine, and more.',
      },
      {
        title: 'Documantation',
        description:
          'Check out the README.md file in the Github repository for up-to-date documentation on how to install and use the app.',
      },
    ],
  },

    {
    title: 'NeoLogos',
    date: 'Oct 2023',
    tags: ['personal'],
    desktopImgs: [NeoLogosMain, NeoLogosDesktop1, NeoLogosDesktop2, NeoLogosDesktop3],
    mobileImgs: [NeoLogosMobile1, NeoLogosMobile2],
    // externalLink: "https://neologos.herokuapp.com/",
    github: 'https://github.com/kodezero1/NeoLogos',
    slug: 'neologos',
    summary: 'Ever made of a word for something? Well now you know where to put it.',
    details: [
      {
        title: 'Front-end',
        description:
          'I used React and Redux as the building blocks for creating the front-end and managing the state of the site. Also, the site features a night mode and is completely mobile friendly.',
      },
      {
        title: 'Back-end',
        description:
          'For the back-end, I used a combination of Express and Mongoose create my server and schemas for my database.',
      },
      {
        title: 'Deployment',
        description:
          'For this project, I choose to use Heroku as my hosting service as they have a great system for deploying right when you commit to github',
      },
    ],
  },

  {
    title: 'Music Player',
    date: 'Jan 2021',
    tags: ['personal'],
    desktopImgs: [LofiWavesMain, LofiWavesDesktop],
    mobileImgs: [],
    externalLink: 'https://lofiwaves.netlify.app/',
    github: 'https://github.com/kodezero1/LofiWaves',
    slug: 'lofiwaves',
    summary: 'Like lofi? So do I, so why not checkout out some of my faves here',
    details: [
      {
        title: 'Front-end',
        description: 'This project was written entirely in React using tools such as: React Router and SCSS.',
      },
      {
        title: 'Lofi library',
        description:
          'The library consists of lofi beats that I like to listen to while I code. Sit up, zone-in, and code away!',
      },
      {
        title: 'Custom controls',
        description:
          'The app features autoplay and easy-to-use controls for the music player as well as a fully optimized mobile site.',
      },
    ],
  },
]
