function getElementsByStyle(prop, val) {
  return document
    .getElementsByTagName("*")
    .filter((e) => e.style[prop] === val);
}

function querySelectorAll(query, root = document.body) {
  let res = [];
  [...root.children].forEach((e) =>
    e.children.length
      ? querySelectorAll(query, e)
      : (e.tagName === query.toUpperCase() || e.classList.contains(query)) &&
        res.push(e)
  );
  return res;
}
