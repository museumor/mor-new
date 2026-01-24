import { exhibits } from "@/data/exhibits";
import { blogPosts } from "@/data/blog";
import SafeImage from "@/components/SafeImage";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full bg-black">

      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-black -mt-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <SafeImage
            src="/images/home/Hero-NightSnow.jpg"
            alt="Museum of Other Realities"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* Stacked Logo */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight">
              Museum of<br />Other Realities
            </h1>
          </div>

          <p className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto mb-10">
            An immersive social art showcase in VR
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/download"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-medium text-sm rounded-sm hover:bg-gray-200 transition-colors"
            >
              Download
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="https://www.youtube.com/watch?v=zUtqvp1LIcM"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-medium text-sm rounded-sm hover:bg-white/10 transition-colors"
            >
              View Trailer
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* About / Statement */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
          A community of creators, explorers, and artists, the MOR provides a place to connect, share, and experience new media together with others from all over the world in VR.
        </p>
        <p className="mt-8 text-base text-gray-400 max-w-3xl mx-auto">
          The virtual museum is an ongoing, regularly-updated experience. It contains a cross section of the free-ranging experimentation present in the relatively new medium of VR art.
        </p>
      </section>

      {/* Supporting Artists */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-16">Supporting Artists</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {exhibits.map((exhibit) => (
            <div key={exhibit.id} className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-800">
                <SafeImage
                  src={exhibit.imageUrl}
                  alt={exhibit.artist}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{exhibit.artist}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{exhibit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/artists"
            className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors text-sm font-medium"
          >
            View all artists
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-12">Gallery</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="aspect-video overflow-hidden">
            <SafeImage
              src="/images/home/gallery-terrarium.png"
              alt="Terrarium VR Experience"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="aspect-video overflow-hidden">
            <SafeImage
              src="/images/home/gallery-bittman-space.jpg"
              alt="Bittman Space"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="aspect-video overflow-hidden">
            <SafeImage
              src="/images/home/gallery-joy.jpg"
              alt="Joy VR Art"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="aspect-video overflow-hidden">
            <SafeImage
              src="/images/home/gallery-sutu-show.png"
              alt="Sutu Equinox Show"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="aspect-video overflow-hidden md:col-span-2">
            <SafeImage
              src="/images/home/gallery-community.jpg"
              alt="MOR Community"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Press Quotes */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">Press</h2>
        <p className="text-gray-400 mb-12">What visitors are saying...</p>

        <div className="space-y-12">
          <blockquote className="text-lg md:text-xl text-gray-300 italic">
            &ldquo;I&apos;ve never found myself saying &apos;wow&apos; as many times as I did looking through each room.&rdquo;
            <footer className="mt-4 text-sm text-gray-500 not-italic">— UploadVR</footer>
          </blockquote>

          <blockquote className="text-lg md:text-xl text-gray-300 italic">
            &ldquo;It&apos;s an experience, not a game or demo.&rdquo;
            <footer className="mt-4 text-sm text-gray-500 not-italic">— Forbes</footer>
          </blockquote>

          <blockquote className="text-lg md:text-xl text-gray-300 italic">
            &ldquo;Multi-dimensional madness and portals.&rdquo;
            <footer className="mt-4 text-sm text-gray-500 not-italic">— Rock, Paper, Shotgun</footer>
          </blockquote>
        </div>
      </section>

      {/* Worked With */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">A Few Brands We&apos;ve Worked With</h2>
        <p className="text-gray-400 mb-12">Breaking new ground</p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          <SafeImage
            src="/images/logo/CANNES_XR_LOGO_2019.png"
            alt="Cannes XR"
            className="h-10 md:h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
          />
          <SafeImage
            src="/images/logo/Tribeca Logo.png"
            alt="Tribeca"
            className="h-10 md:h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
          />
          <SafeImage
            src="/images/logo/Verizon_Media_2019_logo white.png"
            alt="Verizon Media"
            className="h-8 md:h-10 w-auto opacity-70 hover:opacity-100 transition-opacity"
          />
          <SafeImage
            src="/images/logo/FDI_NewImages-Festival-white.png"
            alt="FDI New Images Festival"
            className="h-10 md:h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
          />
          <SafeImage
            src="/images/logo/Kaleidoscope_logo.png"
            alt="Kaleidoscope"
            className="h-8 md:h-10 w-auto opacity-70 hover:opacity-100 transition-opacity"
          />
          <SafeImage
            src="/images/logo/VIFF_Logo_WEB.png"
            alt="VIFF"
            className="h-8 md:h-10 w-auto opacity-70 hover:opacity-100 transition-opacity invert"
          />
        </div>
      </section>

      {/* Download Section */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">Download Now</h2>
        <p className="text-gray-400 mb-12">
          Available on Steam
        </p>

        <a
          href="https://store.steampowered.com/app/613900/Museum_of_Other_Realities/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block hover:opacity-80 transition-opacity"
        >
          <SafeImage
            src="/images/logo/Steam White Logo.svg"
            alt="Available on Steam"
            className="h-12 w-auto mx-auto"
          />
        </a>
      </section>

      {/* Blog Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-4">From the Blog</h2>
        <p className="text-gray-400 text-center mb-12">Our articles</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.slice(0, 3).map((post) => (
            <Link key={post.slug} href={post.link} className="group">
              <div className="aspect-video overflow-hidden mb-4 bg-gray-800">
                <SafeImage
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-xs text-gray-500 mb-2">{post.date}</p>
              <h3 className="text-lg font-medium text-white group-hover:text-gray-300 transition-colors leading-snug">
                {post.title}
              </h3>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors text-sm font-medium"
          >
            View all articles
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

    </div>
  );
}
