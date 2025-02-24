export default function HeroSection() {
    return (
      <div className="relative flex h-screen">
        {/* Left Section */}
        <div className="w-1/2 bg-white"></div>
  
        {/* Middle Section - Article */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center ">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-black">
              Welcome to <span className="underline">My Store</span>
            </h1>
            <h2 className="text-4xl font-bold text-black mt-2">
              Your Shopping <br/> Destination
            </h2>
            <p className="text-gray-500 mt-4 max-w-lg mx-auto">
              Discover a wide range of products <span className="text-gray-700 font-medium">tailored just for you.</span> Shop with ease and find exactly <span className="text-yellow-600 font-medium">what you need.</span>
            </p>
          </div>
        </div>
  
        {/* Right Section */}
        <div className="w-1/2 bg-yellow-300"></div>
      </div>
    );
}
