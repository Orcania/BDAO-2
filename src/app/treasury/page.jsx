export default function Page() {
    return (
        <main>
            <div className="h-[calc(100vh-82px)]  ">
                <div className="h-full bg-[blue]  flex justify-center items-center">
                    <iframe src="/unity/unity.html" className="w-full h-full border-none "></iframe>

                    {/* <div className="bg-purple-500 h-full aspect-video"></div> */}
                </div>
            </div>
        </main>
    );
}
