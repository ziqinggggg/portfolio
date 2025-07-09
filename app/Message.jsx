"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const Message = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, email, message } = formData;

        if (!message && (!name || !email)) {
        setError("Please include a message, or provide both your name and email.");
        setSuccess("");
        return;
        } 
        if (!message) {
            setError("Oops! Looks like the message field is empty.");
            setSuccess("");
            return;
        } 
        if (!name && !email) {
            setError("Please share both your name and email so I can get back to you!");
            setSuccess("");     
            return;
        }

        try {
            const res = await fetch("/api/message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
            });

            const result = await res.json();

            if (result.success) {

                console.log("Message saved:", result);
                setFormData({ name: "", email: "", message: "" });
                setSuccess("Message received, I appreciate your time!");
                setError(""); // clear error if any

            } else {
                console.error("Failed to save message:", result.message);
                setError("Something went wrong. Try again.");
                setSuccess("");
            }
        } catch (err) {
            console.error("Error:", err);
            setError("Failed to send message.");
            setSuccess("");
        }
        console.log("Form submitted:", formData);
    };

    return (
        <div className="container justify-center mx-auto py-12 md:py-0 px-4">
        <div className="flex flex-col gap-[30px]">
            <div className=" gap-4 flex flex-col">
            <h3 className="h2">Write Me Something</h3>
            <p className="text-primary/80">
                I'd love to hear from you. Drop me a message below!
            </p>
            </div>
            <form onSubmit={handleSubmit} className="message-form px-10 gap-8 flex flex-col">
                {error && <p className="text-red-500 text-sm">{error}</p>}
                {success && <p className="text-green-500 text-sm">{success}</p>}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-group flex flex-col gap-2">
                        <label htmlFor="name">Name</label>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>
                    <div className="form-group flex flex-col gap-2">
                        <label htmlFor="email">Email</label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>
                </div>
                <div className="form-group flex flex-col gap-2">
                    <label htmlFor="message">Message</label>
                    <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    ></textarea>
                </div>
                <div className="justify-end flex">
                    <Button
                    variant="outline"
                    size="lg"
                    className="uppercase flex items-center duration-10 hover:-translate-y-1 w-[250px]"
                    type="submit"
                    >
                    Send Message
                    </Button>
                </div>
            </form>
        </div>
        </div>
    );
};

export default Message;
