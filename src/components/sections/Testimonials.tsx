import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Ryze AI has transformed how we manage our ad campaigns. We've seen a 40% reduction in CPA within the first month.",
    author: "Sarah Chen",
    role: "Marketing Director",
    company: "TechStart Inc",
    avatar: "SC",
  },
  {
    quote: "The keyword optimization feature alone saved us thousands in wasted ad spend. The AI recommendations are incredibly accurate.",
    author: "Marcus Johnson",
    role: "Head of Growth",
    company: "Scale Digital",
    avatar: "MJ",
  },
  {
    quote: "Finally, an AI tool that actually delivers on its promises. Our ROAS improved by 3x after implementing Ryze's suggestions.",
    author: "Emily Rodriguez",
    role: "CMO",
    company: "Brandwave",
    avatar: "ER",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-secondary text-secondary-foreground">
      <div className="container">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Trusted by leading
            <span className="text-gradient"> marketing teams</span>
          </h2>
          <p className="text-lg text-secondary-foreground/70">
            Join thousands of marketers who have transformed their ad performance with Ryze AI.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="bg-background/10 backdrop-blur-sm rounded-2xl p-8 border border-secondary-foreground/10"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-secondary-foreground mb-8 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-secondary-foreground/70">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
