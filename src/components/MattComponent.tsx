import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type MattComponentProps = ComponentProps & {
  fields: {
    heading: Field<string>;
  };
};

const MattComponent = (props: MattComponentProps): JSX.Element => (
  <div>
    <p>MattComponent Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default withDatasourceCheck()<MattComponentProps>(MattComponent);
