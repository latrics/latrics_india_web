import Section from "../common/Section";
import Container from "../common/Container";

export default function ProductStatsBanner() {
  return (
    <Section id="stats">
      <Container>
        <div
          className="relative h-[800px] w-full overflow-hidden rounded-xl shadow-2xl"
          style={{
            backgroundImage: 'url("/drone_blue_sky.jpg")',
            backgroundSize: 'fill',
            backgroundPosition: 'center'
          }}
        >
          {/* Extra atmospheric blue tint overlay matching the image */}
          <div className="absolute inset-0 bg-[#0C2D57]/5 mix-blend-multiply pointer-events-none" />

          <div className="relative z-10 flex flex-col sm:flex-row h-full items-center justify-center sm:justify-start px-8 md:px-20 gap-2 sm:gap-12 text-center sm:text-left">
            <div className="flex flex-col items-center sm:items-start">
              <h2 className="font-display text-5xl sm:text-6xl md:text-8xl font-black text-[#FAF9F6] italic tracking-tight">
                400+
              </h2>
              <div className="h-1.5 w-[110%] bg-[#DA291C] mt-2 rounded-full" />
            </div>

            <div className="flex items-center pt-2 sm:pt-6 md:pt-8">
              <p className="text-xl sm:text-2xl md:text-4xl font-bold text-white leading-none tracking-tight">
                Successful Flight Numbers
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
