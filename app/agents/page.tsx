"use client";

import { aiAgents } from "@/lib/solutions";
import { SolutionCard } from "@/components/ui/solution-card";

export default function AgentsPage() {
  return (
    <div className="container max-w-screen-2xl space-y-8 py-6 lg:py-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">AI Agents</h1>
        <p className="text-lg text-muted-foreground max-w-[800px]">
          Meet our intelligent AI agents that power our solutions. Each agent is specialized
          in specific tasks and works seamlessly together to deliver exceptional results.
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {aiAgents.map((agent) => (
          <SolutionCard key={agent.id} solution={agent} />
        ))}
      </div>
    </div>
  );
} 