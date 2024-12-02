import { postsArray } from "./posts.js";
 
function createHomeLayout(postsArray ) {
  const container = UI.createElement(
    "div",
    { class: "container-root" },
    [
      UI.createElement("header", { class: "header" }, [
        UI.createElement("a", { href: "./index.html" }, "Log In"),
        UI.createElement("a", { href: "./registration.html" }, "Sign In"),
        UI.createElement("a", { href: "./createPost.html" }, "Create Blog"),
      ]),
      UI.createElement("main", { class: "main-section" }, [
        UI.createElement("nav", { class: "sidebar overflow-auto" }, [
          UI.createElement(
            "div",
            { class: "card" },
            UI.createElement("div", { class: "card-body" }, [
              UI.createElement(
                "img",
                {
                  class: "avatar",
                  src: "https://www.w3schools.com/howto/img_avatar2.png",
                },
                ""
              ),
              UI.createElement("h5", { class: "card-title" }, "Alice Johnson"),
            ])
          ),
          UI.createElement(
            "div",
            { class: "card" },
            UI.createElement("div", { class: "card-body" }, [
              UI.createElement(
                "img",
                {
                  class: "avatar",
                  src: "https://www.w3schools.com/w3images/avatar2.png",
                },
                ""
              ),
              UI.createElement("h5", { class: "card-title" }, "Bob Smith"),
            ])
          ),
          UI.createElement(
            "div",
            { class: "card" },
            UI.createElement("div", { class: "card-body" }, [
              UI.createElement(
                "img",
                {
                  class: "avatar",
                  src: "https://www.w3schools.com/w3images/avatar6.png",
                },
                ""
              ),
              UI.createElement("h5", { class: "card-title" }, "Monica Brown"),
            ])
          ),
        ]),
        UI.createElement(
          "div",
          { class: "section overflow-auto" },
          postsArray.map((post) =>
            UI.createElement("section", { class: "post overflow-hidden" }, [
              UI.createElement("div", { class: "title" }, [
                UI.createElement("h5", { class: "authorName" }, post.authorName),
                UI.createElement("h5", { class: "input-title" }, post.title),
              ]),
              UI.createElement(
                "div",
                { class: "card" },
                UI.createElement("div", { class: "card-body" }, [
                  UI.createElement("p", { class: "story" }, post.story),
                  UI.createElement(
                    "img",
                    { src: post.img, class: "image" },
                    ""
                  ),
                ])
              ),
            ])
          )
        ),
        UI.createElement("footer", { class: "footer" }, ""),
      ]),
    ]
  );

  UI.render(container, document.body);
};
createHomeLayout(postsArray);


 