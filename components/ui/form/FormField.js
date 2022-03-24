export const input = 'input';
export const textarea = 'textarea';

const FormField = props => {
  let Tag = '';

  const setTag = () => {
    switch (props.type) {
      case input:
        Tag = input;
        return;
      case textarea:
        Tag = textarea;
        return;
      default:
        Tag = input;
        return;
    }
  };

  setTag();

  return (
    <Tag
      required={props.required}
      placeholder={props.placeholder || ''}
      value={props.value || ''}
      onChange={props.onChange || null}
      className={`p-3 rounded-lg ${props.type === textarea ? 'h-36' : ''}`}
    />
  );
};

export default FormField;
