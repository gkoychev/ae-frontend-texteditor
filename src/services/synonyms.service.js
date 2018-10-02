export default function synonyms(text) {
  return fetch(`https://api.datamuse.com/words?rel_syn=${text}`);
}
