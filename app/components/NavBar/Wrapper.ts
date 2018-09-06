import styled, { colors } from 'styles/styled-components';
import media from 'styles/media';
import zIndex from 'styles/zIndex';
import breakpoints from 'styles/breakpoints';
import AppConstants from 'styles/AppConstants';
import { rgba } from 'polished';

const padding = (size: number) => AppConstants.LeftPadding(size);

const Wrapper = styled.div`

  background-color: ${rgba(colors.paleBlue, 1)};
  border-bottom: 1px solid ${props => props.theme.border};
  height: ${AppConstants.NavBarHeight(breakpoints.mobile)}px;
  padding: 0 ${padding(breakpoints.mobile)}px 0 ${padding(breakpoints.mobile)}px;
  display: flex;
  align-items: center;
  /* position: fixed; */
  /* top: 0; */
  width: 100%;
  z-index: ${zIndex('NavBar')};
  justify-content: space-between;

  ${media.tablet`
    height: ${AppConstants.NavBarHeight(breakpoints.tablet)}px;
    padding: 0 ${padding(breakpoints.tablet)}px 0 ${padding(breakpoints.tablet)}px
    align-items: center;
  `};

  ${media.desktop`
    padding: 0 ${padding(breakpoints.desktop)}px 0 ${padding(breakpoints.desktop)}px;
  `};
`;

export default Wrapper;
