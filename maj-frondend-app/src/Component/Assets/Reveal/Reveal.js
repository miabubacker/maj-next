import useInView from '../../Hooks/UseInView/UseInView.js';

/**
 * Fades + slides its children in when scrolled into view.
 * <Reveal as="p" direction="left" delay={0.2}>...</Reveal>
 * direction: undefined (up) | 'left' | 'right'
 */
function Reveal({ as: Tag = 'div', direction, delay = 0, className = '', children, ...rest }) {
  const [ref, seen] = useInView();
  const cls = ['reveal', direction && `reveal--${direction}`, seen && 'is-visible', className]
    .filter(Boolean).join(' ');
  return (
    <Tag ref={ref} className={cls} style={{ '--d': `${delay}s` }} {...rest}>
      {children}
    </Tag>
  );
}
export default Reveal