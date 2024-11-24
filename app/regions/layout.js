export const metadata = {
  title: "Regions",
  description: "Alll thee regions.",
};
export default function Layout({ children }) {
    return (
      <div>
        <section className="py-4">
          <div className="container">
            <main>{children}</main>
          </div>
        </section>
      </div>
    );
  }
  