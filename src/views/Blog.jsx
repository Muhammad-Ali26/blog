// @ts-nocheck
import React, { useEffect } from "react";
import Header from "../components/Header";
import { AiOutlineEye } from "react-icons/ai";
import { HiArrowNarrowRight } from "react-icons/hi";
import Footer from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../store/slice/Slice";
import { useNavigate } from "react-router-dom";

export default function Blog() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.api);
  console.log("🚀 ~ file: Blog.jsx:14 ~ Blog ~ data:", data);

  useEffect(() => {
    dispatch(
      fetchData("https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/")
    );
  }, [dispatch]);

  function truncateText(text, maxLength) {
    if (text && text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  }

  const blogDetails = (id, title, image, article, subtitle) => {
    navigate("/blog-single", {
      state: {
        blogId: id,
        blogTitle: title,
        blogArticle: article,
        blogSubtitle: subtitle,
        blogImage: image,
      },
    });
  };

  return (
    <>
      <Header />
      <section className="min-h-[400px] grid md:grid-cols-2">
        <div className="bg-hero-bg bg-cover bg-center flex justify-center items-center relative before:absolute before:h-full before:w-full before:top-0 before:left-0 before:bg-black before:bg-opacity-20">
          <h2 className="xl:font-extrabold font-bold xl:text-6xl lg:text-5xl text-4xl text-white text-center relative">
            Our Blog
          </h2>
        </div>
        <div className="bg-theme-black flex flex-col justify-center md:items-start items-center gap-y-4 px-10">
          <h3 className="font-bold lg:text-4xl text-3xl text-white">
            Diagnose Car Problems If You Don't Know Much About Cars
          </h3>
          <h3 className="font-semibold lg:text-lg text-base text-white">
            We provide a full range of front end mechanical repairs for all
            makes and models of cars, no matter the cause. This includes, We
            provide a full range of front end mechanical.
          </h3>
        </div>
      </section>
      <section className="bg-theme-gray sm:py-16 py-8">
        <div className="sm:w-4/5 w-11/12 mx-auto bg-white p-8 flex lg:flex-row flex-col gap-y-4">
          <div className="min-w-fit">
            <img
              src="/images/car.png"
              alt="car"
              className="lg:w-[220px] w-full lg:h-full h-60 object-cover"
            />
          </div>
          <div className="py-1 lg:px-6 w-full space-y-3">
            <div className="flex items-start justify-between">
              <div className="flex sm:flex-row flex-col sm:items-center gap-x-5">
                <span className="font-semibold md:text-base text-sm text-[#939191]">
                  Posted on October 6th 2021
                </span>
                <span className="font-semibold md:text-base text-sm text-[#939191] flex items-center gap-x-1">
                  <AiOutlineEye size={16} />
                  563 views
                </span>
              </div>
              <div className="font-medium sm:text-base text-sm text-[#FF6433] uppercase">
                FEATURED
              </div>
            </div>
            <h2 className="font-semibold sm:text-4xl text-3xl">
              Should I Buy a New Car or Lease a New Car in 2021?
            </h2>
            <p className="font-semibold sm:text-base text-sm text-[#232536]">
              We provide a full range of front end mechanical repairs for all
              makes and models of cars, no matter the cause. This includes, We
              provide a full range of front end mechanical.
            </p>
            <div className="font-semibold sm:text-lg text-base flex items-center gap-x-2">
              <span>Read more</span>
              <HiArrowNarrowRight size={18} />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-theme-gray sm:py-20 py-10 space-y-10">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-x-8 gap-y-16 lg:w-10/12 w-11/12 mx-auto">
          {data?.map((item, index) => (
            <div
              className="space-y-3 cursor-pointer"
              onClick={() => {
                blogDetails(
                  item?.id,
                  item?.Title,
                  item?.Image,
                  item?.Article,
                  item?.Subtitle
                );
              }}
            >
              <div>
                {/* Images are not coming correctly from API response. So i added hard code Images */}
                <img
                  src={item?.Image}
                  alt="card"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="flex gap-x-5 justify-between w-full">
                  <span className="font-semibold md:text-base text-sm text-[#939191]">
                    Posted on October 6th 2021
                  </span>
                  <span className="font-semibold md:text-base text-sm text-[#939191] flex items-center gap-x-1">
                    <AiOutlineEye size={16} />
                    563 views
                  </span>
                </div>
                <h3 className="font-semibold lg:text-3xl text-2xl">
                  {truncateText(item.Title, 30)}
                </h3>
                <p className="font-semibold sm:text-base text-sm text-[#232536]">
                  {truncateText(item.Article, 200)}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <button className="font-semibold text-lg text-white bg-black py-2 px-8 rounded border border-black hover:bg-transparent hover:text-black">
            Load More
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}
