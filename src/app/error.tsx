'use client';

import { Button } from '@/components/ui/button';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  console.error(error);

  return (
    <div className="container-wrapper min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-foreground">Something went wrong!</h1>
        <p className="text-muted-foreground text-lg">
          We apologize for the inconvenience. An error occurred while processing your request.
        </p>
        {/* {error.digest && <p className="text-sm text-muted-foreground">Error ID: {error.digest}</p>} */}
        <Button onClick={reset} size="lg">
          Try again
        </Button>
      </div>
    </div>
  );
}
