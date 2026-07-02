# FABtekk Engineering Limited — Website

A responsive, static five-page website. No build step required — open `index.html`
in a browser, or upload the whole folder to any web host.

## Structure

```
fabtekk-website/
├── index.html        Home — hero, services overview, oven move project spotlight
├── services.html     All nine services
├── about.html        Company history, director, clients, accreditations
├── contact.html      Contact details + enquiry form
├── css/styles.css    All styling (colours sampled from the FABtekk logo)
├── js/main.js        Mobile menu + contact form submission
└── images/           Optimised photos and logo
```

## Contact form

The form on `contact.html` posts to FormSubmit.co, which forwards messages to
**info@fabtekk.co.uk**. The very first submission triggers a one-time activation
email to that inbox — click the confirmation link once and all future enquiries
will be delivered automatically. No server or account needed.

## Editing

- Contact details and addresses appear in `contact.html` and in the footer of every page.
- Colours are defined once as CSS variables at the top of `css/styles.css`.
- To add photos, drop a .jpg into `images/` and reference it from the HTML.
