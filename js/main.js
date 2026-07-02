/* FABtekk Engineering — main.js */

// ---- mobile menu ----
const burger = document.querySelector('.burger');
if (burger) {
  burger.addEventListener('click', () => {
    document.getElementById('navlinks').classList.toggle('open');
  });
}

// ---- contact form (FormSubmit AJAX -> info@fabtekk.co.uk) ----
const form = document.getElementById('contactForm');
if (form) {
  const statusEl = document.getElementById('cf-status');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    statusEl.className = 'form-status';
    if (!form.checkValidity()) {
      statusEl.className = 'form-status err';
      statusEl.textContent = 'Please fill in your name, email and message before sending.';
      return;
    }
    const btn = document.getElementById('cf-submit');
    btn.disabled = true;
    btn.textContent = 'Sending…';
    const data = Object.fromEntries(new FormData(form).entries());
    data._subject = 'Website enquiry — ' + data.subject;
    try {
      const res = await fetch('https://formsubmit.co/ajax/info@fabtekk.co.uk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error('Send failed');
      statusEl.className = 'form-status ok';
      statusEl.textContent = 'Message sent — we\'ll get back to you as soon as possible.';
      form.reset();
    } catch (err) {
      statusEl.className = 'form-status err';
      statusEl.textContent = 'The message couldn\'t be sent. Please email info@fabtekk.co.uk or call 07970 864218.';
    } finally {
      btn.disabled = false;
      btn.textContent = 'Send message';
    }
  });
}
