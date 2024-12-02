 function createCreatePostLayout() {
    const container = UI.createElement(
        'div',
        {
          class: 'container-root',
        },
        [
            UI.createElement("header", { class: "header" }, UI.createElement("a", { href: "./home.html" }, "Create Post")), 
            UI.createElement("form", { id: "formSection", name:"createForm" }, [
                UI.createElement('div',{class:'card'}, [
                    UI.createElement('div',{class:'card-body'},[
                        UI.createElement('img', {class:'avatar', src:" "},""),
                        UI.createElement('input', {type:'text', class:'card-title', name:'authorName', placeholder:'Name Surname', required:true},"")
                    ]),
                    UI.createElement("button", {type:'submit', id:'postFormButton' }, "Create new Post")
                ]),
                UI.createElement('div',{class:'section overflow-auto'}, [
                    UI.createElement('input',{type:'text', class: 'title', name:"title", placeholder:"Post Title", required:true}, ""),
                    UI.createElement('textarea',{class: 'story', name:"story", placeholder:"Write your story here...", required:true}, ""),  
                    UI.createElement('input',{type:"url", class:'image', name:"img", placeholder:"Image URL", required:true}, "")
                ])
            ]),
            UI.createElement('footer', { class: 'footer' }, '')  
        ]
    );

    UI.render(container, document.body);
}
createCreatePostLayout();
 