import banner from "../../assets/banner.jpg";

export const Header = () => {
  return (
    <div className="md:w-4/5 mx-auto my:5 max-sm:p-5 md:my-10">
      <div
        style={{ backgroundImage: `url(${banner})` }}
        className="h-screen w-full bg-cover bg-center flex items-center justify-center rounded-3xl"
      >
        <div className="text-white text-center space-y-5">
          <h1 className="font-bold text-3xl md:text-6xl leading-snug">
            Discover an exceptional cooking class tailored for you!
          </h1>
          <p className="md:w-2/3 mx-auto">
            Explore a bespoke culinary workshop curated to suit your tastes
            perfectly! Delve into the art of cooking with a personalized touch,
            where every ingredient and technique is tailored to your
            preferences.
          </p>
          <div className="space-x-5">
            <button className="btn bg-[#0BE58A] rounded-full border-0 text-xl font-semibold">Explore Now</button>
            <button className="btn btn-outline border border-white text-white rounded-full font-semibold">Our Feedback</button>
          </div>
        </div>
      </div>
    </div>
  );
};
