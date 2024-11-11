import { defineConfig } from "vite";

export default defineConfig({
    root: "src", // If your index.html is in the 'src' directory
    build: {
        outDir: "../dist", // Output directory
        rollupOptions: {
            input: {
                main: "src/index.html", // Ensure this points to your main HTML file
            },
        },
    },
});
