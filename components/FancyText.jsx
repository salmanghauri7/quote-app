export default function FancyText({ title, quote }) {
  if (title) {
    return <h1 className="title">Welcome to the Quotes Generator App</h1>;
  } else {
    return (
      <section className="quote-div">
        <h3 className="third-heading">Your Quote is:</h3>
        <p className="quote">{quote}</p>
      </section>
    );
  }
}
