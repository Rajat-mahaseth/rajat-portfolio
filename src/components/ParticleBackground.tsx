export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      <div className="absolute top-20 left-20 w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>

      <div className="absolute top-40 right-40 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>

      <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-yellow-600 rounded-full animate-bounce"></div>

      <div className="absolute bottom-20 right-1/4 w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>

    </div>
  )
}