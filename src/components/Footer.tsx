export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-white/10 bg-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-6">MUSEUM OF OTHER REALITIES</h2>
        <div className="flex justify-center gap-6 mb-8 text-sm opacity-60">
          <a href="#" className="hover:opacity-100 transition-opacity">Twitter</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Discord</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Instagram</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Steam</a>
        </div>
        <p className="text-xs opacity-40">
          © {new Date().getFullYear()} Museum of Other Realities. All rights reserved.
          <br />
          Replica for GitHub Pages Demo.
        </p>
      </div>
    </footer>
  );
}
