import { businessSolutions } from "@/lib/solutions";
import { SolutionCard } from "@/components/ui/solution-card";

export default async function SolutionsPage() {
  return (
    <div className="container max-w-screen-2xl space-y-8 py-6 lg:py-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Business Solutions</h1>
        <p className="text-lg text-muted-foreground max-w-[800px]">
          Discover our innovative solutions designed to streamline your business operations,
          enhance efficiency, and drive growth through intelligent automation.
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {businessSolutions.map((solution) => (
          <SolutionCard key={solution.id} solution={solution} />
        ))}
      </div>
    </div>
  );
} 