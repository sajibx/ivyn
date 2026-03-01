import { ServiceCard } from "@/components/ServiceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { AnimatedOrb } from "@/components/AnimatedOrb";
import { Code2, Smartphone, Rocket, Shield, Globe, Zap, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="page-wrapper relative">
      {/* Background Ambience */}
      <AnimatedOrb color="var(--accent-glow)" size={500} top="-10%" left="-10%" />
      <AnimatedOrb color="rgba(236, 72, 153, 0.3)" size={400} bottom="10%" right="-5%" delay="5s" animationDuration="25s" />
      <AnimatedOrb color="rgba(99, 102, 241, 0.2)" size={600} top="40%" left="20%" delay="2s" animationDuration="30s" />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content text-center fade-in-up">
            <h1 className="hero-title">
              Engineering the <br /><span className="text-gradient">Future</span> of Software.
            </h1>
            <p className="hero-subtitle delay-100">
              We design and build scalable, high-performance web and mobile applications
              that drive business growth and user engagement.
            </p>
            <div className="hero-actions delay-200">
              <Link href="/contact" className="btn btn-primary btn-lg hover-lift">
                Start Your Project <ArrowRight size={20} />
              </Link>
              <Link href="/about" className="btn btn-secondary btn-lg hover-lift">
                Our Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section relative z-10">
        <div className="container">
          <div className="section-header text-center fade-in-up">
            <h2 className="section-title">Our Expertise</h2>
            <p className="section-desc">Comprehensive solutions tailored to your unique challenges.</p>
          </div>
          <div className="grid grid-cols-3 gap-y-12 gap-x-8 mt-12">
            <div className="fade-in-up delay-100 mt-0 lg:mt-8">
              <ServiceCard
                title="Web Development"
                description="Custom, responsive web applications built with modern frameworks."
                icon={<Globe size={24} />}
              />
            </div>
            <div className="fade-in-up delay-200 mt-0 lg:-mt-8">
              <ServiceCard
                title="Mobile Apps"
                description="Native and cross-platform mobile experiences for iOS and Android."
                icon={<Smartphone size={24} />}
              />
            </div>
            <div className="fade-in-up delay-300 mt-0 lg:mt-16">
              <ServiceCard
                title="Cloud Architecture"
                description="Scalable and secure cloud infrastructure setup and migration."
                icon={<Code2 size={24} />}
              />
            </div>
            <div className="fade-in-up delay-100 mt-0 lg:-mt-4">
              <ServiceCard
                title="UI/UX Design"
                description="User-centric design that prioritizes engagement and conversion."
                icon={<Zap size={24} />}
              />
            </div>
            <div className="fade-in-up delay-200 mt-0 lg:mt-8">
              <ServiceCard
                title="DevOps & CI/CD"
                description="Streamlined deployment pipelines for faster, reliable releases."
                icon={<Rocket size={24} />}
              />
            </div>
            <div className="fade-in-up delay-300 mt-0 lg:-mt-12">
              <ServiceCard
                title="Cybersecurity"
                description="Proactive security audits and implementation for your apps."
                icon={<Shield size={24} />}
              />
            </div>
          </div>
        </div>
      </section>


      {/* Featured Projects Section */}
      <section className="section projects-section relative z-10">
        <div className="container">
          <div className="section-header text-center fade-in-up">
            <h2 className="section-title">Featured Work</h2>
            <p className="section-desc">A selection of impactful solutions we&apos;ve delivered to our clients.</p>
          </div>
          {/* Main featured project spanning full width */}
          <div className="grid grid-cols-1 mb-8">
            <div className="fade-in-up delay-100">
              <ProjectCard
                title="Enterprise SaaS Platform"
                description="We build scalable Software-as-a-Service solutions from the ground up. This example features a multi-tenant architecture, subscription billing integration, and a comprehensive real-time analytics dashboard designed to handle millions of rows of data with sub-millisecond latency."
                imagePath="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
                tags={["SaaS Architecture", "Multi-tenancy", "React", "Node.js", "PostgreSQL"]}
              />
            </div>
          </div>
          {/* Secondary projects in grid */}
          <div className="grid grid-cols-3 gap-6">
            <div className="fade-in-up delay-200">
              <ProjectCard
                title="Custom Mobile Applications"
                description="High-performance iOS and Android apps. From consumer-facing utilities to complex field-service management tools with offline capabilities."
                imagePath="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800"
                tags={["React Native", "Swift", "Kotlin", "Offline Sync"]}
              />
            </div>
            <div className="fade-in-up delay-300">
              <ProjectCard
                title="E-Commerce & Marketplaces"
                description="Robust digital storefronts and multi-vendor marketplaces optimized for high conversion rates, fast checkouts, and seamless inventory management."
                imagePath="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
                tags={["Next.js", "Headless Commerce", "Stripe API"]}
              />
            </div>
            <div className="fade-in-up delay-400">
              <ProjectCard
                title="B2B Portals & Internal Tools"
                description="Secure, HIPAA/SOC2 compliant portals that connect businesses with their clients, or internal dashboards that streamline complex operational workflows."
                imagePath="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
                tags={["Vue.js", "Python/Django", "AWS", "RBAC"]}
              />
            </div>
            <div className="fade-in-up delay-500">
              <ProjectCard
                title="AI & Machine Learning"
                description="Intelligent integrations that adapt to your business. We deploy custom LLMs, predictive analytics, and automated workflows."
                imagePath="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800"
                tags={["Python", "PyTorch", "OpenAI API", "Vector DB"]}
              />
            </div>
            <div className="fade-in-up delay-600">
              <ProjectCard
                title="Cloud Infrastructure & DevOps"
                description="Scalable, fault-tolerant infrastructure setup. We migrate legacy systems to the cloud and establish rapid CI/CD deployment pipelines."
                imagePath="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
                tags={["Kubernetes", "Docker", "Terraform", "GCP/AWS"]}
              />
            </div>
            <div className="fade-in-up delay-700">
              <ProjectCard
                title="Data Engineering & ETL"
                description="Robust data pipelines orchestrating complex transformations. We turn raw data from disparate sources into actionable business intelligence."
                imagePath="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
                tags={["Python", "Apache Airflow", "Snowflake", "Spark"]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="glass-panel cta-panel">
            <h2>Ready to transform your ideas into reality?</h2>
            <p>Let&apos;s build something extraordinary together.</p>
            <Link href="/contact" className="btn btn-primary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
