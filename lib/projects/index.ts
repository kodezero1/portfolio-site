import { Project } from '../../types'

// Jukebox
import JukeboxArtists from '/public/img/projects/jukebox/artists.webp'
import JukeboxCollage from '/public/img/projects/jukebox/collage.webp'
import JukeboxLibrary from '/public/img/projects/jukebox/library.webp'
import JukeboxShortcuts from '/public/img/projects/jukebox/shortcuts.webp'
// QwikDraw
import QwikDesignHero from '/public/img/projects/qwikdraw/design-hero.webp'
//Scentfill
import ScentfillCarouselMobile from '/public/img/projects/scentfill/carousel.webp'
import SentfillCollage from '/public/img/projects/scentfill/collage.webp'
import SentfillPDPMobile from '/public/img/projects/scentfill/pdp-mobile.webp'
import SentfillPDP from '/public/img/projects/scentfill/pdp.webp'
import SentfillScents from '/public/img/projects/scentfill/scents.webp'
import SentfillWheel from '/public/img/projects/scentfill/wheel.webp'
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
    title: 'Jukebox',
    date: 'Jun 2023',
    tags: ['personal'],
    desktopImgs: [JukeboxCollage, JukeboxLibrary, JukeboxArtists, JukeboxShortcuts],
    mobileImgs: [],
    externalLink: 'https://github.com/kodezero1/jukebox/releases',
    github: 'https://github.com/kodezero1/jukebox',
    slug: 'jukebox',
    summary: 'Keyboard-centric desktop music player made with Tauri + Qwik',
    details: [
      {
        title: 'Current Project',
        description:
          'This project is a current work in progress. Check out the project readme for more information about the app and how to install it to use yourself.',
      },
    ],
  },
  {
    title: 'QwikDraw',
    date: 'Apr 2023',
    tags: ['personal'],
    desktopImgs: [QwikDesignHero],
    mobileImgs: [],
    externalLink: 'https://qwikdraw.app/',
    github: 'https://github.com/kodezero1/qwikdraw',
    slug: 'qwikdraw',
    summary: 'A simple web-based design canvas built using the Qwik framework',
    details: [
      {
        title: 'Objective',
        description:
          "The only real objective with this was to take a completely new framework, Qwik, and build something challenging. It initially started as a grid-like shape builder, but that didn't look great so it morphed into a shape and image based design tool of sorts.",
      },
      {
        title: 'Challenges',
        description:
          'One requirement for this project was to not use any external libraries other than the frontend framework itself. Some of the more challenging parts were the color picker, zooming/panning, keyboard shortcuts, and resizing elements.',
        // I wrote an article on the details of those features that can be found <a href="/articles/challenges-of-building-a-design-tool">here</a>.s
      },
      {
        title: 'Future',
        description:
          "I'd like to be able to multi-select and rearrange elements as well as add triangles. Currently using DOM elements for shapes. Considering a rewrite using canvas (WebGL?), but I'm having fun :P",
      },
    ],
  },

  {
    title: 'Scentfill',
    date: 'Jul 2022',
    tags: ['commercial'],
    desktopImgs: [SentfillCollage, SentfillWheel, SentfillPDP],
    mobileImgs: [SentfillPDPMobile, ScentfillCarouselMobile, SentfillScents],
    externalLink: 'https://scentfill.com/',
    slug: 'scentfill',
    summary: '...another favorite client',
    details: [],
  },
 
  {
    title: 'Music Player',
    date: 'Jan 2021',
    tags: ['personal'],
    desktopImgs: [LofiWavesMain, LofiWavesDesktop],
    mobileImgs: [],
    externalLink: 'http://lofiwaves.surge.sh/',
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
