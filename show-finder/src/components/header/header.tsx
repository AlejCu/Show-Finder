import { HeaderStyles } from "./headerStyles";
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Header component for searching shows
function Header({ onSearch }: { onSearch: (query: string) => void }) {
    const [input, setInput] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim() !== "") {
            onSearch(input);
        }
    };

    return (
        <>
            <HeaderStyles>
                <Link to="/" className="home_link" data-testid="home-link"
                onClick={() => {
                    setInput("");
                    onSearch("");
                }}>
                    <h1>Show Finder</h1>
                </Link>
                <section id="search_section">
                    <form onSubmit={handleSubmit}>
                        <input 
                        type="text" 
                        name="search" 
                        id="search" 
                        placeholder="Find your fav show..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        />
                        <button type="submit">Search</button>
                    </form>
                </section>
            </HeaderStyles>
        </>
    );
}

export { Header };