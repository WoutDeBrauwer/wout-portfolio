import { Container, Pill, SectionLabel } from '../components/ui'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center">
      <Container className="py-20">
        <SectionLabel className="mb-8">404</SectionLabel>
        <h1 className="font-mono font-medium tracking-tight text-5xl md:text-7xl mb-6">Niet gevonden</h1>
        <p className="text-white/70 mb-10">Deze pagina bestaat niet (meer).</p>
        <Pill to="/">Terug naar home</Pill>
      </Container>
    </div>
  )
}
