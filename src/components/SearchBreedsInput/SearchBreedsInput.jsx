import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useGetBreedsList } from '../../hooks/useGetBreedsList';
import { changeBreed } from '../../redux/breedSlice';
import svg from '../../image/icons.svg';
import { FormWrap, SearchInput, SubmitBtn } from './SearchBreedsInput.styled';

export const SearchBreedsInput = () => {
  const [queryStr, setQueryStr] = useState('');
  const breeds = useGetBreedsList();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    const url = breeds.find(({ name }) => {
      const normalizedName = name.toLowerCase();
      const normalizedQueryStr = queryStr.toLowerCase();
      return normalizedName.includes(normalizedQueryStr);
    });
    if (url) {
      dispatch(changeBreed({ breedName: url.name, breedId: url.id }));
      navigate('/search');
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
