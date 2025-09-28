import { useState, useEffect } from 'react';
import { SalesTrendChart } from '@/components/analytics/SalesTrendChart';
import { TopProductsChart } from '@/components/analytics/TopProductsChart';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { api } from '@/lib/api-client';
import { SalesDataPoint, TopProductData } from '@shared/types';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
export function AnalyticsPage() {
  const [salesData, setSalesData] = useState<SalesDataPoint[]>([]);
  const [topProducts, setTopProducts] = useState<TopProductData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [sales, products] = await Promise.all([
          api<SalesDataPoint[]>('/api/analytics/sales-trend'),
          api<TopProductData[]>('/api/analytics/top-products'),
        ]);
        setSalesData(sales);
        setTopProducts(products);
        setError(null);
      } catch (err) {
        setError('Failed to fetch analytics data. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
      </div>
      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
        <Card className="lg:col-span-2 bg-background border-border/50 shadow-soft">
          <CardHeader>
            <CardTitle>Sales Trend</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            {loading ? (
              <Skeleton className="h-[350px] w-full" />
            ) : (
              <SalesTrendChart data={salesData} />
            )}
          </CardContent>
        </Card>
        <Card className="lg:col-span-2 bg-background border-border/50 shadow-soft">
          <CardHeader>
            <CardTitle>Top Performing Products</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <Skeleton className="h-[350px] w-full" />
            ) : (
              <TopProductsChart data={topProducts} />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}