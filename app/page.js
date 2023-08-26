import Image from 'next/image'

export default function Home() {
    return (
        <main className="flex flex-col scale-90 items-center justify-center min-h-screen lg:scale-100 relative text-white">
            <div className="absolute inset-0 z-0 filter blur-3xl opacity-60">
                <Image
                    src="/necrosskull.png"
                    alt="Background Image"
                    layout="fill"
                    objectFit="cover"
                />
            </div>

            <div className="z-10 hover:scale-105 transform transition duration-500 ease-in-out p-10 rounded-2xl">

            <div className="flex flex-col select-none items-center justify-center">

                <h1 className="text-6xl font-bold text-center hover:text-purple-300 transform transition duration-200 ease-in-out">necrosskull</h1>
                <h1 className="text-6xl font-bold text-center hover:text-purple-300 transform transition duration-200 ease-in-out">necrosskull</h1>
                <h1 className="text-6xl font-bold text-center hover:text-purple-300 transform transition duration-200 ease-in-out">necrosskull</h1>
                <h1 className="text-6xl font-bold text-center hover:text-purple-300 transform transition duration-200 ease-in-out">necrosskull</h1>
                <h1 className="text-6xl font-bold text-center hover:text-purple-300 transform transition duration-200 ease-in-out">necrosskull</h1>
                <h1 className="text-6xl font-bold text-center hover:text-purple-300 transform transition duration-200 ease-in-out">necrosskull</h1>
                <h1 className="text-6xl font-bold text-center hover:text-purple-300 transform transition duration-200 ease-in-out">necrosskull</h1>
            </div>

            <div className="flex text-2xl justify-around items-center mt-10">
                  <h1 className="font-bold text-center transform transition duration-300 hover:text-purple-300">
                    <a href="https://github.com/necrosskull" target="_blank">github</a>
                  </h1>
                  <h1 className="font-bold text-center transform transition duration-300 hover:text-purple-300">
                      <a href="https://t.me/necrosskull" target="_blank">telegram</a>
                  </h1>
            </div>
      </div>
    </main>
  )
}
