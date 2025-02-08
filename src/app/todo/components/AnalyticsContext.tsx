'use client'
import React, { createContext, useContext, useReducer, ReactNode } from 'react';

// Define the context type
interface AnalyticsContextType {
  hoverEvents: number;
  clicks: number;
  logHover: () => void;
  logClick: () => void;
}

// Create the context
const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

// Define the state and actions
interface AnalyticsState {
  hoverEvents: number;
  clicks: number;
}

type AnalyticsAction =
  | { type: 'LOG_HOVER' }
  | { type: 'LOG_CLICK' };

// Reducer function
const analyticsReducer = (state: AnalyticsState, action: AnalyticsAction): AnalyticsState => {
  switch (action.type) {
    case 'LOG_HOVER':
      return { ...state, hoverEvents: state.hoverEvents + 1 };
    case 'LOG_CLICK':
      return { ...state, clicks: state.clicks + 1 };
    default:
      return state;
  }
};

// Provider component
export const AnalyticsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(analyticsReducer, { hoverEvents: 0, clicks: 0 });

  const logHover = () => dispatch({ type: 'LOG_HOVER' });
  const logClick = () => dispatch({ type: 'LOG_CLICK' });

  return (
    <AnalyticsContext.Provider value={{ ...state, logHover, logClick }}>
      {children}
    </AnalyticsContext.Provider>
  );
};

// Custom hook to use the context
export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};