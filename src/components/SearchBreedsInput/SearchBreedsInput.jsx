import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetBreedsList } from '../../hooks/useGetBreedsList';
import svg from '../../image/icons.svg';
import { FormWrap, SearchInput, SubmitBtn } from './SearchBreedsInput.styled';

export const SearchBreedsInput = () => {
  const [queryStr, setQueryStr] = useState('');
  const navigate = useNavigate();
  const breeds = useGetBreedsList();

  const onSubmit = e => {
    e.preventDefault();
    const url = breeds.find(({ name }) => {
      const normalizedName = name.toLowerCase();
      const normalizedQueryStr = queryStr.toLowerCase();
      return normalizedName.includes(normalizedQueryStr);
    });
    if (url) {
      navigate(`/${url.name.toLowerCase()}`);
    }
  };

  return (
    <>
      <FormWrap onSubmit={onSubmit}>
        <SearchInput
          type="text"
          name="queryValue"
          value={queryStr}
          placeholder="Search for breeds by name"
          onChange={e => setQueryStr(e.target.value)}
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
