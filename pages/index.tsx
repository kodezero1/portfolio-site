import { motion } from 'framer-motion'
import Head from 'next/head'
import styled from 'styled-components'
import { pageAnimation } from '../components/animation'
import Bio from '../components/Home/Bio'
import TVBar from '../components/Home/TVBar'
import SocialLinks from '../components/SocialLinks'

function Home() {
  return (
    <>
      <Head>
        <title>Samuel Adeoluwa</title>
        <meta name="description" content="Samuel Adeoluwa's Web Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Container variants={pageAnimation} initial="hidden" animate="show" exit="exit">
        <Bio />

        <SocialLinks />

        <TVBar />
      </Container>
    </>
  )
}

export default Home

const Container = styled(motion.main)`
  max-width: var(--max-w-screen);
  min-height: calc(100vh - var(--nav-height));
  margin: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 1rem;

  .spacer {
    height: auto;
    flex: 1;
  }

  @media screen and (min-width: 768px) {
    padding: 3rem 1rem 1rem;
  }
`
