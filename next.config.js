module.exports = {
    images: {
        domains: ["www.linkedin.com", "twitter.com"],
    },
    experimental: {
        // Enables the styled-components SWC transform
        styledComponents: true
      },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.glb$/,
            use: [
                {
                    loader: "file-loader",
                },
            ],
        });

        return config;
    },
};
