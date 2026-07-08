import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export default function NotFoundPage() {
  return (
    <div className="pt-28">
      <section className="mx-auto max-w-4xl px-5 py-20 lg:px-8">
        <Card className="p-8 md:p-12">
          <p className="font-display text-xs tracking-[0.34em] text-brand-500">404</p>
          <h1 className="mt-4 font-display text-5xl tracking-[-0.06em] md:text-6xl">Page not found</h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
            The requested route does not exist in the current site map.
          </p>
          <Button asChild className="mt-8">
            <Link to="/">Return home</Link>
          </Button>
        </Card>
      </section>
    </div>
  );
}
