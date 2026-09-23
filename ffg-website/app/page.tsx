"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const mockCompanies = [
  { name: "Medway Plant Hire Ltd", number: "09214563" },
  { name: "Anderson Groundworks Ltd", number: "11087742" },
  { name: "Kent Logistics Solutions Ltd", number: "08765310" },
  { name: "Greenfield Agri Services Ltd", number: "12456709" },
];

const Arrow = () => <span aria-hidden="true">→</span>;

export default function HomePage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [amount, setAmount] = useState(50000);
  const [bizType, setBizType] = useState<"ltd" | "sole">("ltd");
  const [companyQuery, setCompanyQuery] = useState("");
  const [companySelected, setCompanySelected] = useState("");
  const matches = companyQuery.trim().length >= 2
    ? mockCompanies.filter((company) => company.name.toLowerCase().includes(companyQuery.trim().toLowerCase()))
    : [];

  return (
    <main className="ffg-home">
      <section className="ffg-hero">
        <div className="ffg-hero-shade" />
        <header className="ffg-nav shell">
          <a className="ffg-brand" href="#top" aria-label="Future Finance Group home">
            <span className="ffg-mark"><Image src="/ffg-mark.jpg" alt="" width={28} height={34} /></span>
            <span>FUTURE FINANCE <small>GROUP LIMITED</small></span>
          </a>
          <nav className="ffg-links" aria-label="Main navigation"><a href="#finance">Finance</a><a href="#assets">Assets</a><a href="#process">How it works</a><a href="#about">About</a></nav>
          <div className="ffg-nav-actions"><Link href="/portal" className="ffg-button ffg-button-ghost">Customer login</Link><button className="ffg-button ffg-button-blue" onClick={() => setDrawerOpen(true)}>Apply now <Arrow /></button></div>
        </header>
        <div className="ffg-hero-content shell" id="top">
          <div className="ffg-hero-copy">
            <div className="ffg-kicker">Direct business funding · Rochester, Kent</div>
            <h1>Capital for assets.<br /><strong>Built for business.</strong></h1>
            <p>Purposeful finance for vehicles, plant and equipment—structured directly by the people providing the capital.</p>
            <div className="ffg-hero-actions"><button className="ffg-button ffg-button-blue ffg-button-large" onClick={() => setDrawerOpen(true)}>Apply for finance <Arrow /></button><Link href="/portal" className="ffg-button ffg-button-ghost ffg-button-large">Customer login</Link></div>
          </div>
          <div className="ffg-capital-visual" aria-label="Example finance indication">
            <div className="ffg-capital-word" aria-hidden="true">CAPITAL</div>
            <aside className="ffg-indication">
              <div className="ffg-indication-top"><span><i /> Example facility</span><b>01 / 04</b></div>
              <div className="ffg-indication-amount"><span>Funding</span><strong>£75,000</strong><small>for a working asset</small></div>
              <div className="ffg-indication-grid"><div><span>Term</span><strong>48 months</strong></div><div><span>Structure</span><strong>Hire Purchase</strong></div></div>
              <button className="ffg-indication-link" onClick={() => setDrawerOpen(true)}>Build your facility <Arrow /></button>
            </aside>
            <div className="ffg-capital-tags" aria-hidden="true"><span>VEHICLES</span><span>PLANT</span><span>EQUIPMENT</span></div>
          </div>
        </div>
      </section>

      <section className="ffg-proof" aria-label="Key benefits"><div className="shell ffg-proof-grid">
        <div><span>01</span><strong>Direct lender</strong><small>Real people, clear answers</small></div><div><span>02</span><strong>£10k–£1m</strong><small>Flexible business funding</small></div><div><span>03</span><strong>UK-wide</strong><small>Based in Rochester, Kent</small></div><div><span>04</span><strong>Settlements online</strong><small>Figures when you need them</small></div>
      </div></section>

      <section className="ffg-editorial shell" id="finance">
        <div className="ffg-section-intro"><div><div className="ffg-eyebrow">Our finance solutions</div><h2>Built around the asset.<br />Structured around your business.</h2></div><p>Flexible finance for the assets that power your ambition. A common-sense approach, clear terms and direct access to the team making the decision.</p></div>
        <div className="ffg-product-row">
          <article><div className="ffg-product-icon">01</div><div><h3>Hire Purchase</h3><p>Own the asset from day one, with fixed monthly payments and ownership when the agreement is complete.</p><a href="#contact" aria-label="Learn about hire purchase"><Arrow /></a></div></article>
          <article><div className="ffg-product-icon">02</div><div><h3>Finance Lease</h3><p>Spread the cost with flexible terms, keeping capital available while your business continues moving.</p><a href="#contact" aria-label="Learn about finance lease"><Arrow /></a></div></article>
          <article><div className="ffg-product-icon">03</div><div><h3>Business Loan</h3><p>Structured funding for growth, working capital or business-purpose asset purchases.</p><a href="#contact" aria-label="Learn about business loans"><Arrow /></a></div></article>
        </div>
      </section>

      <section className="ffg-assets" id="assets"><div className="shell">
        <div className="ffg-assets-head"><div><div className="ffg-eyebrow">What we fund</div><h2>Finance made for working assets.</h2></div><p>From the everyday to the specialist, we fund the tools your business needs to earn.</p></div>
        <div className="ffg-asset-list">{["Commercial vehicles", "Plant & construction", "Agriculture", "Machinery & equipment"].map((asset, index) => <div key={asset}><span>0{index + 1}</span><strong>{asset}</strong><Arrow /></div>)}</div>
      </div></section>

      <section className="ffg-about shell" id="about">
        <div className="ffg-about-image"><Image src="/office.jpg" alt="Future Finance Group office at Ordnance Yard in Rochester" fill sizes="(max-width: 900px) 100vw, 55vw" /></div>
        <div className="ffg-about-copy"><div className="ffg-eyebrow">Our approach</div><h2>A finance company that still deals with you directly.</h2><p>We are based in Rochester, Kent, and provide business-purpose finance across the UK. You speak to the same practical, experienced team from your first enquiry through to the final payment.</p><ul><li>Direct contact throughout</li><li>Plain, fixed figures</li><li>Fast, commercial decisions</li><li>Settlement figures on demand</li></ul></div>
      </section>

      <section className="ffg-process" id="process"><div className="shell"><div className="ffg-eyebrow">How it works</div><h2>Three steps. One direct conversation.</h2><div className="ffg-process-grid"><div><span>01</span><h3>Tell us what you need</h3><p>The asset, the supplier and the amount you want to fund.</p></div><div><span>02</span><h3>Receive a clear decision</h3><p>We assess the proposal and set out the structure and figures.</p></div><div><span>03</span><h3>Put the asset to work</h3><p>Documents signed, supplier paid and your business moving.</p></div></div></div></section>

      <section className="ffg-portal shell" id="portal"><div><div className="ffg-eyebrow">For existing customers</div><h2>Your agreement. Your figures. On demand.</h2><p>View your current balance, request an up-to-date settlement and apply for finance on another asset.</p></div><Link href="/portal" className="ffg-button ffg-button-white">Open customer portal <Arrow /></Link></section>

      <footer className="ffg-footer" id="contact"><div className="shell ffg-footer-grid"><div><div className="ffg-footer-name">FUTURE FINANCE GROUP LIMITED</div><p>Business-purpose finance for vehicles, plant and equipment.</p></div><div><strong>Contact</strong><a href="tel:07525823547">07525 823547</a><a href="mailto:olb@ffg.finance">olb@ffg.finance</a></div><div><strong>Office</strong><p>No. 9 Magazine B<br />Ordnance Yard, Rochester<br />Kent, ME2 4UY</p></div></div><div className="shell ffg-footer-bottom">© 2026 Future F G Limited · Company No. 13707744 <span>Registered in England &amp; Wales</span></div></footer>

      <div className={`overlay ${drawerOpen ? "open" : ""}`} onClick={() => setDrawerOpen(false)} />
      <aside className={`drawer ${drawerOpen ? "open" : ""}`} aria-hidden={!drawerOpen}>
        <div className="drawer-progress"><div className="fill" /></div><div className="drawer-head"><span className="step-lbl">Step 1 of 3</span><button className="drawer-close" onClick={() => setDrawerOpen(false)} aria-label="Close application">×</button></div>
        <div className="drawer-body"><h3>Tell us about the finance you need</h3><div className="field-label"><span className="ok">✓</span> How much would you like to borrow?</div>
          <div className="amount-row"><button className="amt-btn" onClick={() => setAmount(Math.max(10000, amount - 10000))}>−</button><input type="text" value={`£${amount.toLocaleString("en-GB")}`} readOnly /><button className="amt-btn" onClick={() => setAmount(Math.min(1000000, amount + 10000))}>+</button></div>
          <div className="amount-minmax"><span>Min. £10,000</span><span>£1,000,000 Max.</span></div><div className="chip-row">{[10000, 25000, 50000, 100000, 250000, 500000].map((value) => <button className="chip" key={value} onClick={() => setAmount(value)}>£{value / 1000}k</button>)}</div>
          <div className="field-label"><span className="ok">✓</span> Business type</div><div className="biz-toggle"><button className={`biz-opt ${bizType === "ltd" ? "selected" : ""}`} onClick={() => setBizType("ltd")}>Limited Company</button><button className={`biz-opt ${bizType === "sole" ? "selected" : ""}`} onClick={() => setBizType("sole")}>Sole Trader</button></div>
          <div className="field-label"><span className="ok">✓</span> Find your business</div><div className="company-field"><input type="text" placeholder="Start typing a company name" value={companySelected || companyQuery} onChange={(event) => { setCompanySelected(""); setCompanyQuery(event.target.value); }} /><span className="search-ic">⌕</span></div>
          <div className={`company-results ${matches.length > 0 && !companySelected ? "show" : ""}`}>{matches.map((company) => <button className="company-result" key={company.number} onClick={() => { setCompanySelected(company.name); setCompanyQuery(""); }}>{company.name}<span className="num">Company no. {company.number}</span></button>)}</div><p className="drawer-hint">We use these details to give you an initial indication. No obligation.</p><button className="drawer-cta">Continue to asset details <Arrow /></button>
        </div>
      </aside>
    </main>
  );
}
