import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu, Terminal } from "lucide-react";

export default function NavbarComponent() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 bg-black text-primary" data-test-id="navbar_root">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden bg-black border outline-primary border-primary" data-test-id="navbar_toggle">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Abrir menu de navegação</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-black text-primary" data-test-id="mobile_navbar">
          <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
            <Terminal className="h-6 w-6" />
            <span className="sr-only">Henrique Costa Dev</span>
          </Link>
          <div className="grid gap-2 py-6">
            <Link
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Início
            </Link>
            <Link
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              5 fatos sobre mim
            </Link>
            <Link
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Motivações e objetivos
            </Link>
            <Link
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Contato
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
        <Terminal className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <nav className="ml-auto hidden lg:flex gap-6">
        <Link
          href="#"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium transition-colors hover:bg-[#0f0f0f] hover:text-primary focus:bg-[#0f0f0f] focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[#0f0f0f]/50 data-[state=open]:bg-[#0f0f0f]/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false}
        >
          Início
        </Link>
        <Link
          href="#"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium transition-colors hover:bg-[#0f0f0f] hover:text-primary focus:bg-[#0f0f0f] focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[#0f0f0f]/50 data-[state=open]:bg-[#0f0f0f]/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false}
        >
          5 fatos sobre mim
        </Link>
        <Link
          href="#"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium transition-colors hover:bg-[#0f0f0f] hover:text-primary focus:bg-[#0f0f0f] focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[#0f0f0f]/50 data-[state=open]:bg-[#0f0f0f]/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false}
        >
          Motivações e objetivos
        </Link>
        <Link
          href="#"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium transition-colors hover:bg-[#0f0f0f] hover:text-primary focus:bg-[#0f0f0f] focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[#0f0f0f]/50 data-[state=open]:bg-[#0f0f0f]/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false}
        >
          Contato
        </Link>
      </nav>
    </header>
  );
}

