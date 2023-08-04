export default function Page() {
    return (
        <main>
            <div className={`h-[calc(100vh-82px)]`}>
                <div className="container mx-auto h-full  bg-opacity-20 flex justify-center items-center">
                    <div className="h-full aspect-[8/5]  overflow-hidden">
                        <iframe src="/unity/index.html" className="h-full w-full"></iframe>
                    </div>

                    {/* <div className="bg-purple-500 h-full aspect-video"></div> */}
                </div>
            </div>
        </main>
    );
}
