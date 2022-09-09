import svg from '../../image/icons.svg';
import { FormWrap, SearchInput, SubmitBtn } from './SearchBreedsInput.styled';

export const SearchBreedsInput = () => {
  return (
    <>
      <FormWrap>
        <SearchInput
          type="text"
          name="queryValue"
          placeholder="Search for breeds by name"
        />
        <SubmitBtn type="submit">
          <svg width="24" height="24">
            <use href={svg + '#icon-search'}></use>
          </svg>
        </SubmitBtn>
      </FormWrap>
    </>
  );
};
