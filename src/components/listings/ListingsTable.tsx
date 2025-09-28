import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ProductListing } from "@shared/types";
import { cn } from "@/lib/utils";
import { ArrowUpDown } from "lucide-react";
import { Button } from "../ui/button";
interface ListingsTableProps {
  listings: ProductListing[];
}
export function ListingsTable({ listings }: ListingsTableProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };
  return (
    <div className="rounded-lg border border-border/50 overflow-hidden bg-background">
      <Table>
        <TableHeader>
          <TableRow className="bg-secondary/50 hover:bg-secondary/70">
            <TableHead className="w-[80px]">Image</TableHead>
            <TableHead>
              <Button variant="ghost" size="sm" className="-ml-4">
                Title <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">
              <Button variant="ghost" size="sm">
                Price <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead className="text-right">
              <Button variant="ghost" size="sm">
                Views <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead className="text-right">
              <Button variant="ghost" size="sm">
                Sales <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {listings.map((listing) => (
            <TableRow key={listing.id}>
              <TableCell>
                <img
                  src={listing.imageUrl}
                  alt={listing.title}
                  className="h-12 w-12 rounded-md object-cover"
                />
              </TableCell>
              <TableCell className="font-medium">{listing.title}</TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={cn({
                    'bg-green-100 text-green-800 border-green-300 dark:bg-green-900/50 dark:text-green-300 dark:border-green-700': listing.status === 'Active',
                    'bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-900/50 dark:text-blue-300 dark:border-blue-700': listing.status === 'Sold',
                    'bg-gray-100 text-gray-800 border-gray-300 dark:bg-gray-800/50 dark:text-gray-300 dark:border-gray-600': listing.status === 'Unsold',
                  })}
                >
                  {listing.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">{formatCurrency(listing.price)}</TableCell>
              <TableCell className="text-right">{formatNumber(listing.views)}</TableCell>
              <TableCell className="text-right">{formatNumber(listing.sales)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}