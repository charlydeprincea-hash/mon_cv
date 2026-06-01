/* ── Contact form – Formspree AJAX ── */
document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    var btn = document.getElementById('form-btn');
    var sending = document.getElementById('form-sending');
    var success = document.getElementById('form-success');
    var error = document.getElementById('form-error');

    btn.disabled = true;
    sending.style.display = 'block';
    success.style.display = 'none';
    error.style.display = 'none';

    try {
      var res = await fetch(this.action, {
        method: 'POST',
        body: new FormData(this),
        headers: { 'Accept': 'application/json' }
      });
      sending.style.display = 'none';
      if (res.ok) {
        success.style.display = 'block';
        this.reset();
      } else {
        error.style.display = 'block';
        btn.disabled = false;
      }
    } catch (err) {
      sending.style.display = 'none';
      error.style.display = 'block';
      btn.disabled = false;
    }
  });
});

/* ── Scroll restoration fix ── */
if (window.history && window.history.scrollRestoration) {
  window.history.scrollRestoration = 'manual';
}
window.addEventListener('load', function () {
  window.scrollTo(0, 0);
});
