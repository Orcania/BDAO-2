import Header from "@/layout/header-layout/header.component";
import Footer from "@/layout/footer-layout/footer.component";

export default function layout({ children }) {
    return (
        <>
            <Header></Header>
            {children}
            <Footer></Footer>
        </>
    );
}
