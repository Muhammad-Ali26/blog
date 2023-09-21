import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

export default function BlogSingle() {
  const blogData = useLocation();
  console.log(
    "🚀 ~ file: BlogSingle.jsx:9 ~ BlogSingle ~ blogData:",
    blogData?.state
  );
  return (
    <>
      <Header />
      <div className="py-10 lg:py-20">
        <div className="w-3/4 lg:w-2/3 m-auto space-y-5">
          <div className="flex sm:flex-row flex-col sm:items-center gap-x-5">
            <span className="font-semibold md:text-base text-sm text-[#939191]">
              Posted on October 6th 2021
            </span>
            <span className="font-semibold md:text-base text-sm text-[#939191] flex items-center gap-x-1">
              <AiOutlineEye size={16} />
              563 views
            </span>
          </div>

          <div className="space-y-5">
            <h2 className="text-3xl lg:text-5xl text-black font-bold">
              Should I Buy a New Car or Lease a New Car in 2021?
            </h2>
            <p className="text-base text-[#232536] font-semibold">
              We provide a full range of front end mechanical repairs for all
              makes and models of cars, no matter the cause. This includes, We
              provide a full range of front end mechanical
            </p>
          </div>
        </div>

        <div className="w-[90%] lg:w-3/4 m-auto py-10">
          <img src="/images/blog-single-one.png" alt="car" />
        </div>

        <div className="w-3/4 lg:w-2/3 m-auto space-y-5">
          <h4 className="text-2xl lg:text-[40px] text-black font-bold">
            This is a blog post headline
          </h4>
          <p className="text-base text-[#232536] font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet dui
            auctor dictum eget a elit. Pellentesque varius diam risus, ut
            condimentum lorem volutpat vel. Nam vel orci pharetra eros pulvinar
            cursus nec quis tellus. Quisque feugiat tortor lectus, pretium
            interdum justo tincidunt a. Donec at congue lectus. Nulla facilisi.
            Phasellus consectetur sapien accumsan lectus tincidunt placerat.
            Etiam ornare nibh vel dui egestas, eu posuere metus convallis.
          </p>
          <p className="text-base text-[#232536] font-semibold">
            Ut non urna a odio condimentum dictum. Proin egestas erat a orci
            ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt
            justo. Vestibulum congue dictum libero finibus vehicula. Aliquam
            nisi velit, ultricies eget enim vel, venenatis mollis ante. Maecenas
            sodales tristique quam. Suspendisse fringilla massa vel dolor ornare
            rhoncus. Nullam ut orci mattis leo varius laoreet sed mollis dui.
            Aenean placerat nec enim ut finibus. Maecenas suscipit nibh eu neque
            egestas, non condimentum mi bibendum. Sed est eros, molestie
            consectetur auctor non, lobortis quis tortor. Nam cursus imperdiet
            massa volutpat hendrerit. Sed suscipit ligula iaculis lorem sagittis
            tincidunt. Etiam pellentesque metus vel enim iaculis aliquam. Mauris
            at nisi sed elit gravida malesuada.
          </p>

          <img src="/images/blog-single-two.png" alt="road" />
        </div>

        <div className="w-3/4 lg:w-2/3 m-auto space-y-5 py-10">
          <h4 className="text-2xl lg:text-[40px] text-black font-bold">
            This is a small blog post headline
          </h4>
          <p className="text-base text-[#232536] font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet dui
            auctor dictum eget a elit. Pellentesque varius diam risus, ut
            condimentum lorem volutpat vel. Nam vel orci pharetra eros pulvinar
            cursus nec quis tellus. Quisque feugiat tortor lectus, pretium
            interdum justo tincidunt a. Donec at congue lectus. Nulla facilisi.
            Phasellus consectetur sapien accumsan lectus tincidunt placerat.
            Etiam ornare nibh vel dui egestas, eu posuere metus convallis.
          </p>
          
          <div className="flex items-center gap-6">
            <div className="w-1 h-20 bg-[#1E1B1B]"></div>
            <span className="text-base text-[#232536] font-semibold">
              Ut non urna a odio condimentum dictum. Proin egestas erat a orci
              ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt
              justo. Vestibulum congue dictum libero finibus vehicula. Aliquam
              nisi velit, ultricies eget enim vel, venenatis mollis ante.
            </span>
          </div>
          <p className="text-base text-[#232536] font-semibold">
            Ut non urna a odio condimentum dictum. Proin egestas erat a orci
            ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt
            justo. Vestibulum congue dictum libero finibus vehicula. Aliquam
            nisi velit, ultricies eget enim vel, venenatis mollis ante. Maecenas
            sodales tristique quam. Suspendisse fringilla massa vel dolor ornare
            rhoncus. Nullam ut orci mattis leo varius laoreet sed mollis dui.
            Aenean placerat nec enim ut finibus. Maecenas suscipit nibh eu neque
            egestas, non condimentum mi bibendum. Sed est eros, molestie
            consectetur auctor non, lobortis quis tortor. Nam cursus imperdiet
            massa volutpat hendrerit. Sed suscipit ligula iaculis lorem sagittis
            tincidunt. Etiam pellentesque metus vel enim iaculis aliquam. Mauris
            at nisi sed elit gravida malesuada.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
