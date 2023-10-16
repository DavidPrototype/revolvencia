const path = require("path");
import htmlPurge from "vite-plugin-purgecss";

export default {
    root: path.resolve(__dirname, "src"),
    base: "",
    publicDir: path.resolve(__dirname, "public"),
    build: {
        /* assetsDir: "img", */
        outDir: path.resolve(__dirname, "dist"),
        rollupOptions: {
            input: {
                index: path.resolve(__dirname, "src/index.html"),
                // miTarjeta: path.resolve(__dirname, "src/mi-tarjeta.html"),
                // miApp: path.resolve(__dirname, "src/mi-app.html"),

                // preguntasFrecuentes: path.resolve(
                //     __dirname,
                //     "src/preguntas-frecuentes.html"
                // ),
                // promoAndrea: path.resolve(
                //     __dirname,
                //     "src/promocion-andrea.html"
                // ),
                // promoBenedettis: path.resolve(
                //     __dirname,
                //     "src/promocion-benedettis.html"
                // ),
                // promoBurguerKing: path.resolve(
                //     __dirname,
                //     "src/promocion-burguer-king.html"
                // ),
                // promoVitau: path.resolve(__dirname, "src/promocion-vitau.html"),
            },
            output: {
                chunkFileNames: "js/[name]-[hash].js",
                entryFileNames: "js/[name]-[hash].js",

                assetFileNames: ({ name }) => {
                    if (/\.(gif|jpe?g|png|svg)$/.test(name ?? "")) {
                        return "img/[name]-[hash][extname]";
                    }

                    if (/\.css$/.test(name ?? "")) {
                        return "css/[name]-[hash][extname]";
                    }

                    // default value
                    // ref: https://rollupjs.org/guide/en/#outputassetfilenames
                    return "assets/[name]-[hash][extname]";
                },
            },
        },
    },
    resolve: {
        alias: {
            "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
        },
    },
    server: {
        port: 8080,
        hot: true,
    },
    plugins: [htmlPurge({})],
};
