import Alert from "react-bootstrap/Alert";

const Welcome = () => {
  return (
    <Alert variant="success" className="text-center">
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>
        Welcome to Johnny's Books! We're thrilled to greet you at our virtual
        bookstore, where you can embark on a journey of adventures, knowledge,
        and imagination within the pages of our books. Explore our vast
        collection of titles, from timeless classics to the latest releases.
        We're here to help you discover stories that inspire, educate, and
        entertain. Whether you're a fiction enthusiast, a non-fiction
        aficionado, or in search of tales for the little ones, you'll find
        something for everyone here.
      </p>
      <hr />
      <p className="mb-0">
        "From books, we learn, dream, and grow - welcome to our world of endless
        literary possibilities."
      </p>
    </Alert>
  );
};

export default Welcome;
