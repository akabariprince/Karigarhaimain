import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  Check,
  ChevronRight,
  CircleDot,
  MapPin,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import referenceImage from "../../images/ChatGPT Image Jul 7, 2026, 04_20_04 PM.png";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Marquee } from "../components/shared/Marquee";
import { SectionHeading } from "../components/section/SectionHeading";
import { categoryItems, featureItems, statItems } from "../data/home";
import { useScrollReveal } from "../hooks/useScrollReveal";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  useScrollReveal("[data-home-root]");

  useEffect(() => {
    if (
      !heroRef.current ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const compact = window.matchMedia("(max-width: 767px)").matches;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      tl.from("[data-hero-kicker]", { opacity: 0, y: 12, duration: 0.45 })
        .from(
          "[data-hero-title] span",
          { opacity: 0, y: 18, stagger: 0.02, duration: 0.45 },
          "-=0.2",
        )
        .from(
          "[data-hero-copy]",
          { opacity: 0, y: 12, duration: 0.35 },
          "-=0.2",
        )
        .from(
          "[data-hero-actions] > *",
          { opacity: 0, y: 10, stagger: 0.05, duration: 0.35 },
          "-=0.15",
        )
        .from(
          "[data-hero-trust] > *",
          { opacity: 0, y: 8, stagger: 0.04, duration: 0.3 },
          "-=0.15",
        )
        .from(
          "[data-hero-stage]",
          { opacity: 0, y: 14, duration: 0.5 },
          "-=0.25",
        );

      if (!compact) {
        gsap.fromTo(
          "[data-hero-float]",
          { y: 0 },
          {
            y: -4,
            repeat: -1,
            yoyo: true,
            duration: 7,
            ease: "sine.inOut",
            stagger: 0.25,
          },
        );

        gsap.utils
          .toArray<HTMLElement>("[data-parallax]")
          .forEach((el, index) => {
            gsap.fromTo(
              el,
              { y: 0 },
              {
                y: index % 2 === 0 ? -18 : 18,
                ease: "none",
                scrollTrigger: {
                  trigger: el,
                  scrub: 0.6,
                  start: "top bottom",
                  end: "bottom top",
                },
              },
            );
          });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div data-home-root>
      <section ref={heroRef} className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(255,255,255,0.28)),radial-gradient(circle_at_14%_18%,rgba(47,140,151,0.12),transparent_24%),radial-gradient(circle_at_82%_20%,rgba(216,128,77,0.08),transparent_18%),radial-gradient(circle_at_50%_80%,rgba(47,140,151,0.05),transparent_28%)]" />
        <div className="mx-auto grid max-w-7xl items-start gap-6 px-5 py-6 md:min-h-[calc(100vh-6rem)] lg:items-center lg:grid-cols-[0.94fr_1.06fr] lg:gap-12 lg:px-8 lg:py-16">
          <div className="relative z-10 flex max-w-[40rem] flex-col pt-2 lg:pt-0 mt-0">
            <div
              data-hero-kicker
              className="order-1 inline-flex items-center gap-2 rounded-full border border-line/70 bg-white/78 px-4 py-2 backdrop-blur-xl mt-12"
            >
              <CircleDot className="h-4 w-4 text-brand-400" />
              <span className="font-display text-[0.66rem] uppercase tracking-[0.38em] text-brand-500">
                Your City. Your Service. Your Time.
              </span>
            </div>

            <h1
              data-hero-title
              className="order-3 mt-4 max-w-[10ch] font-display text-[clamp(2.1rem,8.2vw,4.8rem)] font-normal leading-[0.92] tracking-[-0.065em] text-text text-balance sm:mt-6 sm:text-[clamp(2.6rem,5vw,4.8rem)]"
            >
              <span className="block">Find Trusted</span>
              <span className="block">Local Service</span>
              <span className="block">Professionals</span>
              <span className="block">in Minutes</span>
            </h1>

            <p
              data-hero-copy
              className="order-4 mt-3 max-w-[30rem] text-[0.9rem] leading-6 text-muted sm:mt-4 sm:text-[0.95rem] sm:leading-7 md:mt-6 md:text-[1.02rem]"
            >
              A calmer split layout with more breathing room, refined spacing,
              and a product feel that stays readable on every screen.
            </p>

            <div data-hero-actions className="order-5 mt-4 flex flex-row flex-wrap gap-2.5 sm:gap-3 lg:mt-8">
              <Button asChild size="lg" className="w-[calc(50%-0.3125rem)] min-w-[9.5rem] shadow-soft sm:w-auto">
                <Link to="/contact">Post a Service</Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="w-[calc(50%-0.3125rem)] min-w-[9.5rem] sm:w-auto">
                <Link to="/for-professionals">Join as Provider</Link>
              </Button>
            </div>

            <div
              data-hero-trust
              className="order-6 mt-4 flex flex-wrap items-center gap-2 text-sm text-muted sm:gap-3 lg:mt-8"
            >
              {[
                "Verified Professionals Only",
                "Secure Payments",
                "Real Reviews",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-line/80 bg-panel/78 px-3 py-2 text-[0.7rem] shadow-[0_8px_24px_rgba(7,19,22,0.05)] sm:px-4 sm:text-sm"
                >
                  <ShieldCheck className="h-4 w-4 text-brand-500" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div
            data-hero-stage
            className="relative mx-auto mt-5 flex w-full justify-center lg:mt-0"
          >
            <div className="absolute inset-0 -z-10 rounded-[3rem] bg-gradient-to-br from-brand-100/25 via-transparent to-warm/8 blur-3xl" />
            <div className="relative w-full max-w-[43rem]">
              <Card className="relative overflow-hidden border-white/92 bg-white/92 p-3 shadow-[0_24px_70px_rgba(7,19,22,0.12)] backdrop-blur-2xl sm:p-4 md:p-5">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line bg-white sm:aspect-[4/4.6] lg:aspect-[16/10]">
                  <img
                    src={referenceImage}
                    alt="KarigarHai visual reference"
                    className="h-full w-full object-cover object-center lg:object-contain"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white/85 to-transparent px-5 pb-5 pt-16">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-line bg-white/90 px-3 py-1 text-xs uppercase tracking-[0.28em] text-brand-500">
                        Live match
                      </span>
                      <span className="rounded-full border border-line bg-white/90 px-3 py-1 text-xs uppercase tracking-[0.28em] text-muted">
                        Nearby experts ready
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Marquee items={statItems} />

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div data-reveal>
          <SectionHeading
            eyebrow="How It Works"
            title="Get your work done in 3 simple steps"
            description="A lightweight, premium sequence with clear hierarchy and scroll reveal motion."
          />
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {[
            ["01", "Post Your Requirement"],
            ["02", "Review and Hire"],
            ["03", "Pay Securely After Completion"],
          ].map(([step, title], index) => (
            <Card
              key={title}
              data-reveal
              className="group relative overflow-hidden p-7"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-50/80 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="relative">
                <p className="font-display text-xs tracking-[0.34em] text-brand-500">
                  {step}
                </p>
                <h3 className="mt-4 font-display text-[1.55rem] font-medium tracking-[-0.05em] text-text">
                  {title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted">
                  Concise structure from the brief. Each card uses its own
                  pacing and motion.
                </p>
                <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-brand-500">
                  <span className="rounded-full bg-brand-50 px-3 py-1">
                    {index + 1}
                  </span>
                  Continue
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div data-reveal>
          <SectionHeading
            eyebrow="Categories"
            title="What do you need help with?"
            description="The card grid is intentionally compact on mobile and expanded on larger screens."
          />
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categoryItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.label}
                data-parallax
                data-reveal
                className="group p-5 transition hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-500 transition group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs text-muted">0{index + 1}</span>
                </div>
                <h3 className="mt-8 font-display text-[1.22rem] font-medium tracking-[-0.04em] text-text">
                  {item.label}
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Custom layout, hover depth, and subtle motion.
                </p>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <Card data-reveal className="overflow-hidden p-7">
            <p className="font-display text-xs tracking-[0.32em] text-brand-500">
              Why choose us
            </p>
            <h2 className="mt-3 max-w-[12ch] font-display text-3xl font-medium tracking-[-0.06em] text-text md:text-5xl">
              Premium trust layer with clean visual hierarchy
            </h2>
            <ul className="mt-8 space-y-4 text-sm text-muted">
              {featureItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-500">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="leading-7">{item}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8">
              <Link to="/about">Explore the story</Link>
            </Button>
          </Card>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              ["For Providers", "Schedule, alerts, reputation, fair pay."],
              ["Payments", "Escrow, OTP start, completion approval."],
              ["App Experience", "Post, chat, track, notify, and pay."],
              ["Blog Highlights", "Guides and lightweight article cards."],
            ].map(([title, text], index) => (
              <Card key={title} data-reveal className="group p-6">
                <div className="flex items-center justify-between">
                  <p className="font-display text-[1.18rem] font-medium tracking-[-0.03em] text-text">
                    {title}
                  </p>
                  <span className="text-sm text-muted">0{index + 1}</span>
                </div>
                <p className="mt-4 text-sm leading-7 text-muted">{text}</p>
                <div className="mt-6 h-px w-full bg-line" />
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand-500">
                  Learn more{" "}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <Card data-reveal className="overflow-hidden p-7">
            <p className="font-display text-xs tracking-[0.32em] text-brand-500">
              For Providers
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-[-0.06em] text-text md:text-5xl">
              Are you a skilled professional?
            </h2>
            <div className="mt-8 space-y-4 text-sm text-muted">
              {[
                "Work on your schedule.",
                "Get paid fairly.",
                "Build your reputation.",
                "Instant job alerts.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-line bg-bg px-4 py-3"
                >
                  <Check className="h-4 w-4 text-brand-500" />
                  {item}
                </div>
              ))}
            </div>
          </Card>

          <Card data-reveal className="overflow-hidden p-7">
            <p className="font-display text-xs tracking-[0.32em] text-brand-500">
              Payments
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-[-0.06em] text-text md:text-5xl">
              Your money is always safe
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Customer pays into escrow.",
                "Work begins with OTP verification.",
                "Provider submits completion.",
                "Customer approves release.",
              ].map((item, index) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-line bg-bg p-4"
                >
                  <p className="text-xs uppercase tracking-[0.28em] text-muted">
                    0{index + 1}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-text">{item}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Card data-reveal className="overflow-hidden p-7">
            <p className="font-display text-xs tracking-[0.32em] text-brand-500">
              Customer journey
            </p>
            <h2 className="mt-3 max-w-[12ch] font-display text-3xl font-medium tracking-[-0.06em] text-text md:text-5xl">
              Every step from booking to approval.
            </h2>
            <div className="mt-8 space-y-3">
              {[
                "Create request",
                "Choose budget",
                "Review applications",
                "Release payment",
              ].map((item, index) => (
                <div
                  key={item}
                  className="group flex items-center gap-4 rounded-2xl border border-line bg-bg px-4 py-3 transition hover:-translate-y-0.5"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-50 font-display text-sm text-brand-500">
                    {index + 1}
                  </span>
                  <span className="font-medium text-text">{item}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card data-reveal className="overflow-hidden p-7">
            <p className="font-display text-xs tracking-[0.32em] text-brand-500">
              Provider journey
            </p>
            <h2 className="mt-3 max-w-[13ch] font-display text-3xl font-medium tracking-[-0.06em] text-text md:text-5xl">
              A separate growth path for professionals.
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["01", "KYC and profile"],
                ["02", "Job discovery"],
                ["03", "Proposals"],
                ["04", "Wallet and withdrawals"],
              ].map(([step, label]) => (
                <div
                  key={label}
                  className="rounded-[1.5rem] border border-line bg-white p-4 shadow-soft"
                >
                  <p className="text-xs uppercase tracking-[0.28em] text-muted">
                    {step}
                  </p>
                  <p className="mt-3 font-display text-xl text-text">{label}</p>
                  <p className="mt-2 text-sm leading-7 text-muted">
                    Hoverable workflow block.
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <Card data-reveal className="p-7">
            <p className="font-display text-xs tracking-[0.32em] text-brand-500">
              Testimonials
            </p>
            <h2 className="mt-3 max-w-[16ch] font-display text-3xl font-medium tracking-[-0.06em] text-text md:text-5xl">
              Social proof, but designed as clean product feedback.
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                "Fast booking and clear steps.",
                "Provider onboarding felt structured.",
                "Escrow made the payment process easier to trust.",
              ].map((quote) => (
                <div
                  key={quote}
                  className="rounded-[1.5rem] border border-line bg-bg p-4"
                >
                  <p className="text-sm leading-7 text-text">“{quote}”</p>
                  <div className="mt-4 flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-muted">
                    <Star className="h-4 w-4 fill-brand-500 text-brand-500" />
                    Customer
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              ["Cities", "Service reach and coverage.", "MapPin"],
              ["Emergency", "Urgent service readiness.", "ShieldCheck"],
              ["Business", "Commercial service support.", "Building2"],
              ["Stats", "Operational numbers.", "Sparkles"],
            ].map(([title, text, icon]) => {
              const Icon =
                icon === "MapPin"
                  ? MapPin
                  : icon === "ShieldCheck"
                    ? ShieldCheck
                    : icon === "Building2"
                      ? Building2
                      : Sparkles;
              return (
                <Card
                  key={title}
                  data-reveal
                  className="group p-6 transition hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-display text-xl">{title}</p>
                    <Icon className="h-5 w-5 text-brand-500 transition group-hover:scale-110" />
                  </div>
                  <p className="mt-4 text-sm leading-7 text-muted">{text}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <Card data-reveal className="p-7">
            <SectionHeading
              eyebrow="Blog Highlights"
              title="Tips, guides and home service advice"
              description="Three lightweight article cards keep the tone editorial without heavy content."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {["Maintenance", "Safety", "Hiring"].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-line bg-bg p-4"
                >
                  <div className="aspect-[4/3] rounded-[1.25rem] bg-gradient-to-br from-brand-100 to-warm/20" />
                  <p className="mt-4 text-xs uppercase tracking-[0.28em] text-muted">
                    {item}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-text">Read more</p>
                </div>
              ))}
            </div>
          </Card>

          <Card data-reveal className="p-7">
            <SectionHeading eyebrow="FAQ" title="Quick answers" />
            <div className="mt-8 space-y-3">
              {[
                "Is it free to post a service?",
                "How are providers verified?",
                "When does payment get released?",
                "What if I am not satisfied?",
              ].map((question) => (
                <details
                  key={question}
                  className="group rounded-[1.5rem] border border-line bg-bg p-4"
                >
                  <summary className="cursor-pointer list-none text-sm font-medium text-text">
                    {question}
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    Expandable answer block for the teaser section.
                  </p>
                </details>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <Card data-reveal className="relative overflow-hidden p-8 md:p-10">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-500 via-brand-600 to-slate-950" />
          <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.3),transparent_22%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.2),transparent_18%)]" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl text-white">
              <p className="font-display text-xs tracking-[0.34em] text-white/70">
                Download App
              </p>
              <h2 className="mt-3 font-display text-3xl font-medium tracking-[-0.06em] md:text-5xl">
                Take control from your phone
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/78">
                The layout stays abstract and polished without relying on heavy
                copy or unnecessary clutter.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                variant="ghost"
                className="border-white/20 bg-white/10 text-white hover:bg-white/15"
              >
                Play Store
              </Button>
              <Button
                variant="ghost"
                className="border-white/20 bg-white/10 text-white hover:bg-white/15"
              >
                App Store
              </Button>
            </div>
          </div>
        </Card>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <Card data-reveal className="p-6 md:p-7">
            <p className="font-display text-xs tracking-[0.32em] text-brand-500">
              Layout note
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-[-0.06em] text-text md:text-4xl">
              Hero mockup is now box-based and ready for later image
              replacement.
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              The hero intentionally uses layered panels and abstract blocks
              instead of 3D or real photos.
            </p>
          </Card>
          <Card data-reveal className="overflow-hidden p-6 md:p-7">
            <div className="aspect-[16/10] rounded-[2rem] border border-line bg-[linear-gradient(135deg,#eff7f8,#fef8f4)] p-5">
              <div className="grid h-full place-items-center">
                <div className="relative h-44 w-56">
                  <div className="absolute left-8 top-0 h-24 w-24 rounded-[2rem] bg-brand-500/80 shadow-soft" />
                  <div className="absolute left-20 top-12 h-20 w-20 rounded-[1.5rem] bg-white shadow-soft" />
                  <div className="absolute bottom-2 right-4 h-20 w-20 rounded-[1.5rem] bg-warm/80 shadow-soft" />
                  <div className="absolute bottom-0 left-0 h-14 w-14 rounded-[1rem] bg-brand-600/80 shadow-soft" />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
