// Browser port of the fake_news TF-IDF + Logistic Regression model.
// Mirrors app.py's clean_text() and scikit-learn's default tokenizer exactly.
export function cleanText(text) {
  return String(text).toLowerCase().replace(/http\S+/g, '').replace(/[^a-zA-Z ]/g, '');
}

export function tokenize(cleaned) {
  return cleaned.match(/\b\w\w+\b/g) || [];
}

export function score(model, text) {
  const tokens = tokenize(cleanText(text));
  const tf = new Map();
  for (const tok of tokens) if (model.t[tok]) tf.set(tok, (tf.get(tok) || 0) + 1);
  let norm = 0;
  for (const [tok, n] of tf) norm += (n * model.t[tok][0]) ** 2;
  norm = Math.sqrt(norm) || 1;
  let z = model.b;
  const contrib = new Map();
  for (const [tok, n] of tf) {
    const c = (n * model.t[tok][0] / norm) * model.t[tok][1];
    contrib.set(tok, c);
    z += c;
  }
  return { real: 1 / (1 + Math.exp(-z)), contrib, known: tf.size, total: tokens.length };
}
