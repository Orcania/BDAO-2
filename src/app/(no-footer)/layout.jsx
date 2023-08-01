import Header from "@/layout/header-layout/header.component";

export default function layout({ children }) {
    return (
        <>
            <Header></Header>
            {children}
        </>
    );
}
