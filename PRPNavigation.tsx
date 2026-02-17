"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Upload,
  FileText,
  Map,
  BarChart3,
  History,
  Download,
  CheckSquare,
  Rocket,
} from "lucide-react";

const navItems = [
  { href: "/prp/01-upload", label: "Upload", icon: Upload },
  { href: "/prp/02-extract", label: "Extract", icon: FileText },
  { href: "/prp/03-map", label: "Map", icon: Map },
  { href: "/prp/04-score", label: "Score", icon: BarChart3 },
  { href: "/prp/05-history", label: "History", icon: History },
  { href: "/prp/06-export", label: "Export", icon: Download },
  { href: "/prp/07-test", label: "Test", icon: CheckSquare },
  { href: "/prp/08-ship", label: "Ship", icon: Rocket },
];

export default function PRPNavigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-primary-600">
              PRP
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-primary-100 text-primary-700"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-1.5" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* Mobile navigation */}
      <div className="md:hidden border-t border-gray-200">
        <div className="flex overflow-x-auto py-2 px-4 space-x-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
                  isActive
                    ? "bg-primary-100 text-primary-700"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <Icon className="w-4 h-4 mr-1.5" />
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
