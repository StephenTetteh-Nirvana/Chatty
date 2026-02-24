import { SidebarProvider } from "@/components/ui/sidebar"
import { TooltipProvider } from "@/components/ui/tooltip"
import GlobalSidebar from "@/components/global/GlobalSidebar"
import Navbar from "@/components/global/Navbar"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <TooltipProvider>
        <GlobalSidebar/>
        <main className="flex flex-col gap-1 w-full min-h-screen bg-slate-100">
          <Navbar/>
          {children}
        </main>
      </TooltipProvider>
    </SidebarProvider>
   
  );
}
