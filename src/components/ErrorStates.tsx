import { AlertTriangle, WifiOff, RefreshCw, ServerOff, FileQuestion } from 'lucide-react';
import { Button } from '@/components/ui/button';

type ErrorType = 'network' | 'server' | 'not-found' | 'generic';

type ErrorStateProps = {
  type: ErrorType;
  title?: string;
  message?: string;
  onRetry?: () => void;
};

const errorConfig = {
  network: {
    icon: WifiOff,
    title: 'Connection lost',
    message: 'Unable to connect to our servers. Please check your internet connection and try again.',
    action: 'Try again',
  },
  server: {
    icon: ServerOff,
    title: 'Something went wrong',
    message: 'Our servers are having a moment. We\'ve been notified and are working on it. Please try again shortly.',
    action: 'Retry',
  },
  'not-found': {
    icon: FileQuestion,
    title: 'No results found',
    message: 'We couldn\'t find what you\'re looking for. Try adjusting your search or filters.',
    action: 'Clear filters',
  },
  generic: {
    icon: AlertTriangle,
    title: 'Oops, something broke',
    message: 'An unexpected error occurred. Please refresh the page or try again.',
    action: 'Refresh page',
  },
};

export function ErrorState({ type, title, message, onRetry }: ErrorStateProps) {
  const config = errorConfig[type];
  const Icon = config.icon;

  return (
    <div className="text-center py-12 px-4 max-w-md mx-auto animate-fade-in">
      <div className="w-16 h-16 rounded-2xl bg-destructive/10 flex items-center justify-center mx-auto mb-6">
        <Icon className="w-8 h-8 text-destructive" />
      </div>
      
      <h3 className="font-display text-xl font-semibold mb-3">
        {title || config.title}
      </h3>
      
      <p className="text-sm text-muted-foreground mb-6">
        {message || config.message}
      </p>
      
      {onRetry && (
        <Button 
          variant="outline" 
          onClick={onRetry}
          className="gap-2"
        >
          <RefreshCw className="w-4 h-4" />
          {config.action}
        </Button>
      )}
    </div>
  );
}

// Empty State Component
type EmptyStateProps = {
  icon?: React.ReactNode;
  title: string;
  message: string;
  action?: {
    label: string;
    onClick: () => void;
  };
};

export function EmptyState({ icon, title, message, action }: EmptyStateProps) {
  return (
    <div className="text-center py-12 px-4 border rounded-xl bg-muted/30 max-w-md mx-auto animate-fade-in">
      {icon && (
        <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-6">
          {icon}
        </div>
      )}
      
      <h3 className="font-display text-lg font-semibold mb-2">
        {title}
      </h3>
      
      <p className="text-sm text-muted-foreground mb-6">
        {message}
      </p>
      
      {action && (
        <Button variant="outline" onClick={action.onClick}>
          {action.label}
        </Button>
      )}
    </div>
  );
}

// Loading State Component
type LoadingStateProps = {
  message?: string;
};

export function LoadingState({ message = 'Loading...' }: LoadingStateProps) {
  return (
    <div className="text-center py-12 px-4 max-w-md mx-auto animate-fade-in">
      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 animate-pulse">
        <RefreshCw className="w-8 h-8 text-primary animate-spin" />
      </div>
      <p className="text-sm text-muted-foreground">{message}</p>
    </div>
  );
}
