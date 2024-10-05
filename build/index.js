var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toModule(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = __toModule(require("node:stream"));
var import_node = __toModule(require("@remix-run/node"));
var import_react = __toModule(require("@remix-run/react"));
var import_isbot = __toModule(require("isbot"));
var import_server = __toModule(require("react-dom/server"));
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) : handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext);
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve2, reject) => {
    let shellRendered = false;
    const { pipe, abort } = (0, import_server.renderToPipeableStream)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
      context: remixContext,
      url: request.url,
      abortDelay: ABORT_DELAY
    }), {
      onAllReady() {
        shellRendered = true;
        const body = new import_node_stream.PassThrough();
        responseHeaders.set("Content-Type", "text/html");
        resolve2(new import_node.Response(body, {
          headers: responseHeaders,
          status: responseStatusCode
        }));
        pipe(body);
      },
      onShellError(error) {
        reject(error);
      },
      onError(error) {
        responseStatusCode = 500;
        if (shellRendered) {
          console.error(error);
        }
      }
    });
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve2, reject) => {
    let shellRendered = false;
    const { pipe, abort } = (0, import_server.renderToPipeableStream)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
      context: remixContext,
      url: request.url,
      abortDelay: ABORT_DELAY
    }), {
      onShellReady() {
        shellRendered = true;
        const body = new import_node_stream.PassThrough();
        responseHeaders.set("Content-Type", "text/html");
        resolve2(new import_node.Response(body, {
          headers: responseHeaders,
          status: responseStatusCode
        }));
        pipe(body);
      },
      onShellError(error) {
        reject(error);
      },
      onError(error) {
        responseStatusCode = 500;
        if (shellRendered) {
          console.error(error);
        }
      }
    });
    setTimeout(abort, ABORT_DELAY);
  });
}

// route-module:/home/mario/rodolfosilva.github.io/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_css_bundle = __toModule(require("@remix-run/css-bundle"));
var import_react6 = __toModule(require("@remix-run/react"));

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-S4FDM4XE.css";

// app/components/Layout.tsx
var import_react4 = __toModule(require("@remix-run/react"));
var import_react5 = __toModule(require("react"));

// app/components/GithubIcon.tsx
var import_react2 = __toModule(require("react"));
function GitHubIcon() {
  return /* @__PURE__ */ import_react2.default.createElement("svg", {
    viewBox: "0 0 16 16",
    height: "1em",
    width: "1em"
  }, /* @__PURE__ */ import_react2.default.createElement("path", {
    fill: "currentColor",
    d: "M7.999,0.431c-4.285,0-7.76,3.474-7.76,7.761 c0,3.428,2.223,6.337,5.307,7.363c0.388,0.071,0.53-0.168,0.53-0.374c0-0.184-0.007-0.672-0.01-1.32 c-2.159,0.469-2.614-1.04-2.614-1.04c-0.353-0.896-0.862-1.135-0.862-1.135c-0.705-0.481,0.053-0.472,0.053-0.472 c0.779,0.055,1.189,0.8,1.189,0.8c0.692,1.186,1.816,0.843,2.258,0.645c0.071-0.502,0.271-0.843,0.493-1.037 C4.86,11.425,3.049,10.76,3.049,7.786c0-0.847,0.302-1.54,0.799-2.082C3.768,5.507,3.501,4.718,3.924,3.65 c0,0,0.652-0.209,2.134,0.796C6.677,4.273,7.34,4.187,8,4.184c0.659,0.003,1.323,0.089,1.943,0.261 c1.482-1.004,2.132-0.796,2.132-0.796c0.423,1.068,0.157,1.857,0.077,2.054c0.497,0.542,0.798,1.235,0.798,2.082 c0,2.981-1.814,3.637-3.543,3.829c0.279,0.24,0.527,0.713,0.527,1.437c0,1.037-0.01,1.874-0.01,2.129 c0,0.208,0.14,0.449,0.534,0.373c3.081-1.028,5.302-3.935,5.302-7.362C15.76,3.906,12.285,0.431,7.999,0.431z"
  }));
}

// app/components/TwitterIcon.tsx
var import_react3 = __toModule(require("react"));
function TwitterIcon() {
  return /* @__PURE__ */ import_react3.default.createElement("svg", {
    viewBox: "0 0 16 16",
    height: "1em",
    width: "1em"
  }, /* @__PURE__ */ import_react3.default.createElement("path", {
    fill: "currentColor",
    d: "M15.969,3.058c-0.586,0.26-1.217,0.436-1.878,0.515c0.675-0.405,1.194-1.045,1.438-1.809c-0.632,0.375-1.332,0.647-2.076,0.793c-0.596-0.636-1.446-1.033-2.387-1.033c-1.806,0-3.27,1.464-3.27,3.27 c0,0.256,0.029,0.506,0.085,0.745C5.163,5.404,2.753,4.102,1.14,2.124C0.859,2.607,0.698,3.168,0.698,3.767 c0,1.134,0.577,2.135,1.455,2.722C1.616,6.472,1.112,6.325,0.671,6.08c0,0.014,0,0.027,0,0.041c0,1.584,1.127,2.906,2.623,3.206 C3.02,9.402,2.731,9.442,2.433,9.442c-0.211,0-0.416-0.021-0.615-0.059c0.416,1.299,1.624,2.245,3.055,2.271 c-1.119,0.877-2.529,1.4-4.061,1.4c-0.264,0-0.524-0.015-0.78-0.046c1.447,0.928,3.166,1.469,5.013,1.469 c6.015,0,9.304-4.983,9.304-9.304c0-0.142-0.003-0.283-0.009-0.423C14.976,4.29,15.531,3.714,15.969,3.058z"
  }));
}

// app/components/Layout.tsx
function Layout(props) {
  const { children } = props;
  const currentYear = new Date().getFullYear();
  return /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "p-8"
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "mx-auto max-w-5xl bg-white p-6 rounded-md"
  }, /* @__PURE__ */ import_react5.default.createElement("header", null, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "flex justify-between items-center"
  }, /* @__PURE__ */ import_react5.default.createElement(import_react4.Link, {
    to: "/",
    rel: "home"
  }, /* @__PURE__ */ import_react5.default.createElement("h1", {
    className: "text-4xl font-semibold text-gray-800"
  }, "M\xE1rio Rodrigues"), /* @__PURE__ */ import_react5.default.createElement("h2", {
    className: "text-sm text-gray-500"
  }, "Software engineer student")), /* @__PURE__ */ import_react5.default.createElement("nav", {
    className: "print:hidden"
  }, /* @__PURE__ */ import_react5.default.createElement("ul", {
    className: "flex items-center gap-4"
  }, /* @__PURE__ */ import_react5.default.createElement("li", null, /* @__PURE__ */ import_react5.default.createElement(import_react4.Link, {
    to: "/",
    "aria-label": "Go to the home page",
    title: "Home"
  }, "Home")), /* @__PURE__ */ import_react5.default.createElement("li", null, /* @__PURE__ */ import_react5.default.createElement(import_react4.Link, {
    to: "/curriculum",
    "aria-label": "View my curriculum",
    title: "Curriculum"
  }, "Curriculum")), /* @__PURE__ */ import_react5.default.createElement("li", null, /* @__PURE__ */ import_react5.default.createElement("a", {
    href: `https://github.com/mariorodrigues10`,
    target: "_blank",
    rel: "noreferrer noopener",
    "aria-label": "Watch my Github",
    title: "Watch my GitHub"
  }, /* @__PURE__ */ import_react5.default.createElement(GitHubIcon, null))), /* @__PURE__ */ import_react5.default.createElement("li", null, /* @__PURE__ */ import_react5.default.createElement("a", {
    href: `https://x.com/mariowhilecode`,
    target: "_blank",
    rel: "noreferrer noopener",
    "aria-label": "Watch my X",
    title: "Watch my X"
  }, /* @__PURE__ */ import_react5.default.createElement(TwitterIcon, null))))))), /* @__PURE__ */ import_react5.default.createElement("main", null, children), /* @__PURE__ */ import_react5.default.createElement("footer", {
    role: "contentinfo",
    className: "text-center text-sm text-gray-500 mt-8"
  }, `\xA9 ${currentYear}`)));
}

// route-module:/home/mario/rodolfosilva.github.io/app/root.tsx
var links = () => [
  ...import_css_bundle.cssBundleHref ? [{ rel: "stylesheet", href: import_css_bundle.cssBundleHref }] : [],
  { rel: "stylesheet", href: tailwind_default }
];
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_react6.Meta, null), /* @__PURE__ */ React.createElement(import_react6.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "bg-gray-100"
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_react6.Outlet, null)), /* @__PURE__ */ React.createElement(import_react6.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react6.Scripts, null), /* @__PURE__ */ React.createElement(import_react6.LiveReload, null)));
}

// route-module:/home/mario/rodolfosilva.github.io/app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  loader: () => loader,
  meta: () => meta
});
var import_react7 = __toModule(require("@remix-run/react"));
var import_format = __toModule(require("date-fns/format"));

// app/utils/post.tsx
var import_front_matter = __toModule(require("front-matter"));

// app/utils/fs.server.ts
var import_promises = __toModule(require("fs/promises"));
var import_path = __toModule(require("path"));

// app/utils/post.tsx
var import_path2 = __toModule(require("path"));
var import_promises2 = __toModule(require("fs/promises"));

// app/utils/mdx.server.ts
var import_mdx_bundler = __toModule(require("mdx-bundler"));

// app/utils/parse-mdx.ts
async function parseMdx(source) {
  const [rehypeHighlight, remarkGfm] = await Promise.all([
    import("rehype-pretty-code").then((mod) => mod.default),
    import("remark-gfm").then((mod) => mod.default)
  ]);
  return await (0, import_mdx_bundler.bundleMDX)({
    source,
    mdxOptions(options, _frontmatter) {
      options.remarkPlugins = [...options.remarkPlugins ?? [], remarkGfm];
      options.rehypePlugins = [
        ...options.rehypePlugins ?? [],
        rehypeHighlight
      ];
      return options;
    }
  });
}

// app/utils/post.tsx
var postsPath = import_path2.default.join(`${__dirname}/../../src/_posts`);
var sanitizeSlug = (slug) => {
  return slug.replace(/^\/+|\/+$/g, "");
};
async function getPost(slug) {
  const posts = await getPosts();
  const post = posts.find((post2) => sanitizeSlug(post2.slug) === sanitizeSlug(slug));
  if (!post) {
    return;
  }
  return await parseMdx(post.content);
}
async function getPosts() {
  const postsPaths = await import_promises2.default.readdir(postsPath, {
    withFileTypes: true
  });
  return Promise.all(postsPaths.map(async (postPath) => {
    const filepath = import_path2.default.join(postsPath, postPath.name);
    const file = (await (0, import_promises.readFile)(filepath, "utf-8")).toString();
    const { attributes } = (0, import_front_matter.default)(file);
    return {
      slug: attributes.slug || postPath.name.replace(/\.mdx?/, ""),
      title: attributes.title,
      date: new Date(attributes.date),
      content: file
    };
  }).reverse());
}

// route-module:/home/mario/rodolfosilva.github.io/app/routes/_index.tsx
var meta = () => {
  return [
    { title: "M\xE1rio Rodrigues" },
    { property: "og:title", content: "M\xE1rio Rodrigues" },
    { name: "description", content: "Software engineer student who likes to explore new things." },
    { property: "og:description", content: "Software engineer student who likes to explore new things." }
  ];
};
function Index() {
  const posts = (0, import_react7.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "space-y-2 mt-6 -mx-4"
  }, posts.map((post) => /* @__PURE__ */ React.createElement(import_react7.Link, {
    to: post.slug,
    key: post.slug,
    className: "block group hover:bg-gray-50 p-2 px-4 rounded-md cursor-pointer"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-xl text-bold group-hover:text-purple-600"
  }, post.title), /* @__PURE__ */ React.createElement("time", {
    className: "text-xs text-gray-400",
    dateTime: post.date
  }, "Published at: ", (0, import_format.default)(new Date(post.date), "dd/MM/yyyy '\xE0s' hh:mm")))));
}
var loader = async () => {
  return getPosts();
};

// route-module:/home/mario/rodolfosilva.github.io/app/routes/$.tsx
var __exports = {};
__export(__exports, {
  default: () => Post,
  links: () => links2,
  loader: () => loader2,
  meta: () => meta2
});
var import_client = __toModule(require("mdx-bundler/client"));
var import_react8 = __toModule(require("react"));
var import_react9 = __toModule(require("@remix-run/react"));
var import_node2 = __toModule(require("@remix-run/node"));

// app/components/Discussion.tsx
var import_disqus_react = __toModule(require("disqus-react"));
function Discussion(props) {
  const { path: path2, title } = props;
  return /* @__PURE__ */ React.createElement(import_disqus_react.DiscussionEmbed, {
    shortname: "mariorodrigues10",
    config: {
      url: `https://mariorodrigues10.github.io/${path2}`,
      title
    }
  });
}

// route-module:/home/mario/rodolfosilva.github.io/app/routes/$.tsx
var links2 = () => [];
var meta2 = (params) => {
  const { data: { frontmatter: post } } = params;
  return [
    { title: post.title },
    { property: "og:title", content: post.title },
    { property: "keywords", content: post.tags.join(", ") },
    ...post.description ? [
      { property: "description", content: post.description },
      { property: "og:description", content: post.description }
    ] : []
  ];
};
var loader2 = async ({ params }) => {
  const slug = params["*"];
  if (!slug)
    throw new Response("Not found", { status: 404 });
  const post = await getPost(slug);
  if (post) {
    return (0, import_node2.json)(post);
  } else {
    throw new Response("Not found", { status: 404 });
  }
};
function Post() {
  const { code, frontmatter } = (0, import_react9.useLoaderData)();
  const Component = (0, import_react8.useMemo)(() => (0, import_client.getMDXComponent)(code), [code]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "prose lg:prose-base max-w-none my-8 prose-a:text-purple-600"
  }, /* @__PURE__ */ React.createElement("h1", null, frontmatter.title), /* @__PURE__ */ React.createElement(Component, null)), /* @__PURE__ */ React.createElement(Discussion, {
    title: frontmatter.title,
    path: frontmatter.slug
  }));
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: "_index",
    index: void 0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/$": {
    id: "routes/$",
    parentId: "root",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiPHN0ZGluPiIsICIuLi9ub2RlX21vZHVsZXMvQHJlbWl4LXJ1bi9kZXYvY29tcGlsZXIvc2hpbXMvcmVhY3QudHMiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9ob21lL21hcmlvL3JvZG9sZm9zaWx2YS5naXRodWIuaW8vYXBwL3Jvb3QudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0xheW91dC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvR2l0aHViSWNvbi50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvVHdpdHRlckljb24udHN4IiwgInJvdXRlLW1vZHVsZTovaG9tZS9tYXJpby9yb2RvbGZvc2lsdmEuZ2l0aHViLmlvL2FwcC9yb3V0ZXMvX2luZGV4LnRzeCIsICIuLi9hcHAvdXRpbHMvcG9zdC50c3giLCAiLi4vYXBwL3V0aWxzL2ZzLnNlcnZlci50cyIsICIuLi9hcHAvdXRpbHMvbWR4LnNlcnZlci50cyIsICIuLi9hcHAvdXRpbHMvcGFyc2UtbWR4LnRzIiwgInJvdXRlLW1vZHVsZTovaG9tZS9tYXJpby9yb2RvbGZvc2lsdmEuZ2l0aHViLmlvL2FwcC9yb3V0ZXMvJC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvRGlzY3Vzc2lvbi50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9ob21lL21hcmlvL3JvZG9sZm9zaWx2YS5naXRodWIuaW8vYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL2hvbWUvbWFyaW8vcm9kb2xmb3NpbHZhLmdpdGh1Yi5pby9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL2hvbWUvbWFyaW8vcm9kb2xmb3NpbHZhLmdpdGh1Yi5pby9hcHAvcm91dGVzL19pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL2hvbWUvbWFyaW8vcm9kb2xmb3NpbHZhLmdpdGh1Yi5pby9hcHAvcm91dGVzLyQudHN4XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCIuL2Fzc2V0cy5qc29uXCI7XG5leHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbmV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gIFwicm9vdFwiOiB7XG4gICAgaWQ6IFwicm9vdFwiLFxuICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgcGF0aDogXCJcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMFxuICB9LFxuICBcInJvdXRlcy9faW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9faW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJfaW5kZXhcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMVxuICB9LFxuICBcInJvdXRlcy8kXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvJFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcIipcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMlxuICB9XG59OyIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBCeSBkZWZhdWx0LCBSZW1peCB3aWxsIGhhbmRsZSBnZW5lcmF0aW5nIHRoZSBIVFRQIFJlc3BvbnNlIGZvciB5b3UuXG4gKiBZb3UgYXJlIGZyZWUgdG8gZGVsZXRlIHRoaXMgZmlsZSBpZiB5b3UnZCBsaWtlIHRvLCBidXQgaWYgeW91IGV2ZXIgd2FudCBpdCByZXZlYWxlZCBhZ2FpbiwgeW91IGNhbiBydW4gYG5weCByZW1peCByZXZlYWxgIFx1MjcyOFxuICogRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZSBodHRwczovL3JlbWl4LnJ1bi9maWxlLWNvbnZlbnRpb25zL2VudHJ5LnNlcnZlclxuICovXG5cbmltcG9ydCB7IFBhc3NUaHJvdWdoIH0gZnJvbSBcIm5vZGU6c3RyZWFtXCI7XG5cbmltcG9ydCB0eXBlIHsgQXBwTG9hZENvbnRleHQsIEVudHJ5Q29udGV4dCB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcbmltcG9ydCB7IFJlc3BvbnNlIH0gZnJvbSBcIkByZW1peC1ydW4vbm9kZVwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiO1xuaW1wb3J0IGlzYm90IGZyb20gXCJpc2JvdFwiO1xuaW1wb3J0IHsgcmVuZGVyVG9QaXBlYWJsZVN0cmVhbSB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5cbmNvbnN0IEFCT1JUX0RFTEFZID0gNV8wMDA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0LFxuICBsb2FkQ29udGV4dDogQXBwTG9hZENvbnRleHRcbikge1xuICByZXR1cm4gaXNib3QocmVxdWVzdC5oZWFkZXJzLmdldChcInVzZXItYWdlbnRcIikpXG4gICAgPyBoYW5kbGVCb3RSZXF1ZXN0KFxuICAgICAgICByZXF1ZXN0LFxuICAgICAgICByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgICAgIHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgcmVtaXhDb250ZXh0XG4gICAgICApXG4gICAgOiBoYW5kbGVCcm93c2VyUmVxdWVzdChcbiAgICAgICAgcmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgICAgICByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIHJlbWl4Q29udGV4dFxuICAgICAgKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlQm90UmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGxldCBzaGVsbFJlbmRlcmVkID0gZmFsc2U7XG4gICAgY29uc3QgeyBwaXBlLCBhYm9ydCB9ID0gcmVuZGVyVG9QaXBlYWJsZVN0cmVhbShcbiAgICAgIDxSZW1peFNlcnZlclxuICAgICAgICBjb250ZXh0PXtyZW1peENvbnRleHR9XG4gICAgICAgIHVybD17cmVxdWVzdC51cmx9XG4gICAgICAgIGFib3J0RGVsYXk9e0FCT1JUX0RFTEFZfVxuICAgICAgLz4sXG4gICAgICB7XG4gICAgICAgIG9uQWxsUmVhZHkoKSB7XG4gICAgICAgICAgc2hlbGxSZW5kZXJlZCA9IHRydWU7XG4gICAgICAgICAgY29uc3QgYm9keSA9IG5ldyBQYXNzVGhyb3VnaCgpO1xuXG4gICAgICAgICAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICAgICAgICAgIHJlc29sdmUoXG4gICAgICAgICAgICBuZXcgUmVzcG9uc2UoYm9keSwge1xuICAgICAgICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgICAgICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgcGlwZShib2R5KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25TaGVsbEVycm9yKGVycm9yOiB1bmtub3duKSB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FcnJvcihlcnJvcjogdW5rbm93bikge1xuICAgICAgICAgIHJlc3BvbnNlU3RhdHVzQ29kZSA9IDUwMDtcbiAgICAgICAgICAvLyBMb2cgc3RyZWFtaW5nIHJlbmRlcmluZyBlcnJvcnMgZnJvbSBpbnNpZGUgdGhlIHNoZWxsLiAgRG9uJ3QgbG9nXG4gICAgICAgICAgLy8gZXJyb3JzIGVuY291bnRlcmVkIGR1cmluZyBpbml0aWFsIHNoZWxsIHJlbmRlcmluZyBzaW5jZSB0aGV5J2xsXG4gICAgICAgICAgLy8gcmVqZWN0IGFuZCBnZXQgbG9nZ2VkIGluIGhhbmRsZURvY3VtZW50UmVxdWVzdC5cbiAgICAgICAgICBpZiAoc2hlbGxSZW5kZXJlZCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfVxuICAgICk7XG5cbiAgICBzZXRUaW1lb3V0KGFib3J0LCBBQk9SVF9ERUxBWSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVCcm93c2VyUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGxldCBzaGVsbFJlbmRlcmVkID0gZmFsc2U7XG4gICAgY29uc3QgeyBwaXBlLCBhYm9ydCB9ID0gcmVuZGVyVG9QaXBlYWJsZVN0cmVhbShcbiAgICAgIDxSZW1peFNlcnZlclxuICAgICAgICBjb250ZXh0PXtyZW1peENvbnRleHR9XG4gICAgICAgIHVybD17cmVxdWVzdC51cmx9XG4gICAgICAgIGFib3J0RGVsYXk9e0FCT1JUX0RFTEFZfVxuICAgICAgLz4sXG4gICAgICB7XG4gICAgICAgIG9uU2hlbGxSZWFkeSgpIHtcbiAgICAgICAgICBzaGVsbFJlbmRlcmVkID0gdHJ1ZTtcbiAgICAgICAgICBjb25zdCBib2R5ID0gbmV3IFBhc3NUaHJvdWdoKCk7XG5cbiAgICAgICAgICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gICAgICAgICAgcmVzb2x2ZShcbiAgICAgICAgICAgIG5ldyBSZXNwb25zZShib2R5LCB7XG4gICAgICAgICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgICAgICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBwaXBlKGJvZHkpO1xuICAgICAgICB9LFxuICAgICAgICBvblNoZWxsRXJyb3IoZXJyb3I6IHVua25vd24pIHtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICB9LFxuICAgICAgICBvbkVycm9yKGVycm9yOiB1bmtub3duKSB7XG4gICAgICAgICAgcmVzcG9uc2VTdGF0dXNDb2RlID0gNTAwO1xuICAgICAgICAgIC8vIExvZyBzdHJlYW1pbmcgcmVuZGVyaW5nIGVycm9ycyBmcm9tIGluc2lkZSB0aGUgc2hlbGwuICBEb24ndCBsb2dcbiAgICAgICAgICAvLyBlcnJvcnMgZW5jb3VudGVyZWQgZHVyaW5nIGluaXRpYWwgc2hlbGwgcmVuZGVyaW5nIHNpbmNlIHRoZXknbGxcbiAgICAgICAgICAvLyByZWplY3QgYW5kIGdldCBsb2dnZWQgaW4gaGFuZGxlRG9jdW1lbnRSZXF1ZXN0LlxuICAgICAgICAgIGlmIChzaGVsbFJlbmRlcmVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgKTtcblxuICAgIHNldFRpbWVvdXQoYWJvcnQsIEFCT1JUX0RFTEFZKTtcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsgY3NzQnVuZGxlSHJlZiB9IGZyb20gJ0ByZW1peC1ydW4vY3NzLWJ1bmRsZSc7XG5pbXBvcnQgdHlwZSB7IExpbmtzRnVuY3Rpb24gfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG59IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuaW1wb3J0IHN0eWxlc2hlZXQgZnJvbSAnfi90YWlsd2luZC5jc3MnO1xuaW1wb3J0IExheW91dCBmcm9tICcuL2NvbXBvbmVudHMvTGF5b3V0JztcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4gW1xuICAuLi4oY3NzQnVuZGxlSHJlZiA/IFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBjc3NCdW5kbGVIcmVmIH1dIDogW10pLFxuICB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXNoZWV0IH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5IGNsYXNzTmFtZT1cImJnLWdyYXktMTAwXCI+XG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8L0xheW91dD5cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgIDxMaXZlUmVsb2FkIC8+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEdpdEh1Ykljb24gZnJvbSBcIi4vR2l0aHViSWNvblwiO1xuaW1wb3J0IFR3aXR0ZXJJY29uIGZyb20gXCIuL1R3aXR0ZXJJY29uXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHByb3BzO1xuICBjb25zdCBjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicC04XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctNXhsIGJnLXdoaXRlIHAtNiByb3VuZGVkLW1kXCI+XG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiIHJlbD1cImhvbWVcIj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTgwMFwiPlxuICAgICAgICAgICAgICAgIE1cdTAwRTFyaW8gUm9kcmlndWVzXG4gICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5Tb2Z0d2FyZSBlbmdpbmVlciBzdHVkZW50PC9oMj5cbiAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJwcmludDpoaWRkZW5cIj5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00XCI+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgdG89XCIvXCJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkdvIHRvIHRoZSBob21lIHBhZ2VcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkhvbWVcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICB0bz1cIi9jdXJyaWN1bHVtXCJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlZpZXcgbXkgY3VycmljdWx1bVwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQ3VycmljdWx1bVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIEN1cnJpY3VsdW1cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2BodHRwczovL2dpdGh1Yi5jb20vbWFyaW9yb2RyaWd1ZXMxMGB9XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXIgbm9vcGVuZXJcIlxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiV2F0Y2ggbXkgR2l0aHViXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJXYXRjaCBteSBHaXRIdWJcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8R2l0SHViSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8veC5jb20vbWFyaW93aGlsZWNvZGluZ2B9XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXIgbm9vcGVuZXJcIlxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiV2F0Y2ggbXkgWFwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiV2F0Y2ggbXkgWFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxUd2l0dGVySWNvbiAvPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxtYWluPntjaGlsZHJlbn08L21haW4+XG4gICAgICAgIDxmb290ZXJcbiAgICAgICAgICByb2xlPVwiY29udGVudGluZm9cIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTUwMCBtdC04XCJcbiAgICAgICAgPntgXHUwMEE5ICR7Y3VycmVudFllYXJ9YH08L2Zvb3Rlcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdpdEh1Ykljb24oKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgaGVpZ2h0PVwiMWVtXCIgd2lkdGg9XCIxZW1cIj5cbiAgICAgIDxwYXRoXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICBkPVwiTTcuOTk5LDAuNDMxYy00LjI4NSwwLTcuNzYsMy40NzQtNy43Niw3Ljc2MSBjMCwzLjQyOCwyLjIyMyw2LjMzNyw1LjMwNyw3LjM2M2MwLjM4OCwwLjA3MSwwLjUzLTAuMTY4LDAuNTMtMC4zNzRjMC0wLjE4NC0wLjAwNy0wLjY3Mi0wLjAxLTEuMzIgYy0yLjE1OSwwLjQ2OS0yLjYxNC0xLjA0LTIuNjE0LTEuMDRjLTAuMzUzLTAuODk2LTAuODYyLTEuMTM1LTAuODYyLTEuMTM1Yy0wLjcwNS0wLjQ4MSwwLjA1My0wLjQ3MiwwLjA1My0wLjQ3MiBjMC43NzksMC4wNTUsMS4xODksMC44LDEuMTg5LDAuOGMwLjY5MiwxLjE4NiwxLjgxNiwwLjg0MywyLjI1OCwwLjY0NWMwLjA3MS0wLjUwMiwwLjI3MS0wLjg0MywwLjQ5My0xLjAzNyBDNC44NiwxMS40MjUsMy4wNDksMTAuNzYsMy4wNDksNy43ODZjMC0wLjg0NywwLjMwMi0xLjU0LDAuNzk5LTIuMDgyQzMuNzY4LDUuNTA3LDMuNTAxLDQuNzE4LDMuOTI0LDMuNjUgYzAsMCwwLjY1Mi0wLjIwOSwyLjEzNCwwLjc5NkM2LjY3Nyw0LjI3Myw3LjM0LDQuMTg3LDgsNC4xODRjMC42NTksMC4wMDMsMS4zMjMsMC4wODksMS45NDMsMC4yNjEgYzEuNDgyLTEuMDA0LDIuMTMyLTAuNzk2LDIuMTMyLTAuNzk2YzAuNDIzLDEuMDY4LDAuMTU3LDEuODU3LDAuMDc3LDIuMDU0YzAuNDk3LDAuNTQyLDAuNzk4LDEuMjM1LDAuNzk4LDIuMDgyIGMwLDIuOTgxLTEuODE0LDMuNjM3LTMuNTQzLDMuODI5YzAuMjc5LDAuMjQsMC41MjcsMC43MTMsMC41MjcsMS40MzdjMCwxLjAzNy0wLjAxLDEuODc0LTAuMDEsMi4xMjkgYzAsMC4yMDgsMC4xNCwwLjQ0OSwwLjUzNCwwLjM3M2MzLjA4MS0xLjAyOCw1LjMwMi0zLjkzNSw1LjMwMi03LjM2MkMxNS43NiwzLjkwNiwxMi4yODUsMC40MzEsNy45OTksMC40MzF6XCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVHdpdHRlckljb24oKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgaGVpZ2h0PVwiMWVtXCIgd2lkdGg9XCIxZW1cIj5cbiAgICAgIDxwYXRoXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICBkPVwiTTE1Ljk2OSwzLjA1OGMtMC41ODYsMC4yNi0xLjIxNywwLjQzNi0xLjg3OCwwLjUxNWMwLjY3NS0wLjQwNSwxLjE5NC0xLjA0NSwxLjQzOC0xLjgwOWMtMC42MzIsMC4zNzUtMS4zMzIsMC42NDctMi4wNzYsMC43OTNjLTAuNTk2LTAuNjM2LTEuNDQ2LTEuMDMzLTIuMzg3LTEuMDMzYy0xLjgwNiwwLTMuMjcsMS40NjQtMy4yNywzLjI3IGMwLDAuMjU2LDAuMDI5LDAuNTA2LDAuMDg1LDAuNzQ1QzUuMTYzLDUuNDA0LDIuNzUzLDQuMTAyLDEuMTQsMi4xMjRDMC44NTksMi42MDcsMC42OTgsMy4xNjgsMC42OTgsMy43NjcgYzAsMS4xMzQsMC41NzcsMi4xMzUsMS40NTUsMi43MjJDMS42MTYsNi40NzIsMS4xMTIsNi4zMjUsMC42NzEsNi4wOGMwLDAuMDE0LDAsMC4wMjcsMCwwLjA0MWMwLDEuNTg0LDEuMTI3LDIuOTA2LDIuNjIzLDMuMjA2IEMzLjAyLDkuNDAyLDIuNzMxLDkuNDQyLDIuNDMzLDkuNDQyYy0wLjIxMSwwLTAuNDE2LTAuMDIxLTAuNjE1LTAuMDU5YzAuNDE2LDEuMjk5LDEuNjI0LDIuMjQ1LDMuMDU1LDIuMjcxIGMtMS4xMTksMC44NzctMi41MjksMS40LTQuMDYxLDEuNGMtMC4yNjQsMC0wLjUyNC0wLjAxNS0wLjc4LTAuMDQ2YzEuNDQ3LDAuOTI4LDMuMTY2LDEuNDY5LDUuMDEzLDEuNDY5IGM2LjAxNSwwLDkuMzA0LTQuOTgzLDkuMzA0LTkuMzA0YzAtMC4xNDItMC4wMDMtMC4yODMtMC4wMDktMC40MjNDMTQuOTc2LDQuMjksMTUuNTMxLDMuNzE0LDE1Ljk2OSwzLjA1OHpcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IFYyX01ldGFGdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5cbmltcG9ydCB7IExpbmssIHVzZUxvYWRlckRhdGEgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0JztcbmltcG9ydCBmb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0JztcbmltcG9ydCB7IGdldFBvc3RzIH0gZnJvbSAnfi91dGlscy9wb3N0JztcbmltcG9ydCB0eXBlIHsgUG9zdCB9IGZyb20gJ34vdXRpbHMvcG9zdCc7XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBWMl9NZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbXG4gICAgeyB0aXRsZTogJ01cdTAwRTFyaW8gUm9kcmlndWVzJyB9LFxuICAgIHsgcHJvcGVydHk6IFwib2c6dGl0bGVcIiwgY29udGVudDogJ01cdTAwRTFyaW8gUm9kcmlndWVzJyB9LFxuICAgIHsgbmFtZTogJ2Rlc2NyaXB0aW9uJywgY29udGVudDogJ1NvZnR3YXJlIGVuZ2luZWVyIHN0dWRlbnQgd2hvIGxpa2VzIHRvIGV4cGxvcmUgbmV3IHRoaW5ncy4nIH0sXG4gICAgeyBwcm9wZXJ0eTogXCJvZzpkZXNjcmlwdGlvblwiLCBjb250ZW50OiAnU29mdHdhcmUgZW5naW5lZXIgc3R1ZGVudCB3aG8gbGlrZXMgdG8gZXhwbG9yZSBuZXcgdGhpbmdzLicgfSxcbiAgXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCBwb3N0cyA9IHVzZUxvYWRlckRhdGE8UG9zdFtdPigpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTIgbXQtNiAtbXgtNFwiPlxuICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICA8TGlua1xuICAgICAgICAgIHRvPXtwb3N0LnNsdWd9XG4gICAgICAgICAga2V5PXtwb3N0LnNsdWd9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgZ3JvdXAgaG92ZXI6YmctZ3JheS01MCBwLTIgcHgtNCByb3VuZGVkLW1kIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtYm9sZCBncm91cC1ob3Zlcjp0ZXh0LXB1cnBsZS02MDBcIj5cbiAgICAgICAgICAgIHtwb3N0LnRpdGxlfVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPHRpbWUgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNDAwXCIgZGF0ZVRpbWU9e3Bvc3QuZGF0ZX0+XG4gICAgICAgICAgICBQdWJsaXNoZWQgYXQ6IHtmb3JtYXQobmV3IERhdGUocG9zdC5kYXRlKSwgXCJkZC9NTS95eXl5ICdcdTAwRTBzJyBoaDptbVwiKX1cbiAgICAgICAgICA8L3RpbWU+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgbG9hZGVyID0gYXN5bmMgKCkgPT4ge1xuICByZXR1cm4gZ2V0UG9zdHMoKTtcbn07XG4iLCAiaW1wb3J0IHBhcnNlRnJvbnRNYXR0ZXIgZnJvbSAnZnJvbnQtbWF0dGVyJztcbmltcG9ydCB7IHJlYWRGaWxlIH0gZnJvbSAnLi9mcy5zZXJ2ZXInO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgZnMgZnJvbSAnZnMvcHJvbWlzZXMnO1xuaW1wb3J0IHsgcGFyc2VNZHggfSBmcm9tICcuL3BhcnNlLW1keCc7XG5cbmV4cG9ydCB0eXBlIFBvc3QgPSB7XG4gIHNsdWc6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgY29udGVudDogc3RyaW5nO1xuICBkYXRlOiBEYXRlO1xufTtcblxuZXhwb3J0IHR5cGUgUG9zdE1hcmtkb3duQXR0cmlidXRlcyA9IHtcbiAgdGl0bGU6IHN0cmluZztcbn07XG5cbmNvbnN0IHBvc3RzUGF0aCA9IHBhdGguam9pbihgJHtfX2Rpcm5hbWV9Ly4uLy4uL3NyYy9fcG9zdHNgKTtcblxuY29uc3Qgc2FuaXRpemVTbHVnID0gKHNsdWc6IHN0cmluZykgPT4ge1xuICByZXR1cm4gc2x1Zy5yZXBsYWNlKC9eXFwvK3xcXC8rJC9nLCAnJyk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdChzbHVnOiBzdHJpbmcpIHtcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBnZXRQb3N0cygpO1xuICBjb25zdCBwb3N0ID0gcG9zdHMuZmluZChcbiAgICAocG9zdCkgPT4gc2FuaXRpemVTbHVnKHBvc3Quc2x1ZykgPT09IHNhbml0aXplU2x1ZyhzbHVnKVxuICApO1xuXG4gIGlmICghcG9zdCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHJldHVybiBhd2FpdCBwYXJzZU1keChwb3N0LmNvbnRlbnQpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdHMoKTogUHJvbWlzZTxQb3N0W10+IHtcbiAgY29uc3QgcG9zdHNQYXRocyA9IGF3YWl0IGZzLnJlYWRkaXIocG9zdHNQYXRoLCB7XG4gICAgd2l0aEZpbGVUeXBlczogdHJ1ZSxcbiAgfSk7XG5cbiAgcmV0dXJuIFByb21pc2UuYWxsKFxuICAgIHBvc3RzUGF0aHNcbiAgICAgIC5tYXAoYXN5bmMgKHBvc3RQYXRoOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgZmlsZXBhdGggPSBwYXRoLmpvaW4ocG9zdHNQYXRoLCBwb3N0UGF0aC5uYW1lKTtcbiAgICAgICAgY29uc3QgZmlsZSA9IChhd2FpdCByZWFkRmlsZShmaWxlcGF0aCwgJ3V0Zi04JykpLnRvU3RyaW5nKCk7XG4gICAgICAgIGNvbnN0IHsgYXR0cmlidXRlcyB9ID0gcGFyc2VGcm9udE1hdHRlcjx7XG4gICAgICAgICAgc2x1Zzogc3RyaW5nO1xuICAgICAgICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgICAgICAgZGF0ZTogc3RyaW5nO1xuICAgICAgICB9PihmaWxlKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHNsdWc6IGF0dHJpYnV0ZXMuc2x1ZyB8fCBwb3N0UGF0aC5uYW1lLnJlcGxhY2UoL1xcLm1keD8vLCAnJyksXG4gICAgICAgICAgdGl0bGU6IGF0dHJpYnV0ZXMudGl0bGUsXG4gICAgICAgICAgZGF0ZTogbmV3IERhdGUoYXR0cmlidXRlcy5kYXRlKSxcbiAgICAgICAgICBjb250ZW50OiBmaWxlLFxuICAgICAgICB9IGFzIFBvc3Q7XG4gICAgICB9KVxuICAgICAgLnJldmVyc2UoKVxuICApO1xufVxuIiwgImV4cG9ydCB7IHJlYWRGaWxlIH0gZnJvbSAnZnMvcHJvbWlzZXMnO1xuZXhwb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xuIiwgImV4cG9ydCB7IGJ1bmRsZU1EWCB9IGZyb20gJ21keC1idW5kbGVyJztcbiIsICJpbXBvcnQgeyBidW5kbGVNRFggfSBmcm9tICcuL21keC5zZXJ2ZXInO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGFyc2VNZHgoc291cmNlOiBzdHJpbmcpIHtcbiAgY29uc3QgW3JlaHlwZUhpZ2hsaWdodCwgcmVtYXJrR2ZtXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICBpbXBvcnQoJ3JlaHlwZS1wcmV0dHktY29kZScpLnRoZW4oKG1vZCkgPT4gbW9kLmRlZmF1bHQpLFxuICAgIGltcG9ydCgncmVtYXJrLWdmbScpLnRoZW4oKG1vZCkgPT4gbW9kLmRlZmF1bHQpLFxuICBdKTtcblxuICByZXR1cm4gYXdhaXQgYnVuZGxlTURYKHtcbiAgICBzb3VyY2U6IHNvdXJjZSxcbiAgICBtZHhPcHRpb25zKG9wdGlvbnMsIF9mcm9udG1hdHRlcikge1xuICAgICAgLy8gdGhpcyBpcyB0aGUgcmVjb21tZW5kZWQgd2F5IHRvIGFkZCBjdXN0b20gcmVtYXJrL3JlaHlwZSBwbHVnaW5zOlxuICAgICAgLy8gVGhlIHN5bnRheCBtaWdodCBsb29rIHdlaXJkLCBidXQgaXQgcHJvdGVjdHMgeW91IGluIGNhc2Ugd2UgYWRkL3JlbW92ZVxuICAgICAgLy8gcGx1Z2lucyBpbiB0aGUgZnV0dXJlLlxuICAgICAgb3B0aW9ucy5yZW1hcmtQbHVnaW5zID0gWy4uLihvcHRpb25zLnJlbWFya1BsdWdpbnMgPz8gW10pLCByZW1hcmtHZm1dO1xuICAgICAgb3B0aW9ucy5yZWh5cGVQbHVnaW5zID0gW1xuICAgICAgICAuLi4ob3B0aW9ucy5yZWh5cGVQbHVnaW5zID8/IFtdKSxcbiAgICAgICAgcmVoeXBlSGlnaGxpZ2h0IGFzIGFueSxcbiAgICAgIF07XG5cbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH0sXG4gIH0pO1xufVxuIiwgImltcG9ydCB7IGdldE1EWENvbXBvbmVudCB9IGZyb20gJ21keC1idW5kbGVyL2NsaWVudCc7XG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgICB1c2VMb2FkZXJEYXRhIH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdCc7XG5pbXBvcnQgeyBnZXRQb3N0IH0gZnJvbSAnfi91dGlscy9wb3N0JztcbmltcG9ydCB7IGpzb24gfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuaW1wb3J0IERpc2N1c3Npb24gZnJvbSAnfi9jb21wb25lbnRzL0Rpc2N1c3Npb24nO1xuaW1wb3J0IHR5cGUgeyAgVjJfTWV0YUZ1bmN0aW9uICwgTGlua3NGdW5jdGlvbiwgTG9hZGVyRnVuY3Rpb259IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4gW107XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBWMl9NZXRhRnVuY3Rpb248dHlwZW9mIGxvYWRlcj4gPSAoICBwYXJhbXMpID0+IHtcbiAgY29uc3QgeyBkYXRhOiB7IGZyb250bWF0dGVyOiBwb3N0IH0gfSA9IHBhcmFtc1xuICByZXR1cm4gW1xuICAgIHsgdGl0bGU6IHBvc3QudGl0bGUgfSxcbiAgICB7IHByb3BlcnR5OiBcIm9nOnRpdGxlXCIsIGNvbnRlbnQ6IHBvc3QudGl0bGUgfSxcbiAgICB7IHByb3BlcnR5OiBcImtleXdvcmRzXCIsIGNvbnRlbnQ6IHBvc3QudGFncy5qb2luKFwiLCBcIikgfSxcbiAgICAuLi4ocG9zdC5kZXNjcmlwdGlvblxuICAgICAgPyBbXG4gICAgICAgICAgeyBwcm9wZXJ0eTogXCJkZXNjcmlwdGlvblwiLCBjb250ZW50OiBwb3N0LmRlc2NyaXB0aW9uIH0sXG4gICAgICAgICAgeyBwcm9wZXJ0eTogXCJvZzpkZXNjcmlwdGlvblwiLCBjb250ZW50OiBwb3N0LmRlc2NyaXB0aW9uIH0sXG4gICAgICAgIF1cbiAgICAgIDogW10pLFxuICAgXTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgY29uc3Qgc2x1ZyA9IHBhcmFtc1snKiddO1xuICBpZiAoIXNsdWcpIHRocm93IG5ldyBSZXNwb25zZSgnTm90IGZvdW5kJywgeyBzdGF0dXM6IDQwNCB9KTtcblxuICBjb25zdCBwb3N0ID0gYXdhaXQgZ2V0UG9zdChzbHVnKTtcbiAgaWYgKHBvc3QpIHtcbiAgICByZXR1cm4ganNvbihwb3N0KTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgUmVzcG9uc2UoJ05vdCBmb3VuZCcsIHsgc3RhdHVzOiA0MDQgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QoKSB7XG4gIGNvbnN0IHsgY29kZSwgZnJvbnRtYXR0ZXIgfSA9IHVzZUxvYWRlckRhdGE8dHlwZW9mIGxvYWRlcj4oKTtcbiAgY29uc3QgQ29tcG9uZW50ID0gdXNlTWVtbygoKSA9PiBnZXRNRFhDb21wb25lbnQoY29kZSksIFtjb2RlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9zZSBsZzpwcm9zZS1iYXNlIG1heC13LW5vbmUgbXktOCBwcm9zZS1hOnRleHQtcHVycGxlLTYwMFwiPlxuICAgICAgICA8aDE+e2Zyb250bWF0dGVyLnRpdGxlfTwvaDE+XG4gICAgICAgIDxDb21wb25lbnQgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPERpc2N1c3Npb24gdGl0bGU9e2Zyb250bWF0dGVyLnRpdGxlfSBwYXRoPXtmcm9udG1hdHRlci5zbHVnfSAvPlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCB7IERpc2N1c3Npb25FbWJlZCB9IGZyb20gJ2Rpc3F1cy1yZWFjdCc7XG5cbmludGVyZmFjZSBEaXNjdXNzaW9uUHJvcHMge1xuICBwYXRoOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERpc2N1c3Npb24ocHJvcHM6IERpc2N1c3Npb25Qcm9wcykge1xuICBjb25zdCB7IHBhdGgsIHRpdGxlIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxEaXNjdXNzaW9uRW1iZWRcbiAgICAgIHNob3J0bmFtZT1cIm1hcmlvcm9kcmlndWVzMTBcIlxuICAgICAgY29uZmlnPXt7XG4gICAgICAgIHVybDogYGh0dHBzOi8vbWFyaW9yb2RyaWd1ZXMxMC5naXRodWIuaW8vJHtwYXRofWAsXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIH19XG4gICAgLz5cbiAgKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQSxZQUF1Qjs7O0FDQXZCO0FBQUE7QUFBQTtBQUFBO0FBTUEseUJBQTRCO0FBRzVCLGtCQUF5QjtBQUN6QixtQkFBNEI7QUFDNUIsbUJBQWtCO0FBQ2xCLG9CQUF1QztBQUV2QyxJQUFNLGNBQWM7QUFFTCx1QkFDYixTQUNBLG9CQUNBLGlCQUNBLGNBQ0EsYUFDQTtBQUNBLFNBQU8sMEJBQU0sUUFBUSxRQUFRLElBQUksaUJBQzdCLGlCQUNFLFNBQ0Esb0JBQ0EsaUJBQ0EsZ0JBRUYscUJBQ0UsU0FDQSxvQkFDQSxpQkFDQTtBQUFBO0FBSVIsMEJBQ0UsU0FDQSxvQkFDQSxpQkFDQSxjQUNBO0FBQ0EsU0FBTyxJQUFJLFFBQVEsQ0FBQyxVQUFTLFdBQVc7QUFDdEMsUUFBSSxnQkFBZ0I7QUFDcEIsVUFBTSxFQUFFLE1BQU0sVUFBVSwwQ0FDdEIsb0NBQUMsMEJBQUQ7QUFBQSxNQUNFLFNBQVM7QUFBQSxNQUNULEtBQUssUUFBUTtBQUFBLE1BQ2IsWUFBWTtBQUFBLFFBRWQ7QUFBQSxNQUNFLGFBQWE7QUFDWCx3QkFBZ0I7QUFDaEIsY0FBTSxPQUFPLElBQUk7QUFFakIsd0JBQWdCLElBQUksZ0JBQWdCO0FBRXBDLGlCQUNFLElBQUkscUJBQVMsTUFBTTtBQUFBLFVBQ2pCLFNBQVM7QUFBQSxVQUNULFFBQVE7QUFBQTtBQUlaLGFBQUs7QUFBQTtBQUFBLE1BRVAsYUFBYSxPQUFnQjtBQUMzQixlQUFPO0FBQUE7QUFBQSxNQUVULFFBQVEsT0FBZ0I7QUFDdEIsNkJBQXFCO0FBSXJCLFlBQUksZUFBZTtBQUNqQixrQkFBUSxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBTXRCLGVBQVcsT0FBTztBQUFBO0FBQUE7QUFJdEIsOEJBQ0UsU0FDQSxvQkFDQSxpQkFDQSxjQUNBO0FBQ0EsU0FBTyxJQUFJLFFBQVEsQ0FBQyxVQUFTLFdBQVc7QUFDdEMsUUFBSSxnQkFBZ0I7QUFDcEIsVUFBTSxFQUFFLE1BQU0sVUFBVSwwQ0FDdEIsb0NBQUMsMEJBQUQ7QUFBQSxNQUNFLFNBQVM7QUFBQSxNQUNULEtBQUssUUFBUTtBQUFBLE1BQ2IsWUFBWTtBQUFBLFFBRWQ7QUFBQSxNQUNFLGVBQWU7QUFDYix3QkFBZ0I7QUFDaEIsY0FBTSxPQUFPLElBQUk7QUFFakIsd0JBQWdCLElBQUksZ0JBQWdCO0FBRXBDLGlCQUNFLElBQUkscUJBQVMsTUFBTTtBQUFBLFVBQ2pCLFNBQVM7QUFBQSxVQUNULFFBQVE7QUFBQTtBQUlaLGFBQUs7QUFBQTtBQUFBLE1BRVAsYUFBYSxPQUFnQjtBQUMzQixlQUFPO0FBQUE7QUFBQSxNQUVULFFBQVEsT0FBZ0I7QUFDdEIsNkJBQXFCO0FBSXJCLFlBQUksZUFBZTtBQUNqQixrQkFBUSxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBTXRCLGVBQVcsT0FBTztBQUFBO0FBQUE7OztBQ3BJdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUE4QjtBQUU5QixvQkFPTzs7Ozs7O0FDVFAsb0JBQXFCO0FBQ3JCLG9CQUFrQjs7O0FDRGxCLG9CQUFrQjtBQUVILHNCQUFzQjtBQUNuQyxTQUNFLG9EQUFDLE9BQUQ7QUFBQSxJQUFLLFNBQVE7QUFBQSxJQUFZLFFBQU87QUFBQSxJQUFNLE9BQU07QUFBQSxLQUMxQyxvREFBQyxRQUFEO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxHQUFFO0FBQUE7QUFBQTs7O0FDUFYsb0JBQWtCO0FBRUgsdUJBQXVCO0FBQ3BDLFNBQ0Usb0RBQUMsT0FBRDtBQUFBLElBQUssU0FBUTtBQUFBLElBQVksUUFBTztBQUFBLElBQU0sT0FBTTtBQUFBLEtBQzFDLG9EQUFDLFFBQUQ7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLEdBQUU7QUFBQTtBQUFBOzs7QUZFSyxnQkFBZ0IsT0FBYztBQUMzQyxRQUFNLEVBQUUsYUFBYTtBQUNyQixRQUFNLGNBQWMsSUFBSSxPQUFPO0FBRS9CLFNBQ0Usb0RBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0RBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0RBQUMsVUFBRCxNQUNFLG9EQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9EQUFDLG9CQUFEO0FBQUEsSUFBTSxJQUFHO0FBQUEsSUFBSSxLQUFJO0FBQUEsS0FDZixvREFBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FBdUMsdUJBR3JELG9EQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUF3QiwrQkFHeEMsb0RBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0RBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQ1osb0RBQUMsTUFBRCxNQUNFLG9EQUFDLG9CQUFEO0FBQUEsSUFDRSxJQUFHO0FBQUEsSUFDSCxjQUFXO0FBQUEsSUFDWCxPQUFNO0FBQUEsS0FDUCxVQUlILG9EQUFDLE1BQUQsTUFDRSxvREFBQyxvQkFBRDtBQUFBLElBQ0UsSUFBRztBQUFBLElBQ0gsY0FBVztBQUFBLElBQ1gsT0FBTTtBQUFBLEtBQ1AsZ0JBSUgsb0RBQUMsTUFBRCxNQUNFLG9EQUFDLEtBQUQ7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLFFBQU87QUFBQSxJQUNQLEtBQUk7QUFBQSxJQUNKLGNBQVc7QUFBQSxJQUNYLE9BQU07QUFBQSxLQUVOLG9EQUFDLFlBQUQsU0FHSixvREFBQyxNQUFELE1BQ0Usb0RBQUMsS0FBRDtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sUUFBTztBQUFBLElBQ1AsS0FBSTtBQUFBLElBQ0osY0FBVztBQUFBLElBQ1gsT0FBTTtBQUFBLEtBRU4sb0RBQUMsYUFBRCxhQU9aLG9EQUFDLFFBQUQsTUFBTyxXQUNQLG9EQUFDLFVBQUQ7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLFdBQVU7QUFBQSxLQUNWLFFBQUs7QUFBQTs7O0FEOURSLElBQU0sUUFBdUIsTUFBTTtBQUFBLEVBQ3hDLEdBQUksa0NBQWdCLENBQUMsRUFBRSxLQUFLLGNBQWMsTUFBTSxxQ0FBbUI7QUFBQSxFQUNuRSxFQUFFLEtBQUssY0FBYyxNQUFNO0FBQUE7QUFHZCxlQUFlO0FBQzVCLFNBQ0Usb0NBQUMsUUFBRDtBQUFBLElBQU0sTUFBSztBQUFBLEtBQ1Qsb0NBQUMsUUFBRCxNQUNFLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFNBQVE7QUFBQSxNQUNkLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLE1BQUs7QUFBQSxJQUFXLFNBQVE7QUFBQSxNQUM5QixvQ0FBQyxvQkFBRCxPQUNBLG9DQUFDLHFCQUFELFFBRUYsb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsUUFBRCxNQUNFLG9DQUFDLHNCQUFELFFBRUYsb0NBQUMsaUNBQUQsT0FDQSxvQ0FBQyx1QkFBRCxPQUNBLG9DQUFDLDBCQUFEO0FBQUE7OztBSWpDUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxvQkFBb0M7QUFDcEMsb0JBQW1COzs7QUNIbkIsMEJBQTZCOzs7QUNBN0Isc0JBQXlCO0FBQ3pCLGtCQUF3Qjs7O0FEQ3hCLG1CQUFpQjtBQUNqQix1QkFBZTs7O0FFSGYseUJBQTBCOzs7QUNFMUIsd0JBQStCLFFBQWdCO0FBQzdDLFFBQU0sQ0FBQyxpQkFBaUIsYUFBYSxNQUFNLFFBQVEsSUFBSTtBQUFBLElBQ3JELE9BQU8sc0JBQXNCLEtBQUssQ0FBQyxRQUFRLElBQUk7QUFBQSxJQUMvQyxPQUFPLGNBQWMsS0FBSyxDQUFDLFFBQVEsSUFBSTtBQUFBO0FBR3pDLFNBQU8sTUFBTSxrQ0FBVTtBQUFBLElBQ3JCO0FBQUEsSUFDQSxXQUFXLFNBQVMsY0FBYztBQUloQyxjQUFRLGdCQUFnQixDQUFDLEdBQUksUUFBUSxpQkFBaUIsSUFBSztBQUMzRCxjQUFRLGdCQUFnQjtBQUFBLFFBQ3RCLEdBQUksUUFBUSxpQkFBaUI7QUFBQSxRQUM3QjtBQUFBO0FBR0YsYUFBTztBQUFBO0FBQUE7QUFBQTs7O0FISGIsSUFBTSxZQUFZLHFCQUFLLEtBQUssR0FBRztBQUUvQixJQUFNLGVBQWUsQ0FBQyxTQUFpQjtBQUNyQyxTQUFPLEtBQUssUUFBUSxjQUFjO0FBQUE7QUFHcEMsdUJBQThCLE1BQWM7QUFDMUMsUUFBTSxRQUFRLE1BQU07QUFDcEIsUUFBTSxPQUFPLE1BQU0sS0FDakIsQ0FBQyxVQUFTLGFBQWEsTUFBSyxVQUFVLGFBQWE7QUFHckQsTUFBSSxDQUFDLE1BQU07QUFDVDtBQUFBO0FBR0YsU0FBTyxNQUFNLFNBQVMsS0FBSztBQUFBO0FBRzdCLDBCQUFrRDtBQUNoRCxRQUFNLGFBQWEsTUFBTSx5QkFBRyxRQUFRLFdBQVc7QUFBQSxJQUM3QyxlQUFlO0FBQUE7QUFHakIsU0FBTyxRQUFRLElBQ2IsV0FDRyxJQUFJLE9BQU8sYUFBa0I7QUFDNUIsVUFBTSxXQUFXLHFCQUFLLEtBQUssV0FBVyxTQUFTO0FBQy9DLFVBQU0sT0FBUSxPQUFNLDhCQUFTLFVBQVUsVUFBVTtBQUNqRCxVQUFNLEVBQUUsZUFBZSxpQ0FJcEI7QUFFSCxXQUFPO0FBQUEsTUFDTCxNQUFNLFdBQVcsUUFBUSxTQUFTLEtBQUssUUFBUSxVQUFVO0FBQUEsTUFDekQsT0FBTyxXQUFXO0FBQUEsTUFDbEIsTUFBTSxJQUFJLEtBQUssV0FBVztBQUFBLE1BQzFCLFNBQVM7QUFBQTtBQUFBLEtBR1o7QUFBQTs7O0FEcERBLElBQU0sT0FBd0IsTUFBTTtBQUN6QyxTQUFPO0FBQUEsSUFDTCxFQUFFLE9BQU87QUFBQSxJQUNULEVBQUUsVUFBVSxZQUFZLFNBQVM7QUFBQSxJQUNqQyxFQUFFLE1BQU0sZUFBZSxTQUFTO0FBQUEsSUFDaEMsRUFBRSxVQUFVLGtCQUFrQixTQUFTO0FBQUE7QUFBQTtBQUk1QixpQkFBaUI7QUFDOUIsUUFBTSxRQUFRO0FBRWQsU0FDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDWixNQUFNLElBQUksQ0FBQyxTQUNWLG9DQUFDLG9CQUFEO0FBQUEsSUFDRSxJQUFJLEtBQUs7QUFBQSxJQUNULEtBQUssS0FBSztBQUFBLElBQ1YsV0FBVTtBQUFBLEtBRVYsb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQ1gsS0FBSyxRQUVSLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxJQUF3QixVQUFVLEtBQUs7QUFBQSxLQUFNLGtCQUM1QywyQkFBTyxJQUFJLEtBQUssS0FBSyxPQUFPO0FBQUE7QUFRaEQsSUFBTSxTQUFTLFlBQVk7QUFDaEMsU0FBTztBQUFBOzs7QUt4Q1Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBZ0M7QUFDaEMsb0JBQXdCO0FBQ3hCLG9CQUFnQztBQUVoQyxtQkFBcUI7OztBQ0pyQiwwQkFBZ0M7QUFPakIsb0JBQW9CLE9BQXdCO0FBQ3pELFFBQU0sRUFBRSxhQUFNLFVBQVU7QUFFeEIsU0FDRSxvQ0FBQyxxQ0FBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsUUFBUTtBQUFBLE1BQ04sS0FBSyxzQ0FBc0M7QUFBQSxNQUMzQztBQUFBO0FBQUE7QUFBQTs7O0FEUEQsSUFBTSxTQUF1QixNQUFNO0FBRW5DLElBQU0sUUFBdUMsQ0FBRyxXQUFXO0FBQ2hFLFFBQU0sRUFBRSxNQUFNLEVBQUUsYUFBYSxXQUFXO0FBQ3hDLFNBQU87QUFBQSxJQUNMLEVBQUUsT0FBTyxLQUFLO0FBQUEsSUFDZCxFQUFFLFVBQVUsWUFBWSxTQUFTLEtBQUs7QUFBQSxJQUN0QyxFQUFFLFVBQVUsWUFBWSxTQUFTLEtBQUssS0FBSyxLQUFLO0FBQUEsSUFDaEQsR0FBSSxLQUFLLGNBQ0w7QUFBQSxNQUNFLEVBQUUsVUFBVSxlQUFlLFNBQVMsS0FBSztBQUFBLE1BQ3pDLEVBQUUsVUFBVSxrQkFBa0IsU0FBUyxLQUFLO0FBQUEsUUFFOUM7QUFBQTtBQUFBO0FBSUQsSUFBTSxVQUF5QixPQUFPLEVBQUUsYUFBYTtBQUMxRCxRQUFNLE9BQU8sT0FBTztBQUNwQixNQUFJLENBQUM7QUFBTSxVQUFNLElBQUksU0FBUyxhQUFhLEVBQUUsUUFBUTtBQUVyRCxRQUFNLE9BQU8sTUFBTSxRQUFRO0FBQzNCLE1BQUksTUFBTTtBQUNSLFdBQU8sdUJBQUs7QUFBQSxTQUNQO0FBQ0wsVUFBTSxJQUFJLFNBQVMsYUFBYSxFQUFFLFFBQVE7QUFBQTtBQUFBO0FBSS9CLGdCQUFnQjtBQUM3QixRQUFNLEVBQUUsTUFBTSxnQkFBZ0I7QUFDOUIsUUFBTSxZQUFZLDJCQUFRLE1BQU0sbUNBQWdCLE9BQU8sQ0FBQztBQUV4RCxTQUNFLDBEQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE1BQUQsTUFBSyxZQUFZLFFBQ2pCLG9DQUFDLFdBQUQsUUFFRixvQ0FBQyxZQUFEO0FBQUEsSUFBWSxPQUFPLFlBQVk7QUFBQSxJQUFPLE1BQU0sWUFBWTtBQUFBO0FBQUE7OztBWjFDOUQsb0JBQWtDO0FBQzNCLElBQU0sUUFBUSxFQUFFLFFBQVE7QUFDeEIsSUFBTSxTQUFTO0FBQUEsRUFDcEIsUUFBUTtBQUFBLElBQ04sSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFVixpQkFBaUI7QUFBQSxJQUNmLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVYsWUFBWTtBQUFBLElBQ1YsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
