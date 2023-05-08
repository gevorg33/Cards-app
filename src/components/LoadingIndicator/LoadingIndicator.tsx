import classnames from 'classnames';
import React from 'react';
import './styles.module.css';
import { LoadingIconProps, LoadingScreenProps } from './types';

export function LoadingIcon({
  className,
  isHidden = true,
}: LoadingIconProps): JSX.Element {
  if (className === undefined) className = 'h-12 w-12';
  const classes = classnames(
    'LoadingIcon ease-linear rounded-full border-4 border-t-4 border-gray-200',
    className,
  );
  return (
    <>
      <div className={classes} />
      <div hidden={isHidden}>loading</div>
    </>
  );
}

export function LoadingScreen({
  subtitle,
  title = 'Loading',
  className,
}: LoadingScreenProps): JSX.Element {
  return (
    <div
      className={classnames(
        `
      absolute top-0 left-0 right-0 bottom-0 z-50 
      overflow-hidden opacity-75 flex flex-col items-center justify-center
`,
        className,
      )}
    >
      <LoadingIcon />
      <h2 className='mt-2 text-center text-xl font-semibold'>{title}</h2>
      {subtitle !== undefined ? (
        <p className='w-1/3 text-center text-white'>{subtitle}</p>
      ) : null}
    </div>
  );
}
