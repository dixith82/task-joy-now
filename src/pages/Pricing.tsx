import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Check, HelpCircle } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses getting started with AI ads",
    monthlyPrice: 49,
    yearlyPrice: 39,
    features: [
      "Up to $10k monthly ad spend",
      "1 ad platform integration",
      "Basic keyword optimization",
      "Weekly performance reports",
      "Email support",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    description: "For growing teams that need advanced optimization",
    monthlyPrice: 149,
    yearlyPrice: 119,
    features: [
      "Up to $50k monthly ad spend",
      "All platform integrations",
      "Advanced keyword optimization",
      "Creative generation & analysis",
      "Account audits",
      "Budget reallocation",
      "Daily reports & alerts",
      "Priority support",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations with complex needs",
    monthlyPrice: null,
    yearlyPrice: null,
    features: [
      "Unlimited ad spend",
      "All Professional features",
      "Custom integrations",
      "Dedicated account manager",
      "Custom reporting",
      "SLA guarantees",
      "Training & onboarding",
      "API access",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const faqs = [
  {
    question: "How does the free trial work?",
    answer: "Start with a 14-day free trial on any plan. No credit card required. Cancel anytime during the trial period.",
  },
  {
    question: "Can I switch plans later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and billing is prorated.",
  },
  {
    question: "What ad platforms do you support?",
    answer: "We support Google Ads, Meta (Facebook & Instagram), LinkedIn Ads, and integrations with ChatGPT and Perplexity for creative insights.",
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use enterprise-grade encryption and follow SOC 2 compliance standards. Your data is never shared with third parties.",
  },
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero */}
        <section className="py-16 bg-gradient-hero">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Pricing
              </span>
              <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6">
                Simple, transparent
                <span className="text-gradient"> pricing</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-10">
                Choose the perfect plan for your business. Start free, scale as you grow.
              </p>

              {/* Billing Toggle */}
              <div className="inline-flex items-center gap-4 p-1.5 bg-muted rounded-full">
                <button
                  onClick={() => setIsYearly(false)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                    !isYearly
                      ? "bg-background shadow-sm text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsYearly(true)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                    isYearly
                      ? "bg-background shadow-sm text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Yearly
                  <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full">
                    Save 20%
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-24">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative rounded-3xl p-8 ${
                    plan.popular
                      ? "bg-secondary text-secondary-foreground shadow-xl scale-105"
                      : "bg-card shadow-card"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground text-sm font-semibold px-4 py-1.5 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-8">
                    <h3 className="font-display text-2xl font-bold mb-2">
                      {plan.name}
                    </h3>
                    <p className={`text-sm ${plan.popular ? "text-secondary-foreground/70" : "text-muted-foreground"}`}>
                      {plan.description}
                    </p>
                  </div>

                  <div className="mb-8">
                    {plan.monthlyPrice !== null ? (
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-display font-bold">
                          ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                        </span>
                        <span className={plan.popular ? "text-secondary-foreground/70" : "text-muted-foreground"}>
                          /month
                        </span>
                      </div>
                    ) : (
                      <div className="text-3xl font-display font-bold">
                        Custom
                      </div>
                    )}
                    {isYearly && plan.monthlyPrice && (
                      <p className={`text-sm mt-2 ${plan.popular ? "text-secondary-foreground/70" : "text-muted-foreground"}`}>
                        Billed annually (${(plan.yearlyPrice ?? 0) * 12}/year)
                      </p>
                    )}
                  </div>

                  <Button
                    variant={plan.popular ? "hero" : "outline"}
                    size="lg"
                    className="w-full mb-8"
                  >
                    {plan.cta}
                  </Button>

                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className={`h-5 w-5 flex-shrink-0 ${plan.popular ? "text-primary" : "text-primary"}`} />
                        <span className={`text-sm ${plan.popular ? "text-secondary-foreground/90" : "text-foreground"}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 bg-muted/50">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">
                Frequently asked questions
              </h2>
              <div className="space-y-6">
                {faqs.map((faq) => (
                  <div
                    key={faq.question}
                    className="bg-card rounded-2xl p-6 shadow-card"
                  >
                    <div className="flex items-start gap-4">
                      <HelpCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-primary">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Still have questions?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Our team is here to help. Book a demo and we'll walk you through everything.
              </p>
              <Button variant="dark" size="lg" className="bg-background text-foreground">
                Book a Demo
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
