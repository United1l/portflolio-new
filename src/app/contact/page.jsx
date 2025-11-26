"use client";

import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import MediaLinks from "@/components/MediaLinks";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (!res.ok) throw new Error("Failed");

            setStatus("Sent 🎉 I'll get back to you soon.");
            setForm({ name: "", email: "", message: "" });
        } catch {
            setStatus("Failed to send ❗ Please try again.");
        }
    };

    return (
        <main className="min-h-screen w-screen bg-[#14213d] px-[5%] flex flex-wrap items-center justify-between py-20 text-white">
            <div className="w-full h-auto md:w-1/2">
                <form
                    onSubmit={handleSubmit}
                    className="w-full h-[70vh] max-w-lg flex flex-col items-center justify-between p-6"
                >
                    <h1 className="text-[32px] lg:text-[56px] font-[700]">
                        Let's Talk
                    </h1>

                    <h2 className="text-[16px] lg:text-[24px] font-[400] tracking-tight text-center text-[#457b9d]">
                        To request my services or meet up for a chat, please fill out 
                        the form below or contact me directly via my socials and I'll
                        get back to you as soon as possible.
                    </h2>

                    <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="border border-[#00abf0] p-2 rounded w-full"
                        required
                    />

                    <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        className="border border-[#00abf0] p-2 rounded w-full"
                        required
                    />

                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="How can I help?"
                        className="border border-[#00abf0] p-2 rounded w-full h-28"
                        required
                    />

                    <button
                        type="submit"
                        className="w-full border-2 border-[#00abf0] text-[19px]
                    font-[600] border-solid rounded-lg inline-flex justify-center items-center
                    text-[#0e273c] hover:before:w-full hover:text-[#457b9d] bg-[#00abf0] overflow-hidden
                    before:content-[''] before:absolute before:w-0 before:h-full before:top-0 before:left-0 
                    before:z-[-1] relative z-1 before:bg-[#14213d] before:transition-all before:duration-300 cursor-pointer"
                    >
                        Send Message
                    </button>

                    {status && (
                        <p className="text-center text-sm text-gray-600">{status}</p>
                    )}
                </form>
            </div>
            <div className="w-full md:w-1/2 space-y-6 mt-10 md:mt-0">
                <div className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] relative mt-0 md:mt-20 mr-auto ml-auto">
                    <Image
                        src="/contact/mail-image.png"
                        alt="Contact Illustration"
                        fill
                        className="object-contain rounded-xl"
                     />
                </div>
                <div className="flex flex-col items-center space-y-4 text-center text-[16px] lg:text-[22px] 
                    font-[500] text-center text-[#457b9d] mr-auto ml-auto">
                    <span className="flex items-center">
                        <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                        <h2>
                            E01 Residential, Kumasi Ghana
                        </h2>
                    </span>
                    <span className="flex items-center">
                        <FontAwesomeIcon icon={faPhone} className="mr-2" />
                        <h2>+233 247 512 440</h2>
                    </span>
                    <span className="flex items-center">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                        <h2>michaelasare719@gmail.com</h2>
                    </span>
                </div>
                <MediaLinks />
            </div>
        </main>
    );
}