import React from "react";

const Home = () => {
  return (
    <>
      <main className="relative">
        Navbar
        {/*hero section*/}
        <section className="xl:padding-1 wide:padding-r padding-b">
          Hero
        </section>
        {/*PopularProducts*/}
        <section className="padding">Popular Products</section>
        {/*SuperQuality*/}
        <section className="padding">Super Quality</section>
        {/*Services */}
        <section className="padding-x py-10">Services</section>
        {/*specialOffers*/}
        <section className="padding bg-pale-blue ">Special Offers</section>
        {/* customer reviews */}
        <section className="padding">customer reviews</section>
        {/* subscribe */}
        <section className="padding-x sm:py-32 py-16 w-full">subscribe</section>
        {/* footer */}
        <section className="padding-x padding-t pb-8 bg-black ">Footer</section>
      </main>
    </>
  );
};

export default Home;