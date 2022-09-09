import { useQuery } from '@tanstack/react-query';
import { Api } from '../../utils/apiService';
import {
  MainList,
  BreedsItem,
  LimitItem,
  SubMenu,
  SubMenuBtn,
  SortBtn,
} from './BreedsForm.styled';
import svg from '../../image/icons.svg';
const API = new Api();

export const BreedsForm = ({ changeForm }) => {
  const { data: breeds } = useQuery(['randomCat'], API.getBreeds, {
    retry: false,
    refetchOnWindowFocus: false,
  });

  const getBreedsHtml = (id, name) => {
    return (
      <li key={id}>
        <SubMenuBtn
          type="button"
          name="breedId"
          value={id}
          onClick={changeForm}
        >
          {name}
        </SubMenuBtn>
      </li>
    );
  };

  if (!breeds) {
    return;
  }

  return (
    <MainList>
      <BreedsItem className="listPerent">
        <p className="FirstItem">All breeds</p>
        <svg height="12" width="12">
          <use href={svg + '#icon-back'}></use>
        </svg>
        <SubMenu>
          {breeds.map(({ id, name }) => getBreedsHtml(id, name))}
        </SubMenu>
      </BreedsItem>
      <LimitItem className="listPerent">
        <p className="FirstItem">Limit</p>
        <svg height="12" width="12">
          <use href={svg + '#icon-back'}></use>
        </svg>
        <SubMenu>
          <li>
            <SubMenuBtn
              type="button"
              onClick={changeForm}
              name="limit"
              value="5"
            >
              Limit: 5
            </SubMenuBtn>
          </li>
          <li>
            <SubMenuBtn
              type="button"
              onClick={changeForm}
              name="limit"
              value="10"
            >
              Limit: 10
            </SubMenuBtn>
          </li>
          <li>
            <SubMenuBtn
              type="button"
              onClick={changeForm}
              name="limit"
              value="15"
            >
              Limit: 15
            </SubMenuBtn>
          </li>
          <li>
            <SubMenuBtn
              type="button"
              onClick={changeForm}
              name="limit"
              value="20"
            >
              Limit: 20
            </SubMenuBtn>
          </li>
        </SubMenu>
      </LimitItem>
      <SortBtn type="button" onClick={changeForm} name="sort" value="0">
        <svg height="21">
          <use href={svg + '#icon-sort'}></use>
        </svg>
      </SortBtn>
      <SortBtn type="button" onClick={changeForm} name="sort" value="1">
        <svg height="21">
          <use href={svg + '#icon-sortReverse'}></use>
        </svg>
      </SortBtn>
    </MainList>
  );
};
