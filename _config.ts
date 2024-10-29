import lume from "lume/mod.ts";
// import jsx from "lume/plugins/jsx_preact.ts";
// import mdx from "lume/plugins/mdx.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import typography from "npm:@tailwindcss/typography";

const site = lume(
  {
    src: "./src",
  }
);

// site.use(jsx());
// site.use(mdx());
site.use(tailwindcss({ // Typography enables markdown with tailwind
    options: {
        plugins: [typography],
      },
    }
));
site.use(postcss());
site.copy([".jpg", ".gif", ".png", ".svg"]); // Extends support for file types

export default site;
