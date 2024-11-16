import { Helmet } from "react-helmet-async";


const About = () => {
    return (
        <div>
          <Helmet>
                <title>About</title>
            </Helmet>
            <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://t3.ftcdn.net/jpg/03/01/48/18/360_F_301481839_p4RvuPBeFTeNvDXyl2ez822gZhQ7ZWEF.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Gadget Heaven</h1>
      <p className="mb-5">
      Our team is united by a shared commitment to excellence, collaboration, and a relentless pursuit of making a positive impact. Whether it's values you uphold, we pride ourselves on going above and beyond to deliver exceptional results.

Join us as we continue to vision for the future, e.g., push boundaries, inspire change, grow together. We are excited to share our journey with you!
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;