import React from 'react'
import { TOOL_REGISTRY } from '../../lib/tools'
import { Card } from '../components/ui/card'
import { Button } from '../components/ui/button'

export default function ToolsIndex() {
  return (
    <section className="section">
      <div className="container">
        <h1 style={{ fontSize: '1.75rem' }}>Tools</h1>
        <p className="muted" style={{ marginTop: 0 }}>Choose a tool to start with calm guidance.</p>
        <div className="grid" style={{ marginTop: 12 }}>
          {TOOL_REGISTRY.map((t) => (
            <Card key={t.slug}>
              <h3 style={{ marginTop: 0 }}>{t.name}</h3>
              <p className="muted" style={{ marginTop: 4 }}>{t.introLine}</p>
              <div style={{ marginTop: 12 }}>
                <Button href={`/tools/${t.slug}`}>Use this tool</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
