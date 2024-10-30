// components/GlobalNav.tsx
"use client";

import Link from "next/link";
import { Home, MessageSquare, Bell, User, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function GlobalNav() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <header className="bg-white shadow-sm flex items-center justify-between md:hidden">
                <Button
                    variant="ghost"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="p-4"
                >
                    {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
                </Button>
                <h1 className="text-xl font-semibold px-4">관리자 대시보드</h1>
            </header>
            <aside
                className={`bg-white w-64 min-h-screen flex flex-col ${
                    sidebarOpen ? "block absolute top-[35px] z-10" : "hidden"
                } md:block`}
            >
                <div className="p-4 bg-primary text-primary-foreground">
                    <h2 className="text-2xl font-semibold">관리자 패널</h2>
                </div>
                <nav className="flex-1 p-4">
                    <Link
                        href="/"
                        className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded"
                    >
                        대시보드
                    </Link>
                    <Link
                        href="/items"
                        className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded"
                    >
                        물품 관리
                    </Link>
                    <Link
                        href="/rentals"
                        className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded"
                    >
                        대여 관리
                    </Link>
                    <Link
                        href="/coupons"
                        className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded"
                    >
                        쿠폰 관리
                    </Link>
                </nav>
            </aside>
        </>
    );
}
