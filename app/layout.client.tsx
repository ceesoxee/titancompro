"use client"
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function LayoutClient({children}:{children:React.ReactNode}){
        return <>
        {/* Navbar */}
        <Navbar />

        {/* Content */}
        {children}

        {/* Footer */}
        <Footer />
    </>
}