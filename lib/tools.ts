export type Tool = {
  name: string;
  slug: string;
  oneSentenceBenefit: string;
  introLine: string;
};

export const TOOL_REGISTRY: Tool[] = [
  {
    name: 'Hook Clarity Analyzer',
    slug: 'hook-clarity',
    oneSentenceBenefit: 'Clarifies the main hook of your message so it resonates instantly.',
    introLine: 'A calm starter that helps you frame your message with clarity.'
  },
  {
    name: 'Content Direction Planner',
    slug: 'content-direction',
    oneSentenceBenefit: 'Guides the overall direction of your content sequence.',
    introLine: 'A gentle framework to outline content goals and structure.'
  },
  {
    name: 'Message Positioning Builder',
    slug: 'content-positioning',
    oneSentenceBenefit: 'Helps choose the right positioning and tone for your audience.',
    introLine: 'Elevate tone and placement with a calm, consistent voice.'
  },
  {
    name: 'Engagement Signal Interpreter',
    slug: 'engagement-signal',
    oneSentenceBenefit: 'Interprets signals from engagement data to inform content tweaks.',
    introLine: 'A soft lens to understand what resonates with your audience.'
  },
  {
    name: 'Weekly Content Reflection',
    slug: 'weekly-reflection',
    oneSentenceBenefit: 'A simple recap of weekly learnings to guide next steps.',
    introLine: 'A calm weekly practice to capture insights and plan forward.'
  }
];

export function getToolBySlug(slug: string): Tool | undefined {
  return TOOL_REGISTRY.find((t) => t.slug === slug);
}
