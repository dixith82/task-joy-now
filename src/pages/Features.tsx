import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Sparkles, 
  BarChart3, 
  Zap, 
  Target, 
  DollarSign,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Shield,
  Clock
} from "lucide-react";

const featuresData = [
  {
    icon: Search,
    title: "Keyword Optimization",
    description: "AI scans and identifies high-performing keywords while automatically removing wasteful spend on irrelevant searches.",
    benefits: [
      "Automatic negative keyword suggestions",
      "Search term analysis and categorization",
      "Real-time bid optimization",
      "Competitor keyword tracking"
    ],
    stats: { value: "35%", label: "Reduction in wasted spend" }
  },
  {
    icon: Sparkles,
    title: "Creative Generation",
    description: "Generate compelling ad copy and visuals tailored to your brand voice and campaign objectives.",
    benefits: [
      "AI-powered headline generation",
      "Visual creative suggestions",
      "A/B testing recommendations",
      "Brand voice consistency"
    ],
    stats: { value: "2x", label: "Faster creative production" }
  },
  {
    icon: BarChart3,
    title: "Creative Analysis",
    description: "Get instant scores for your CTAs, visuals, and copy with actionable recommendations for improvement.",
    benefits: [
      "CTA effectiveness scoring",
      "Visual engagement analysis",
      "Copy sentiment analysis",
      "Competitive benchmarking"
    ],
    stats: { value: "90%", label: "Accuracy in predictions" }
  },
  {
    icon: Target,
    title: "Account Audits",
    description: "Comprehensive analysis of your creatives, attribution model, and negative keywords to maximize performance.",
    benefits: [
      "Full account health score",
      "Attribution model optimization",
      "Budget efficiency analysis",
      "Growth opportunity detection"
    ],
    stats: { value: "100+", label: "Optimization points checked" }
  },
  {
    icon: DollarSign,
    title: "Budget Reallocation",
    description: "Intelligently distribute your budget across platforms based on real-time performance data.",
    benefits: [
      "Cross-platform optimization",
      "Real-time budget adjustments",
      "ROI-based allocation",
      "Seasonality predictions"
    ],
    stats: { value: "40%", label: "Better ROI allocation" }
  },
  {
    icon: Zap,
    title: "Instant Optimization",
    description: "One-click implementation of AI recommendations to improve campaign performance instantly.",
    benefits: [
      "One-click implementation",
      "Rollback capabilities",
      "Performance tracking",
      "Automated A/B testing"
    ],
    stats: { value: "5min", label: "Average optimization time" }
  },
];

const additionalFeatures = [
  { icon: TrendingUp, title: "Performance Tracking", description: "Real-time dashboards and reports" },
  { icon: Shield, title: "Brand Safety", description: "Protect your brand across all platforms" },
  { icon: Clock, title: "24/7 Monitoring", description: "Always-on campaign monitoring" },
];

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-hero">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Features
              </span>
              <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6">
                Powerful AI tools for
                <span className="text-gradient"> smarter ads</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Discover how Ryze AI can transform your advertising campaigns with
                intelligent automation and data-driven insights.
              </p>
              <Button variant="hero" size="lg">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Detailed Features */}
        <section className="py-24">
          <div className="container">
            {featuresData.map((feature, index) => (
              <div
                key={feature.title}
                className={`flex flex-col lg:flex-row gap-12 items-center py-16 ${
                  index !== featuresData.length - 1 ? "border-b border-border" : ""
                } ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                    {feature.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    {feature.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {feature.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stats Card */}
                <div className="flex-1 flex justify-center">
                  <div className="w-full max-w-md bg-card rounded-3xl shadow-card p-10">
                    <div className="text-center">
                      <div className="text-6xl md:text-7xl font-display font-bold text-gradient mb-4">
                        {feature.stats.value}
                      </div>
                      <div className="text-lg text-muted-foreground">
                        {feature.stats.label}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Features */}
        <section className="py-24 bg-muted/50">
          <div className="container">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">
              And so much more
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {additionalFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="text-center p-8"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-primary">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Ready to see these features in action?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Start your free trial today and experience the power of AI-driven ad management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="dark" size="lg" className="bg-background text-foreground">
                  Get Started Free
                </Button>
                <Button variant="ghost" size="lg" className="text-primary-foreground border-primary-foreground/30 border hover:bg-primary-foreground/10">
                  Book a Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
