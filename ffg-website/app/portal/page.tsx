"use client";

import { useState } from "react";

// NOTE: this data is hard-coded from the HP93 deal book tab for now.
// Once Supabase is connected, this page will fetch the logged-in
// customer's real agreement data instead.
const agreement = {
  number: "HP93",
  customer: "Van Repair Services Ltd",
  initials: "VR",
  asset: "Land Rover Discovery",
  instalment: 1732.4,
  start: "03 APR 2025",
  term: 48,
  paid: 16,
  settlement: 55436.8,
  validTo: "01 Aug 2026",
  lastPaymentCleared: "03 Jul 2026",
};

const schedule = [
  { date: "03 Jun 2026", label: "15th", amount: 1732.4, status: "paid" },
  { date: "03 Jul 2026", label: "16th", amount: 1732.4, status: "paid" },
  { date: "03 Aug 2026", label: "17th", amount: 1732.4, status: "due" },
  { date: "03 Sep 2026", label: "18th", amount: 1732.4, status: "due" },
  { date: "03 Oct 2026", label: "19th", amount: 1732.4, status: "due" },
];

export default function PortalPage() {
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const pct = Math.round((agreement.paid / agreement.term) * 1000) / 10;

  const gbp = (n: number) =>
    n.toLocaleString("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 2,
    });

  return (
    <>
      <nav>
        <div className="nav-inner">
          <div className="wordmark">
            <span className="dot"></span>
            FUTURE FG
          </div>
          <div className="nav-right">
            <a href="#">Agreements</a>
            <a href="#">Documents</a>
            <a href="#">Contact us</a>
            <div className="avatar">{agreement.initials}</div>
          </div>
        </div>
      </nav>

      <div className="wrap">
        <div className="page-head">
          <div className="eyebrow">Customer portal</div>
          <h1>Welcome back, {agreement.customer}</h1>
          <p>
            Here&apos;s the latest on agreement {agreement.number} — figures
            shown are accurate as of today.
          </p>
        </div>

        <div className="grid">
          <div>
            <div className="card">
              <div className="card-head">
                <h2>Agreement {agreement.number}</h2>
                <span className="tag tag-hp">HIRE PURCHASE</span>
              </div>
              <div className="agreement-row">
                <div className="field">
                  <div className="label">Asset</div>
                  <div className="val">{agreement.asset}</div>
                </div>
                <div className="field">
                  <div className="label">Monthly instalment</div>
                  <div className="val mono">{gbp(agreement.instalment)}</div>
                </div>
                <div className="field">
                  <div className="label">Agreement start</div>
                  <div className="val mono">{agreement.start}</div>
                </div>
                <div className="field">
                  <div className="label">Original term</div>
                  <div className="val mono">{agreement.term} months</div>
                </div>
              </div>

              <div className="progress-wrap">
                <div className="progress-labels">
                  <span>Instalments paid</span>
                  <span className="count">
                    {agreement.paid} / {agreement.term}
                  </span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${pct}%` }}
                  ></div>
                </div>
              </div>

              <div className="status-strip">
                <span className="status-dot"></span>
                <span className="txt">
                  Direct debit <b>up to date</b> via GoCardless — last
                  payment cleared {agreement.lastPaymentCleared}
                </span>
              </div>

              <div
                className="schedule-toggle"
                onClick={() => setScheduleOpen((v) => !v)}
              >
                <span>{scheduleOpen ? "\u2212" : "+"}</span> View full
                payment schedule
              </div>
              <div className={`schedule ${scheduleOpen ? "open" : ""}`}>
                <table>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Instalment</th>
                      <th className="mono">Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {schedule.map((row) => (
                      <tr key={row.date}>
                        <td>{row.date}</td>
                        <td>{row.label}</td>
                        <td className="mono">{gbp(row.amount)}</td>
                        <td>
                          {row.status === "paid" ? (
                            <span className="paid-chip">&#10003;</span>
                          ) : (
                            <span className="due-chip"></span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="card apply-card" style={{ marginTop: 24 }}>
              <h3>Financing another asset?</h3>
              <p>
                We already hold your business and payment details — apply
                for further finance in a couple of minutes.
              </p>
              <button
                className="btn"
                onClick={() =>
                  alert(
                    `This would open the apply flow, pre-filled with ${agreement.customer}'s details.`
                  )
                }
              >
                Apply for further finance
              </button>
            </div>
          </div>

          <div>
            <div className="settlement-card">
              <div className="eyebrow">Settlement figure</div>
              <div className="settlement-amt">{gbp(agreement.settlement)}</div>
              <div className="settlement-valid">
                Valid to close of business, {agreement.validTo}
              </div>
              <div className="settlement-rows">
                <div className="row">
                  <span>Instalments paid</span>
                  <span>
                    {agreement.paid} / {agreement.term}
                  </span>
                </div>
                <div className="row">
                  <span>Outstanding balance</span>
                  <span>{gbp(agreement.settlement)}</span>
                </div>
                <div className="row">
                  <span>Early settlement rebate</span>
                  <span>£0.00</span>
                </div>
              </div>
              <div className="settlement-actions">
                <button
                  className="btn btn-white"
                  onClick={() =>
                    alert(
                      "This would generate a PDF settlement letter, same as the ones already being produced manually."
                    )
                  }
                >
                  Download settlement letter
                </button>
              </div>
              <div className="settlement-actions" style={{ marginTop: 10 }}>
                <button
                  className="btn btn-ghost"
                  onClick={() => alert("This would open a message to Future FG.")}
                >
                  Request by phone instead
                </button>
              </div>
            </div>

            <div className="card bank-card">
              <h2>Payment details</h2>
              <div className="bank-row">
                <span className="label">Account name</span>
                <span className="val">Future F G Limited</span>
              </div>
              <div className="bank-row">
                <span className="label">Bank</span>
                <span className="val">Lloyds Bank</span>
              </div>
              <div className="bank-row">
                <span className="label">Sort code</span>
                <span className="val">30-98-97</span>
              </div>
              <div className="bank-row">
                <span className="label">Account number</span>
                <span className="val">52431263</span>
              </div>
              <div className="bank-row">
                <span className="label">Reference</span>
                <span className="val">{agreement.number}</span>
              </div>
              <div className="copy-hint">
                Use agreement {agreement.number} as your payment reference so
                we can match it quickly.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
