import Container from '@/components/Container';
import Image from 'next/image';

import { shimmer, toBase64 } from '@/lib/imageManip';
import SubpageFooter from '@/components/SubpageFooter';
import TopTracks from '@/components/TopTracks';
import MyTrack from '@/components/MyTrack';

export default function Music() {
  return (
    <Container
      title="Music – Max DeMaio"
      image="https://maxdemaio.com/static/images/naus-music.jpg"
      description="A place for all things music related in my life."
    >
      <section>
        <h1 className="my-h1">
          Music
          <svg
            className="my-svg-header"
            width="1em"
            height="1em"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M25 4H10a2.002 2.002 0 0 0-2 2v14.556A3.955 3.955 0 0 0 6 20a4 4 0 1 0 4 4V12h15v8.556A3.954 3.954 0 0 0 23 20a4 4 0 1 0 4 4V6a2.002 2.002 0 0 0-2-2ZM6 26a2 2 0 1 1 2-2a2.002 2.002 0 0 1-2 2Zm17 0a2 2 0 1 1 2-2a2.003 2.003 0 0 1-2 2ZM10 6h15v4H10Z"
            ></path>
          </svg>
        </h1>
        <p className="my-para">
          A place for all things music related in my life. Here you'll find my
          favorite tracks, original music, and covers.
        </p>
      </section>

      <section>
        <h2 className="my-h2">My Featured Tracks</h2>
        <p className="my-para">
          My favorite tracks that I've created/covered. For all my music, feel
          free to check out{' '}
          <a
            href="https://soundcloud.com/maxdemaio"
            className="font-medium underline decoration-orange-300 decoration-2 text-gray-900 dark:text-gray-100"
          >
            my SoundCloud
          </a>
          .
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <div className="flex flex-col w-full">
            <h3 className="my-h3 pl-3">Originals</h3>
            <MyTrack
              artist=""
              songUrl="https://soundcloud.com/maxdemaio/whiplash"
              title="whiplash"
              original={true}
            />
            <MyTrack
              artist=""
              songUrl="https://soundcloud.com/maxdemaio/from-the-heart"
              title="from the heart"
              original={true}
            />
          </div>
          <div className="flex flex-col w-full">
            <h3 className="my-h3 pl-3">Covers</h3>
            <MyTrack
              artist="jorja smith & burna boy"
              songUrl="https://soundcloud.com/maxdemaio/be-honest-jorja-smith-burna-boy-cover"
              title="be honest"
              original={false}
            />
            <MyTrack
              artist="keshi"
              songUrl="https://soundcloud.com/maxdemaio/less-of-you-keshi-cover"
              title="less of you"
              original={false}
            />
          </div>
        </div>
      </section>

      <h2 className="my-h2">Top Spotify Tracks</h2>
      <p className="my-para">
        My most played tracks on Spotify over the last 4 weeks. To check out all
        my playlists, feel free to check out{' '}
        <a
          href="https://open.spotify.com/user/max_dem"
          className="font-medium underline decoration-green-300 decoration-2 text-gray-900 dark:text-gray-100"
        >
          my Spotify profile
        </a>
        .
      </p>
      <TopTracks />

      <Image
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(
          shimmer(1920, 1038)
        )}`}
        src="/static/images/naus-music.jpg"
        className="rounded"
        height={1038}
        width={1920}
        alt="Nausicaä of the Valley of the Wind - Music Picture"
      />

      <SubpageFooter />
    </Container>
  );
}
