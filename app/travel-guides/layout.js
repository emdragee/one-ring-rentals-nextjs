export const metadata = {
  title: "Travel Guides",
  description: "Alll thee Travel Guides.",
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
  