export const NotFound = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Themetogle />
      <Background />
      <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center px-4"
      >
        <div className="container max-w-4xl mx-auto text-center z-10">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in"> Oi, Eu sou</span>
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                {" "}
                Página não encontrada!
              </span>
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};
