import React from "react";

import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
  Footer,
} from "@/sections/index";

import Nav from "@/components/Nav";

const Home = () => {
  return (
    <>
      <main className="relative">
        <Nav />
        <section className="xl:padding-1 wide:padding-r padding-b">
          <Hero />
        </section>
        <section className="padding">
          <PopularProducts />
        </section>
        <section className="padding">
          <SuperQuality />
        </section>
        <section className="padding-x py-10">
          <Services />
        </section>
        <section className="padding bg-pale-blue ">
          <SpecialOffer />
        </section>
        <section className="padding">
          <CustomerReviews />
        </section>
        <section className="padding-x sm:py-32 py-16 w-full">
          <Subscribe />
        </section>
        <section className="padding-x padding-t pb-8 bg-black ">
          <Footer />
        </section>
      </main>
    </>
  );
};

export default Home;
