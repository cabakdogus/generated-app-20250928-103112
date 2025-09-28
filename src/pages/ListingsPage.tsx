import { useState, useEffect } from 'react';
import { FilterSidebar } from '@/components/listings/FilterSidebar';
import { ListingsTable } from '@/components/listings/ListingsTable';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Skeleton } from '@/components/ui/skeleton';
import { api } from '@/lib/api-client';
import { ProductListing } from '@shared/types';
import { Filter, List, PackageX } from 'lucide-react';
export function ListingsPage() {
  const [listings, setListings] = useState<ProductListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchListings = async () => {
      try {
        setLoading(true);
        const data = await api<{ items: ProductListing[] }>('/api/listings');
        setListings(data.items);
        setError(null);
      } catch (err) {
        setError('Failed to fetch listings. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchListings();
  }, []);
  const renderLoadingState = () => (
    <div className="space-y-4">
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-12 w-full" />
    </div>
  );
  const renderErrorState = () => (
    <div className="flex flex-col items-center justify-center text-center py-16 px-4 bg-background rounded-lg border border-destructive/20">
      <PackageX className="w-16 h-16 text-destructive mb-4" />
      <h3 className="text-xl font-semibold text-destructive">Oops! Something went wrong.</h3>
      <p className="text-muted-foreground mt-2">{error}</p>
    </div>
  );
  const renderEmptyState = () => (
    <div className="flex flex-col items-center justify-center text-center py-16 px-4 bg-background rounded-lg border border-border/50">
      <List className="w-16 h-16 text-muted-foreground mb-4" />
      <h3 className="text-xl font-semibold">No Listings Found</h3>
      <p className="text-muted-foreground mt-2">It looks like you don't have any listings yet. Try adding one on eBay!</p>
    </div>
  );
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Listings</h2>
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72">
              <FilterSidebar />
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <div className="flex">
        <div className="hidden lg:block">
          <FilterSidebar />
        </div>
        <div className="flex-1 lg:pl-6">
          {loading ? (
            renderLoadingState()
          ) : error ? (
            renderErrorState()
          ) : listings.length > 0 ? (
            <ListingsTable listings={listings} />
          ) : (
            renderEmptyState()
          )}
        </div>
      </div>
    </div>
  );
}