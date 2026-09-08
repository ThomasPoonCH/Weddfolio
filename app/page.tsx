'use client';

import { useEffect, useState } from 'react';

const chapters = [
  ['01', 'Your story', 'A place to introduce who you are, how you met and the journey leading to your celebration.'],
  ['02', 'Your celebration', 'Dates, venues, schedules, dress guidance, travel information and everything guests need to arrive feeling prepared.'],
  ['03', 'Your guests', 'Beautifully considered RSVP journeys designed to make responding feel like part of the invitation itself.'],
  ['04', 'Your memories', 'A lasting digital space for photographs, moments and the story that remains long after the wedding day.'],
];

const collections = [
  ['01', 'The Garden', 'Romantic · Botanical · Intimate', 'garden'],
  ['02', 'The Editorial', 'Modern · Architectural · Refined', 'editorial'],
  ['03', 'The Classic', 'Timeless · Formal · Elegant', 'classic'],
];

const journey = [
  ['01', 'Discover', 'We begin with your story, celebration and visual world.'],
  ['02', 'Shape', 'We define the typography, colour, structure and digital atmosphere of your WEDDFOLIO.'],
  ['03', 'Create', 'Your experience is crafted, refined and prepared for your guests.'],
  ['04', 'Celebrate', 'Share your WEDDFOLIO and let everything your guests need live in one beautiful place.'],
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

function EditorialMedia({ className = '', label, tone = 'stone' }: { className?: string; label: string; tone?: string }) {
  // Replace with final WEDDFOLIO photography.
  return <div className={`editorial-media tone-${tone} ${className}`} role="img" aria-label={label}><i aria-hidden="true" /></div>;
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [quote, setQuote] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')), { threshold: .12 });
    document.querySelectorAll('.reveal').forEach((node) => observer.observe(node));
    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect(); };
  }, []);

  return <main>
    <header className={`site-header ${scrolled || menuOpen ? 'is-scrolled' : ''} ${menuOpen ? 'menu-active' : ''}`}>
      <a className="wordmark" href="#top" aria-label="WEDDFOLIO home">WEDDFOLIO</a>
      <nav className="desktop-nav" aria-label="Primary navigation"><a href="#stories">Stories</a><a href="#experience">Experience</a><a href="#collections">Collections</a><a href="#about">About</a></nav>
      <a className="header-cta" href="#enquire">Begin yours <Arrow /></a>
      <button className="menu-trigger" type="button" aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close' : 'Menu'}</button>
      <div id="mobile-menu" className={`mobile-menu ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}><nav aria-label="Mobile navigation">{['Stories', 'Experience', 'Collections', 'About'].map((item, index) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}><span>0{index + 1}</span>{item}</a>)}</nav><a className="mobile-enquire" href="#enquire" onClick={() => setMenuOpen(false)}>Begin yours <Arrow /></a></div>
    </header>

    <section className="hero" id="top" aria-labelledby="hero-title">
      <EditorialMedia className="hero-media" label="Atmospheric wedding celebration photography placeholder" tone="hero" />
      <div className="hero-content"><p className="eyebrow hero-eyebrow">WEDDFOLIO · HONG KONG</p><h1 id="hero-title">Your wedding,<br /><em>beautifully told.</em></h1><div className="hero-bottom"><p>Bespoke digital wedding experiences created around your story, your celebration and the people sharing it with you.</p><a className="text-link light" href="#enquire">Begin yours <Arrow /></a></div></div>
      <a className="scroll-cue" href="#stories">Explore WEDDFOLIO <span aria-hidden="true">↓</span></a>
    </section>

    <section className="manifesto" id="stories" aria-labelledby="manifesto-title"><p className="eyebrow reveal">Every love story deserves its own place</p><h2 className="reveal" id="manifesto-title">Made for one story.<br /><em>Yours.</em></h2><p className="manifesto-copy reveal">WEDDFOLIO creates individually considered wedding websites that bring your story, invitations, celebration details, guest experience and memories together in one beautifully designed digital home.</p><div className="manifesto-mark" aria-hidden="true">W</div></section>

    <figure className="atmosphere reveal"><EditorialMedia label="A quiet, cinematic wedding detail" tone="linen" /><figcaption>A celebration, considered in every detail.</figcaption></figure>

    <section className="experience" id="experience" aria-labelledby="experience-title">
      <header className="section-intro reveal"><p className="eyebrow">The experience</p><h2 id="experience-title">Everything your guests need.<br /><em>Nothing that does not belong.</em></h2></header>
      <div className="chapters">{chapters.map(([number, title, copy], index) => <article className={`chapter reveal ${index % 2 ? 'reverse' : ''}`} key={number}><EditorialMedia label={`${title} wedding photography placeholder`} tone={['sage', 'amber', 'plum', 'slate'][index]} /><div className="chapter-copy"><span className="number">{number}</span><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
    </section>

    <section className="personal" id="about" aria-labelledby="personal-title">
      <div className="personal-copy reveal"><p className="eyebrow">Created around you</p><h2 id="personal-title">Never simply<br /><em>a template.</em></h2><p>Every WEDDFOLIO begins with your story, your photographs and your celebration. Typography, colour, composition, movement and detail are shaped around the two of you.</p></div>
      <div className="frames reveal" aria-label="Three bespoke wedding website compositions"><div className="frame frame-left"><div className="frame-nav">W · F</div><div className="frame-line" /><div className="frame-title">A day to remember</div></div><div className="frame frame-center"><div className="frame-nav">ALEX & JAMES</div><div className="frame-monogram">A <i>&</i> J</div><div className="frame-date">12 · 10 · 2026</div></div><div className="frame frame-right"><div className="frame-nav">THE CELEBRATION</div><div className="frame-block" /><div className="frame-script">Together</div></div></div>
    </section>

    <section className="collections" id="collections" aria-labelledby="collections-title"><header className="section-intro reveal"><p className="eyebrow">The WEDDFOLIO collection</p><h2 id="collections-title">Different stories.<br /><em>Distinct expressions.</em></h2></header><div className="collection-list">{collections.map(([number, title, description, tone]) => <a href="#enquire" className="collection reveal" key={number}><EditorialMedia label={`${title} wedding website collection placeholder`} tone={tone} /><div className="collection-meta"><span className="number">{number}</span><div><h3>{title}</h3><p>{description}</p></div><span className="view-story">View story <Arrow /></span></div></a>)}</div></section>

    <section className="journey" aria-labelledby="journey-title"><header className="journey-heading reveal"><p className="eyebrow">The journey</p><h2 id="journey-title">From your first conversation<br /><em>to your wedding day.</em></h2></header><div className="journey-list">{journey.map(([number, title, copy]) => <article className="journey-step reveal" key={number}><span className="number">{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

    <section className="brand-quote reveal" aria-label="WEDDFOLIO philosophy"><blockquote>A wedding lasts a day.<br /><em>Its story deserves somewhere to remain.</em></blockquote><p>WEDDFOLIO brings the details before, during and after the celebration into one lasting digital home.</p></section>

    <section className="testimonials" aria-labelledby="testimonial-title"><p className="eyebrow reveal">Words from our couples</p><div className="testimonial-wrap reveal"><span className="quote-mark" aria-hidden="true">“</span><div aria-live="polite"><h2 id="testimonial-title">{quote === 0 ? 'From the moment our guests opened it, it already felt like the wedding had begun.' : 'It held our story with the same care we felt in every detail of the day.'}</h2><p>{quote === 0 ? 'Alexandra & James · Hong Kong' : 'Clara & William · London'}</p></div><div className="testimonial-controls"><button aria-label="Previous testimonial" onClick={() => setQuote(quote === 0 ? 1 : 0)}>←</button><span>0{quote + 1} / 02</span><button aria-label="Next testimonial" onClick={() => setQuote(quote === 0 ? 1 : 0)}>→</button></div></div></section>

    <section className="final-cta" id="enquire" aria-labelledby="enquire-title"><EditorialMedia label="Evening wedding celebration photography placeholder" tone="evening" /><div className="final-cta-copy reveal"><p className="eyebrow">Your story begins here</p><h2 id="enquire-title">Create something<br /><em>that belongs only to you.</em></h2><p>Tell us about your wedding and we will begin shaping your WEDDFOLIO.</p><div><a className="text-link light" href="mailto:hello@weddfolio.com?subject=Begin%20our%20WEDDFOLIO">Begin yours <Arrow /></a><a className="quiet-link" href="mailto:hello@weddfolio.com">Enquire</a></div></div></section>

    <footer className="footer"><div className="footer-top"><div><a className="footer-wordmark" href="#top">WEDDFOLIO</a><p>Bespoke digital wedding experiences.</p></div><nav aria-label="Footer navigation"><a href="#stories">Stories</a><a href="#experience">Experience</a><a href="#collections">Collections</a><a href="#about">About</a><a href="#enquire">Enquire</a></nav><div className="footer-contact"><a href="mailto:hello@weddfolio.com">hello@weddfolio.com</a><p>Hong Kong<br />Available internationally</p><div><a href="#instagram">Instagram</a><a href="#pinterest">Pinterest</a></div></div></div><p className="footer-line">Made for one story. <em>Yours.</em></p><div className="footer-bottom"><span>© WEDDFOLIO 2026</span><div><a href="#privacy">Privacy</a><a href="#terms">Terms</a></div></div></footer>
  </main>;
}
