const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating Particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className={`absolute w-2 h-2 bg-accent/20 rounded-full float-animation`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * -0.8}s`,
            animationDuration: `${6 + Math.random() * 4}s`,
          }}
        />
      ))}

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gallery-glow/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '-1s' }} />
    </div>
  );
};

export default FloatingElements;