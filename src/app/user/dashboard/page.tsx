"use client"
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Dashboard() {
  return (
    <section className="bg-white">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img
          className="w-100 rounded-2xl  shadow-gray-400"
          src="https://cdn-icons-png.flaticon.com/512/6193/6193149.png"
          alt="dashboard image"
        />
        <div className="mt-4 md:mt-0">
          <div className="mb-5">
            <h2 className="mb-1 text-4xl tracking-tight font-extrabold text-gray-900 ">
              Report Drug Abuse Now!
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg ">
              Join our community in making NIT Hamirpur a safer place. Report
              incidents of drug abuse happening within our campus anonymously or
              with your login credentials. Your contribution helps us create a
              healthier and more secure environment for everyone at NIT
              Hamirpur. Together, we can make a difference.
            </p>
            <a
              href="/user/form"
              className="text-white bg-red-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 "
            >
              Get started - File a report
            </a>
          </div>
          <div className="mt-10">
            <h2 className="mb-1 text-4xl tracking-tight font-extrabold text-gray-900 ">
              Have some questions? Ask our AI Powered Chatbot
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg ">
                Ask our AI powered Chatbot about Drug abuse, prevention and 
                treatment.
            </p>
            <a
              href="/user/chatbot"
              className="text-white bg-blue-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 "
            >
              Start Chatting
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
