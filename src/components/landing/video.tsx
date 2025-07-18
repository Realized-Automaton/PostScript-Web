
export default function Video() {
  return (
    <section id="video" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Witness the Power of Digital Remembrance</h2>
          <p className="mt-4 text-lg text-foreground/70">
            Explore how PostScript AI turns memory into meaningful connection.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl shadow-2xl shadow-primary/20 overflow-hidden border border-border/50">
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-primary via-blue-800 to-purple-600 opacity-10 blur-2xl -z-10"></div>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/02Ueru1hSao"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
