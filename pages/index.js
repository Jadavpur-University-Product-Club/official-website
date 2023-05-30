import Header from "@/components/Header";
// import { UnderLine } from "@/components/UnderLine";
import About from "@/components/About";
import Join from "@/components/Join";
import Contact from "@/components/Contact";
import NewsLetter from "@/components/NewsLetter";
import Products from "@/components/Products";
import Product from "@/components/Product";
export default function Home() {
    return (
    <>
        <Header />
        <About />
        <Products />

        <Join />
        {/* <Contact /> */}
        <NewsLetter />
    </>
    );
}