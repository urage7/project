import { ModelCard } from '@/components/model-card'
import { Lightbulb } from 'lucide-react'

export default function Home() {
  const models = [
    {
      id: 'classic',
      name: 'Classic',
      description: 'Perfect starter model for beginners. Creates beautiful ambient light patterns with simple geometric designs.',
      specs: 'Dimensions: 80mm × 80mm × 120mm',
      downloadUrl: '/downloads/classic-model.stl',
      imageQuery: '3D printed geometric light projection sculpture with ambient glow',
      accentColor: 'cyan'
    },
    {
      id: 'prism',
      name: 'Prism',
      description: 'Advanced design featuring multiple facets for complex light refraction and dynamic shadow play.',
      specs: 'Dimensions: 100mm × 100mm × 150mm',
      downloadUrl: '/downloads/prism-model.stl',
      imageQuery: '3D printed prism light projection art with colorful refraction',
      accentColor: 'magenta'
    },
    {
      id: 'constellation',
      name: 'Constellation',
      description: 'Premium model with intricate star-pattern perforations creating mesmerizing celestial projections.',
      specs: 'Dimensions: 120mm × 120mm × 180mm',
      downloadUrl: '/downloads/constellation-model.stl',
      imageQuery: '3D printed constellation light projection sculpture with star patterns',
      accentColor: 'purple'
    }
  ]

  return (
    <div className="min-h-screen dark">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="inline-flex items-center justify-center p-3 bg-primary/20 rounded-full ring-2 ring-primary/50 shadow-lg shadow-primary/20">
              <Lightbulb className="h-8 w-8 md:h-12 md:w-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Light Projection Art
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl text-balance leading-relaxed">
              Transform your space with 3D printed sculptures that create stunning light patterns and shadows
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <div className="text-sm text-foreground/70">
                <span className="font-mono bg-primary/10 border border-primary/30 text-primary px-3 py-1.5 rounded shadow-sm shadow-primary/10">Open Source</span>
              </div>
              <div className="text-sm text-foreground/70">
                <span className="font-mono bg-secondary/10 border border-secondary/30 text-secondary px-3 py-1.5 rounded shadow-sm shadow-secondary/10">3D Printable</span>
              </div>
              <div className="text-sm text-foreground/70">
                <span className="font-mono bg-accent/10 border border-accent/30 text-accent px-3 py-1.5 rounded shadow-sm shadow-accent/10">STL Files Included</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your Design
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
              Three unique variations, each designed to create captivating light displays. All files ready for 3D printing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {models.map((model) => (
              <ModelCard key={model.id} {...model} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
              About the Project
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">Technical Details</h3>
                <ul className="space-y-3 text-foreground/80 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Optimized for FDM and resin printers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>No supports required for most designs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Compatible with standard LED light sources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>STL format for universal compatibility</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-secondary">Recommended Materials</h3>
                <ul className="space-y-3 text-foreground/80 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Translucent PLA or PETG filament</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Clear or frosted resin for detailed patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>White filament for maximum projection contrast</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Layer height: 0.1-0.2mm recommended</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/50 py-8 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center text-sm text-foreground/70">
            <p>Light Projection Art Project • Open Source 3D Models</p>
            <p className="mt-2">Released under Creative Commons License</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
