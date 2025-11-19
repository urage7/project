'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Download, Info } from 'lucide-react'
import Image from 'next/image'

interface ModelCardProps {
  id: string
  name: string
  description: string
  specs: string
  downloadUrl: string
  imageQuery: string
  accentColor?: string
}

export function ModelCard({ id, name, description, specs, downloadUrl, imageQuery, accentColor = 'cyan' }: ModelCardProps) {
  const handleDownload = () => {
    // In a real app, this would trigger an actual download
    // For now, we'll just log it
    console.log(`Downloading ${name} model from ${downloadUrl}`)
    
    // Implement file download using the original filename when possible
    const link = document.createElement('a')
    link.href = downloadUrl
    // prefer the actual filename from the URL, fall back to id-based name
    const filename = downloadUrl.split('/').pop() || `${id}-model.stl`
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const accentColorClasses = {
    cyan: 'border-primary/50 hover:border-primary hover:shadow-primary/20',
    magenta: 'border-secondary/50 hover:border-secondary hover:shadow-secondary/20',
    purple: 'border-accent/50 hover:border-accent hover:shadow-accent/20'
  }

  const accentTextClasses = {
    cyan: 'text-primary',
    magenta: 'text-secondary',
    purple: 'text-accent'
  }

  return (
    <Card className={`overflow-hidden transition-all duration-300 flex flex-col h-full border-2 ${accentColorClasses[accentColor as keyof typeof accentColorClasses]} hover:shadow-xl`}>
      <div className="relative aspect-square w-full overflow-hidden bg-muted">
        <Image
          // Use direct path when imageQuery is a static path (starts with '/'),
          // otherwise fall back to the existing dynamic image query.
          src={imageQuery.startsWith('/') ? imageQuery : `/.jpg?height=400&width=400&query=${encodeURIComponent(imageQuery)}`}
          alt={`${name} 3D model preview`}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className={`text-2xl ${accentTextClasses[accentColor as keyof typeof accentTextClasses]}`}>{name}</CardTitle>
        <CardDescription className="text-base leading-relaxed text-foreground/70">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="flex items-start gap-2 text-sm text-foreground/60">
          <Info className="h-4 w-4 mt-0.5 flex-shrink-0" />
          <span className="font-mono">{specs}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleDownload}
          className="w-full gap-2 cursor-pointer"
          size="lg"
        >
          <Download className="h-4 w-4" />
          Download STL File
        </Button>
      </CardFooter>
    </Card>
  )
}
