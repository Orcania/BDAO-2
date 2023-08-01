module.exports = {
    images: {
        domains: ["www.linkedin.com", "twitter.com"],
    },

    async redirects() {
        return [
            {
                source: "/",
                destination: "/home",
                permanent: false,
            },
        ];
    },
    // webpack: (config) => {
    //     config.module.rules.push({
    //         test: /\.glb$/,
    //         use: [
    //             {
    //                 loader: "file-loader",
    //             },
    //         ],
    //     });

    //     return config;
    // },
};
