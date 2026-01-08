import { Search, Sparkles, BarChart3, Zap, Target, DollarSign } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Keyword Optimization",
    description: "AI scans and identifies high-performing keywords while automatically removing wasteful spend on irrelevant searches.",
  },
  {
    icon: Sparkles,
    title: "Creative Generation",
    description: "Generate compelling ad copy and visuals tailored to your brand voice and campaign objectives.",
  },
  {
    icon: BarChart3,
    title: "Creative Analysis",
    description: "Get instant scores for your CTAs, visuals, and copy with actionable recommendations for improvement.",
  },
  {
    icon: Target,
    title: "Account Audits",
    description: "Comprehensive analysis of your creatives, attribution model, and negative keywords to maximize performance.",
  },
  {
    icon: DollarSign,
    title: "Budget Reallocation",
    description: "Intelligently distribute your budget across platforms based on real-time performance data.",
  },
  {
    icon: Zap,
    title: "Instant Optimization",
    description: "One-click implementation of AI recommendations to improve campaign performance instantly.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-gradient-section">
      <div className="container">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Features
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Everything you need to
            <span className="text-gradient"> scale your ads</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From keyword optimization to creative generation, Ryze AI handles
            the heavy lifting so you can focus on growing your business.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl bg-card shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
