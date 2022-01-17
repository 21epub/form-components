import styled from 'styled-components';
import { Col } from 'antd';

export interface ColWrapperProps {
  styled?: string;
}

export const ColWrapper = styled(Col)<ColWrapperProps>`
  ${(props) => props.styled};
`;
