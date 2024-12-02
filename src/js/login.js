function createLoginLayout(){
    const container = UI.createElement(
        'div',
        {
          class: 'container-root',
        },
        [
          UI.createElement("header", { class: "header" },[UI.createElement("a", { href: "./home.html" }, "Home"),
                                                          UI.createElement("a", { href: "./registration.html" }, "Sign In")]),
                                                          UI.createElement('form', { class: 'form-wrapper'}, 
                                                          UI.createElement('div', { class: 'login-container' },
                                                          UI.createElement('form', null, 
                                                            [UI.createElement('input', { type: 'text', class:'username', placeholder: 'Userame'}, 'Userame'),
                                                            UI.createElement('input', { type: 'text', class:'password', placeholder: 'Password' }, 'Password'),
                                                            UI.createElement('button', { type:'submit',class: 'btn', value:'Submit'}, 'Submit')]
                                                          )))]);
 
          UI.render(container, document.body);
 };
 createLoginLayout();