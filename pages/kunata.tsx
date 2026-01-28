// app/projects/comm-patterns/page.tsx
import React from "react";

export const metadata = {
  title: "Inter-Communication Patterns in Distributed Training | Project",
  description:
    "Characterizing communication patterns across distributed training parallelism strategies on CloudLab.",
};

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="mt-10">
    <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
    <div className="mt-3 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
      {children}
    </div>
  </section>
);

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
    {children}
  </span>
);

export default function ProjectCommPatternsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      {/* Header */}
      <header>
        <div className="flex flex-wrap gap-2">
          <Badge>Systems</Badge>
          <Badge>Distributed ML</Badge>
          <Badge>Network Measurement</Badge>
          <Badge>CloudLab</Badge>
        </div>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight">
          Characterizing Inter-Communication Patterns for Parallelism Strategies
        </h1>

        <p className="mt-4 text-base leading-7 text-neutral-700 dark:text-neutral-300">
          Distributed training frameworks hide communication behind high-level
          abstractions (e.g., DDP/FSDP, pipeline schedules, tensor parallelism),
          but real performance is often dominated by network behavior: bursty
          traffic, synchronization points, and sensitivity to bandwidth/latency.
          This project uses controlled CloudLab experiments to{" "}
          <span className="font-medium">
            measure and compare communication patterns
          </span>{" "}
          across parallelism strategies.
        </p>

        <div className="mt-6 grid gap-3 rounded-2xl border border-neutral-200 bg-white p-5 text-sm text-neutral-700 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-200">
          <div className="grid gap-2 sm:grid-cols-3">
            <div>
              <div className="text-xs text-neutral-500">Status</div>
              <div className="mt-1 font-medium">Experiment design</div>
            </div>
            <div>
              <div className="text-xs text-neutral-500">Stack</div>
              <div className="mt-1 font-medium">
                PyTorch Distributed · tc · iperf · eBPF/ss
              </div>
            </div>
            <div>
              <div className="text-xs text-neutral-500">Focus</div>
              <div className="mt-1 font-medium">
                DP · TP/MP · PP · Hybrid
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <Section title="Motivation">
        <p>
          Different parallelism strategies partition parameters, activations,
          and gradients differently, leading to qualitatively different network
          stress patterns. Total communicated bytes alone is insufficient:
          training steps often contain tight synchronization and micro-bursts
          that interact poorly with oversubscription, bandwidth caps, and
          heterogeneous links.
        </p>
      </Section>

      <Section title="Goals">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Compare communication volume, frequency, and temporal distribution
            within a training step across strategies.
          </li>
          <li>
            Quantify synchronization structure (collective vs. point-to-point)
            and identify bursty vs. streaming behavior.
          </li>
          <li>
            Measure sensitivity to network constraints by varying bandwidth
            limits and node counts on CloudLab.
          </li>
        </ul>
      </Section>

      <Section title="Methodology">
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Implement representative workloads in PyTorch Distributed:
            Data Parallel (DDP), Tensor/Model Parallel (TP/MP), Pipeline Parallel
            (PP), and selected hybrid configs.
          </li>
          <li>
            Instrument comms at two levels:
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Framework-level: collectives/P2P op timing and sizes.</li>
              <li>
                System-level: per-interface throughput over time (e.g., ss,
                ifstat, tc stats; optionally eBPF).
              </li>
            </ul>
          </li>
          <li>
            Run controlled sweeps on CloudLab: nodes (2–8), bandwidth caps (tc),
            and model/sequence sizes to expose different regimes.
          </li>
        </ol>
      </Section>

      <Section title="Key Metrics">
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              k: "Traffic shape",
              v: "burstiness, peak/avg ratio, step-level time series",
            },
            { k: "Synchronization", v: "#collectives, barriers, critical path" },
            { k: "Message stats", v: "size distribution, count, cadence" },
            { k: "Sensitivity", v: "slowdown vs. bandwidth/latency caps" },
          ].map((m) => (
            <div
              key={m.k}
              className="rounded-2xl border border-neutral-200 bg-white p-4 text-sm shadow-sm dark:border-neutral-800 dark:bg-neutral-950"
            >
              <div className="font-medium">{m.k}</div>
              <div className="mt-1 text-neutral-600 dark:text-neutral-300">
                {m.v}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Expected Outputs">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            A reproducible benchmark harness (configs + scripts) for running DP/TP/PP
            and collecting comm traces.
          </li>
          <li>
            Comparative plots: bandwidth-over-time, op timelines, and message-size
            distributions per strategy.
          </li>
          <li>
            A short report summarizing observed patterns and implications for
            network-aware strategy selection and scheduling.
          </li>
        </ul>
      </Section>

      <Section title="Resource Request (CloudLab)">
        <p>
          Multi-node cluster (2–8 nodes). Preference for GPU if available, but
          CPU-only runs are acceptable for pattern characterization. Need root
          access for network shaping (tc) and system-level instrumentation.
        </p>
      </Section>

      {/* Footer CTA */}
      <footer className="mt-12 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-neutral-200 bg-white p-5 text-sm shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
        <div className="text-neutral-700 dark:text-neutral-200">
          Want to collaborate or have pointers on CloudLab profiles/topologies?
        </div>
        <a
          className="inline-flex items-center rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2 font-medium text-neutral-800 hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800"
          href="/#contact"
        >
          Contact me
        </a>
      </footer>
    </main>
  );
}
