//   Runs on every page. It uses the components from the components.js
// None we ask whar page  are we on?
const page = document.body.dataset.page;
//  Now taht we have our what page .. now we can add our metadata
const pageMeta = {
    home; {
        title: "Home",
        description; "This is a description"
    },
     about; {
        title: "About",
        description; "This is a description"
    },
     contact; {
        title: "Contact",
        description; "This is a description"
    }
};
//the CTA content
const ctaContent = {
    home: {
       heading: "fdfrth",
       text: "rgggeds",
       buttonText: "grdfg",
       link: "index.html"
    },
    about: {
       heading: "1166845",
       text: "5555478",
       buttonText: "7gr88dfg",
       link: "about.html"
    },
    contact: {
       heading: "fdfghghhrth",
       text: "rgggeds",
       buttonText: "grdfg",
       link: "contact.html"
    }
}
const favourites = [
    {title: "Espresso", text: "blah"},
    {title: "Cold Brew", text: "blah blah"},
    {title: "Croissant", text: "blah blah blah"}
];

       //
       //Now buils the damn thing
       //
    // metadata goes in the <hesd>
       const meta = pageMeta[page];
       renderHead(createMetadata(meta.title, meta.description, meta.robots));
       // now fill in our pages
       render("#site-header", createHeader(page));
       render("#site-footer", createFooter(sitename());
       render("#cta", craeteCallToAction(ctaContent[page]));
    // turn every object   in the array into a card
       const cardHtml = favourites
       .map((item) =>  createCard(item.title, item.text))
       .join("");

       render("#cards", cardsHtml);