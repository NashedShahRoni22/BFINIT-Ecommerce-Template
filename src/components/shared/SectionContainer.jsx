export default function SectionContainer({ children }) {
  return (
    <section className="mx-5 py-10 md:container md:mx-auto md:py-20">
      {children}
    </section>
  );
}
