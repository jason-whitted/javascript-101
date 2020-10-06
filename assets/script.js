const code = [];
const variables = [];

window.onload = () => {
  const code$ = document.querySelector('.code');
  code$.innerHTML = '<h1>Code</h1><pre></pre >';
  code$.querySelector("h1").addEventListener('click', () => {
    const line = code.shift();
    if (line) {
      const result = eval(line);
      const pre = code$.querySelector('pre');
      pre.innerHTML += line + '\n\n';
    }
  });

  const memory$ = document.querySelector('.memory');
  memory$.innerHTML = '<h1>Memory</h1><div></div>';
  memory$.querySelector("h1").addEventListener('click', () => {
    const div = memory$.querySelector("div");
    div.innerHTML = '<div><b>Variable</b></div><div><b>Value</b></div><div><b>Type</b></div>' + variables.map(v => [
      '<div>',
      v,
      '</div>',
      '<div>',
      window[v] === undefined ? '<code>undefined</code>'
        : window[v] === 'null' ? '<code>null</code>'
          : typeof window[v] === 'function' ? `<code>function ${window[v].name}(&hellip;){&hellip;}</code>`
            : typeof window[v] === 'string' ? `<code>"${window[v]}"</code>`
              : typeof window[v] === 'object' ? `<pre><code>${JSON.stringify(window[v], null, 2)}</code></pre>`
                : `<code>${window[v]}</code>`,
      '</div>',
      '<div>',
      typeof window[v],
      '</div>',
    ].join('')).join('');
  });
}
