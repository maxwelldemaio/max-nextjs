import Head from 'next/head';
import { getSortedPostsData } from '../../lib/posts';
import Date from '@/components/Date';
import NestedFooter from '@/components/NestedFooter';
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
export default function PostHome({ allPostsData }) {
    const blogTitle = "max overflow";

    return (
        <Container title="Blog – Max DeMaio">
        <div className="text-lg flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
            <h1 className="select-none font-bold text-3xl md:text-5xl tracking-tight mb-8 text-black dark:text-white">
                Blog{' '}
                <a href="/talks" className="text-gray-800 dark:text-gray-100 opacity-20 hover:opacity-50">
                    Videos/Talks
                </a>
            </h1>

            <p className="text-gray-600 dark:text-gray-400 mb-8">
                <strong>{blogTitle}</strong> is a blog about business, language, and computer science.
                Sometimes my thoughts overflow and end up here for safekeeping.
            </p>
            
            <section>
                <ul>
                    {allPostsData.map(({ id, date, title }) => (
                        <Link href={`/posts/${id}`}>
                            <a>
                                <li className="mb-4 opacity-60 hover:opacity-100" key={id}>
                                    <div className="text-black dark:text-white">{title}</div>
                                    <div>
                                        <span className="text-gray-500 dark:text-gray-500">
                                            <Date dateString={date} />
                                        </span>
                                        <span className="text-gray-400 dark:text-gray-600"> · (X)min</span>
                                    </div>
                                </li>
                            </a>
                        </Link>
                    ))}
                </ul>
            </section>
            <NestedFooter></NestedFooter>
        </div>
        </Container>
    );
}