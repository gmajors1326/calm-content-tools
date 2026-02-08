import React from 'react'
import { Button } from './components/ui/button'
import { TOOL_REGISTRY } from '../lib/tools'

export default function Page() {
  return (
    <section className="section">
      <div className="hero container">
        <h1>A calmer way to show up online.</h1>
        <p className="muted">A minimal set of tools to plan and craft content with clarity and calm.</p>
      </div>

      <div className="container">
        <div className="grid">
          {TOOL_REGISTRY.map((t) => (
            <div key={t.slug} className="card">
              <h3 style={{ marginTop: 0 }}>{t.name}</h3>
              <p className="muted" style={{ marginTop: 4 }}>{t.introLine}</p>
              <div style={{ marginTop: 12 }}>
                <Button href={`/tools/${t.slug}`}>Use this tool</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
