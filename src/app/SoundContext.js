"use client";
import React from "react";

export const SoundContext = React.createContext({
	soundEnabled: false,
});

function SoundProvider({ children }) {
	const [soundEnabled, setSoundEnabled] = React.useState(false);

	const toggleSound = () => {
		setSoundEnabled(!soundEnabled);
	};

	return (
		<SoundContext.Provider value={{ soundEnabled, toggleSound }}>
			{children}
		</SoundContext.Provider>
	);
}

export default SoundProvider;
