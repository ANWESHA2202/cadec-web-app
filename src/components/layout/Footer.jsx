

function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-8 mt-8 text-sm">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 ml-8">
          <h2 className="text-2xl font-semibold mb-4">CADEC</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat, lorem a viverra efficitur.</p>
        </div>
        <div className="w-full md:w-1/4">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="list-none">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p>123 Main Street</p>
          <p>City, Country</p>
          <p>Email: info@example.com</p>
          <p>Phone: +1 123-456-7890</p>
        </div>
        <div className="w-full md:w-1/4 ml-8">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <ul className="list-none">
            <li><a href="/">Facebook</a></li>
            <li><a href="/">Twitter</a></li>
            <li><a href="/">LinkedIn</a></li>
            <li><a href="/">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
