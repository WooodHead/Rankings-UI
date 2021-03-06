import { combineReducers } from 'redux';

import ActionTypes from './constants';
import { ContainerState, ContainerActions } from './types';

export const initialState: ContainerState = {
  athleteFilter: { suggestions: undefined },
  athlete: {
    id: '',
    name: '',
    surname: '',
    profileUrl: '',
    country: '',
    gender: 1,
    birthdate: '',
    email: 'name@test.com',
    city: '',
    infoUrl: '',
  },
  isAthleteLoading: false,
  countryFilter: { suggestions: undefined },
};

export default combineReducers<ContainerState, ContainerActions>({
  athleteFilter: (state = initialState.athleteFilter, action) => {
    switch (action.type) {
      case ActionTypes.SET_ATHLETE_FILTER_SELECTED_VALUE:
        return { ...state, selectedValue: action.payload };
      case ActionTypes.SET_ATHLETE_SUGGESTIONS:
        return { ...state, suggestions: action.payload };
      case ActionTypes.LOAD_ATHLETE_SUGGESTIONS:
        return { ...state, suggestions: undefined };
      case ActionTypes.CLEAR_FORM:
        return initialState.athleteFilter;
    }
    return state;
  },
  athlete: (state = initialState.athlete, action) => {
    switch (action.type) {
      case ActionTypes.LOAD_ATHLETE:
        return initialState.athlete;
      case ActionTypes.SET_ATHLETE:
        return action.payload;
      case ActionTypes.CLEAR_FORM:
        return initialState.athlete;
    }
    return state;
  },
  isAthleteLoading: (state = initialState.isAthleteLoading, action) => {
    switch (action.type) {
      case ActionTypes.LOAD_ATHLETE:
        return true;
      case ActionTypes.SET_ATHLETE:
        return false;
    }
    return state;
  },
  countryFilter: (state = initialState.countryFilter, action) => {
    switch (action.type) {
      case ActionTypes.SET_COUNTRY_SUGGESTIONS:
        return { ...state, suggestions: action.payload };
      case ActionTypes.LOAD_COUNTRY_SUGGESTIONS:
        return { ...state, suggestions: undefined };
      case ActionTypes.CLEAR_FORM:
        return initialState.countryFilter;
    }
    return state;
  },
});
