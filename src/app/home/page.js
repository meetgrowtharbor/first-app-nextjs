'use client';

const Page = () => {
    return (
        <>
            <h1>Hello, Haroon!</h1>
            <div class="grid grid-flow-col grid-rows-1 gap-2 text-center">
                <div class="col-span-3 bg-amber-400">01</div>
                <div class="col-span-3 bg-amber-800">02</div>
                <div class="col-span-3 bg-amber-400">03</div>
                <div class="col-span-3 bg-amber-800">04</div>
            </div>
        </>
    );
};

export default Page;