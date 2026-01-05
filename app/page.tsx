import { ArrowUpRight, Github, Linkedin, Twitter, Mail, ExternalLink, Download } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
          <Link href="#" className="text-lg font-semibold tracking-tight">
            Moses Nyikwagh
          </Link>
          <div className="flex items-center gap-8">
            <a
              href="#work"
              className="text-sm text-muted-foreground hover:text-foreground transition"
            >
              Work
            </a>
            <a
              href="#about"
              className="text-sm text-muted-foreground hover:text-foreground transition"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-32">
        <div className="space-y-6 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            Technical Writer & Developer Educator
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            I create hands-on technical tutorials that help developers build
            real applications using Web3 protocols, APIs, and backend tools. My
            focus is on clarity, reproducibility, and practical learning.
          </p>
          <div className="flex gap-4 pt-4">
            <Link
              href="#work"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
            >
              View Work
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-lg font-medium hover:bg-muted transition"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="work" className="max-w-6xl mx-auto px-6 md:px-8 py-20">
        <h2 className="text-3xl font-bold mb-12">Featured Work</h2>
        <div className="space-y-12">
          {/* Featured Project 1 */}
          <article className="group border border-border rounded-xl p-6 md:p-8 hover:border-primary transition">
            <div className="space-y-3 mb-4">
              <h3 className="text-2xl font-semibold group-hover:text-primary transition">
                Creating an NFT Auction DApp with Clarity and Stacks.js
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-accent text-accent-foreground px-3 py-1 rounded-full">
                  Clarity
                </span>
                <span className="text-xs bg-accent text-accent-foreground px-3 py-1 rounded-full">
                  Stacks.js
                </span>
                <span className="text-xs bg-accent text-accent-foreground px-3 py-1 rounded-full">
                  Smart Contracts
                </span>
                <span className="text-xs bg-accent text-accent-foreground px-3 py-1 rounded-full">
                  Blockchain
                </span>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Commissioned Web3 technical tutorial for beginner–intermediate
              developers. Step-by-step guide on building NFT auction smart
              contracts with comprehensive explanations.
            </p>
            <a
              href="https://mos-nyik.hashnode.dev/creating-an-nft-auction-dapp-with-clarity-and-stacksjs-step-by-step-guide"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition"
            >
              Read Article
              <ExternalLink className="w-4 h-4" />
            </a>
          </article>

          {/* Featured Project 2 */}
          <article className="group border border-border rounded-xl p-6 md:p-8 hover:border-primary transition">
            <div className="space-y-3 mb-4">
              <h3 className="text-2xl font-semibold group-hover:text-primary transition">
                Automated Appointment Reminders with Twilio, SendGrid, and Java
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-accent text-accent-foreground px-3 py-1 rounded-full">
                  Java
                </span>
                <span className="text-xs bg-accent text-accent-foreground px-3 py-1 rounded-full">
                  REST APIs
                </span>
                <span className="text-xs bg-accent text-accent-foreground px-3 py-1 rounded-full">
                  Twilio
                </span>
                <span className="text-xs bg-accent text-accent-foreground px-3 py-1 rounded-full">
                  API Integration Walk-through
                </span>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Published on Twilio Developer Voices. Production-ready Java
              tutorial demonstrating API integration and backend automation for
              appointment reminder systems.
            </p>
            <a
              href="https://www.twilio.com/en-us/blog/developers/community/automated-appointment-reminders-twilio-sendgrid-java"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition"
            >
              Read Article
              <ExternalLink className="w-4 h-4" />
            </a>
          </article>

          {/* Featured Project 3 */}
          <article className="group border border-border rounded-xl p-6 md:p-8 hover:border-primary transition">
            <div className="space-y-3 mb-4">
              <h3 className="text-2xl font-semibold group-hover:text-primary transition">
                Programmable Key Pairs (PKPs): Overview and Quick Start
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-accent text-accent-foreground px-3 py-1 rounded-full">
                  Thirdweb
                </span>
                <span className="text-xs bg-accent text-accent-foreground px-3 py-1 rounded-full">
                  Key Management
                </span>
                <span className="text-xs bg-accent text-accent-foreground px-3 py-1 rounded-full">
                  Web3
                </span>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Independent Web3 developer tutorial explaining programmable key
              pairs with practical implementation guide for secure key
              management in decentralized applications.
            </p>
            <a
              href="https://mos-nyik.hashnode.dev/programmable-key-pairs-pkps-an-overview-and-quick-start-guide"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition"
            >
              Read Article
              <ExternalLink className="w-4 h-4" />
            </a>
          </article>
        </div>

        {/* View All Articles Link */}
        <div className="mt-12 pt-8 border-t border-border">
          <a
            href="https://mos-nyik.hashnode.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition"
          >
            View All Articles
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-20 border-t border-border">
        <h2 className="text-3xl font-bold mb-12">Expertise</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-3 text-lg">Technical Writing</h3>
            <p className="text-muted-foreground">
              Developer tutorials, API documentation, and step-by-step guides
              designed for clarity and reproducibility.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-lg">Web3 & Blockchain</h3>
            <p className="text-muted-foreground">
              Smart contracts, decentralized applications, and blockchain
              protocol education for developers.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-lg">Backend Systems</h3>
            <p className="text-muted-foreground">
              Java, JavaScript, REST APIs, and backend integration for
              real-world application development.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 md:px-8 py-20 border-t border-border"
      >
        <h2 className="text-3xl font-bold mb-8">About</h2>
        <div className="space-y-6 max-w-3xl text-muted-foreground leading-relaxed">
          <p>
            I'm a Developer Technical Writer with hands-on experience creating
            step-by-step tutorials, developer guides, and applied documentation
            for Web3 and SaaS platforms. I've authored commissioned and
            independent content for Stacks Foundation, Twilio Developer Voices,
            and Thirdweb.
          </p>
          <p>
            My background in Physics and research methodology gives me a unique
            approach to technical writing—combining analytical thinking with
            clear, accessible explanations. I translate complex APIs, smart
            contracts, and tooling into reproducible learning resources that
            help developers build real applications.
          </p>
          <p>
            I'm passionate about Developer Education & Enablement, API
            Integration, Web3 education, and research-driven technical writing
            that bridges the gap between complex technologies and practical
            understanding.
          </p>
          <div className="pt-4">
            <p className="text-sm text-muted-foreground">
              📍 Based in Abuja, Nigeria
              <br />
              📧{" "}
              <a
                href="mailto:mosnyik@gmail.com"
                className="text-primary hover:underline"
              >
                mosnyik@gmail.com
              </a>
              <br />
              📱 +234 8063862295
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="max-w-6xl mx-auto px-6 md:px-8 py-20 border-t border-border"
      >
        <div className="text-center space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Looking to create technical content, documentation, or developer
              guides? Let's talk about your project.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <a
              href="mailto:mosnyik@gmail.com"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition"
            >
              <Mail className="w-4 h-4" />
              Send Email
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01c8c4620fe812fea1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary/5 transition"
            >
              Hire on Upwork
            </a>
            <a
              href="https://linkedin.com/in/mosnyik"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-border px-8 py-3 rounded-lg font-medium hover:bg-muted transition"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            {/* <a
              href="/cv.pdf"
              className="inline-flex items-center justify-center gap-2 border border-border px-8 py-3 rounded-lg font-medium hover:bg-muted transition"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-sm text-muted-foreground">
              © 2025 Moses Nyikwagh. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="https://twitter.com/mosnyik"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/mosnyik"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/mosnyik"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
