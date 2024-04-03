
export default function Home() {
  return (
    <main className="min-w-full min-h-screen">
      <video src={require('../../public/above-the-clouds.mp4')} autoPlay loop muted className="min-h-full min-w-full object-cover" />
      <div className="absolute min-h-full min-w-full inset-y-0 flex flex-col items-center justify-center text-white uppercase font-xl text-xl tracking-wider">
        <h1>UpInTheAir Studios</h1>
        <div className="flex items-center justify-center">
          <button className="p-8  ">our Work</button>
          <button>Our Story</button>
        </div>
      </div>
    </main>
  );
}
