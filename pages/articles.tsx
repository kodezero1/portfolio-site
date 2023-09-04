import { motion } from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next/types'
import { useState } from 'react'
import styled from 'styled-components'
import { fade, pageAnimation, staggerFade } from '../components/animation'
import { ArticleType, getAllPosts } from '../lib/articles'

type Props = {
  posts: ArticleType[]
}

export const getStaticProps: GetStaticProps = () => {
  const posts = getAllPosts()
  return { props: { posts } }
}

const Articles = ({ posts }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState('')

  return (
    <>
      <Head>
        <title>Articles</title>
        <meta name="description" content="Samuel Adeoluwa's Web Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Container variants={pageAnimation} initial="hidden" animate="show" exit="exit">
        {/* <PageTitle titleLeft="" titleRight="to write" /> */}

        <Control>
          <div className="categories">
            {Array.from(new Set(posts.flatMap((post) => post.categories))).map(
              (category) =>
                category && (
                  <button
                    onClick={() => setSelectedCategory(selectedCategory === category ? '' : category)}
                    key={category}
                    className={`${selectedCategory === category && 'selected'}`}
                  >
                    {category}
                  </button>
                )
            )}
          </div>
        </Control>

        <PostsContainer variants={staggerFade}>
          {posts
            .filter((post) => (selectedCategory ? post.categories?.includes(selectedCategory) : true))
            .map(({ title, dateCreated, slug, summary }) => (
              <PostItem key={slug} variants={fade}>
                <p className="date">{dateCreated}</p>

                <Link href={`/article/${slug}`} className="inner-link">
                  <div className="content">
                    <h2 className="title">{title}</h2>
                    {summary && <p className="summary">{summary}</p>}
                  </div>
                </Link>
              </PostItem>
            ))}
        </PostsContainer>
      </Container>
    </>
  )
}

export default Articles

const Container = styled(motion.section)`
  overflow: hidden;
  color: var(--text);
  max-width: var(--max-w-screen);
  padding: 0 1rem;
  margin: 2rem auto;
`

const Control = styled.div`
  .categories {
    max-width: 100%;
    width: 100%;
    overflow: auto;
    display: flex;
    align-items: center;

    button {
      font-size: 0.85rem;
      margin-right: 0.5rem;
      padding: 0.25rem 0.75rem;
      border-radius: 5px;
      background: var(--border);
      border: 1px solid var(--accent);
      color: var(--text);
      cursor: pointer;
      transition: all 0.25s ease;

      &.selected {
        color: white;
      }
    }
  }
`

const PostsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin: auto;
`

const PostItem = styled(motion.div)`
  width: 100%;
  display: flex;
  margin-top: 1rem;

  .date {
    min-width: max-content;
    font-size: 0.8rem;
    font-weight: 300;
    margin-top: 0.6rem;
    min-width: 100px;
  }

  .inner-link {
    display: block;
    text-decoration: none;
    transition: all 0.25s ease;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    flex: 1;

    &:hover {
      background: #262626;
    }

    .content {
      display: flex;
      flex-direction: column;

      h2 {
        font-weight: 300;
        width: fit-content;
        font-size: 1rem;
        color: white;
      }

      p {
        font-size: 0.8rem;
        margin: 0.5rem 0 0;
        font-weight: 300;
      }
    }
  }

  @media screen and (max-width: 500px) {
    flex-direction: column-reverse;

    .date {
      margin-top: 0.25rem;
      font-size: 0.8rem;
    }

    .inner-link {
      padding: 0.25rem 0;

      &:hover {
        background: none;
      }
    }
  }
`
