

const About = () => {

    return (
        <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
            <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                <h1 className="text-3xl font-bold mb-4">About Our Art & Craft Platform</h1>

                <div className="mb-6">
                    <h2 className="text-xl font-bold mb-2">Introduction</h2>
                    <p>Welcome to our Art & Craft platform, where creativity meets craftsmanship. We are dedicated to showcasing the finest handcrafted items from artisans around the globe.</p>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-bold mb-2">Our Mission</h2>
                    <p>Our mission is to promote and preserve traditional and contemporary art forms through a curated marketplace. We aim to connect artists with art lovers worldwide.</p>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-bold mb-2">Our Story</h2>
                    <p>Founded in [Year], our platform started with a vision to support artisans and celebrate their unique skills. Since then, we have grown into a thriving community of artists and enthusiasts.</p>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-bold mb-2">Meet Our Team</h2>
                    <p>Behind our platform are passionate individuals dedicated to fostering creativity and cultural exchange. Get to know the faces behind our mission:</p>
                    <ul className="list-disc pl-6">
                        <li>John Doe - Co-founder, CEO</li>
                        <li>Jane Smith - Co-founder, CTO</li>
                        <li>Michael Johnson - Lead Developer</li>
                    </ul>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-bold mb-2">Our Values</h2>
                    <p>At our core, we value authenticity, craftsmanship, and community. These values guide us in everything we do, from selecting artisans to delivering exceptional customer experiences.</p>
                </div>

                <div>
                    <h2 className="text-xl font-bold mb-2">Contact Us</h2>
                    <p>Have questions or feedback? We'd love to hear from you!</p>
                    <p>Email: contact@example.com</p>
                    <p>Phone: +1234567890</p>
                    <p>Follow us on Social Media: <a href="#">Twitter</a>, <a href="#">Facebook</a>, <a href="#">Instagram</a></p>
                </div>
            </div>
        </div>
    );
};

export default About;