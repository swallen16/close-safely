export type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  excerpt: string;
  body: string;
};

export const posts: Post[] = [
  {
    slug: "wire-fraud-real-estate",
    title: "Wire Fraud Is the Fastest-Growing Threat in Real Estate — Here's Why",
    date: "March 28, 2026",
    category: "Security",
    readTime: "5 min read",
    excerpt:
      "Wire fraud losses in real estate transactions topped $400 million last year. Understanding how these scams work is the first step to protecting your clients.",
    body: `Wire fraud has become the single fastest-growing financial crime targeting real estate transactions. According to the FBI's Internet Crime Complaint Center, losses from business email compromise (BEC) schemes in real estate exceeded $400 million in the most recent reporting year — and that figure only counts reported cases.

## How It Happens

The anatomy of a real estate wire fraud attack is deceptively simple:

1. **Email compromise.** A bad actor gains access to — or spoofs — the email account of a title company, real estate agent, or lender.
2. **Surveillance.** The attacker monitors email threads for weeks, learning the deal timeline, the parties involved, and the expected closing date.
3. **The switch.** Days or hours before closing, the attacker sends a convincing email with updated wiring instructions, redirecting funds to a fraudulent account.
4. **Irreversible loss.** Wire transfers are nearly impossible to reverse once processed. By the time the fraud is discovered, the money is gone.

## Why Real Estate Is Targeted

Real estate transactions involve large, predictable wire transfers with defined timelines — making them a high-value, low-complexity target. The average transaction involves multiple parties communicating by email, each representing a potential entry point.

Brokers and borrowers are particularly vulnerable because:

- Transactions are time-sensitive, creating pressure to act fast
- Most parties assume instructions from a known contact are legitimate
- Wire fraud losses often fall on the individual — not the bank

## What Secure Platforms Do Differently

Modern closing platforms like Close Safely authenticate all parties before displaying or confirming wiring instructions. Instead of sending bank details over email, instructions are delivered through a verified, encrypted channel — making spoofed emails useless.

If a platform you use today sends wire instructions by email, that is a risk worth addressing before your next closing.`,
  },
  {
    slug: "verify-title-company",
    title: "How to Verify a Title Company Before Wiring Funds",
    date: "March 14, 2026",
    category: "Best Practices",
    readTime: "4 min read",
    excerpt:
      "Before wiring closing funds, every buyer should complete a short verification checklist. These steps take minutes and can prevent devastating losses.",
    body: `Every real estate closing involves a wire transfer — and every wire transfer is a potential target. The good news is that a small amount of due diligence before sending funds dramatically reduces your risk.

## The Verification Checklist

### 1. Confirm the title company independently

Before wiring any funds, look up the title company's phone number directly — do not use any number provided in the wire instructions email. Call to confirm:

- That they are expecting a wire from you
- The exact dollar amount
- The exact account and routing numbers

If anything doesn't match, stop and call your real estate agent and lender immediately.

### 2. Check the email headers

Wire fraud often comes from lookalike domains (e.g., titleco-closing.com instead of titlecoclosing.com). Before trusting any email with wiring instructions, inspect the sender's full email address carefully — not just the display name.

### 3. Never wire from instructions sent via email alone

Legitimate title companies and secure closing platforms never rely solely on email to deliver wiring instructions. If you're receiving routing and account numbers via an unsecured email, ask why there isn't a secure portal for delivery.

### 4. Confirm any changes to instructions immediately

If you receive an email saying wiring instructions have "changed," treat it as a red flag. Fraudulent instruction changes are the most common attack vector. Call to verify before doing anything.

### 5. Use a verified closing platform

Platforms like Close Safely deliver wiring instructions through authenticated, encrypted channels — removing email from the equation entirely. When instructions only appear after identity verification, spoofed emails have nothing to spoof.

## If You've Already Wired Funds

If you suspect fraud, act immediately:

1. Call your bank's fraud line and request a wire recall
2. File a complaint with the FBI's IC3 at ic3.gov
3. Contact your real estate agent, title company, and lender

Speed matters — recalls are most likely to succeed within the first hour.`,
  },
  {
    slug: "closing-day-security",
    title: "What Every Buyer Should Know About Closing Day Security",
    date: "February 26, 2026",
    category: "Buyer's Guide",
    readTime: "6 min read",
    excerpt:
      "Closing day is one of the largest financial transactions most people ever make. Here's how to make sure your money arrives safely — and what questions to ask your team.",
    body: `For most buyers, closing day represents the largest financial transaction of their lives. The process involves coordinating between lenders, title companies, real estate agents, and attorneys — all under deadline pressure. That complexity creates real security risk.

Here's what to know before you sit down at the closing table.

## Understand Who Holds the Money

In a typical residential transaction, the buyer wires funds to an escrow or trust account held by the title company. The title company then disburses funds to the seller, pays off the existing mortgage, and covers closing costs.

This means the title company is the primary custodian of your funds — and confirming their identity and account details before wiring is non-negotiable.

## Ask These Questions Before Closing

**1. How will I receive wiring instructions?**
If the answer is "by email," ask whether there's a secondary verification step. The gold standard is a secure portal that requires identity verification before showing account details.

**2. Who should I call if I have questions the day of closing?**
Get a direct phone number — not a general inbox — for your title contact. You may need to call quickly if something looks wrong.

**3. Has this transaction involved any last-minute changes to instructions?**
Legitimate parties rarely change wiring instructions at the last minute. If your agent or title rep says instructions changed, verify independently before acting.

**4. Is your firm using a secure closing platform?**
Ask if your title company or broker uses a verified transaction platform. Platforms that authenticate all parties and deliver instructions through encrypted channels represent a meaningful upgrade in security.

## What a Secure Platform Looks Like

A platform designed for closing security typically:

- Verifies the identity of all parties before sharing sensitive information
- Delivers wiring instructions through an encrypted, authenticated session — not email
- Logs all access to instructions with timestamps
- Alerts parties to any attempted changes in real time

Close Safely was built around these principles. Brokers and title professionals who use it report that buyers feel significantly more confident — and closings go more smoothly — when everyone knows the transaction is protected by design.

## After the Wire Goes Out

Once your wire is sent, confirm receipt with the title company within the hour. Most banks can confirm that a wire has left your account; the title company should confirm it has arrived. Don't wait until closing is scheduled to start — confirm receipt first.

Closing day doesn't have to be stressful. With the right process in place, it can be exactly what it should be: the moment a deal closes safely.`,
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
