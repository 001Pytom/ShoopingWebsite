function AboutPage() {
  return (
    <section className="pb-12 bg-gray-100">
      <div className="container w-[80vw]  mx-auto flex flex-col-reverse items-center ">
        <div className="text-center py-12 ">
          <h2 className="text-4xl md:text-6xl font-semibold text-gray-800 mb-4">
            About Us
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed tracking-wide">
            --- Welcome to TEEHAT store, your ultimate destination for all
            things fashion! At TEEHAT store, we&apos;re passionate about helping
            you express your unique style and personality through our curated
            collection of trendy and timeless fashion pieces. Whether
            you&apos;re looking for chic everyday essentials, statement-making
            outfits for special occasions, or the latest must-have accessories,
            we&apos;ve got you covered. ---
          </p>
        </div>
        <div className="about  w-full min-h-[50vh]  bg-cover bg-center bg-no-repeat p-12"></div>
      </div>
    </section>
  );
}

export default AboutPage;
