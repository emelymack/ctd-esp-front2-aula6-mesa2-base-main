// Usa los siguientes hooks en la app en vez de los `useDispatch` y `useSelector` planos de Redux
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store';

export const useAppDispatch = useDispatch;
export const useAppSelector = useSelector;
