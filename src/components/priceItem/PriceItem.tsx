import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { deletePrice, changePrice } from '../../fetchFunctions';
import { AppDispatch } from '../../store';

// import { changeCreateed }
//   from '../../features/priceList/priceListSlice';

import './priceItem.scss';

export default function PriseItem({ name, cost, id }:
{ name: string, cost: number, id: string }): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const hendlClickChangePrice = (dispatch: AppDispatch, id: string): void => {
    navigate(`/api/services/${id}`);
    changePrice(dispatch, id);
  };

  const handelCkickDelete = (dispatch: AppDispatch, id: string): void => {
    deletePrice(dispatch, id);
  };

  return (
    <li className="PriseItem__item">
      <span className="PriseItem__text">
        {`${name} ${cost}`}
      </span>
      <button
        type="button"
        className="PriseItem__change"
        onClick={() => { hendlClickChangePrice(dispatch, id); }}
      />
      <button
        type="button"
        className="PriseItem__delete"
        onClick={() => { handelCkickDelete(dispatch, id); }}
      />

    </li>
  );
}
