import svg from '../../image/icons.svg';
import { useState } from 'react';
import { useGetBreedsList } from '../../hooks/useGetBreedsList';

import {
  MainList,
  MenuFlexWrap,
  OptionLabel,
  OpeningOption,
  Menu,
  LimitMenu,
  SubMenu,
  SubMenuBtn,
  SubmitBtn,
  BtnSvg,
} from './GalleryForm.styled';

export const GalleryForm = ({ onSubmit }) => {
  const [breedId, setBreedId] = useState(null);
  const [limit, setLimit] = useState('5');
  const [order, setOrder] = useState('rand');
  const [type, setType] = useState('jpg,png');
  const breeds = useGetBreedsList();

  const changeForm = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'breedId':
        setBreedId(value);
        break;
      case 'limit':
        setLimit(value);
        break;
      case 'order':
        setOrder(value);
        break;
      case 'type':
        setType(value);
        break;
      default:
        break;
    }

    const listParent = e.currentTarget.closest('.listPerent');
    const firstEl = listParent.querySelector('.FirstItem');
    firstEl.innerHTML = e.target.textContent;
  };

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
      <MenuFlexWrap>
        <OptionLabel>order</OptionLabel>
        <Menu className="listPerent">
          <OpeningOption className="FirstItem">Random</OpeningOption>
          <svg height="12" width="12">
            <use href={svg + '#icon-back'}></use>
          </svg>
          <SubMenu>
            <li>
              <SubMenuBtn
                type="button"
                onClick={changeForm}
                name="order"
                value="rand"
              >
                Random
              </SubMenuBtn>
            </li>
            <li>
              <SubMenuBtn
                type="button"
                onClick={changeForm}
                name="order"
                value="desc"
              >
                Desc
              </SubMenuBtn>
            </li>
            <li>
              <SubMenuBtn
                type="button"
                onClick={changeForm}
                name="order"
                value="asc"
              >
                Asc
              </SubMenuBtn>
            </li>
          </SubMenu>
        </Menu>
      </MenuFlexWrap>

      <MenuFlexWrap>
        <OptionLabel>type</OptionLabel>
        <Menu className="listPerent">
          <OpeningOption className="FirstItem">All</OpeningOption>
          <svg height="12" width="12">
            <use href={svg + '#icon-back'}></use>
          </svg>
          <SubMenu>
            <li>
              <SubMenuBtn
                type="button"
                onClick={changeForm}
                name="type"
                value="gif,jpg,png"
              >
                All
              </SubMenuBtn>
            </li>
            <li>
              <SubMenuBtn
                type="button"
                onClick={changeForm}
                name="type"
                value="jpg,png"
              >
                Static
              </SubMenuBtn>
            </li>
            <li>
              <SubMenuBtn
                type="button"
                onClick={changeForm}
                name="type"
                value="gif"
              >
                Animated
              </SubMenuBtn>
            </li>
          </SubMenu>
        </Menu>
      </MenuFlexWrap>

      <MenuFlexWrap>
        <OptionLabel>breed</OptionLabel>
        <Menu className="listPerent">
          <OpeningOption className="FirstItem">None</OpeningOption>
          <svg height="12" width="12">
            <use href={svg + '#icon-back'}></use>
          </svg>
          <SubMenu>
            {breeds?.map(({ id, name }) => getBreedsHtml(id, name))}
          </SubMenu>
        </Menu>
      </MenuFlexWrap>

      <MenuFlexWrap>
        <OptionLabel>limit</OptionLabel>
        <LimitMenu className="listPerent">
          <OpeningOption className="FirstItem">5 items per page</OpeningOption>
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
                5 items per page
              </SubMenuBtn>
            </li>
            <li>
              <SubMenuBtn
                type="button"
                onClick={changeForm}
                name="limit"
                value="10"
              >
                10 items per page
              </SubMenuBtn>
            </li>
            <li>
              <SubMenuBtn
                type="button"
                onClick={changeForm}
                name="limit"
                value="15"
              >
                15 items per page
              </SubMenuBtn>
            </li>
            <li>
              <SubMenuBtn
                type="button"
                onClick={changeForm}
                name="limit"
                value="20"
              >
                20 items per page
              </SubMenuBtn>
            </li>
          </SubMenu>
        </LimitMenu>
      </MenuFlexWrap>

      <SubmitBtn
        type="button"
        onClick={() => onSubmit(breedId, limit, order, type)}
      >
        <BtnSvg width="17" height="20">
          <use href={`${svg}#icon-update`}></use>
        </BtnSvg>
      </SubmitBtn>
    </MainList>
  );
};
