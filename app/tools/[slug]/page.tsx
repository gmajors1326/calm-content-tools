import React from 'react'
import { getToolBySlug } from '../../../lib/tools'
import { Card } from '../../../components/ui/card'
import { Button } from '../../../components/ui/button'

export default function ToolPage({ params }: { params: { slug: string } }) {
  const tool = getToolBySlug(params.slug)
  if (!tool) {
    return (
      <section className="section">
        <div className="container">
          <h1>Tool not found</h1>
          <p className="muted">The requested tool does not exist.</p>
        </div>
      </section>
    )
  }
  return (
    <section className="section">
      <div className="container">
        <h1 style={{ marginTop: 0 }}>{tool.name}</h1>
        <p className="muted">{tool.introLine}</p>

        <Card className="" style={{ marginTop: 12 } as any}>
          <h2 style={{ marginTop: 0 }}>{tool.name}</h2>
          <p className="muted" style={{ marginTop: 4 }}>{tool.oneSentenceBenefit}</p>

          <div style={{ marginTop: 12 }}>
            <label>Your input</label>
            <textarea className="form-control w-full border rounded-md p-2" rows={4} placeholder="Enter your input" disabled />
          </div>
        </Card>

        <div style={{ marginTop: 12 }}>
          <p>AI output is returned as strict JSON.</p>
          <textarea className="form-control w-full border rounded-md p-2" rows={6} placeholder="Output will appear here" disabled />
        </div>

        <div style={{ marginTop: 8 }}>
          <button className="btn" disabled>Generate</button>
        </div>
      </div>
    </section>
  )
}
