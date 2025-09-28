import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, List, BarChart3, X, Zap } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetOverlay, SheetPortal } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { NavItem } from '@/types';
const navigation: NavItem[] = [
  { href: '/dashboard', label: 'Dashboard', icon: Home },
  { href: '/listings', label: 'Listings', icon: List },
  { href: '/analytics', label: 'Analytics', icon: BarChart3 },
];
interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}
function NavLinks() {
  return (
    <nav className="flex flex-1 flex-col">
      <ul role="list" className="flex flex-1 flex-col gap-y-7">
        <li>
          <ul role="list" className="-mx-2 space-y-1">
            {navigation.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                      isActive
                        ? 'bg-brand text-white'
                        : 'text-sidebar-foreground hover:text-brand hover:bg-sidebar-accent'
                    )
                  }
                >
                  <item.icon
                    className={cn('h-6 w-6 shrink-0')}
                    aria-hidden="true"
                  />
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  );
}
function SidebarContent() {
  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-sidebar-background px-6 pb-4 border-r border-sidebar-border">
      <div className="flex h-16 shrink-0 items-center gap-2">
        <div className="bg-brand p-2 rounded-lg">
          <Zap className="h-8 w-8 text-white" />
        </div>
        <span className="text-xl font-bold font-display text-sidebar-foreground">Zenith Seller</span>
      </div>
      <NavLinks />
    </div>
  );
}
export function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  return (
    <>
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <SidebarContent />
      </div>
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetPortal>
          <SheetOverlay />
          <SheetContent side="left" className="w-72 p-0 border-none">
            <SidebarContent />
            <button
              type="button"
              className="absolute right-0 top-0 -mr-12 pt-2"
              onClick={() => setSidebarOpen(false)}
            >
              <span className="sr-only">Close sidebar</span>
              <X className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </SheetContent>
        </SheetPortal>
      </Sheet>
    </>
  );
}