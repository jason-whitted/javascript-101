const code = [];
const variables = [];

window.onload = () => {
  const code$ = document.querySelector('.code');
  code$.innerHTML = '<h1>Code</h1><pre></pre >';
  code$.querySelector("h1").addEventListener('click', () => {
    const line = code.shift();
    if (line) {
      const result = eval(line);
      console.log(result);
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
              : `<code>${window[v]}</code>`,
      '</div>',
      '<div>',
      typeof window[v],
      '</div>',
    ].join('')).join('');
  });
}


const next = () => {
  const line = code.shift();
  if (line) {
    const pre = document.querySelector('.container > div:nth-child(1) > pre');
    const tbl = document.querySelector('.container > div:nth-child(2) > div');
    eval(line);
    pre.innerText += line + '\n\n';
    tbl.innerHTML = '<div><b>Variable</b></div><div><b>Value</b></div><div><b>Type</b></div>' + variables.map(v => [
      '<div>',
      v,
      '</div>',
      '<div>',
      window[v] === undefined ? '<code>undefined</code>'
        : window[v] === 'null' ? '<code>null</code>'
          : typeof window[v] === 'string' ? `<code>"${window[v]}"</code>`
            : `<code>${window[v]}</code>`,
      '</div>',
      '<div>',
      typeof window[v],
      '</div>',
    ].join('')).join('');
  }
};

// document.addEventListener('click', next);