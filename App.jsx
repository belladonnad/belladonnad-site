import React, { useState } from "react";
import { Music, Mail, Link as LinkIcon, Play, Download, ExternalLink, Copy } from "lucide-react";

export default function App() {
  const [copied, setCopied] = useState(false);
  const email = "hello@belladonnad.com"; // change to preferred contact

  const nav = [
    { id: "home", label: "home" },
    { id: "music", label: "music" },
    { id: "about", label: "about" },
    { id: "press", label: "epk" },
    { id: "contact", label: "contact" },
  ];

  const links = {
    spotifyArtist: "https://open.spotify.com/artist/5Rw2qmwBLauGBXjpPYOUwh",
    spotifyEmbed: "https://open.spotify.com/embed/artist/5Rw2qmwBLauGBXjpPYOUwh?utm_source=generator",
    appleMusic: "https://music.apple.com/", // update
    youtube: "https://www.youtube.com/@belladonnad", // update
    instagram: "https://www.instagram.com/", // update
    tiktok: "https://www.tiktok.com/@", // update
    distrokidSmartLink: "https://distrokid.com/", // update to your smartlink
    playlistEmbed: "", // optional: paste a Spotify playlist/album embed url
    epkPdf: "#", // upload your EPK PDF and replace
    pressPhotosZip: "#", // zip of approved photos
  };

  const socials = [
    { name: "spotify", href: links.spotifyArtist },
    { name: "instagram", href: links.instagram },
    { name: "tiktok", href: links.tiktok },
    { name: "youtube", href: links.youtube },
    { name: "apple music", href: links.appleMusic },
    { name: "smartlink", href: links.distrokidSmartLink },
  ];

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-fuchsia-500/30">
      {/* top nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-lg">belladonna d</a>
          <nav className="hidden md:flex gap-6 text-sm">
            {nav.map(n => (
              <a key={n.id} href={`#${n.id}`} className="hover:text-fuchsia-300 transition-colors">{n.label}</a>
            ))}
          </nav>
          <div className="md:hidden text-sm opacity-70">menu</div>
        </div>
      </header>

      {/* hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fuchsia-700/20 via-fuchsia-500/10 to-transparent"/>
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
              pop forward<br/>lyric first<br/>emotionally lethal
            </h1>
            <p className="mt-5 text-neutral-300 max-w-xl">
              songwriter and topliner crafting modern pop with an edge — melancholic shimmer meets big chorus payoff
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#music" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-fuchsia-600 hover:bg-fuchsia-500 transition shadow-lg shadow-fuchsia-900/30">
                <Play className="w-4 h-4"/>
                listen
              </a>
              {links.distrokidSmartLink && (
                <a href={links.distrokidSmartLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border border-neutral-700 hover:border-neutral-500">
                  <LinkIcon className="w-4 h-4"/>
                  smartlink
                </a>
              )}
            </div>
            <div className="mt-6 flex gap-4 text-sm">
              {socials.map(s => (
                <a key={s.name} href={s.href} target="_blank" rel="noreferrer" className="opacity-80 hover:opacity-100 hover:text-fuchsia-300 transition">
                  {s.name}
                </a>
              ))}
            </div>
          </div>

          {/* spotify artist embed */}
          <div className="rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl">
            <iframe
              title="spotify artist"
              src={links.spotifyEmbed}
              width="100%"
              height="380"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* music section */}
      <section id="music" className="border-t border-neutral-800 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="flex items-center gap-3">
            <Music className="w-5 h-5"/>
            <h2 className="text-2xl md:text-3xl font-semibold">music</h2>
          </div>
          <p className="mt-3 text-neutral-300 max-w-3xl">
            stream the latest singles and demos — for collabs, stems and topline inquiries hit contact
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {/* featured single card */}
            <div className="rounded-3xl border border-neutral-800 p-4 md:p-6 bg-gradient-to-b from-neutral-900 to-neutral-950">
              <div className="text-sm uppercase tracking-wide opacity-70">latest release</div>
              <h3 className="text-xl md:text-2xl font-semibold mt-1">your latest single</h3>
              <p className="text-neutral-300 mt-2">short one-liner about vibe — e.g., melancholic happy with a knock-out chorus</p>
              <div className="mt-4 rounded-2xl overflow-hidden border border-neutral-800">
                <iframe
                  title="spotify embed"
                  src={links.spotifyEmbed}
                  width="100%"
                  height="352"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 flex gap-3">
                {links.distrokidSmartLink && (
                  <a href={links.distrokidSmartLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl px-3 py-2 border border-neutral-700 hover:border-neutral-500">
                    <ExternalLink className="w-4 h-4"/>
                    stream everywhere
                  </a>
                )}
              </div>
            </div>

            {/* playlist or cuts */}
            <div className="rounded-3xl border border-neutral-800 p-4 md:p-6 bg-gradient-to-b from-neutral-900 to-neutral-950">
              <div className="text-sm uppercase tracking-wide opacity-70">cuts and collabs</div>
              <h3 className="text-xl md:text-2xl font-semibold mt-1">select work</h3>
              <ul className="mt-3 space-y-2 text-neutral-300">
                <li>• song title — artist — role: songwriter/topliner</li>
                <li>• song title — artist — role: co-writer</li>
                <li>• sync-ready instrumentals on request</li>
              </ul>
              <div className="mt-4 rounded-2xl overflow-hidden border border-neutral-800">
                {links.playlistEmbed ? (
                  <iframe title="playlist" src={links.playlistEmbed} width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />
                ) : (
                  <div className="p-6 text-neutral-400 text-sm">add a spotify playlist or album embed here</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* about */}
      <section id="about" className="border-t border-neutral-800 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">about</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-6">
            <p className="md:col-span-2 text-neutral-300 leading-relaxed">
              belladonna d writes hook-heavy pop that lives in the tension between ache and adrenaline — think bittersweet melodies, punchy drops, and lyrics that cut while they comfort
              she works fast, collaborates well, and brings a clear taste profile to every session
            </p>
            <div className="rounded-3xl border border-neutral-800 p-4">
              <div className="text-sm uppercase tracking-wide opacity-70">fast facts</div>
              <ul className="mt-2 text-neutral-300 space-y-1">
                <li>• based in dc — available remote or in-person nyc</li>
                <li>• genres: pop • edm • alt • dance</li>
                <li>• services: topline • lyric • melody • vocal comp</li>
                <li>• turnaround: 24–72h for hooks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* press kit */}
      <section id="press" className="border-t border-neutral-800 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">epk</h2>
          <p className="mt-3 text-neutral-300 max-w-3xl">downloadables for press, playlists, and collaborators</p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <a href={links.epkPdf} className="rounded-2xl border border-neutral-800 p-4 hover:border-neutral-600 transition inline-flex items-center justify-between">
              <div>
                <div className="text-lg font-medium">one-sheet pdf</div>
                <div className="text-neutral-400 text-sm">bio • highlights • contact</div>
              </div>
              <Download className="w-5 h-5"/>
            </a>
            <a href={links.pressPhotosZip} className="rounded-2xl border border-neutral-800 p-4 hover:border-neutral-600 transition inline-flex items-center justify-between">
              <div>
                <div className="text-lg font-medium">press photos</div>
                <div className="text-neutral-400 text-sm">hi-res approved shots</div>
              </div>
              <Download className="w-5 h-5"/>
            </a>
            <a href={links.spotifyArtist} target="_blank" rel="noreferrer" className="rounded-2xl border border-neutral-800 p-4 hover:border-neutral-600 transition inline-flex items-center justify-between">
              <div>
                <div className="text-lg font-medium">spotify profile</div>
                <div className="text-neutral-400 text-sm">artist page and discography</div>
              </div>
              <ExternalLink className="w-5 h-5"/>
            </a>
          </div>
        </div>
      </section>

      {/* contact */}
      <section id="contact" className="border-t border-neutral-800 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">contact</h2>
        <p className="mt-3 text-neutral-300 max-w-2xl">for sessions, cuts, or sync — send a brief and a ref track link</p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-neutral-800 p-6">
              <div className="text-sm uppercase tracking-wide opacity-70">email</div>
              <div className="mt-2 flex items-center gap-3">
                <code className="text-lg">{email}</code>
                <button onClick={copyEmail} className="inline-flex items-center gap-2 rounded-xl px-3 py-1.5 border border-neutral-700 hover:border-neutral-500">
                  <Copy className="w-4 h-4"/>
                  {copied ? "copied" : "copy"}
                </button>
              </div>
            </div>

            <form
              action="https://formspree.io/f/your-code"
              method="POST"
              className="rounded-3xl border border-neutral-800 p-6 space-y-3"
            >
              <div className="grid grid-cols-2 gap-3">
                <input className="bg-neutral-900 border border-neutral-800 rounded-xl px-3 py-2" name="name" placeholder="your name" required />
                <input className="bg-neutral-900 border border-neutral-800 rounded-xl px-3 py-2" name="email" type="email" placeholder="email" required />
              </div>
              <input className="bg-neutral-900 border border-neutral-800 rounded-xl px-3 py-2 w-full" name="subject" placeholder="subject" />
              <textarea className="bg-neutral-900 border border-neutral-800 rounded-xl px-3 py-2 w-full min-h-[120px]" name="message" placeholder="message" />
              <button type="submit" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-fuchsia-600 hover:bg-fuchsia-500 transition shadow-lg">
                <Mail className="w-4 h-4"/>
                send
              </button>
            </form>
          </div>

          <div className="mt-14 text-sm text-neutral-400">
            © {new Date().getFullYear()} belladonna d — all rights reserved
          </div>
        </div>
      </section>
    </div>
  );
}