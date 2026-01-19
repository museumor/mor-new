import Link from 'next/link';
import SafeImage from './SafeImage';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-transparent hover:bg-black transition-colors duration-300 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <SafeImage 
            src="/images/logo/MOR_Logomark-forweb_white.png" 
            alt="Museum of Other Realities" 
            className="h-8 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/about" className="text-white/80 hover:text-white transition-colors">About</Link>
          <Link href="/host-an-event" className="text-white/80 hover:text-white transition-colors">Host an Event</Link>
          <Link href="/blog" className="text-white/80 hover:text-white transition-colors">Blog</Link>
          <Link href="/artists" className="text-white/80 hover:text-white transition-colors">Artists</Link>
          <Link href="/collection" className="text-white/80 hover:text-white transition-colors">Collection</Link>
          <Link href="/download" className="text-white/80 hover:text-white transition-colors">Download</Link>
        </nav>

        <Link
          href="/download"
          className="md:hidden inline-flex items-center gap-2 px-4 py-2 bg-white text-black text-sm font-medium rounded-sm hover:bg-gray-200 transition-colors"
        >
          Download
        </Link>
      </div>
    </header>
  );
}
