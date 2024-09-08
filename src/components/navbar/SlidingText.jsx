import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axiosInstance from "../../axios";
import baseUrl from "../../baseUrl";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const SlidingText = ({ texts }) => {
    const [isHovered, setIsHovered] = useState(false);
    const { t, i18n } = useTranslation();
    const [cats, setCats] = useState(null);

    const getCats = async () => {
        try {
            const response = await axiosInstance.get(`${baseUrl}api/home`);
            console.log('news response', response.data.posts[1]);
            setCats(response?.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    useEffect(() => {
        getCats();
    }, [i18n.language]);

    // If the data is available, duplicate the posts array to create a seamless loop
    const combinedPosts = cats?.posts ? [...cats.posts.slice(0, 4), ...cats.posts.slice(0, 4)] : [];

    return (
        <div
            style={{ overflow: "hidden", width: "100%" }}
            className="flex items-center justify-center bg-[#f0f0f0] uppercase text-[12px] p-2 text-black"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                initial={{ x: 0 }}
                animate={{ x: "-25%" }}  // Animate halfway (since we duplicated the list)
                transition={{
                    duration: 45,          // Total time for one full scroll
                    repeat: Infinity,      // Repeat infinitely
                    ease: "linear",         // Smooth motion
                }}
                style={{
                    display: "flex",
                    gap: "20px",
                    whiteSpace: "nowrap",  // Keep text in a single line
                }}
            >
                {cats?.posts?.slice(0, 4)?.map((text, index) => (
                    <NavLink to={`/topic/${text?.id}`} className={`flex items-center justify-center gap-2`} key={index}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <rect x="5.22791" width="6.70713" height="6.70713" transform="rotate(45 5.22791 0)" fill="#000000" />
                        </svg>
                        {text.title}
                    </NavLink>
                ))}
            </motion.div>
        </div>
    );
};

export default SlidingText;
