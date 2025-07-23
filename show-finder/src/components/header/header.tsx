import { HeaderStyles } from "./headerStyles";
import React, { useState } from "react";

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
                <h1>Show Finder</h1>
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