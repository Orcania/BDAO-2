export default function Page() {
    return (
        <main>
            <div className="h-[calc(100vh-82px)]  ">
                <div className="container mx-auto h-full  flex justify-center items-center">
                    <iframe
                        src="/unity/unity.html"
                        className="h-full aspect-video border-none"
                    ></iframe>
                </div>
            </div>
        </main>
    );
}
