import { useState } from "react";
import "./square.css";

export default function SquareQuote() {
    const funnyQuotes = [
        ["“You never finish a program, you just stop working on it.”", "Anonymous"],
        ["“If the code doesn’t bother you, don’t bother it.”", "Anonymous"],
        ["“The internet? We are not interested in it.”", "Bill Gates"]
    ];

    const insightfulQuotes = [
        ["“Fast, good, cheap, pick any two.”", "Anonymous"],
        ["“Simplicity is the soul of efficiency”", "Anonymous"],
        ["“First, solve the problem. Then, write the code.”", "Anonymous"]
    ];

    const motivationalQuotes = [
        ["“In the world of software, the best way to predict the future is to invent it.”", "Anonymous"],
        ["“Write it. Run it. Fix it. It’s not just code; it’s a lesson in persistence.”", "Anonymous"],
        ["“Don’t wait for the perfect moment to start coding. Start with the moment and make it perfect.", "Anonymous"]
    ];

    const [currentCategory, setCurrentCategory] = useState(funnyQuotes);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState("funny");

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % currentCategory.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex - 1 + currentCategory.length) % currentCategory.length
        );
    };

    const handleCategoryChange = (category, categoryName) => {
        setCurrentCategory(category);
        setCurrentIndex(0);
        setSelectedCategory(categoryName); // Set the selected category name
    };

    return (
        <div className="container">
            {/* Category Buttons */}
            <div className="category-buttons">
                <button
                    onClick={() => handleCategoryChange(funnyQuotes, "funny")}
                    className={selectedCategory === "funny" ? "selected" : ""}
                >
                    Funny Quotes
                </button>
                <button
                    onClick={() => handleCategoryChange(insightfulQuotes, "insightful")}
                    className={selectedCategory === "insightful" ? "selected" : ""}
                >
                    Insightful Quotes
                </button>
                <button
                    onClick={() => handleCategoryChange(motivationalQuotes, "motivational")}
                    className={selectedCategory === "motivational" ? "selected" : ""}
                >
                    Motivational Quotes
                </button>
            </div>

            <div className="square">
                <button className="arrow left-arrow" onClick={handlePrev}>
                    &#9664;
                </button>

                <div className="square-quote">
                    <p>
                        {currentCategory[currentIndex][0]}
                        <br />
                        - {currentCategory[currentIndex][1]}
                    </p>
                </div>

                <button className="arrow right-arrow" onClick={handleNext}>
                    &#9654;
                </button>
            </div>
        </div>
    );
}
