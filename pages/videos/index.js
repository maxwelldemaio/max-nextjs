import Head from 'next/head';
import { getSortedPostsData } from '../../lib/posts';
import Date from '@/components/Date';
import Container from '@/components/Container';
import Link from 'next/link'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

// Pass our blogs as a prop to the Home component
export default function Videos({ allPostsData }) {
    const blogTitle = "max overflow";

    return (
        <Container title="Posts | Videos – Max DeMaio">
            <div className="text-lg flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 text-black dark:text-white">
                    <Link href="/posts" >
                        <a className="text-gray-800 dark:text-gray-100 opacity-20 hover:opacity-50">
                            Blog{' '}
                        </a>
                    </Link>
                    Videos
                </h1>

                <p className="text-gray-600 dark:text-gray-400 mb-8">
                    This page is a work in progress! Eventually it will make an API call to YouTube and fetch all my videos. The data will be 
                    represented as an unordered list (HTML element) where each item in the list will be one of my YouTube videos.
                </p>

                <section>
                    <ul>
                        <li className="mb-4 opacity-60 hover:opacity-100">example video 1</li>
                        <li className="mb-4 opacity-60 hover:opacity-100">example video 2</li>
                        <li className="mb-4 opacity-60 hover:opacity-100">example video 3</li>
                    </ul>
                </section>

                <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mt-4">
                    <Link href="/">
                        <a className="underline text-blue-400 hover:text-blue-600">← Back</a>
                    </Link>
                    <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mt-8 mb-8" />
                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                        <span><a className="underline text-blue-400 hover:text-blue-600" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a> 2021 © Maxwell DeMaio</span>
                    </p>
                </footer>
            </div>
        </Container>
    );
}