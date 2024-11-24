export const metadata = {
  title: "Contact",
  description: "contact forms.",
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
  