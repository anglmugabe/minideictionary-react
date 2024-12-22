import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
	let [keyword, setKeyword] = useState(" ");

	function search(event) {
		event.preventDefault();
		alert(`Searching for the definition of ${keyword}`);
	}

	function handleKeywordChange(event) {
		setKeyword(event.target.value);
	}

	return (
		<div className="Dictionary">
			<form onSubmit={search}>
				<input
					type="search"
					autoFocus={true}
					placeholder="Lets find your word..."
					value={keyword}
					onChange={handleKeywordChange}
				/>
				<button type="submit"> Search</button>
			</form>
		</div>
	);
}
