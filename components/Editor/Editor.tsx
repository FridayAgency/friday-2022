import parse from 'html-react-parser';
import cx from 'classnames';
/**
 * Render content from wordpress Editor
 *
 * @author Brian Whelan
 *
 * @param {string} props.className  The class name for the element
 * @param {string} props.copy The copy from the editor to parse
 *
 * @returns Content from the wordpress editor
 */

interface EditorProps {
  className?: string;
  copy: string;
}

const Editor: React.FC<EditorProps> = ({ className, copy }) => {
  return <div className={cx({ className: className })}>{parse(copy ?? '')}</div>;
};

export default Editor;
