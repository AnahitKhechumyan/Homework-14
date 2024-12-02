function createRegistrationLayout() {
    const container = UI.createElement(
      'div',
      {
        class: 'container-root',
      },
      [
        UI.createElement("header", { class: "header" }, [UI.createElement("a", { href: "./home.html" }, "Home"),
                                                         UI.createElement("a", { href: "./index.html" }, "Log In")]),
        UI.createElement('form', { class: 'form-wrapper'},  UI.createElement('div', { class: 'registration-container' },
                                        UI.createElement('form', {}, [UI.createElement('input', { type: 'text', placeholder: 'First Name'}, 'First Name'),
                                        UI.createElement('input', { type: 'text',placeholder: 'Last Name' }, 'Last Name'),
                                        UI.createElement('select', { id: 'city' },UI.createElement('option', {},'City')),
                                        UI.createElement('div', { class: 'gender' }, [
                                        UI.createElement('input', { type: 'radio', name:'gender',id:'male', value:'male'},'Male'), 
                                        UI.createElement('label', {for:'radio-id'},'Male'),
                                        UI.createElement('input', { type: 'radio', name:'gender',id:'female', value:'female'}, 'Female'),
                                        UI.createElement('label', {for:'radio-id'},'Female')]),
                                        UI.createElement('div', { class: 'submit'},[ 
                                        UI.createElement('input', { type: 'checkbox'},""), UI.createElement('label', {for: 'checkbox-id'},"Send me Email"),
                                        UI.createElement('button', { type:'submit',class:'btn', value:'Submit'}, 'Submit')
                                        ])])))]);   
                                            
        UI.render(container, document.body);
  };
  
  createRegistrationLayout(UI);