import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/themes/ThemeToggle";
import { CartSidebar } from "@/components/cart/sideBar";

export  function Header() {
    return (
        <header className="flex justify-between items-center my-5 mx-3">
            <div className="flex items-center gap-3">
                <Logo/>
                <ThemeToggle/>
            </div>
            <div className="flex items-center gap-3">
                <CartSidebar/>
            </div>
        </header>
    );
}
