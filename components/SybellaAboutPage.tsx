import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay: 0.15 * i,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const float = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const glowPulse = {
  animate: {
    opacity: [0.7, 1, 0.7],
    scale: [1, 1.08, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const SybellaAboutPage: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-50">
      {/* Gradient background + shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-80 w-80 bg-gradient-to-br from-purple-500/40 via-sky-500/40 to-emerald-400/40 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 bg-gradient-to-tr from-emerald-500/40 via-blue-500/40 to-fuchsia-500/40 blur-3xl" />
      </div>

      {/* Floating geometric shapes */}
      <motion.div
        className="pointer-events-none absolute left-10 top-24 h-16 w-16 rounded-3xl border border-sky-500/40 bg-slate-900/60 backdrop-blur"
        variants={float}
        animate="animate"
      />
      <motion.div
        className="pointer-events-none absolute right-16 bottom-24 h-24 w-24 rounded-full border border-emerald-500/40 bg-slate-900/60 backdrop-blur"
        variants={float}
        animate="animate"
      />

      {/* Main content */}
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-10 md:px-10 lg:px-16">
        {/* Top nav hint for Silver site */}
        <header className="flex items-center justify-between pb-8">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900/70 ring-1 ring-sky-500/40">
              <span className="text-lg font-semibold tracking-tight text-sky-300">
                S
              </span>
            </div>
            <div className="leading-tight">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Sybella Systems
              </p>
              <p className="text-sm text-slate-300">For Silver — Company Story</p>
            </div>
          </motion.div>

          <motion.a
            href="#innovation-labs"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="hidden items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/70 px-4 py-1.5 text-xs font-medium text-slate-200/90 shadow-sm shadow-sky-500/20 backdrop-blur hover:border-sky-500/70 hover:text-sky-200 md:flex"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.8)]" />
            Innovation Labs
          </motion.a>
        </header>

        {/* Hero */}
        <main className="flex flex-1 flex-col gap-12 py-4 md:flex-row md:items-center">
          {/* Left */}
          <section className="relative w-full space-y-6 md:w-1/2">
            <motion.div
              custom={1}
              initial="hidden"
              animate="visible"
              variants={container}
              className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-slate-900/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-sky-200/80 shadow-sm shadow-sky-500/30 backdrop-blur"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(74,222,128,0.9)]" />
              Sybella Systems · African Tech Engine
            </motion.div>

            <motion.h1
              custom={2}
              initial="hidden"
              animate="visible"
              variants={container}
              className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl"
            >
              Powering{" "}
              <span className="bg-gradient-to-r from-sky-400 via-emerald-300 to-fuchsia-400 bg-clip-text text-transparent">
                Sybella Innovation Labs
              </span>{" "}
              for bold ideas.
            </motion.h1>

            <motion.p
              custom={3}
              initial="hidden"
              animate="visible"
              variants={container}
              className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base"
            >
              Sybella Systems is the parent company crafting AI-first products
              and platforms from Kigali, Rwanda. On Silver, this page tells the
              story behind the engine that owns and nurtures{" "}
              <span className="text-sky-300">Sybella Innovation Labs</span>—our
              sandbox for experiments, prototypes, and market-ready ventures.
            </motion.p>

            {/* Pill row */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={container}
              className="flex flex-wrap gap-3"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-3 py-1 text-xs text-slate-200 ring-1 ring-slate-700/80">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                Sweat equity capital studio
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-3 py-1 text-xs text-slate-200 ring-1 ring-slate-700/80">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                African-first innovation lab
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-3 py-1 text-xs text-slate-200 ring-1 ring-slate-700/80">
                <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                Product ecosystems & platforms
              </span>
            </motion.div>

            {/* CTA row */}
            <motion.div
              custom={5}
              initial="hidden"
              animate="visible"
              variants={container}
              className="flex flex-wrap items-center gap-4 pt-3"
            >
              <a
                href="#innovation-labs"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2 text-sm font-medium text-slate-950 shadow-lg shadow-sky-500/40 transition hover:bg-sky-400"
              >
                Meet Sybella Innovation Labs
              </a>
              <button
                type="button"
                className="inline-flex items-center gap-2 text-xs text-slate-300 hover:text-sky-200"
              >
                <span className="h-5 w-5 rounded-full border border-slate-600/80 bg-slate-900/70 text-[10px] leading-[18px] text-slate-200">
                  Ⓢ
                </span>
                Learn how Silver integrates Sybella
              </button>
            </motion.div>
          </section>

          {/* Right */}
          <section className="relative mt-6 w-full md:mt-0 md:w-1/2">
            <motion.div
              className="relative h-80 w-full rounded-3xl border border-slate-700/70 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900/90 p-1 shadow-[0_0_35px_rgba(15,23,42,0.9)]"
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Inner card */}
              <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-slate-950/90 p-5">
                {/* Glow */}
                <motion.div
                  className="pointer-events-none absolute -inset-16 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.45),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(74,222,128,0.35),_transparent_55%)] opacity-70"
                  variants={glowPulse}
                  animate="animate"
                />

                {/* Overlay */}
                <div className="relative flex flex-1 flex-col gap-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                        Ownership structure
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-50">
                        Sybella Systems → Sybella Innovation Labs
                      </p>
                    </div>
                    <div className="rounded-full bg-slate-900/80 px-3 py-1 text-[10px] text-slate-300 ring-1 ring-slate-700/80">
                      Kigali · Rwanda
                    </div>
                  </div>

                  <div className="grid gap-4 text-xs text-slate-200 sm:grid-cols-2">
                    <div className="space-y-2">
                      <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                        What is Sybella Systems?
                      </p>
                      <p className="text-xs leading-relaxed text-slate-300">
                        A venture studio and software company turning sweat
                        equity into durable platforms. It provides strategy,
                        engineering, and governance for every product launched
                        under the Sybella family.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                        What are Innovation Labs?
                      </p>
                      <p className="text-xs leading-relaxed text-slate-300">
                        Sybella Innovation Labs is the experimental arm:
                        incubating ideas, building MVPs, and pressure-testing
                        them with real users before they graduate into full
                        Sybella Systems products.
                      </p>
                    </div>
                  </div>

                  {/* Stats / tags */}
                  <div className="mt-auto flex flex-wrap items-center gap-4 pt-2 text-[11px] text-slate-300">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Founder-led · African-first
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                      AI & SaaS ecosystems
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                      Built for platforms like Silver
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>
        </main>

        {/* Innovation labs section */}
        <section
          id="innovation-labs"
          className="relative mt-6 grid gap-8 border-t border-slate-800/80 pt-8 md:grid-cols-2"
        >
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={container}
            className="space-y-3"
          >
            <h2 className="text-lg font-semibold text-slate-50">
              Sybella Innovation Labs on Silver
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              On Silver, Sybella Innovation Labs appears as the experimental
              heart of Sybella Systems: where concepts are validated, students
              and partners collaborate, and new digital products are prepared
              for scale across Africa.
            </p>
          </motion.div>

          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={container}
            className="grid gap-3 text-xs text-slate-200 sm:grid-cols-3"
          >
            <div className="rounded-2xl bg-slate-950/80 p-4 ring-1 ring-slate-800/80">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                Role
              </p>
              <p className="mt-2 font-semibold text-slate-50">Idea → Lab → Product</p>
              <p className="mt-1 text-[11px] leading-relaxed text-slate-300">
                Each initiative starts as a lab project and matures into a
                full-stack product under Sybella Systems.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-950/80 p-4 ring-1 ring-slate-800/80">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                Focus
              </p>
              <p className="mt-2 font-semibold text-slate-50">Students, work & beyond</p>
              <p className="mt-1 text-[11px] leading-relaxed text-slate-300">
                From platforms like Ogera to future lab projects, the focus is
                unlocking opportunity and access at scale.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-950/80 p-4 ring-1 ring-slate-800/80">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                For Silver
              </p>
              <p className="mt-2 font-semibold text-slate-50">Clear ownership</p>
              <p className="mt-1 text-[11px] leading-relaxed text-slate-300">
                This page helps Silver users, partners and regulators understand
                that Sybella Systems is the owner behind the labs.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-slate-900/80 pt-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Sybella Systems · All rights reserved.</p>
          <p>Crafted for Silver · Modern, animated, TypeScript-powered.</p>
        </footer>
      </div>
    </div>
  );
};

export default SybellaAboutPage;
