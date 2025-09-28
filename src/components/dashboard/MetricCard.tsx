import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { MetricCardData } from '@/types';
import { ArrowUp, ArrowDown } from 'lucide-react';
export function MetricCard({ title, value, change, changeType, icon: Icon }: MetricCardData) {
  const isPositive = changeType === 'positive';
  return (
    <Card className="bg-background border-border/50 shadow-soft hover:shadow-soft-xl hover:-translate-y-1 transition-all duration-200">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground flex items-center gap-1">
          <span className={cn('flex items-center', isPositive ? 'text-green-500' : 'text-red-500')}>
            {isPositive ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
            {change.split(' ')[0]}
          </span>
          {change.substring(change.indexOf(' '))}
        </p>
      </CardContent>
    </Card>
  );
}