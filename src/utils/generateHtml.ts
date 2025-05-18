import { DivStyles } from '@/types';

const generateHtml = (divStyles: DivStyles): string => {
  const content = divStyles.text.enabled ? divStyles.text.content : '';

  return `<div class="my-div">${content}</div>`;
};

export default generateHtml;
