import * as React from 'react';
import styled from 'styles/styled-components';

interface Props {
  keyField: string;
  valueField: string;
  href?: string;
}

class InfoField extends React.PureComponent<Props> {
  public render() {
    return (
      <Wrapper>
        <Key>{this.props.keyField}: </Key>
        {this.props.href && this.props.valueField ? (
          <HrefValue href={this.props.valueField} target="_blank">
            {this.props.href}
          </HrefValue>
        ) : (
          <Value>{this.props.valueField || '-'}</Value>
        )}
      </Wrapper>
    );
  }
}
const Wrapper = styled.div`
  margin-bottom: 32px;
`;
const Key = styled.span`
  color: ${props => props.theme.primary};
  font-size: 1.2em;
  text-align: center;
`;

const Value = styled.span`
  color: ${props => props.theme.textInverted};
  font-size: 1.2em;
  font-weight: bold;
  text-align: center;
`;

const HrefValue = styled.a`
  color: ${props => props.theme.textInverted};
  font-size: 1.2em;
  font-weight: bold;
  text-align: center;
`;

export default InfoField;
