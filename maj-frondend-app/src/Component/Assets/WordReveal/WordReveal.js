import useInView from '../../Hooks/UseInView/UseInView.js';

/** Animates text word by word. <WordReveal as="h1" text="Elegance in Every Touch." /> */
function WordReveal({ as: Tag = 'h2', text, className = '' }) {
  const [ref, seen] = useInView();
  return (
    <Tag ref={ref} className={`words ${seen ? 'is-visible' : ''} ${className}`} aria-label={text}>
      {text.split(' ').map((w, i) => (
        <span key={i} aria-hidden="true">
          <span className="word" style={{ '--i': i }}>{w}</span>{' '}
        </span>
      ))}
    </Tag>
  );
}
export default WordReveal