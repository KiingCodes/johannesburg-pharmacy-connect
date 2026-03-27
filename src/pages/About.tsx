import logoIcon from "@/assets/logo-icon.png";

const About = () => (
  <section className="py-16 md:py-24">
    <div className="container mx-auto max-w-2xl px-4">
      <div className="flex justify-center">
        <img src={logoIcon} alt="Bakone Pharmacy" className="h-20 w-20" />
      </div>
      <h1 className="mt-6 text-center text-3xl font-bold md:text-4xl">About Bakone Pharmacy</h1>

      <div className="mt-8 space-y-5 text-muted-foreground">
        <p>
          Bakone Pharmacy is a community-focused pharmacy based in Johannesburg, South Africa. We are committed to providing professional, accessible, and compassionate pharmaceutical care to every person who walks through our doors.
        </p>
        <p>
          Our team of qualified pharmacists brings years of experience and a genuine passion for health and wellness. We believe that good health starts with trust — trust in your pharmacist, trust in the products you use, and trust in the advice you receive.
        </p>
        <p>
          Whether you need help managing a chronic condition, advice on everyday wellness, or simply a friendly face you can rely on, Bakone Pharmacy is here for you. We take pride in knowing our customers by name and treating every enquiry with the care and attention it deserves.
        </p>
        <p className="font-medium text-foreground">
          Your Partner in Wellness — that's not just our slogan, it's our promise.
        </p>
      </div>
    </div>
  </section>
);

export default About;
