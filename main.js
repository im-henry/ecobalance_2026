(() => {
  const candidate = window.POSTER_SITE_CONFIG?.posterUrl?.trim();
  if (!candidate) return;
  try {
    const url = new URL(candidate);
    if (url.protocol !== 'https:') return;
    const button = document.getElementById('poster-link');
    const imageLink = document.getElementById('poster-image-link');
    for (const el of [button, imageLink]) {
      if (!el) continue;
      el.href = url.toString();
      el.target = '_blank';
      el.rel = 'noopener noreferrer';
    }
  } catch (_) {
    // Keep the existing links if the configuration is invalid.
  }
})();
