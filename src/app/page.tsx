
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-24 min-h-screen">

      <video src={require('../../public/above-the-clouds.mp4')} autoPlay muted className="absolute z-0 min-h-full min-w-full object-cover" />
      <div className="z-1">
        <h1>UpInTheAir Studios</h1>
        <div className="flex items-center justify-center uppercase text-white">
          <button>our Work</button>
          <button>Our Story</button>
        </div>
      </div>
    </main>
  );
}
