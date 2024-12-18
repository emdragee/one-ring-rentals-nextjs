export const metadata = {
  title: "NASA APOD",
  description: "NASA APOD API.",
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
  