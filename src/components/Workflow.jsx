import { workflow } from "../data/profile";
import { Container, Reveal, SectionLabel } from "./ui";

// "Zo werk ik": van Figma-design tot block dat een redacteur zelf vult
export default function Workflow() {
  return (
    <section className="pb-24 md:pb-32">
      <Container>
        <div className="grid md:grid-cols-12 gap-6 mb-12 md:mb-16">
          <SectionLabel className="md:col-span-5">Zo werk ik</SectionLabel>
          <Reveal className="md:col-span-7">
            <h2 className="font-mono font-medium tracking-tight leading-[0.95] text-[clamp(2.4rem,6vw,5rem)] mb-6">
              Van Figma naar block
            </h2>
            <p className="text-white/70 max-w-xl">
              Ik bouw op basis van het design van een designer. Met{" "}
              <em>Claude Code en Figma MCP</em> gaat dat sneller, maar elke
              stap krijgt mijn eigen review.
            </p>
          </Reveal>
        </div>

        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {workflow.map((step, i) => (
            <li key={step.title}>
              <Reveal
                delay={i * 0.08}
                className={`h-full rounded-3xl px-6 py-6 ${
                  i === workflow.length - 1 ? "bg-white text-dark" : "border border-line"
                }`}
              >
                <p className="font-mono text-xs opacity-60 mb-8">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-mono text-lg font-medium mb-3">{step.title}</h3>
                <p className={`text-sm ${i === workflow.length - 1 ? "text-dark/75" : "text-white/70"}`}>
                  {step.text}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
