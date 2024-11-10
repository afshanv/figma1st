import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#A29875] px-8 py-12 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="text-white text-6xl font-bold">Purity</div>
        </div>

        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Search for Gold Jewellery, Diamond Jewellery and more..."
            className="w-full h-12 py-2 pl-4 pr-10 text-sm rounded-lg"
          />
        </div>

        <div className="flex items-center space-x-4">
          </div>
      </header>

      {/* Main Content */}
      <main className="px-12 py-20 flex items-center justify-between">
        <div className="w-1/2 space-y-6">
          <h1 className="text-6xl font-serif font-bold text-black ">
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>
          <p className="text-gray-800">
            An example of intricate workmanship and detail, elegant necklaces
            and long and short chains form a part of our desirable collection.
          </p>
          <button className="mt-4 px-6 py-2 bg-[#b5aa8f] text-white rounded-md hover:bg-[#9e9275]">
            Explore Now
          </button>
        </div>

        <div className="w-1/2">
          <div className="relative w-80 h-80 overflow-hidden rounded-tl-lg rounded-br-lg">
          <Image
    src="/image/fshn.jpeg"
    alt="Fashion Image"
    fill
  />
          </div>
        </div>
      </main>
    </div>
  );
}
