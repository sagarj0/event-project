import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function AboutPage() {
  return (
    <div className="container-wrapper py-12 md:py-20">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl mb-4">
          About Koi Events
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          We&apos;re on a mission to make event management simple, efficient, and accessible for everyone.
        </p>
      </div>

      {/* Mission Section */}
      <section className="mb-16">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl">Our Mission</CardTitle>
            <CardDescription className="text-base">
              Empowering organizers to create memorable experiences
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-foreground leading-relaxed">
              At Koi Events, we believe that organizing events should be a creative and enjoyable process, not a
              logistical nightmare. Our platform is designed to handle the complexities of event management so you can
              focus on what matters most - creating unforgettable experiences for your attendees.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Values Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <span className="text-2xl">🎯</span>
              </div>
              <CardTitle>Innovation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We continuously evolve our platform with cutting-edge features to stay ahead of industry trends and meet
                your changing needs.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <span className="text-2xl">🤝</span>
              </div>
              <CardTitle>Reliability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Your events are important. We ensure our platform is stable, secure, and always available when you need
                it most.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <span className="text-2xl">💡</span>
              </div>
              <CardTitle>Simplicity</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Complex features, simple interface. We make powerful event management tools accessible to everyone,
                regardless of technical expertise.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Story Section */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Our Story</h2>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              Koi Events was born from a simple observation: event management tools were either too complicated for
              small organizers or too limited for growing businesses. We knew there had to be a better way.
            </p>
            <p>
              Founded in 2024, we set out to build a platform that scales with your needs. Whether you&apos;re
              organizing your first workshop or managing hundreds of events annually, Koi Events adapts to support your
              journey.
            </p>
            <p>
              Today, we&apos;re proud to serve thousands of event organizers worldwide, helping them create experiences
              that bring people together and make lasting impacts.
            </p>
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Team Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-primary">✓</span> Easy to Use
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Intuitive interface designed for both beginners and experienced event managers.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-primary">✓</span> Full-Featured
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Everything you need in one place - ticketing, registration, analytics, and more.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-primary">✓</span> Great Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our dedicated team is always ready to help you succeed with your events.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-primary">✓</span> Affordable Pricing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Transparent pricing that grows with you, with no hidden fees or surprises.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <Card className="bg-accent border-accent-foreground/20">
          <CardContent className="pt-6">
            <h3 className="text-2xl font-bold text-foreground mb-3">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of event organizers who trust Koi Events to power their experiences.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" asChild>
                <a href="/signup">Start Free Trial</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/contact">Contact Sales</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
