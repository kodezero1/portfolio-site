import { motion } from 'framer-motion'
import Link from 'next/link'
import styled from 'styled-components'
import { fade, staggerFade } from '../animation'
import Giants from '../SVG/Giants'

function Bio() {
  return (
    <Description variants={staggerFade} className="max-w-screen">
      <motion.h1 variants={fade}>Samuel Adeoluwa</motion.h1>

      <motion.p variants={fade}>
        Fullstack software <em>engineer</em>, building and maintaining websites and web applications for 4+ years using popular frameworks, libraries and tools. 
      </motion.p>

      <motion.hr variants={fade} />

{/*       <motion.p variants={fade}></motion.p> */}

      <motion.p variants={fade}>
        When I&apos;m not in front of my laptop, I&apos;m either reading, playing chess, or out cycling.
        I also dabble with, <Link href="/art?tag=camera">photography</Link>, and learning how to think
        and problem solve.
      </motion.p>
    </Description>
  )
}
export default Bio

const Description = styled(motion.section)`
  margin: auto;
  border-radius: 7px;
  padding: 1rem;
  background: rgba(20, 20, 20, 0.5);
  border: 1px solid var(--accent);
  text-align: left;
  z-index: 2;
  color: #cbcbcb;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  em {
    font-family: var(--font-serif);
    font-weight: 400;
    letter-spacing: 0.03em;
  }

  h1 {
    font-size: 1.1rem;
    font-weight: 200;
    padding: 1rem 0;
  }

  hr {
    border: none;
    border-top: 1px solid var(--accent);
  }

  p {
    font-weight: 200;
    font-size: 0.95rem;
    line-height: 1.5rem;
    padding: 1rem 0;
  }

  .giants-container {
    position: relative;
    padding-left: 11px;
    font-weight: 400;

    .giants {
      height: 13px;
      width: auto;
      position: absolute;
      left: 1px;
      top: -1px;

      @media screen and (min-width: 768px) {
        height: 14px;
      }

      svg {
        height: 100%;
        width: auto;
        transition: color 0.5s ease;
      }
    }

    &:hover svg {
      color: #fd5a1e;
    }
  }
`
