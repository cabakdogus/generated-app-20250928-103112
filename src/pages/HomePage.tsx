import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, BarChart3, List, Eye, ArrowRight } from 'lucide-react';
import { motion, Easing, Variants } from 'framer-motion';
const featureVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};
const features = [
  {
    icon: BarChart3,
    title: 'Actionable Insights',
    description: 'Transform your sales data into clear, actionable insights with our beautiful and intuitive charts.',
  },
  {
    icon: List,
    title: 'Effortless Listing Management',
    description: 'Manage all your eBay listings in one place with powerful filtering and sorting capabilities.',
  },
  {
    icon: Eye,
    title: 'Performance Monitoring',
    description: 'Keep a close eye on your key performance metrics to make smarter business decisions.',
  },
];
export function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-brand p-2 rounded-lg">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold font-display">Zenith Seller</span>
          </Link>
          <nav className="flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link to="/dashboard">Log In</Link>
            </Button>
            <Button className="btn-brand hidden sm:flex" asChild>
              <Link to="/dashboard">Get Started</Link>
            </Button>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 lg:py-48">
          <div
            className="absolute inset-0 -z-10 bg-gradient-to-br from-brand/10 via-background to-background"
            aria-hidden="true"
          />
          <div className="container max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <h1 className="text-4xl font-bold tracking-tight font-display sm:text-6xl lg:text-7xl text-balance">
                Unlock Your <span className="text-gradient-zenith">eBay Potential</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto text-pretty">
                Zenith Seller provides visually stunning and insightful analytics to help you optimize listings, track performance, and accelerate your sales growth.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button size="lg" className="btn-brand text-lg px-8 py-6" asChild>
                  <Link to="/dashboard">
                    Start Optimizing Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-24 sm:py-32 bg-secondary/30">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-brand">Everything You Need</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight font-display sm:text-4xl">
                A Better Way to Sell on eBay
              </p>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Stop guessing and start making data-driven decisions. Zenith Seller gives you the tools to succeed.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {features.map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    custom={i}
                    variants={featureVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    <Card className="h-full bg-background/70 border-border/50 shadow-soft hover:shadow-soft-xl hover:-translate-y-1 transition-all duration-200">
                      <CardHeader>
                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-brand text-white">
                          <feature.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <CardTitle className="mt-4 font-semibold text-foreground">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-background border-t border-border/40">
        <div className="container mx-auto py-8 px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Zenith Seller. All rights reserved.</p>
            <p className="text-sm text-muted-foreground">Built with ❤️ at Cloudflare</p>
          </div>
        </div>
      </footer>
    </div>
  );
}