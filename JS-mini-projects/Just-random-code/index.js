function debounce(func, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function search(query) {
  console.log("Searching:", query);
}

const debounceSearch = debounce(search, 600);

debounceSearch("h");
debounceSearch("he");
debounceSearch("hel");
debounceSearch("hello");
