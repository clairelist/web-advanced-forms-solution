//THIS IS OUR TEST FILE!

// Set up tests that will...

//     Get the Name input and type a name in it.
//     Use an assertion to check if the text inputted contains the name you provided (Hint: use the .should assertion)
//     Get the Email input and type an email address in it
//     Get the password input and type a password in it
//     Set up a test that will check to see if a user can check the terms of service box
//     Check to see if a user can submit the form data
//     Check for form validation if an input is left empty

describe ('User Onboarding App', ()=>{
    // beforeEach(()=>{
    //     cy.visit('http://localhost:1234');
    // })
    //THIS IS BORKED BECAUSE OUR SERVER IS BORKED!

    //getten to cut down on typing later!
    const nameInput = () => cy.get("input[name=name]");
    const emailInput = () => cy.get("input[name=email]");
    const passwordInput = () => cy.get("input[name=password");
    //get :: function which yields a 'select' call

    const termsOfServiceInput = () => cy.get("[type='checkbox']");
    //submitty to form data
    //form validationr

    it('does a prelim test to make sure tests work',()=>{
        expect(1+2).to.equal(3);
        expect({}).not.to.equal({}); //strict equality
    })
})