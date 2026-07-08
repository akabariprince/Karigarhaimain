import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, ChevronRight, CircleDot, ShieldCheck, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import referenceImage from '../../images/ChatGPT Image Jul 7, 2026, 04_20_04 PM.png';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Marquee } from '../components/shared/Marquee';
import { SectionHeading } from '../components/section/SectionHeading';
import { categoryItems, featureItems, statItems } from '../data/home';
import { useScrollReveal } from '../hooks/useScrollReveal';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  useScrollReveal('[data-home-root]');

  useEffect(() => {
    if (!heroRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
      tl.from('[data-hero-kicker]', { opacity: 0, y: 18, filter: 'blur(8px)', duration: 0.8 })
        .from('[data-hero-title] span', { opacity: 0, y: 44, stagger: 0.04, duration: 0.8 }, '-=0.45')
        .from('[data-hero-copy]', { opacity: 0, y: 22, duration: 0.7 }, '-=0.45')
        .from('[data-hero-actions] > *', { opacity: 0, y: 18, stagger: 0.1, duration: 0.6 }, '-=0.4')
        .from('[data-hero-trust] > *', { opacity: 0, y: 12, stagger: 0.07, duration: 0.5 }, '-=0.4')
        .from('[data-hero-stage]', { opacity: 0, scale: 0.95, y: 24, duration: 1 }, '-=0.8');

      gsap.fromTo(
        '[data-hero-float]',
        { y: 0 },
        { y: -16, repeat: -1, yoyo: true, duration: 3.8, ease: 'sine.inOut', stagger: 0.2 },
      );

      gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el, index) => {
        gsap.fromTo(
          el,
          { y: 0 },
          {
            y: index % 2 === 0 ? -28 : 28,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              scrub: 1,
              start: 'top bottom',
              end: 'bottom top',
            },
          },
        );
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div data-home-root className="pt-24">
      <section ref={heroRef} className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.7),rgba(255,255,255,0.2)),radial-gradient(circle_at_18%_18%,rgba(47,140,151,0.14),transparent_26%),radial-gradient(circle_at_82%_24%,rgba(216,128,77,0.08),transparent_20%)]" />
        <div className="mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-10 px-5 py-10 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-14">
          <div className="relative z-10">
            <div
              data-hero-kicker
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white/75 px-4 py-2 shadow-soft backdrop-blur-xl"
            >
              <CircleDot className="h-4 w-4 text-brand-400" />
              <span className="font-display text-[0.68rem] uppercase tracking-[0.36em] text-brand-500">
                Your City. Your Service. Your Time.
              </span>
            </div>

            <h1
              data-hero-title
              className="mt-6 max-w-[12ch] font-display text-[clamp(3.5rem,7.2vw,6.2rem)] font-semibold leading-[0.87] tracking-[-0.095em] text-text text-balance"
            >
              <span className="block">Find Trusted</span>
              <span className="block">Local Service</span>
              <span className="block">Professionals</span>
              <span className="block">in Minutes</span>
            </h1>

            <p data-hero-copy className="mt-6 max-w-[34rem] text-[0.96rem] leading-8 text-muted md:text-[1.02rem]">
              Clean motion, soft depth, and a clearer split layout. The hero stays calm, premium, and close to the supplied reference on every screen.
            </p>

            <div data-hero-actions className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/contact">
                  Post a Service <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <Link to="/for-professionals">
                  Join as Provider <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div data-hero-trust className="mt-8 flex flex-wrap items-center gap-3 text-sm text-muted">
              {['Verified Professionals Only', 'Secure Payments', 'Real Reviews'].map((item) => (
                <span key={item} className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/75 px-4 py-2">
                  <ShieldCheck className="h-4 w-4 text-brand-500" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div data-hero-stage className="relative mx-auto flex w-full justify-center">
            <div className="absolute inset-0 -z-10 rounded-[3rem] bg-gradient-to-br from-brand-100/55 via-transparent to-warm/12 blur-3xl" />
            <div className="relative w-full max-w-[44rem]">
              <div
                data-hero-float
                className="absolute -left-1 top-8 z-20 w-44 rounded-[1.5rem] border border-line bg-panel/90 p-4 shadow-soft backdrop-blur-xl sm:left-2"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-muted">Live match</p>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <div>
                    <p className="font-display text-lg text-text">Nearby experts</p>
                    <p className="text-sm text-muted">Verified and ready</p>
                  </div>
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-500 text-white">
                    <Sparkles className="h-5 w-5" />
                  </div>
                </div>
              </div>

              <Card className="relative overflow-hidden border-white/85 bg-white/88 p-4 shadow-[0_28px_90px_rgba(7,19,22,0.16)] backdrop-blur-2xl md:p-5">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white/65 to-brand-50/55" />
                <div className="relative grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
                  <div className="relative min-h-[26rem] overflow-hidden rounded-[2rem] border border-line bg-[#f8fbfb] p-4 sm:min-h-[28rem] lg:min-h-[34rem]">
                    <div className="absolute inset-x-8 top-6 h-12 rounded-full bg-brand-100/70 blur-2xl" />
                    <div className="absolute left-6 top-6 h-14 w-14 rounded-full bg-brand-500/10 blur-2xl" />
                    <div className="relative flex h-full flex-col justify-between rounded-[1.6rem] border border-white/60 bg-[linear-gradient(180deg,#ffffff,rgba(255,255,255,0.75))] p-5">
                      <div className="flex items-center justify-between text-[0.68rem] uppercase tracking-[0.24em] text-muted">
                        <span>Smart workflow</span>
                        <span className="rounded-full bg-brand-50 px-2.5 py-1 text-brand-500">focus</span>
                      </div>

                      <div className="grid flex-1 place-items-center py-6">
                        <div className="relative h-64 w-full max-w-[18rem]">
                          <div className="absolute left-8 top-2 h-28 w-28 rounded-[2rem] bg-[linear-gradient(135deg,rgba(47,140,151,0.94),rgba(27,96,108,0.82))] shadow-soft" />
                          <div className="absolute left-20 top-16 h-24 w-24 rounded-[1.5rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(238,247,248,0.8))] shadow-soft" />
                          <div className="absolute bottom-6 right-6 h-20 w-20 rounded-[1.4rem] bg-[linear-gradient(135deg,rgba(216,128,77,0.9),rgba(154,77,33,0.82))] shadow-soft" />
                          <div className="absolute bottom-0 left-2 h-16 w-16 rounded-[1rem] bg-brand-600/80 shadow-soft" />
                        </div>
                      </div>

                      <div className="rounded-[1.2rem] border border-line bg-white/80 p-3">
                        <div className="flex items-center justify-between text-[0.68rem] uppercase tracking-[0.24em] text-muted">
                          <span>Motion cues</span>
                          <span>Responsive</span>
                        </div>
                        <div className="mt-3 h-2 rounded-full bg-brand-100">
                          <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-brand-500 to-warm" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-[1.7rem] border border-line bg-panel p-5">
                      <div className="flex items-center justify-between">
                        <p className="font-display text-xl text-text">Abstract service flow</p>
                        <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-500">active</span>
                      </div>
                      <p className="mt-3 max-w-sm text-sm leading-7 text-muted">
                        A cleaner dashboard-style visual with more whitespace and fewer competing elements.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {[
                        ['1,240', 'nearby matches'],
                        ['50 km', 'smart radius'],
                        ['100%', 'verified'],
                        ['24h', 'support'],
                      ].map(([value, label]) => (
                        <div key={label} className="rounded-[1.5rem] border border-line bg-panel p-4">
                          <p className="font-display text-3xl text-text">{value}</p>
                          <p className="mt-1 text-sm text-muted">{label}</p>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-[1.7rem] border border-line bg-panel p-5">
                      <div className="flex items-center gap-2 text-sm font-medium text-brand-500">
                        <Check className="h-4 w-4" />
                        Secure escrow and location-based matching
                      </div>
                      <div className="mt-4 h-2 rounded-full bg-brand-100">
                        <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-brand-500 to-warm" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <div
                data-hero-float
                className="absolute bottom-6 right-0 z-20 w-40 rounded-[1.5rem] border border-line bg-panel/90 p-4 shadow-soft backdrop-blur-xl sm:right-2"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-muted">Trust score</p>
                <div className="mt-2 flex items-end justify-between">
                  <div>
                    <p className="font-display text-3xl text-text">4.9</p>
                    <p className="text-sm text-muted">platform rating</p>
                  </div>
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-warm text-white">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                </div>
              </div>
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
            ['01', 'Post Your Requirement'],
            ['02', 'Review and Hire'],
            ['03', 'Pay Securely After Completion'],
          ].map(([step, title], index) => (
            <Card key={title} data-reveal className="group relative overflow-hidden p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-50/80 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="relative">
                <p className="font-display text-sm tracking-[0.3em] text-brand-500">{step}</p>
                <h3 className="mt-4 font-display text-2xl tracking-[-0.04em]">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">
                  Concise structure from the brief. Each card uses its own pacing and motion.
                </p>
                <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-brand-500">
                  <span className="rounded-full bg-brand-50 px-3 py-1">{index + 1}</span>
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
              <Card key={item.label} data-parallax data-reveal className="group p-5 transition hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-500 transition group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs text-muted">0{index + 1}</span>
                </div>
                <h3 className="mt-8 font-display text-xl tracking-[-0.03em]">{item.label}</h3>
                <p className="mt-2 text-sm text-muted">Custom layout, hover depth, and subtle motion.</p>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <Card data-reveal className="overflow-hidden p-7">
            <p className="font-display text-xs tracking-[0.32em] text-brand-500">Why choose us</p>
            <h2 className="mt-3 font-display text-3xl tracking-[-0.05em] md:text-5xl">
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
              ['For Providers', 'Schedule, alerts, reputation, fair pay.'],
              ['Payments', 'Escrow, OTP start, completion approval.'],
              ['App Experience', 'Post, chat, track, notify, and pay.'],
              ['Blog Highlights', 'Guides and lightweight article cards.'],
            ].map(([title, text], index) => (
              <Card key={title} data-reveal className="group p-6">
                <div className="flex items-center justify-between">
                  <p className="font-display text-xl">{title}</p>
                  <span className="text-sm text-muted">0{index + 1}</span>
                </div>
                <p className="mt-4 text-sm leading-7 text-muted">{text}</p>
                <div className="mt-6 h-px w-full bg-line" />
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand-500">
                  Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <Card data-reveal className="overflow-hidden p-7">
            <p className="font-display text-xs tracking-[0.32em] text-brand-500">For Providers</p>
            <h2 className="mt-3 font-display text-3xl tracking-[-0.05em] md:text-5xl">Are you a skilled professional?</h2>
            <div className="mt-8 space-y-4 text-sm text-muted">
              {['Work on your schedule.', 'Get paid fairly.', 'Build your reputation.', 'Instant job alerts.'].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-line bg-bg px-4 py-3">
                  <Check className="h-4 w-4 text-brand-500" />
                  {item}
                </div>
              ))}
            </div>
          </Card>

          <Card data-reveal className="overflow-hidden p-7">
            <p className="font-display text-xs tracking-[0.32em] text-brand-500">Payments</p>
            <h2 className="mt-3 font-display text-3xl tracking-[-0.05em] md:text-5xl">Your money is always safe</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                'Customer pays into escrow.',
                'Work begins with OTP verification.',
                'Provider submits completion.',
                'Customer approves release.',
              ].map((item, index) => (
                <div key={item} className="rounded-[1.5rem] border border-line bg-bg p-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-muted">0{index + 1}</p>
                  <p className="mt-3 text-sm leading-7 text-text">{item}</p>
                </div>
              ))}
            </div>
          </Card>
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
              {['Maintenance', 'Safety', 'Hiring'].map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-line bg-bg p-4">
                  <div className="aspect-[4/3] rounded-[1.25rem] bg-gradient-to-br from-brand-100 to-warm/20" />
                  <p className="mt-4 text-xs uppercase tracking-[0.28em] text-muted">{item}</p>
                  <p className="mt-2 text-sm leading-6 text-text">Read more</p>
                </div>
              ))}
            </div>
          </Card>

          <Card data-reveal className="p-7">
            <SectionHeading eyebrow="FAQ" title="Quick answers" />
            <div className="mt-8 space-y-3">
              {[
                'Is it free to post a service?',
                'How are providers verified?',
                'When does payment get released?',
                'What if I am not satisfied?',
              ].map((question) => (
                <details key={question} className="group rounded-[1.5rem] border border-line bg-bg p-4">
                  <summary className="cursor-pointer list-none text-sm font-medium text-text">{question}</summary>
                  <p className="mt-3 text-sm leading-7 text-muted">Expandable answer block for the teaser section.</p>
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
              <p className="font-display text-xs tracking-[0.34em] text-white/70">Download App</p>
              <h2 className="mt-3 font-display text-3xl tracking-[-0.05em] md:text-5xl">Take control from your phone</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/78">
                The layout stays abstract and polished without relying on heavy copy or unnecessary clutter.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="ghost" className="border-white/20 bg-white/10 text-white hover:bg-white/15">
                Play Store
              </Button>
              <Button variant="ghost" className="border-white/20 bg-white/10 text-white hover:bg-white/15">
                App Store
              </Button>
            </div>
          </div>
        </Card>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <Card data-reveal className="p-6 md:p-7">
            <p className="font-display text-xs tracking-[0.32em] text-brand-500">Layout note</p>
            <h2 className="mt-3 font-display text-3xl tracking-[-0.05em] md:text-4xl">Hero mockup is now box-based and ready for later image replacement.</h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              The hero intentionally uses layered panels and abstract blocks instead of 3D or real photos.
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
